import {Injectable} from '@angular/core';
import {AppService} from "../base/app.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserPayload} from "../../../models/entity/user/user.payload";
import {AppEndpoint} from "../../../app.endpoints";
import {UserFilter} from "../../../models/filter/user/user.filter";
import {DEFAULT_ID} from "../../../utils/base.util";
import {UserEntity} from "../../../models/entity/user/user.entity";
import {ResponseListPayload} from "../../../models/payload/api/response/response-list.payload";
import {PaginationPayload} from "../../../models/payload/api/pagination.payload";

@Injectable({
  providedIn: 'root'
})
export class UserService extends AppService<UserEntity, UserPayload> {
  constructor(private http: HttpClient) {
    super(http, AppEndpoint.USER)
  }

  getById = (userId: number): Observable<UserPayload> => {
    return this.http.get<UserPayload>(this.urlWithPath(`/id/${userId}`));
  }
  getByPrincipal = (): Observable<UserPayload> => {
    return this.http.get<UserPayload>(this.urlWithPath('/principal'));
  }

  getAllByOrganisation = (): Observable<UserPayload[]> => {
    return this.http.get<UserPayload[]>(this.urlWithPath('/organisation'));
  }

  listUsers = (filter: UserFilter, pagination?: PaginationPayload): Observable<ResponseListPayload<UserPayload>> => {
    let organisationId = DEFAULT_ID;
    if (typeof filter.params.organisationId == 'number') {
      organisationId = filter.params.organisationId < 0 ? organisationId : filter.params.organisationId
    }
    return this.http.get<ResponseListPayload<UserPayload>>(this.urlWithPath(`/organisation/${organisationId}/list`),
      {
        params: filter.obj
      }
    );
  }
}
