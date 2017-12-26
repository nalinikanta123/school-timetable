import {Component, OnInit} from '@angular/core';
import {StudentEnrollmentService} from "../service/student-enrollment.service";
import {ActivatedRoute} from "@angular/router";
import {Enrollment} from "../entity/enrollment";
import {DayOfWeek} from "../entity/day-of-week";
import {EnumValues} from "enum-values";
import {TimeEnum} from "../entity/time-enum";

@Component({
  selector: 'app-student-timetable',
  templateUrl: './student-timetable.component.html',
  styleUrls: ['./student-timetable.component.css']
})
export class StudentTimetableComponent implements OnInit {

  constructor(private route: ActivatedRoute, private enrollmentService: StudentEnrollmentService) {
  }

  enrollments: Enrollment[];
  days: String[];
  timetableHours: any;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.enrollmentService.findEnrollmentsByStudentId(id).subscribe(items => this.enrollments = items);
    this.days = EnumValues.getNames(DayOfWeek);
    this.timetableHours = EnumValues.getNamesAndValues(TimeEnum);
    console.log(this.enrollments);
  }

  getEnrolledSubjects(day, time): Enrollment {
    if (this.enrollments != null) {
      let enr = this.enrollments.filter(enrs => (enrs.classes.dayOfWeek === day && enrs.classes.time == time));
      if (enr.length > 0) {
        return enr[0];
      } else {
        return null;
      }
    }
  }

  enrollmentUpdated(enrollment: Enrollment): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.enrollmentService.findEnrollmentsByStudentId(id).subscribe(items => this.enrollments = items);
  }
}
