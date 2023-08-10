import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../services/http/user/user.service";
import {Role} from "../../models/entity/base/role.enum";
import {FormBuilder} from "@angular/forms";
import {DashboardOption} from "../../app.types";
import {RouterService} from "../../services/general/router.service";
import {SchoolService} from "../../services/http/school/school.service";
import {LocalStorageService, OrganisationId} from "../../services/general/local-storage.service";
import {SchoolEntity} from "../../models/entity/school/school.entity";
import {UserProviderService} from "../../services/provider/user.provider.service";
import {UserPayload} from "../../models/entity/user/user.payload";

@Component({
  selector: 'app-switch',
  styleUrls: ['./switch.component.css'],
  template: `
    <form>
      <div class="field">
        <p-dropdown
          name="option"
          [placeholder]="'Select Dashboard'"
          [options]="dropdownOptions()"
          [optionValue]="'value'"
          [optionLabel]="'value'"
          [(ngModel)]="switchProps.option"
          styleClass="text-base text-color surface-overlay border-1 surface-border w-full">
        </p-dropdown>
      </div>
      <div class="field">
        <p-dropdown
          *ngIf="switchProps.option == 'school'"
          appendTo="body"
          name="school"
          [options]="schools"
          [optionLabel]="'name'"
          [optionValue]="'id'"
          [disabled]="switchProps.option != 'school'"
          [(ngModel)]="switchProps.schoolId"
          styleClass="text-base text-color surface-overlay border-1 surface-border w-full">
        </p-dropdown>
      </div>
      <div class="flex gap-1 justify-content-end flex-wrap">
        <p-button label="Go!" (click)="submit()"></p-button>
        <p-button label="Cancel" styleClass="p-button-danger" (click)="cancelAction()"></p-button>
      </div>
    </form>
  `
})
export class SwitchComponent implements OnInit {
  switchProps = <{ option?: DashboardOption, schoolId?: number }>{
    option: undefined,
    schoolId: undefined
  }

  dashboardOptions: DashboardOption[] = [];
  @Output() cancelSwitchDialogEvent = new EventEmitter<boolean>();

  schools: SchoolEntity[] = []

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _userProvider: UserProviderService,
    private _routerService: RouterService,
    private _localStorage: LocalStorageService,
    private _schoolService: SchoolService,
  ) {
  }

  ngOnInit() {
    this._userProvider.executor((payload: UserPayload) => {
      this.dashboardOptions = [];
      if (payload.account) {
        switch (payload.account.role) {
          case Role.ORGANISATION_ADMIN: this.dashboardOptions = ['organisation', 'school']; break;
          case Role.SCHOOL_ADMIN: this.dashboardOptions = ['school']; break;
          case Role.TEACHER: this.dashboardOptions = ['teacher']; break;
          case Role.STUDENT: this.dashboardOptions = ['student']; break;
        }
      }
    });
    this._schoolService.getAllByOrganisation(OrganisationId()).subscribe(res => {
      this.schools = res;
    })
  }

  dropdownOptions = () => this.dashboardOptions.map(option => ({value: option}));

  submit(): void {
    const option = this.switchProps.option;
    const schoolId = this.switchProps.schoolId;
    if (option) {
      this.cancelAction();
      this._localStorage.set("school_id", schoolId);
      this._routerService.switchDashboard(option, true);
    }
  }

  cancelAction() {
    this.cancelSwitchDialogEvent.emit(false);
  }
}
