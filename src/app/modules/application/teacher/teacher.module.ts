import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeacherRoutingModule} from './teacher-routing.module';
import { TchClassListComponent } from './components/tch-class-list/tch-class-list.component';
import {LibraryModule} from "../../library/library.module";
import {SharedModule} from "../../shared.module";
import { TchAttendanceComponent } from './components/tch-attendance/tch-attendance.component';


@NgModule({
  declarations: [
    TchClassListComponent,
    TchAttendanceComponent
  ],
    imports: [
        CommonModule,
        TeacherRoutingModule,
        SharedModule,
      LibraryModule
    ]
})
export class TeacherModule {
}
