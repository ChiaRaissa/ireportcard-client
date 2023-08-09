import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {AppService} from "../base/app.service";
import {AppEndpoint} from "../../../app.endpoints";
import {LaunchResponse, LoginRequest, LoginResponse} from "../../../models/entity/authentication/login.model";
import {RegisterResponse} from "../../../models/entity/authentication/register.model";
import {UserPayload} from "../../../models/entity/user/user.payload";
import {LocalStorageService} from "../../general/local-storage.service";
import {LaunchFilter} from "../../../models/filter/auth/launch.filter";
import {isValidId} from "../../../models/entity/base/base.entity";
import {RouterService} from "../../general/router.service";
import {AppRoute} from "../../../app.routes";
import {UserService} from "../user/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends AppService<any, any> {

  constructor(
    private http: HttpClient,
    private _localStorage: LocalStorageService,
    private _routerService: RouterService,
    private _userService: UserService,
  ) {
    super(http);
  }

  isAuthenticated = (): Observable<boolean> => this.http.get<boolean>(AppEndpoint.AUTH_CHECK.url);

  launch = (filter: LaunchFilter | null = null): Observable<LaunchResponse> => {
    const response = new Subject<LaunchResponse>();
    this._userService.getByPrincipal().subscribe(res => {
      if (isValidId(res.account?.schoolId)) {
        this._localStorage.set("school_id", res.account?.schoolId);
      }
      this._localStorage.set("organisation_id", String(res.account?.organisationId));
    })
    this.http.get<LaunchResponse>(AppEndpoint.LAUNCH.url, {
      params: filter?.parameters
    }).subscribe(res => {
      response.next(res);
      response.complete();
      if (isValidId(res.schoolId)) {
        this._localStorage.set("school_id", res.schoolId);
      }
      this._localStorage.set("organisation_id", String(res.organisationId));
    });
    return response.asObservable();
  }

  login = (request: LoginRequest): Observable<LoginResponse> => {
    const response = new Subject<LoginResponse>();
    this.http.post<LoginResponse>(AppEndpoint.AUTH_LOGIN.url, request)
      .subscribe({
        next: (res) => {
          response.next(res);
          this._localStorage.set("access_token", res.token);
          this.launch().subscribe(res => {
            this._localStorage.set("organisation_id", res.organisationId);
            if (isValidId(res.schoolId)) {
              this._localStorage.set("school_id", res.schoolId);
            }
          });
        },
        complete: () => response.complete()
      });
    return response.asObservable()
  }

  logout = () => {
    this._localStorage.clear();
    this._routerService.nav([AppRoute.AUTH_LOGIN], undefined, () => this._routerService.reload());
  }

  register = (user: UserPayload): Observable<RegisterResponse> => {
    return this.http.post<RegisterResponse>(
      this.urlWithPath(AppEndpoint.AUTH_REGISTER.url),
      user
    );
  }
}
