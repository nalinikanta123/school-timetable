import {Classes} from "./classes";
import {AbstractEntity} from "../abstract/abstract-entity";

export class Course extends AbstractEntity{

  shortName:string;
  fullName:string;
  syllabus:string;
  classes:Classes[];
}
