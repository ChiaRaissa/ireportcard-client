import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTableListComponent } from './crud-table-list.component';

describe('CrudTableListComponent', () => {
  let component: CrudTableListComponent;
  let fixture: ComponentFixture<CrudTableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudTableListComponent]
    });
    fixture = TestBed.createComponent(CrudTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
