import {Component, Input, OnInit} from '@angular/core';
import {TableModel} from "../../../../library/crud/models/table.model";
import {SchoolStaffService} from "../../../../../services/http/school/school-staff.service";
import {Id} from "../../../../../models/entity/base/base.entity";
import {SchoolUtil} from "../../../../../utils/school.util";
import {SchoolStaffPayload} from "../../../../../models/payload/school-staff.payload";
import {UserEntity} from "../../../../../models/entity/user/user.entity";
import {UserAccountEntity} from "../../../../../models/entity/user/user-account.entity";

@Component({
  selector: 'app-org-schools-assign-admin',
  templateUrl: './org-schools-assign-staff.component.html',
  styleUrls: ['./org-schools-assign-staff.component.css']
})
export class OrgSchoolsAssignStaffComponent implements OnInit {
  @Input()
  schoolId?: Id | undefined;
  staff: UserAccountEntity[] = [];
  constructor(private _schoolStaffService: SchoolStaffService) {

  }

  ngOnInit() {
    if (this.schoolId) {
      this._schoolStaffService.getPayloadBySchoolId(this.schoolId).subscribe(res => {
        this.staff = res.staff
      });
    }
  }
}
