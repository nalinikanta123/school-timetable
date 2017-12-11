import {Course} from "./course";
import {Enrollment} from "./enrollment";
import {AbstractEntity} from "../abstract/abstract-entity";


export class Classes extends AbstractEntity {
  time: string;
  dayOfWeek: string;
  course: Course;
  room: string;
  lecturerName: string;
  enrollments: Enrollment[];
}
