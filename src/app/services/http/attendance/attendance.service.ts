import { Injectable } from '@angular/core';
import {SchoolBasedAppService} from "../base/school-based.app.service";
import {AttendanceEntity} from "../../../models/entity/attendance/attendance.entity";
import {
  AttendanceCheckPayload,
  AttendancePayload,
  AttendancePeriodPayload
} from "../../../models/payload/attendance-period.payload";
import {HttpClient} from "@angular/common/http";
import {AppEndpoint} from "../../../app.endpoints";

@Injectable({
  providedIn: 'root'
})
export class AttendanceService extends SchoolBasedAppService<AttendanceEntity, AttendancePayload> {

  constructor(private http: HttpClient) {
    super(http, AppEndpoint.ATTENDANCE)
  }

  today = () => this.get<AttendancePeriodPayload>('/today')

  check = (payload: AttendanceCheckPayload) => {
    return this.post<AttendanceCheckPayload>(payload, '/check')
  }
}
