import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StuHomeComponent} from './stu-home.component';

describe('StuHomeComponent', () => {
  let component: StuHomeComponent;
  let fixture: ComponentFixture<StuHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuHomeComponent]
    });
    fixture = TestBed.createComponent(StuHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
