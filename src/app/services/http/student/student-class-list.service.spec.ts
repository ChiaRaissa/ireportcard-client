import { TestBed } from '@angular/core/testing';

import { StudentClassListService } from './student-class-list.service';

describe('StudentClassListService', () => {
  let service: StudentClassListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentClassListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
