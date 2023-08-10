import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchAttendanceComponent } from './tch-attendance.component';

describe('TchAttendanceComponent', () => {
  let component: TchAttendanceComponent;
  let fixture: ComponentFixture<TchAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TchAttendanceComponent]
    });
    fixture = TestBed.createComponent(TchAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
