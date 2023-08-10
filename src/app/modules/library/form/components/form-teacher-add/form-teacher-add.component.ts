import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SubmitForm} from "../form/submit.form";
import {UserPayload} from "../../../../../models/entity/user/user.payload";
import {Role} from "../../../../../models/entity/base/role.enum";
import {genderOptions} from "../../../../../models/entity/base/gender.enum";
import {OrganisationId, SchoolId} from "../../../../../services/general/local-storage.service";
import {languageOptions} from "../../../../../models/entity/base/language.enum";

@Component({
  selector: 'app-form-teacher-add',
  templateUrl: './form-teacher-add.component.html',
  styleUrls: ['./form-teacher-add.component.css']
})
export class FormTeacherAddComponent implements SubmitForm {
  title: string = $localize`Teacher Information`;
  form: FormGroup;
  @Output()
  submitEvent = new EventEmitter<UserPayload>();
  protected readonly genderOptions = genderOptions;
  protected readonly languageOptions = languageOptions;

  constructor(private _fb: FormBuilder) {
    this.form = _fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: [''],
      address: [''],
      gender: ['', Validators.required],
      language: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    });
  }

  submit() {
    this.submitEvent.emit(UserPayload.form({
      ...this.form.value,
      schoolId: SchoolId,
      organisationId: OrganisationId,
    }, Role.TEACHER))
  }
}
