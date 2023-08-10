import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserPayload} from "../../../../../models/entity/user/user.payload";
import {OrganisationId, SchoolId} from "../../../../../services/general/local-storage.service";
import {Role} from "../../../../../models/entity/base/role.enum";
import {genderOptions} from "../../../../../models/entity/base/gender.enum";
import {SubmitForm} from "../form/submit.form";
import {languageOptions} from "../../../../../models/entity/base/language.enum";

@Component({
  selector: 'app-form-user-add',
  templateUrl: './form-user-add.component.html',
  styleUrls: ['./form-user-add.component.css']
})
export class FormUserAddComponent implements SubmitForm {
  form: FormGroup;
  @Input() role: Role = Role.USER;
  @Input() title: string = $localize`User Information`;
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
    }, this.role))
  }
}
