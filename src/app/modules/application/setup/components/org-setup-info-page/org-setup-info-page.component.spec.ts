import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSetupInfoPageComponent } from './org-setup-info-page.component';

describe('OrgSetupInfoPageComponent', () => {
  let component: OrgSetupInfoPageComponent;
  let fixture: ComponentFixture<OrgSetupInfoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgSetupInfoPageComponent]
    });
    fixture = TestBed.createComponent(OrgSetupInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
