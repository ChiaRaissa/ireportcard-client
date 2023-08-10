import {LocationEntity} from "../entity/general/location.entity";
import {AttendanceType} from "../enum/attendance/attendance-type.enum";
import {Id} from "../entity/base/base.entity";
import {AttendanceEntity} from "../entity/attendance/attendance.entity";
import {AttendancePeriodType} from "../enum/attendance/attendance-period-type.enum";
import {AttendanceCheckEntity} from "../entity/attendance/attendance-check.entity";

export interface AttendancePayload {
  attendance: AttendanceEntity
  checkIn?: AttendanceCheckEntity
  checkOut?: AttendanceCheckEntity
}

export interface AttendancePeriodPayload {
  attendanceDetail?: AttendancePayload
  dayPeriod: AttendancePeriodDetailPayload
  weekPeriod: AttendancePeriodDetailPayload
  monthPeriod: AttendancePeriodDetailPayload
}

export interface AttendanceCheckPayload {
  check: AttendanceCheckEntity
  location: LocationEntity
  attendanceType: AttendanceType
  classLevelId?: Id
  subjectId?: Id
}

export interface AttendancePeriodDetailPayload {
  type: AttendancePeriodType
  totalHours: number
  workedHours: number
}
