import {MessageService} from "../service/message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {AbstractEntity} from "./abstract-entity";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

export class AbstractService<T extends AbstractEntity> {

  getRestApiUrl(): string {
    throw new Error('You have to implement the method getRestApiUrl!');
  }

  constructor(private http: HttpClient, private messageService: MessageService) {
  }


  getAll(): Observable<T[]> {
    this.log('StudentService: fetched students');
    return this.http.get<T[]>(this.getRestApiUrl());
  }

  getById(id: number): Observable<T> {
    this.log(`StudentService: fetched student id=${id}`);
    const url = `${this.getRestApiUrl()}/${id}`;
    return this.http.get<T>(url)
  }

  addOrUpdate(student: T): Observable<T> {
    console.log(student);
    return this.http.post<T>(this.getRestApiUrl(), student, httpOptions).pipe(
      tap(_ => this.log(`added student id=${student.id}`)),
      catchError(this.handleError<any>('addOrUpdateStudent'))
    );
  }

  delete(student: T): Observable<T> {
    const id = typeof student === 'number' ? student : student.id;
    const url = `${this.getRestApiUrl()}/${id}`;
    console.log(url);
    return this.http.delete<T>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted student id=${id}`)),
      catchError(this.handleError<any>('deleteStudent'))
    );
  }

  private log(message: string) {
    this.messageService.add('StudentService: ' + message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
