import { Injectable } from '@angular/core';
import {AppService} from "../base/app.service";
import {HttpClient} from "@angular/common/http";
import {AppEndpoint} from "../../../app.endpoints";
import {SchoolId} from "../../general/local-storage.service";
import {SchoolBasedAppService} from "../base/school-based.app.service";
import {SchoolSettingPayload} from "../../../models/payload/school.payload";

@Injectable({
  providedIn: 'root'
})
export class SchoolSettingService extends SchoolBasedAppService<any, SchoolSettingPayload>{

  constructor(private http: HttpClient) {
    super(http, AppEndpoint.SCHOOL_SETTING);
  }
}
