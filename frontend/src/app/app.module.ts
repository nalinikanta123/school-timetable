import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {StudentsComponent} from './students/students.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentService} from "./service/student.service";
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './service/message.service';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {CoursesComponent} from './courses/courses.component';
import {CoursesDetailComponent} from './course-detail/courses-detail.component';
import {ClassesComponent} from './classes/classes.component';
import {ClassDetailComponent} from './class-detail/class-detail.component';
import {CourseService} from "./service/course.service";
import {ClassesService} from "./service/classes.service";


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailComponent,
    MessagesComponent,
    CoursesComponent,
    CoursesDetailComponent,
    ClassesComponent,
    ClassDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ClassesService, CourseService, StudentService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
