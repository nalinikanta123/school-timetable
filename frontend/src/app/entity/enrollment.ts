import {Student} from "./student";
import {Classes} from "./classes";
import {AbstractEntity} from "../abstract/abstract-entity";

export class Enrollment extends AbstractEntity{
  student: Student;
  classes:Classes;
}
