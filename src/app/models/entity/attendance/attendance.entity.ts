import {BaseEntity} from "../base/base.entity";
import {AttendanceStatus} from "../../enum/attendance/attendance-status.enum";

export class AttendanceEntity extends BaseEntity {
  constructor(
    public accountId: number,
    public checkIn: number,
    public checkOut: number,
    public classLevelId: number,
    public status: AttendanceStatus,
  ) {
    super();
  }
}
