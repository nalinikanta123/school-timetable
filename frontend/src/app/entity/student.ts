import {Enrollment} from "./enrollment";
import {AbstractEntity} from "../abstract/abstract-entity";

export class Student extends AbstractEntity {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  isActive: boolean;
  enrollments:Enrollment[];
}
