import { Component, OnInit } from '@angular/core';
import {AbstractDetailComponent} from "../abstract/abstract-detail-component";
import {Classes} from "../entity/classes";
import {ClassesService} from "../service/classes.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';


@Component({
  selector: 'app-classes-detail',
  templateUrl: './classes-detail.component.html',
  styleUrls: ['./classes-detail.component.css']
})
export class ClassesDetailComponent extends AbstractDetailComponent<Classes,ClassesService>{

  constructor(route: ActivatedRoute, service: ClassesService, location: Location) {
    super(route, service, location);
  }
}
