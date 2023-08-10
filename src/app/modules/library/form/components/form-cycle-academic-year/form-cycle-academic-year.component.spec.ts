import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCycleAcademicYearComponent } from './form-cycle-academic-year.component';

describe('FormCycleAcademicYearComponent', () => {
  let component: FormCycleAcademicYearComponent;
  let fixture: ComponentFixture<FormCycleAcademicYearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCycleAcademicYearComponent]
    });
    fixture = TestBed.createComponent(FormCycleAcademicYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
