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
import {CourseService} from "./service/course.service";
import {ClassesService} from "./service/classes.service";
import {ClassesDetailComponent} from './classes-detail/classes-detail.component';
import {StudentTimetableComponent} from './student-timetable/student-timetable.component';
import {StudentEnrollmentComponent} from './student-enrollment/student-enrollment.component';
import {StudentEnrollmentService} from "./service/student-enrollment.service";
import {StudentsClassesEnrolledComponent} from './students-classes-enrolled/students-classes-enrolled.component';
import {StudentClassesEnrolledListComponent} from './student-classes-enrolled-list/student-classes-enrolled-list.component';
import {FreeTimeComponent} from './free-time/free-time.component';
import {TimetablesComponent} from './timetables/timetables.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailComponent,
    MessagesComponent,
    CoursesComponent,
    CoursesDetailComponent,
    ClassesComponent,
    ClassesDetailComponent,
    StudentTimetableComponent,
    StudentEnrollmentComponent,
    StudentsClassesEnrolledComponent,
    StudentClassesEnrolledListComponent,
    FreeTimeComponent,
    TimetablesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StudentEnrollmentService, ClassesService, CourseService, StudentService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
