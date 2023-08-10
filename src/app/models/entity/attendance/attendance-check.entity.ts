import {BaseEntity, Id} from "../base/base.entity";
import {AttendanceCheckType} from "../../enum/attendance/attendance-check-type.enum";

export class AttendanceCheckEntity extends BaseEntity {
  constructor(
    public checkTime: Date,
    public type: AttendanceCheckType,
    public locationId?: Id,
    public attendanceId?: Id
  ) {
    super();
  }

}
