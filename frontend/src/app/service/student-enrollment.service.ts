import {Injectable} from '@angular/core';
import {AbstractService} from "../abstract/abstract-service";
import {Enrollment} from "../entity/enrollment";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "./message.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class StudentEnrollmentService extends AbstractService<Enrollment> {
  constructor(http: HttpClient, messageService: MessageService) {
    super(http, messageService);
  }

  getRestApiUrl(): string {
    return 'http://localhost:8080/enrollment';
  }

  getEnrollmentsByStudentId(id: number): Observable<Enrollment[]> {
    return this.getAll(); //todo missing right implementation
  }

  findEnrollmentsByClassId(id: number): Observable<Enrollment[]> {
    const url = `${this.getRestApiUrl()}/classes/${id}`;
    return this._http.get<Enrollment[]>(url)
  }
}
