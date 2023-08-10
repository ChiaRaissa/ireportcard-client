import {Component, EventEmitter, Output} from '@angular/core';
import {genderValues} from "../../../../../models/entity/base/gender.enum";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserPayload} from "../../../../../models/entity/user/user.payload";
import {Role} from "../../../../../models/entity/base/role.enum";
import {UserService} from "../../../../../services/http/user/user.service";
import {SubmitForm} from "../form/submit.form";
import {Language} from "../../../../../models/entity/base/language.enum";

@Component({
  selector: 'app-admin-register-form',
  styleUrls: ['./admin-register-form.component.css'],
  template: `
    <h5 class="card-title" i18n>Register Admin Form</h5>

    <!-- Multi Columns Form -->
    <form class="row g-3" [formGroup]="form" (submit)="submit()">
      <div class="col-md-6">
        <label for="firstname" class="form-label" i18n>First Name</label>
        <input type="text" class="form-control" formControlName="firstname" id="firstname">
      </div>
      <div class="col-md-6">
        <label for="lastname" class="form-label" i18n>Last Name</label>
        <input type="text" class="form-control" formControlName="lastname" id="lastname">
      </div>
      <div class="col-md-6">
        <label for="email" class="form-label" i18n>Email</label>
        <input type="email" class="form-control" formControlName="email" id="email" #email>
      </div>
      <div class="col-md-6">
        <label for="username" class="form-label" i18n>Username</label>
        <input type="text" class="form-control" id="username" [value]="usernameFromEmail(email.value)" disabled>
      </div>
      <div class="col-md-6">
        <label for="password" class="form-label" i18n>Password</label>
        <input type="password" class="form-control" formControlName="password" id="password">
      </div>
      <div class="col-md-6">
        <label for="password-repeat" class="form-label" i18n>Repeat Password</label>
        <input type="password" class="form-control" id="password-repeat">
      </div>
      <div class="col-6">
        <label for="address" class="form-label" i18n>Address</label>
        <input type="text" class="form-control" formControlName="address" id="address" placeholder="ENS Street">
      </div>
      <div class="col-6">
        <label for="address2" class="form-label" i18n>Address 2</label>
        <input type="text" class="form-control" formControlName="address2" id="address2" placeholder="Cap Stone, R19">
      </div>
      <div class="col-md-6">
        <label for="phone" class="form-label" i18n>Phone</label>
        <input type="text" class="form-control" formControlName="phone" id="phone">
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label" i18n>Gender</label>
        <select id="inputState" class="form-select form-control" formControlName="phone">
          <option selected disabled i18n>Choose...</option>
          <option *ngFor="let g of genders">{{g | titlecase}}</option>
        </select>
      </div>
      <div class="text-center gap-2">
        <button type="submit" class="btn btn-primary" i18n>Submit</button>
        <button type="reset" class="btn btn-secondary" (click)="form.reset()" i18n>Reset</button>
      </div>
    </form>
  `
})
export class AdminRegisterFormComponent implements SubmitForm {
  readonly genders = genderValues;
  readonly form: FormGroup = this._fb.group({});

  @Output()
  submitEvent = new EventEmitter<UserPayload>();
  private orgId?: number;

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
  ) {
    this.form = _fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      address: ['',],
      address2: ['',],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
    });
    this._userService.getByPrincipal().subscribe(res => this.orgId = res.account?.organisationId)
  }

  submit() {
    const user = new UserPayload(
      {
        username: this.form.get('email')?.value,
        email: this.form.get('email')?.value,
        phone: this.form.get('phone')?.value,
        address: `${this.form.get('address')?.value ?? ''} ${this.form.get('address2')?.value}`.trim(),
        language: Language.ENGLISH
      },
      {
        firstname: this.form.get('firstname')?.value,
        lastname: this.form.get('lastname')?.value,
        gender: this.form.get('gender')?.value,
        role: Role.ORGANISATION_ADMIN,
        accountId: '',
        organisationId: this.orgId,
      }
    );
    this.submitEvent.emit(user);
  }

  usernameFromEmail(value: string) {
    const parts = value.split("@");
    if (parts.length > 1) {
      return parts[0]
    }
    return value
  }
}
