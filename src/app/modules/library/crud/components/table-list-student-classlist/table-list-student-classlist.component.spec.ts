import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListStudentClasslistComponent } from './table-list-student-classlist.component';

describe('TableListStudentClasslistComponent', () => {
  let component: TableListStudentClasslistComponent;
  let fixture: ComponentFixture<TableListStudentClasslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableListStudentClasslistComponent]
    });
    fixture = TestBed.createComponent(TableListStudentClasslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
