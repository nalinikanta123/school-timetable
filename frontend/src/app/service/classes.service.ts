import { Injectable } from '@angular/core';
import {AbstractService} from "../abstract/abstract-service";
import {Classes} from "../entity/classes";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "./message.service";

@Injectable()
export class ClassesService extends AbstractService<Classes>{

  constructor(http: HttpClient, messageService: MessageService) {
    super(http, messageService);
  }

  getRestApiUrl(): string {
    return "http://localhost:8080/classes";
  }
}
