import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCycleSequenceComponent } from './form-cycle-sequence.component';

describe('FormCycleSequenceComponent', () => {
  let component: FormCycleSequenceComponent;
  let fixture: ComponentFixture<FormCycleSequenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCycleSequenceComponent]
    });
    fixture = TestBed.createComponent(FormCycleSequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
