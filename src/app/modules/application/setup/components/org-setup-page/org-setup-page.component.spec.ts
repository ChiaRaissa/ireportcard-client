import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSetupPageComponent } from './org-setup-page.component';

describe('OrgSetupPageComponent', () => {
  let component: OrgSetupPageComponent;
  let fixture: ComponentFixture<OrgSetupPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgSetupPageComponent]
    });
    fixture = TestBed.createComponent(OrgSetupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
