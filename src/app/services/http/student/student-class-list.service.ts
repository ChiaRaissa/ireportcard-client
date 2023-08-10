import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SchoolBasedAppService} from "../base/school-based.app.service";
import {ClassListPayload} from "../../../models/payload/class-list.payload";
import {AppEndpoint} from "../../../app.endpoints";

@Injectable({
  providedIn: 'root'
})
export class StudentClassListService extends SchoolBasedAppService<any, ClassListPayload>{

  constructor(private http: HttpClient) {
    super(http, AppEndpoint.STUDENT_CLASS_LIST);
  }
}
