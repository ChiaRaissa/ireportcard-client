import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DepartmentEntity} from 'src/app/models/entity/subject/department.entity';
import {OrganisationId, SchoolId} from 'src/app/services/general/local-storage.service';
import {SubmitForm} from '../form/submit.form';
import {DepartmentService} from "../../../../../services/http/subject/department.service";
import {UserService} from "../../../../../services/http/user/user.service";
import {UserFilter} from "../../../../../models/filter/user/user.filter";
import {Role} from "../../../../../models/entity/base/role.enum";
import {Id} from "../../../../../models/entity/base/base.entity";

@Component({
  selector: 'app-form-department-add',
  templateUrl: './form-department-add.component.html',
  styleUrls: ['./form-department-add.component.css']
})
export class FormDepartmentAddComponent implements SubmitForm, OnInit, OnChanges {
  title: string = $localize`Department Information`;
  form: FormGroup
  @Input()
  editing: boolean = false;
  @Input()
  department?: DepartmentEntity;
  @Output()
  submitEvent = new EventEmitter<DepartmentEntity>();
  loading: boolean = false;
  teachers: { name: string, id: Id | undefined }[] = [];

  constructor(
    private _fb: FormBuilder,
    private _departmentService: DepartmentService,
    private _userService: UserService
  ) {
    this.form = this._fb.group({
      name: [this.department?.name ?? '', Validators.required],
      hodId: [{value: this.department?.hodId, disabled: this.editing}]
    });
  }

  get buttonProperty() {
    return this.editing ? {label: 'Edit Department', icon: 'pi pi-pencil'} : {
      label: 'Add Department',
      icon: 'pi pi-plus'
    }
  }

  ngOnInit() {
    this._userService.listUsers(new UserFilter({
      role: Role.TEACHER, approved: true, schoolId: SchoolId(), organisationId: OrganisationId()
    })).subscribe(res => this.teachers = res.data.map(u => {
      return {name: u.account?.name ?? u.user.email, id: u.account?.id}
    }));
  }

  ngOnChanges(changes: SimpleChanges) {
    this.patch()
  }

  submit(): void {
    this.loading = true;
    console.log(this.form.value)
    const department = <DepartmentEntity>{...this.form.value, schoolId: SchoolId()};
    this._departmentService.post(department).subscribe(
      {
        complete: () => {
          this.loading = false;
        }
      }
    );
    this.submitEvent.emit(department);
  }

  patch() {
    if (this.department) {
      this.form.patchValue(this.department);
    }
  }
}
