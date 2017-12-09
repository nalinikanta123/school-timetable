import { Injectable } from '@angular/core';
import {AbstractService} from "../abstract/abstract-service";
import {Course} from "../entity/course";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "./message.service";

@Injectable()
export class CourseService extends AbstractService<Course>{

  constructor(http: HttpClient, messageService: MessageService) {
    super(http, messageService);
  }

  getRestApiUrl(): string {
    return 'http://localhost:8080/course';
  }
}
