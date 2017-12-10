import {Component, OnInit} from '@angular/core';
import {AbstractMasterComponent} from "../abstract/abstract-master-component";
import {Classes} from "../entity/classes";
import {ClassesService} from "../service/classes.service";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent extends AbstractMasterComponent<Classes, ClassesService> {
  constructor(service: ClassesService) {
    super(service);
  }
}
