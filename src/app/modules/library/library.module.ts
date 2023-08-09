import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './navigation/components/header/header.component';
import {SidebarComponent} from './navigation/components/sidebar/sidebar.component';
import {MainComponent} from './navigation/components/main/main.component';
import {FooterComponent} from './navigation/components/footer/footer.component';
import {InputComponent} from './form/components/input/input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormComponent} from './form/components/form/form.component';
import {AvatarComponent} from './user/components/avatar/avatar.component';
import {RouterLink} from "@angular/router";
import {TableComponent} from './crud/components/table/table.component';
import {DatatableComponent} from './crud/components/datatable/datatable.component';
import {AdminRegisterFormComponent} from './form/components/admin-register-form/admin-register-form.component';
import {FormSchoolUpsertComponent} from './form/components/form-school-upsert/form-school-upsert.component';
import {
  AdminAssignSchoolFormComponent
} from './form/components/admin-assign-school-form/admin-assign-school-form.component';
import {DatafilterComponent} from './crud/components/datafilter/datafilter.component';
import {ModalComponent} from './modal/modal/modal.component';
import {DialogModule} from "primeng/dialog";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {TableModule} from "primeng/table";
import {DividerModule} from "primeng/divider";
import {TreeModule} from "primeng/tree";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {FileUploadModule} from "primeng/fileupload";
import {ToggleButtonModule} from "primeng/togglebutton";
import {FormTeacherAddComponent} from './form/components/form-teacher-add/form-teacher-add.component';
import {PasswordModule} from "primeng/password";
import {TableListClassesComponent} from './crud/components/table-list-classes/table-list-classes.component';
import {TableListUsersComponent} from "./crud/components/table-list-users/table-list-users.component";
import {TableListDepartmentsComponent} from './crud/components/table-list-departments/table-list-departments.component';
import {TabViewModule} from "primeng/tabview";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {InputNumberModule} from "primeng/inputnumber";
import {MultiSelectModule} from "primeng/multiselect";
import {AccordionModule} from "primeng/accordion";
import {StepsModule} from "primeng/steps";
import {ClassAddFormComponent} from './form/components/class-add-form/class-add-form.component';
import {ChartModule} from "primeng/chart";
import {FormDepartmentAddComponent} from './form/components/form-department-add/form-department-add.component';
import {TableListSatComponent} from './crud/components/table-list-sat/table-list-sat.component';
import {TableListCoursesComponent} from './crud/components/table-list-courses/table-list-courses.component';
import {FormUserAddComponent} from './form/components/form-user-add/form-user-add.component';
import { FormStudentTuitionPayComponent } from './form/components/form-student-tuition-pay/form-student-tuition-pay.component';
import {FormOrgSetupOrganisationComponent} from "./form/components/form-org-setup-organisation/form-org-setup-organisation.component";
import {
  TableListStudentClasslistComponent
} from "./crud/components/table-list-student-classlist/table-list-student-classlist.component";
import {AttendanceUserComponent} from "./general/components/attendance-user/attendance-user.component";


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
    InputComponent,
    FormComponent,
    AvatarComponent,
    TableComponent,
    DatatableComponent,
    AdminRegisterFormComponent,
    FormSchoolUpsertComponent,
    AdminAssignSchoolFormComponent,
    DatafilterComponent,
    ModalComponent,
    TableListUsersComponent,
    FormTeacherAddComponent,
    TableListClassesComponent,
    TableListDepartmentsComponent,
    FormDepartmentAddComponent,
    TableListDepartmentsComponent,
    ClassAddFormComponent,
    TableListSatComponent,
    TableListCoursesComponent,
    FormUserAddComponent,
    FormSchoolUpsertComponent,
    FormStudentTuitionPayComponent,
    FormOrgSetupOrganisationComponent,
    TableListStudentClasslistComponent,
    AttendanceUserComponent
  ],
  exports: [
    PasswordModule,
    ReactiveFormsModule,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
    InputComponent,
    AvatarComponent,
    DatatableComponent,
    AdminRegisterFormComponent,
    FormSchoolUpsertComponent,
    DatafilterComponent,
    CardModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    DividerModule,
    InputTextModule,
    CalendarModule,
    FileUploadModule,
    TabViewModule,
    DialogModule,
    InputNumberModule,
    MultiSelectModule,
    AccordionModule,
    StepsModule,
    ChartModule,
    TableListUsersComponent,
    FormTeacherAddComponent,
    TableListClassesComponent,
    TableListDepartmentsComponent,
    ClassAddFormComponent,
    FormDepartmentAddComponent,
    TableListSatComponent,
    TableListCoursesComponent,
    FormUserAddComponent,
    FormStudentTuitionPayComponent,
    FormOrgSetupOrganisationComponent,
    TableListStudentClasslistComponent,
    AttendanceUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    DialogModule,
    CardModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    DividerModule,
    TreeModule,
    InputTextModule,
    CalendarModule,
    FileUploadModule,
    ToggleButtonModule,
    FormsModule,
    PasswordModule,
    TabViewModule,
    BreadcrumbModule,
    InputNumberModule,
    MultiSelectModule,
    AccordionModule,
    StepsModule,
    ChartModule,
    DialogModule
  ]
})
export class LibraryModule {
}
