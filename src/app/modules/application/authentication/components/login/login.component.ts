import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppRoute} from "../../../../../app.routes";
import {LoginRequest} from "../../../../../models/entity/authentication/login.model";
import {AuthenticationService} from "../../../../../services/http/authentication/authentication.service";
import {LocalStorageService} from "../../../../../services/general/local-storage.service";
import {RouterService} from "../../../../../services/general/router.service";
import {UserService} from "../../../../../services/http/user/user.service";
import {Role} from "../../../../../models/entity/base/role.enum";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  protected readonly AppRoute = AppRoute;

  constructor(
    private _fb: FormBuilder,
    private _routerService: RouterService,
    private _userService: UserService,
    private _localStorageService: LocalStorageService,
    private _authenticationService: AuthenticationService
  ) {
    this.loginForm = _fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      extend:[false]
    });
  }

  ngOnInit() {
    this._userService.getByPrincipal().subscribe(res => {
      const target = this.getTarget(res.account?.role);
      this._routerService.nav([target]);
    });
  }

  loginFormAction() {
    const loginRequest: LoginRequest = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
      extend: this.loginForm.get('extend')?.value ?? false,
    }
    this._localStorageService.clear();
    this._authenticationService.login(loginRequest).subscribe(res => {
      this._localStorageService.set('access_token', res.token);
      const setTarget = () => this._userService.getByPrincipal().subscribe(res => {
        let target: AppRoute;
        if (res.account != undefined) {
          target = this.getTarget(res.account.role);
        } else {
          target = AppRoute.APP_USER_PROFILE;
        }
        this._routerService.nav([target]);
      });
      setTimeout(setTarget, 500)
    });
  }

  private getTarget = (role?: Role) => {
    let target: AppRoute;
    if (role == Role.ORGANISATION_ADMIN) {
      target = AppRoute.APP_ORG;
    } else if (role == Role.SCHOOL_ADMIN) {
      target = AppRoute.APP_SCHOOL;
    } else if (role == Role.TEACHER) {
      target = AppRoute.APP_TEACHER;
    } else if (role == Role.STUDENT) {
      target = AppRoute.APP_STUDENT;
    } else {
      target = AppRoute.APP_USER_PROFILE;
    }
    return target;
  }
}
