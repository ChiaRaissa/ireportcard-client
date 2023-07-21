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

@Component({
  selector: 'app-table-list-users',
  templateUrl: './table-list-users.component.html',
  styleUrls: ['./table-list-users.component.css']
})
export class TableListUsersComponent implements OnInit, DataComponent<UserPayload[]> {
  @Input()
  data: UserPayload[] = [];
  @Input()
  title: string = "Users";
  @Input()
  role?: Role;
  @Input()
  filter?: UserFilter;
  dataFilterForm: FormModel;

  constructor(private _userService: UserService) {
    this.dataFilterForm = new FormModel({
      formControls: [
        new FormControlModel({
          label: "Gender",
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
      this._userService.get(this.filter).subscribe(res => {
        this.data = res;
      });
    }
  }
}
