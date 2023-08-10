import { TestBed } from '@angular/core/testing';

import { SchoolSettingService } from './school-setting.service';

describe('SchoolSettingService', () => {
  let service: SchoolSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
