import {Component, OnInit} from '@angular/core';
import {Student} from "../entity/student";
import {StudentEnrollmentService} from "../service/student-enrollment.service";
import {Enrollment} from "../entity/enrollment";
import {StudentService} from "../service/student.service";
import {EnumValues} from "enum-values";
import {DayOfWeek} from "../entity/day-of-week";
import {TimeEnum} from "../entity/time-enum";
import {ArrayUtils} from "../util/array-utils";

@Component({
  selector: 'app-free-time',
  templateUrl: './free-time.component.html',
  styleUrls: ['./free-time.component.css']
})
export class FreeTimeComponent implements OnInit {

  selectedStudents: Student[] = [];

  selectStudent: Student;

  studentOptions: Student[];

  studentsEnrollments: Enrollment[] = [];

  days: String[];
  timetableHours: any;

  constructor(private studentService: StudentService, private enrollmentService: StudentEnrollmentService) {
  }

  ngOnInit() {
    this.studentService.getAll().subscribe(items => this.studentOptions = items);
    this.days = EnumValues.getNames(DayOfWeek);
    this.timetableHours = EnumValues.getNamesAndValues(TimeEnum);
  }

  addStudent(): void {
    if (this.selectStudent !== null && this.selectStudent !== undefined) {
      this.selectedStudents.push(this.selectStudent);
      this.enrollmentService.findEnrollmentsByStudentId(this.selectStudent.id).subscribe(items => items.forEach(enr => this.studentsEnrollments.push(enr)));
      this.selectStudent = null;
    }
  }

  removeStudent(student: Student): void {
    this.selectedStudents = ArrayUtils.removeFromArray(this.selectedStudents, student);
    this.studentsEnrollments = this.studentsEnrollments.filter(enrs => (enrs.student.id !== student.id));
  }

  isFreeTime(day: String, time): string {
    //todo optimize following line -- replace filter function
    let enr = this.studentsEnrollments.filter(enrs => (enrs.classes.dayOfWeek === day && enrs.classes.time == time));
    if (enr.length > 0) {
      return "X";
    } else {
      return "O";
    }
  }
}
