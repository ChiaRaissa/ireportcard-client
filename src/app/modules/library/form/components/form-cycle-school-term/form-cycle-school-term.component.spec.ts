import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCycleSchoolTermComponent } from './form-cycle-school-term.component';

describe('FormCycleSchoolTermComponent', () => {
  let component: FormCycleSchoolTermComponent;
  let fixture: ComponentFixture<FormCycleSchoolTermComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCycleSchoolTermComponent]
    });
    fixture = TestBed.createComponent(FormCycleSchoolTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
