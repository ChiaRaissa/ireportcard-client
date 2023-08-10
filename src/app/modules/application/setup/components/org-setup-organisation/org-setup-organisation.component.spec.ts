import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSetupOrganisationComponent } from './org-setup-organisation.component';

describe('OrgSetupOrganisationComponent', () => {
  let component: OrgSetupOrganisationComponent;
  let fixture: ComponentFixture<OrgSetupOrganisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgSetupOrganisationComponent]
    });
    fixture = TestBed.createComponent(OrgSetupOrganisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
