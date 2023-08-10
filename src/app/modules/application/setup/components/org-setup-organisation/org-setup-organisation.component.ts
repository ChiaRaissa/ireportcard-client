import { Component } from '@angular/core';
import {OrganisationSetupPayload} from "../../../../../models/payload/organisationSetupPayload";

@Component({
  selector: 'app-org-setup-organisation',
  templateUrl: './org-setup-organisation.component.html',
  styleUrls: ['./org-setup-organisation.component.css']
})
export class OrgSetupOrganisationComponent {
  completed: boolean = false;
  loading: boolean = false;
  submit = (org: OrganisationSetupPayload) => {
    // TODO:  implement submit organisation data
    this.loading = true;
    setTimeout(() => {
      this.completed = true;
    }, 4000)
  }
}
