import {Component, Input, OnInit} from '@angular/core';
import {ClassLevelEntity} from "../../../../../models/entity/class-level/class-level.entity";
import {UserAccountEntity} from "../../../../../models/entity/user/user-account.entity";
import {ClassLevelService} from "../../../../../services/http/class-level/class-level.service";
import {UserService} from "../../../../../services/http/user/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountId, OrganisationId, SchoolId} from "../../../../../services/general/local-storage.service";
import {SchoolBaseFilter} from "../../../../../models/filter/base.filter";
import {UserFilter} from "../../../../../models/filter/user/user.filter";
import {Role} from "../../../../../models/entity/base/role.enum";
import {Id, isNotNullOrUndefined} from "../../../../../models/entity/base/base.entity";
import {StudentApplicationService} from "../../../../../services/http/student/student-application.service";
import {StudentApplicationCreateRequest} from "../../../../../models/entity/student/student-application.models";

@Component({
  selector: 'app-stu-academic-apply',
  templateUrl: './stu-academic-apply.component.html',
  styleUrls: ['./stu-academic-apply.component.css']
})
export class StuAcademicApplyComponent implements OnInit {
  @Input() isStudent: boolean = true;
  @Input() userAccount?: UserAccountEntity;
  form: FormGroup;
  classLevels: ClassLevelEntity[] = [];
  students: UserAccountEntity[] = [];

  constructor(
    private _fb: FormBuilder,
    private _classLevelService: ClassLevelService,
    private _userService: UserService,
    private _studentApplicationService: StudentApplicationService,
  ) {
    this.form = this._fb.group({
      studentId: [{value: AccountId(), disabled: this.isStudent}, Validators.required],
      classLevelId: [null, Validators.required]
    })
  }

  ngOnInit(): void {
    this._classLevelService.listDto(SchoolBaseFilter.simple()).subscribe(res => this.classLevels = res);
    this._userService.listUsers(new UserFilter({
      role: Role.STUDENT,
      schoolId: SchoolId(),
      organisationId: OrganisationId()
    })).subscribe(res => {
      this.students = <UserAccountEntity[]>res.data.map(u => u.account).filter(isNotNullOrUndefined);
      const currentStudent = this.students.find(s => s.id == this.userAccount?.id);
      if (currentStudent) {
        this.form.patchValue({studentId: currentStudent.id});
      }
    });
  }

  submit() {
    const request: StudentApplicationCreateRequest  = {...this.form.value}
    if (this.isStudent && this.userAccount?.id) {
      request.studentId = this.userAccount?.id
    }
    this._studentApplicationService.apply(request).subscribe();
  }
}
