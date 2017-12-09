import {Enrollment} from "./enrollment";
import {AbstractEntity} from "../abstract/abstract-entity";

export class Student extends AbstractEntity {

  firstName: string;
  surName: string;
  enrollments:Enrollment[];
}
