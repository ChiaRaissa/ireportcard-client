import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupRoutingModule } from './setup-routing.module';
import { OrgSetupPageComponent } from './components/org-setup-page/org-setup-page.component';
import { LibraryModule } from '../../library/library.module';
import { OrgSetupOrganisationComponent } from './components/org-setup-organisation/org-setup-organisation.component';
import { OrgSetupInfoPageComponent } from './components/org-setup-info-page/org-setup-info-page.component';


@NgModule({
  declarations: [
  
    OrgSetupPageComponent,
    OrgSetupOrganisationComponent,
    OrgSetupInfoPageComponent
  ],
  imports: [
    CommonModule,
    SetupRoutingModule,
    LibraryModule
  ]
})
export class SetupModule { }
