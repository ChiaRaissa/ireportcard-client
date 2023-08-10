import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from "./components/shell/shell.component";
import { authenticationGuard } from "./guard/authentication.guard";
import { LandingComponent } from "./components/landing/landing.component";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'page',
    component: PageNotFoundComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/application/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'onboard',
    loadChildren: () => import('./modules/application/onboard/onboard.module').then(m => m.OnboardModule)
  },
  {
    path: 'setup',
    loadChildren: () => import('./modules/application/setup/setup.module').then(m => m.SetupModule)
  },
  {
    path: 'app',
    component: ShellComponent,
    canActivate: [authenticationGuard],
    children: [
      {
        path: 'user',
        loadChildren: () => import('./modules/application/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'organisation',
        loadChildren: () => import('./modules/application/organisation/organisation.module').then(m => m.OrganisationModule)
      },
      {
        path: 'school',
        loadChildren: () => import('./modules/application/school/school.module').then(m => m.SchoolModule)
      },
      {
        path: 'student',
        loadChildren: () => import('./modules/application/student/student.module').then(m => m.StudentModule)
      },
      {
        path: 'teacher',
        loadChildren: () => import('./modules/application/teacher/teacher.module').then(m => m.TeacherModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
