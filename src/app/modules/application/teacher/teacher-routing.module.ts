import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TchClassListComponent} from "./components/tch-class-list/tch-class-list.component";
import {TchAttendanceComponent} from "./components/tch-attendance/tch-attendance.component";

const routes: Routes = [
  {
    path: 'class-list',
    component: TchClassListComponent,
  },
  {
    path: 'attendance',
    component: TchAttendanceComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule {
}
