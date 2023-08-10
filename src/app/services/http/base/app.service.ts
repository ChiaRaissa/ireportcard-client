import {HttpClient} from "@angular/common/http";
import {AppEndpoint} from "../../../app.endpoints";
import {Injectable} from "@angular/core";
import {BaseFilter} from "../../../models/filter/base.filter";
import {Observable} from "rxjs";

export interface IAppService<T> {
}


@Injectable({
  providedIn: 'root'
})
export abstract class AppService<ENTITY, PAYLOAD> implements IAppService<ENTITY> {
  protected readonly url: string;

  protected constructor(private httpClient: HttpClient, endpoint?: AppEndpoint, pathPrefix: string = '') {
    this.url = `${endpoint?.url ?? ''}${pathPrefix}`;
  }

  urlWithPath = (path: string) => `${this.url}${path}`

  post = <T> (payload: PAYLOAD | ENTITY | T, path: string = '') => {
    return this.httpClient.post<any>(`${this.url}${path}`, payload);
  }

  get = <T> (path: string = '') => this.httpClient.get<T>(`${this.url}${path}`);

  getPayload = (path: string = '') => this.get<PAYLOAD>(path);

  getEntity = (path: string = '') => this.get<ENTITY>(path);


  list = (filter: BaseFilter): Observable<PAYLOAD[]> => {
    return this.httpClient.get<PAYLOAD[]>(this.urlWithPath('/list'), {
      params: filter.parameters
    });
  }

  listDto = (filter: BaseFilter): Observable<ENTITY[]> => {
    return this.httpClient.get<ENTITY[]>(this.urlWithPath('/list-dto'), {
      params: filter.parameters
    });
  }
}
