import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgSetupPageComponent } from './components/org-setup-page/org-setup-page.component';
import { OrgSetupOrganisationComponent } from './components/org-setup-organisation/org-setup-organisation.component';
import { OrgSetupInfoPageComponent } from './components/org-setup-info-page/org-setup-info-page.component';

const routes: Routes = [{
  path: '',
  component: OrgSetupPageComponent,
  children: [
    {
      path: '',
      component: OrgSetupInfoPageComponent
    },
    {
      path: 'organisation',
      component: OrgSetupOrganisationComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
