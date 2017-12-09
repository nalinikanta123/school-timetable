import {Course} from "./course";
import {Enrollment} from "./enrollment";
import {AbstractEntity} from "../abstract/abstract-entity";


export class Classes extends AbstractEntity{
  time:string; //todo změnit na integer
  dayOfWeek:string;
  course:Course;
  enrollments:Enrollment[];
}
