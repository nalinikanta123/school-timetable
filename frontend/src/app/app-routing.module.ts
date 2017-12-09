import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StudentsComponent} from "./students/students.component";
import {StudentDetailComponent} from "./student-detail/student-detail.component";
import {CoursesDetailComponent} from "./course-detail/courses-detail.component";
import {CoursesComponent} from "./courses/courses.component";
import {ClassesComponent} from "./classes/classes.component";
import {ClassDetailComponent} from "./class-detail/class-detail.component";


const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  {path: 'students', component: StudentsComponent},
  {path: 'student-detail/:id', component: StudentDetailComponent},
  {path: 'student-detail', component: StudentDetailComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'course-detail/:id', component: CoursesDetailComponent},
  {path: 'course-detail', component: CoursesDetailComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'class-detail/:id', component: ClassDetailComponent},
  {path: 'class-detail', component: ClassDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
