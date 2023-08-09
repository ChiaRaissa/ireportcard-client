import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {UserService} from "../../../../../services/http/user/user.service";
import {NavUtil} from "../../../../../utils/nav.util";
import {TreeNodeSelectEvent} from "primeng/tree";
import {RouterService} from "../../../../../services/general/router.service";
import {Role} from "../../../../../models/entity/base/role.enum";

@Component({
  selector: 'app-sidebar',
  styleUrls: ['./sidebar.component.css'],
  template: `
    <aside id="sidebar" class="sidebar">
      <div class="flex flex-column">
        <div class="mb-3 flex align-items-start">
          <p-tree
            [value]="navItemTree"
            (onNodeSelect)="nodeSelectedAction($event)"
            class="md:w-30rem w-full"
            selectionMode="single">
          </p-tree>
        </div>
        <div class="align-baseline">
          <div class="grid">
            <div class="col-12 md:col-6" *ngIf="displaySwitch">
              <p-button
                label="Switch"
                styleClass="p-button-raised p-button-sm w-full"
                icon="fas fa-light fa-repeat"
                (click)="this.switchDialogEvent.emit(true)">
              </p-button>
            </div>
            <div class="col-12 md:col-6">
              <p-button
                label="Logout"
                styleClass="p-button-raised p-button-sm w-full p-button-danger"
                icon="fas fa-light fa-right-from-bracket"
                (click)="this.logoutEvent.emit(true)">
              </p-button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  `
})
export class SidebarComponent implements OnInit {
  protected displaySwitch: boolean = false;
  navItemTree = NavUtil.ORGANISATION_ADMIN_NAV_TREE;
  @Output()
  switchDialogEvent = new EventEmitter<boolean>();
  @Output()
  logoutEvent = new EventEmitter<boolean>();

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _routerService: RouterService,
    private _userService: UserService,
  ) {
    this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.url;
        if (url.startsWith("/app/organisation")) {
          this.navItemTree = NavUtil.ORGANISATION_ADMIN_NAV_TREE;
        } else if (url.startsWith("/app/school")) {
          this.navItemTree = NavUtil.SCHOOL_ADMIN_NAV_TREE;
        } else if (url.startsWith("/app/student")) {
          this.navItemTree = NavUtil.STUDENT_NAV_TREE;
        } else if (url.startsWith("/app/teacher")) {
          this.navItemTree = NavUtil.TEACHER_NAV_TREE;
        }
      }
    });
    this._userService.getByPrincipal().subscribe(res => {
      this.displaySwitch = res.account?.role == Role.ORGANISATION_ADMIN
    })
  }

  ngOnInit() {
  }

  nodeSelectedAction($event: TreeNodeSelectEvent) {
    const node = $event.node;
    this._routerService.nav([node.data]);
  }
}
