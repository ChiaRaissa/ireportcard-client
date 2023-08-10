import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org-setup-info-page',
  template: `
    <section>
      <div class="bg-light">
        <div class="container py-5">
          <div class="row h-100 align-items-center py-5">
            <div class="col-lg-6">
              <h1 class="display-4" i18n>Setup Organisation</h1>
              <p class="lead text-muted fs-5 mb-0" i18n>Unlock the Power of School Organization! Experience the transformative impact of creating an organization that oversees multiple schools. With our proven track record, we empower you to manage each school individually, ensuring their success. Click now to revolutionize education and shape a brighter future for countless students and communities.</p>
            </div>
            <div class="col-lg-6 d-none d-lg-block"><img alt="organisation_setup_illustration" class="img-fluid" src="../../../../../../assets/image/school/setup.svg"></div>
            <div>
              <button class="button btn-color" (click)="navigateOrg()" i18n>Setup Organisation</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./org-setup-info-page.component.css']
})
export class OrgSetupInfoPageComponent {

  constructor(private _router: Router) {}

  navigateOrg = () => this._router.navigate(['/setup/organisation']);

}
