import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchClassListComponent } from './tch-class-list.component';

describe('TchClassListComponent', () => {
  let component: TchClassListComponent;
  let fixture: ComponentFixture<TchClassListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TchClassListComponent]
    });
    fixture = TestBed.createComponent(TchClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
