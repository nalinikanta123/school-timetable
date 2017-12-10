import { TestBed, inject } from '@angular/core/testing';

import { StudentEnrollmentService } from './student-enrollment.service';

describe('StudentEnrollmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentEnrollmentService]
    });
  });

  it('should be created', inject([StudentEnrollmentService], (service: StudentEnrollmentService) => {
    expect(service).toBeTruthy();
  }));
});
