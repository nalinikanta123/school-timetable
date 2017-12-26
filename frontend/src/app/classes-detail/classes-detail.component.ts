import {Component} from '@angular/core';
import {AbstractDetailComponent} from "../abstract/abstract-detail-component";
import {Classes} from "../entity/classes";
import {ClassesService} from "../service/classes.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {DayOfWeek} from "../entity/day-of-week";
import {EnumValues} from "enum-values";
import {TimeEnum} from "../entity/time-enum";
import {Course} from "../entity/course";
import {CourseService} from "../service/course.service";


@Component({
  selector: 'app-classes-detail',
  templateUrl: './classes-detail.component.html',
  styleUrls: ['./classes-detail.component.css']
})
export class ClassesDetailComponent extends AbstractDetailComponent<Classes, ClassesService> {

  constructor(route: ActivatedRoute, private courseService: CourseService, service: ClassesService, location: Location) {
    super(route, service, location);
  }

  selectedDayOfWeek: any;

  selectedTime: any;

  selectedCourse: Course;

  courseOptions: Course[];

  timeOptions: any[];

  dayOfWeekOptions: any[];

  ngOnInit(): void {
    super.ngOnInit();
    this.dayOfWeekOptions = EnumValues.getNamesAndValues(DayOfWeek);
    this.timeOptions = EnumValues.getNamesAndValues(TimeEnum);
    this.courseService.getAll().subscribe(items => this.courseOptions = items);
  }


  public onItemLoaded(item: Classes) {
    /*this.selectedDayOfWeek = this.item.dayOfWeek;
    this.selectedTime = this.item.time;
    console.log(this.item.course);
    this.selectedCourse = this.item.course;*/
  }

  selectedDayOfWeekChanged() {
    this.item.dayOfWeek = this.selectedDayOfWeek.name;
  }

  selectedTimeChanged() {
    this.item.time = this.selectedTime.name;
  }

  selectedCourseChanged() {
    this.item.course = this.selectedCourse;
    console.log(JSON.stringify(this.item));
  }
}
