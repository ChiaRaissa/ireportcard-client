import {Component, Input, OnInit} from '@angular/core';
import {DataComponent} from "../../../component/data.component";
import {UserPayload} from "../../../../../models/entity/user/user.payload";
import {UserService} from "../../../../../services/http/user/user.service";
import {UserFilter} from "../../../../../models/filter/user/user.filter";
import {Role} from "../../../../../models/entity/base/role.enum";
import {OrganisationId, SchoolId} from "../../../../../services/general/local-storage.service";
import {FormModel} from "../../../form/models/form/form.model";
import {FormControlModel, FormControlValue} from "../../../form/models/form/form-control.model";
import {genderValues} from "../../../../../models/entity/base/gender.enum";
import {
  defaultPagination,
  paginationFromPaginatorState,
  PaginationPayload
} from "../../../../../models/payload/api/pagination.payload";
import {PaginatorState} from "primeng/paginator";
import {CrudTableData} from "../../models/crud-table.model";
import {titlecase} from "../../../../../utils/string.util";

@Component({
  selector: 'app-table-list-users',
  styleUrls: ['./table-list-users.component.css'],
  template: `
    <app-data-filter (submitEvent)="dataFilterAction($event)" [formModel]="dataFilterForm"></app-data-filter>

    <app-crud-table-list
      [tableData]="tableData" [pagination]="pagination" [dataLoading]="dataLoading"
      (pageChangeEventEmitter)="pageChangeAction($event)">
    </app-crud-table-list>
  `
})
export class TableListUsersComponent implements OnInit, DataComponent<UserPayload[]> {
  readonly tableData = new CrudTableData({
    title: 'Members',
    headers: [
      'Username', 'Name', 'Gender', 'Approved'
    ],
    data: <UserPayload[]>[],
    mappings: [
      (u) => u.user.username,
      (u) => u.account?.name,
      (u) => titlecase(u.account?.gender),
      (u) => u.user.approved,
    ]
  });

  @Input()
  data: UserPayload[] = [];
  @Input()
  title: string = "Users";
  @Input()
  role?: Role;
  @Input()
  filter?: UserFilter;
  dataFilterForm: FormModel;

  pagination: PaginationPayload = defaultPagination();
  dataLoading = true;

  constructor(private _userService: UserService) {
    this.dataFilterForm = new FormModel({
      controls: [
        new FormControlModel({
          label: $localize`Gender`,
          name: "gender",
          type: "select",
          values: FormControlValue.ofArray(genderValues)
        }),
      ]
    });
  }

  ngOnInit() {
    this.filter = new UserFilter({
      approved: true,
      role: this.role,
      schoolId: SchoolId(),
      organisationId: OrganisationId()
    });
    this.refresh();
  }

  dataFilterAction($event: any) {
    if (this.filter) {
      this.filter.update($event);
      this.refresh();
    }
  }

  refresh = () => {
    if (this.filter) {
      this.dataLoading = true;
      this._userService.listUsers(this.filter).subscribe({
        next: (res) => {
          this.pagination = res.pagination
          this.tableData.data = res.data
        },
        complete: () => this.dataLoading = false
      });
    }
  }

  pageChangeAction($event: PaginatorState) {
    console.log($event)
    this.filter?.addPagination(paginationFromPaginatorState($event));
    this.refresh();
  }
}
