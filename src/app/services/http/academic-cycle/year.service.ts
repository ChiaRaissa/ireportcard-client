import {Injectable} from '@angular/core';
import {AppService} from "../base/app.service";
import {YearEntity} from "../../../models/entity/academic-cycle/year.entity";
import {HttpClient} from "@angular/common/http";
import {AppEndpoint} from "../../../app.endpoints";
import {Observable} from "rxjs";
import {Id} from "../../../models/entity/base/base.entity";
import {SchoolId} from "../../general/local-storage.service";
import {SchoolBasedAppService} from "../base/school-based.app.service";

@Injectable({
  providedIn: 'root'
})
export class YearService extends SchoolBasedAppService<YearEntity, any> {

  constructor(private http: HttpClient) {
    super(http, AppEndpoint.ACADEMIC_CYCLE_YEAR);
  }

  getAllBySchoolId(): Observable<YearEntity[]> {
    return this.get<YearEntity[]>()
  }
}
