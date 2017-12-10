import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StudentsComponent} from "./students/students.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";
import {CoursesDetailComponent} from "./course-detail/courses-detail.component";
import {CoursesComponent} from "./courses/courses.component";
import {ClassesComponent} from "./classes/classes.component";
import {ClassesDetailComponent} from "./classes-detail/classes-detail.component";
import {StudentTimetableComponent} from "./student-timetable/student-timetable.component";


const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  {path: 'students', component: StudentsComponent},
  {path: 'student-timetable/:id', component: StudentTimetableComponent},
  {path: 'student-detail/:id', component: StudentDetailComponent},
  {path: 'student-detail', component: StudentDetailComponent},
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
