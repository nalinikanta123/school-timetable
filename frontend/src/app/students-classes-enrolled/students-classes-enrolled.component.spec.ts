import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {StudentsClassesEnrolledComponent} from './students-classes-enrolled.component';

describe('StudentsClassesEnrolledComponent', () => {
  let component: StudentsClassesEnrolledComponent;
  let fixture: ComponentFixture<StudentsClassesEnrolledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsClassesEnrolledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsClassesEnrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
