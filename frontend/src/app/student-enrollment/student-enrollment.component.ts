import {Component, OnInit} from '@angular/core';
import {StudentService} from "../service/student.service";
import {StudentEnrollmentService} from "../service/student-enrollment.service";
import {Student} from "../entity/student";
import {ActivatedRoute} from "@angular/router";
import {Course} from "../entity/course";
import {CourseService} from "../service/course.service";
import {Classes} from "../entity/classes";
import {ClassesService} from "../service/classes.service";
import {Enrollment} from "../entity/enrollment";

@Component({
  selector: 'app-student-enrollment',
  templateUrl: './student-enrollment.component.html',
  styleUrls: ['./student-enrollment.component.css']
})
export class StudentEnrollmentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private classesService: ClassesService, private courseService: CourseService, private studentService: StudentService, private enrollmentService: StudentEnrollmentService) {
  }

  studentModel: Student;

  selectedCourse: Course;

  selectedClasses: Classes;

  coursesOptions: Course[];

  classesOptions: Classes[];

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentService.getById(id).subscribe(student => this.studentModel = student);
    this.courseService.getAll().subscribe(items => this.coursesOptions = items);
  }

  selectedCourseChanged(): void {
    this.classesService.getByCourseId(this.selectedCourse.id).subscribe(items => this.classesOptions = items);
  }

  enrollSubmitted(): void {

    let enrollment = new Enrollment();
    let student = new Student();
    student.id = this.studentModel.id;
    let classes = new Classes();
    classes.id = this.selectedClasses.id;
    enrollment.student = student;
    enrollment.classes = classes;
    this.enrollmentService.addOrUpdate(enrollment).subscribe(
      item => {
        this.selectedCourse = null;
        this.selectedClasses = null;
        this.classesOptions = null;
      });
  }
}
