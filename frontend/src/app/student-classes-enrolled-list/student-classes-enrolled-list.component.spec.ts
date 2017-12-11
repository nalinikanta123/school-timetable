import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StudentClassesEnrolledListComponent} from './student-classes-enrolled-list.component';

describe('StudentClassesEnrolledListComponent', () => {
  let component: StudentClassesEnrolledListComponent;
  let fixture: ComponentFixture<StudentClassesEnrolledListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentClassesEnrolledListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentClassesEnrolledListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
