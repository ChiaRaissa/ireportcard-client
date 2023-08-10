import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOrgSetupOrganisationComponent } from './form-org-setup-organisation.component';

describe('FormOrgSetupOrganisationComponent', () => {
  let component: FormOrgSetupOrganisationComponent;
  let fixture: ComponentFixture<FormOrgSetupOrganisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormOrgSetupOrganisationComponent]
    });
    fixture = TestBed.createComponent(FormOrgSetupOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
