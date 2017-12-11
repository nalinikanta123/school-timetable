import {Injectable} from '@angular/core';
import {Student} from "../entity/student";
import {AbstractService} from "../abstract/abstract-service";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "./message.service";

@Injectable()
export class StudentService extends AbstractService<Student> {
  constructor(http: HttpClient, messageService: MessageService) {
    super(http, messageService);
  }

  getRestApiUrl(): string {
    return 'http://localhost:8080/student';
  }


}
