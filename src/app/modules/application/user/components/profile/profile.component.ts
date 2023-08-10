import {Component, OnInit} from '@angular/core';
import {UserPayload} from "../../../../../models/entity/user/user.payload";
import {UserService} from "../../../../../services/http/user/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userPayload?: UserPayload;
  editProfileForm: FormGroup = this._fb.group({});

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService
  ) {
    this._userService.getByPrincipal().subscribe(res => {
      this.userPayload = res;
      this.prepareEditProfileForm(res);
    });
  }

  get fullName() {
    return this.userPayload?.account?.name
  }

  ngOnInit(): void {

  }

  private prepareEditProfileForm = (userPayload: UserPayload) => {
    this.editProfileForm = this._fb.group({
      firstname: [userPayload.account?.firstname],
      lastname: [userPayload.account?.lastname],
      address: [userPayload.user.address],
      phone: [userPayload.user.phone],
      email: [userPayload.user.email],
    })
  }

}
