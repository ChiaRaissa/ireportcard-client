import {Component} from '@angular/core';
import {displayTime, today} from "../../../../../utils/date.util";
import {ChartData} from "chart.js";
import {AttendanceService} from "../../../../../services/http/attendance/attendance.service";
import {LocationService} from "../../../../../services/general/location.service";
import {AttendanceCheckPayload, AttendancePayload} from "../../../../../models/payload/attendance-period.payload";
import {AttendanceType} from "../../../../../models/enum/attendance/attendance-type.enum";
import {AttendanceCheckType} from "../../../../../models/enum/attendance/attendance-check-type.enum";

@Component({
  selector: 'app-attendance-user',
  templateUrl: './attendance-user.component.html',
  styleUrls: ['./attendance-user.component.css']
})
export class AttendanceUserComponent {

  timeSheetChartData: ChartData;
  timeSheetChartOptions: any;
  statisticsData: { label: string, stat: string, value: number }[] = []
  attendanceToday?: AttendancePayload;
  protected readonly today = today;
  protected readonly displayTime = displayTime;
  protected readonly AttendanceCheckType = AttendanceCheckType;

  constructor(
    private _attendanceService: AttendanceService,
    private _locationService: LocationService
  ) {
    this.refresh()
    this.timeSheetChartData = {
      datasets: [
        {
          data: [0, 0]
        }
      ]
    }
    this.timeSheetChartOptions = {
      cutout: '84%'
    }
  }

  refresh = () => this._attendanceService.today().subscribe(res => {
    this.attendanceToday = res.attendanceDetail

    this.statisticsData.push(
      {
        label: 'Today',
        stat: `${res.dayPeriod?.workedHours ?? 0} / ${res.dayPeriod?.totalHours}`,
        value: (res.dayPeriod?.workedHours ?? 0) / (res.dayPeriod?.totalHours ?? 1)
      },
      {
        label: 'This Week',
        stat: `${res.weekPeriod?.workedHours ?? 0} / ${res.weekPeriod?.totalHours}`,
        value: (res.weekPeriod?.workedHours ?? 0) / (res.weekPeriod?.totalHours ?? 1)
      },
      {
        label: 'This Month',
        stat: `${res.monthPeriod?.workedHours ?? 0} / ${res.monthPeriod?.totalHours}`,
        value: (res.monthPeriod?.workedHours ?? 0) / (res.monthPeriod?.totalHours ?? 1)
      },
    );
    this.timeSheetChartData = {
      datasets: [
        {
          data: [(res.dayPeriod?.workedHours ?? 0), (res.dayPeriod?.totalHours ?? 1)]
        }
      ]
    }
  });

  checkAction = (type: AttendanceCheckType) => {
    this._locationService.currentLocation().subscribe({
      next: (loc) => {
        const payload: AttendanceCheckPayload = {
          location: loc,
          attendanceType: AttendanceType.SCHOOL,
          check: {
            type: type,
            checkTime: new Date(),
            attendanceId: this.attendanceToday?.attendance.id
          }
        }
        this._attendanceService.check(payload).subscribe()
      },
      complete: () => this.refresh()
    });
  }
}
