import { Component, OnInit } from '@angular/core';
import {AbstractMasterComponent} from "../abstract/abstract-master-component";
import {Course} from "../entity/course";
import {CourseService} from "../service/course.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent extends AbstractMasterComponent<Course,CourseService>{
  constructor(service: CourseService) {
    super(service);
  }
}
