import {Course} from "./course";
import {Enrollment} from "./enrollment";
import {AbstractEntity} from "../abstract/abstract-entity";
import {TimeEnum} from "./time-enum";
import {DayOfWeek} from "./day-of-week";


export class Classes extends AbstractEntity {
  time: string;
  dayOfWeek: string;
  course: Course;
  room: string;
  enrollments: Enrollment[];
}
