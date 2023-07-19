import {Component} from '@angular/core';
import {EmptySchoolStats, EmptyStudentStats} from "../../../../../models/entity/authentication/login.model";
import {range} from "rxjs";
import {today} from "../../../../../utils/date.util";

@Component({
  selector: 'app-stu-home',
  templateUrl: './stu-home.component.html',
  styleUrls: ['./stu-home.component.css']
})
export class StuHomeComponent {
  studentStats = EmptyStudentStats;
  protected readonly range = range;

  readonly doughnutData = doughnutData()
  data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [this.doughnutData.completed, this.doughnutData.remaining]
      }
    ]
  };
  options: any;

  constructor() {
    console.log(this.doughnutData)
  }

}

const doughnutData = () => {
  const start = new Date(today().getFullYear(), today().getMonth(), today().getDay(), 8, 0);
  const end = new Date(today().getFullYear(), today().getMonth(), today().getDay(), 14, 0);
  const total = end.getHours() - start.getHours();
  console.log(start, end, total)
  return {
    completed: today().getHours() - start.getHours(),
    remaining: end.getHours() - today().getHours(),
  }
}
