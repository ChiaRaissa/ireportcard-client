import {Injectable} from '@angular/core';
import {UserService} from "../http/user/user.service";
import {UserPayload} from "../../models/entity/user/user.payload";
import {BehaviorSubject, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserProviderService {

  payload?: UserPayload;

  private readonly _userSubject: BehaviorSubject<UserPayload | undefined>;
  private subscription$?: Subscription;



  constructor(private _userService: UserService) {
    this._userSubject = new BehaviorSubject<UserPayload | undefined>(undefined);
  }

  get user() {
    if (this.payload == undefined) {
      this.subscription$ = this._userService.getByPrincipal().subscribe(res => {
        this._userSubject.next(res);
        this.payload = res;
      });
    }
    return this._userSubject;
  }

  executor = (callback: (payload: UserPayload) => void) => {
    if (!this.payload) {
      this.user.subscribe(res => {
        if (res != undefined) {
          callback(res)
        }
      });
    } else {
      callback(this.payload)
    }
  }

  close = () => {
    this._userSubject.complete();
    this.subscription$?.unsubscribe();
  }
}
