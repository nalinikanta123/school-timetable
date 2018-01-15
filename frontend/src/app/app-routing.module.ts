import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StudentsComponent} from "./students/students.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";
import {CoursesDetailComponent} from "./course-detail/courses-detail.component";
import {CoursesComponent} from "./courses/courses.component";
import {ClassesComponent} from "./classes/classes.component";
import {ClassesDetailComponent} from "./classes-detail/classes-detail.component";
import {StudentTimetableComponent} from "./student-timetable/student-timetable.component";
import {StudentsClassesEnrolledComponent} from "./students-classes-enrolled/students-classes-enrolled.component";
import {StudentClassesEnrolledListComponent} from "./student-classes-enrolled-list/student-classes-enrolled-list.component";
import {FreeTimeComponent} from "./free-time/free-time.component";
import {TimetablesComponent} from "./timetables/timetables.component";


const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  {path: 'students', component: StudentsComponent},
  {path: 'students/classes/:id', component: StudentsClassesEnrolledComponent},
  {path: 'student/enrolled/:id', component: StudentClassesEnrolledListComponent},
  {path: 'student-timetable/:id', component: StudentTimetableComponent},
  {path: 'student-detail/:id', component: StudentDetailComponent},
  {path: 'student-detail', component: StudentDetailComponent},
  {path: 'free-time', component: FreeTimeComponent},
  {path: 'timetables', component: TimetablesComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'course-detail/:id', component: CoursesDetailComponent},
  {path: 'course-detail', component: CoursesDetailComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'classes-detail/:id', component: ClassesDetailComponent},
  {path: 'classes-detail', component: ClassesDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
