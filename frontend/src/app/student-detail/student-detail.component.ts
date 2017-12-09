import {Component, OnInit, Input} from '@angular/core';
import {Student} from "../entity/student";
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {StudentService} from "../service/student.service";
import {AbstractDetailComponent} from "../abstract/abstract-detail-component";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent extends AbstractDetailComponent<Student, StudentService>  {
  constructor(route: ActivatedRoute, service: StudentService, location: Location) {
    super(route, service, location);
  }
}
