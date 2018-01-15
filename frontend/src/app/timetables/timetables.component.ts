import {Component, OnInit} from '@angular/core';
import {EnumValues} from "enum-values";
import {TimeEnum} from "../entity/time-enum";
import {DayOfWeek} from "../entity/day-of-week";
import {Student} from "../entity/student";
import {StudentEnrollmentService} from "../service/student-enrollment.service";
import {StudentService} from "../service/student.service";
import {Enrollment} from "../entity/enrollment";

@Component({
  selector: 'app-timetables',
  templateUrl: './timetables.component.html',
  styleUrls: ['./timetables.component.css']
})
export class TimetablesComponent implements OnInit {

  selectStudent: Student;
  studentOptions: Student[];

  days: String[];
  timetableHours: any;
  students: Student[] = [];

  constructor(private studentService: StudentService, private enrollmentService: StudentEnrollmentService) {
  }

  ngOnInit() {
    this.studentService.getAll().subscribe(items => this.studentOptions = items);
    this.days = EnumValues.getNames(DayOfWeek);
    this.timetableHours = EnumValues.getNamesAndValues(TimeEnum);
  }

  addNewStudentsTimetable(): void {
    this.enrollmentService.findEnrollmentsByStudentId(this.selectStudent.id).subscribe(items => {
      this.selectStudent.enrollments = items;
      this.students.push(this.selectStudent);
    });
  }

  getEnrolledSubjects(student, day, time): Enrollment {
    console.log(student);
    if (student.enrollments != null) {
      let enr = student.enrollments.filter(enrs => (enrs.classes.dayOfWeek === day && enrs.classes.time == time));
      if (enr.length > 0) {
        return enr[0];
      } else {
        return null;
      }
    }
  }

}
