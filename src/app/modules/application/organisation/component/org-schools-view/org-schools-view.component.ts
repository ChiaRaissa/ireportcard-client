import {Component, OnInit} from '@angular/core';
import {RouterService} from "../../../../../services/general/router.service";
import {ActivatedRoute} from "@angular/router";
import {SchoolService} from "../../../../../services/http/school/school.service";
import {SchoolEntity} from "../../../../../models/entity/school/school.entity";
import {AppRoute} from "../../../../../app.routes";
import {LocalStorageService, OrganisationId} from "../../../../../services/general/local-storage.service";
import {isValidId} from "../../../../../models/entity/base/base.entity";
import {faIcon} from "../../../../../utils/icon.util";
import {DropdownChangeEvent} from "primeng/dropdown";

@Component({
  selector: 'app-org-schools-view',
  templateUrl: './org-schools-view.component.html',
  styleUrls: ['./org-schools-view.component.css']
})
export class OrgSchoolsViewComponent implements OnInit{
  protected readonly faIcon = faIcon;
  schoolId?: number;
  protected school?: SchoolEntity;
  protected schools: SchoolEntity[] = [];
  protected readonly AppRoute = AppRoute;
  schoolSelectDisabled: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _routerService: RouterService,
    private _schoolService: SchoolService,
    private _localStorageService: LocalStorageService
  ) {
    this._routerService.route = _route;
  }

  ngOnInit() {
    const schoolId = this._routerService.param<number>('id');
    if (isValidId(schoolId)) {
      this._schoolService.getById(schoolId).subscribe(res => {
        this.school = res;
        this.schoolSelectDisabled = true;
      });
      this._localStorageService.set(`school_id`, schoolId);
    }
    this._schoolService.getAllByOrganisation(OrganisationId()).subscribe(res => this.schools = res);
  }

  visitSchoolDashboardAction() {
    if (isValidId(this.school?.id)) {
      this._localStorageService.set('school_id', this.school?.id);
      this._routerService.switchDashboard('school', true);
    }
  }

  updateSchool($event: DropdownChangeEvent) {
    this.school = $event.value as SchoolEntity;
  }
}
