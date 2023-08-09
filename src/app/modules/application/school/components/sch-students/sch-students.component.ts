import {Component} from '@angular/core';
import {TableModel} from "../../../../library/crud/models/table.model";
import {UserService} from "../../../../../services/http/user/user.service";
import {UserFilter} from "../../../../../models/filter/user/user.filter";
import {Role} from "../../../../../models/entity/base/role.enum";
import {Gender, genderValues} from "../../../../../models/entity/base/gender.enum";
import {FormModel} from "../../../../library/form/models/form/form.model";
import {FormControlModel, FormControlValue} from "../../../../library/form/models/form/form-control.model";
import {OrganisationId, SchoolId} from "../../../../../services/general/local-storage.service";
import {UserPayload} from "../../../../../models/entity/user/user.payload";
import {DataComponent} from "../../../../library/component/data.component";

@Component({
  selector: 'app-sch-students',
  styleUrls: ['./sch-students.component.css'],
  template: `
    <app-table-list-users [title]="title" [role]="Role.STUDENT" [filter]="filter"></app-table-list-users>
  `
})
export class SchStudentsComponent implements DataComponent<UserPayload[]> {
  table?: TableModel;
  filter: UserFilter = new UserFilter({
    approved: true,
    role: Role.STUDENT,
    schoolId: SchoolId(),
    organisationId: OrganisationId()
  });
  dataFilterForm: FormModel;

  title = $localize`Students`;
  data: UserPayload[] = [];
  protected readonly Role = Role;

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
    this.refresh()
  }

  dataFilterAction($event: any) {
    this.filter.update($event);
    this.refresh();
  }

  refresh = () => {
    this._userService.listUsers(this.filter).subscribe(res => {
      this.data = res.data;
    });
  }
}
