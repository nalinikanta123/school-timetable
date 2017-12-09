import { Component, OnInit } from '@angular/core';
import {AbstractDetailComponent} from "../abstract/abstract-detail-component";
import {Course} from "../entity/course";
import {CourseService} from "../service/course.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';


@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent extends AbstractDetailComponent<Course, CourseService>{


  constructor(route: ActivatedRoute, service: CourseService, location: Location) {
    super(route, service, location);
  }
}
