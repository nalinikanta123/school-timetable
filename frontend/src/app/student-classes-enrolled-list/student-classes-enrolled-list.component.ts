import {Component} from '@angular/core';
import {AbstractMasterComponent} from "../abstract/abstract-master-component";
import {Enrollment} from "../entity/enrollment";
import {StudentEnrollmentService} from "../service/student-enrollment.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-student-classes-enrolled-list',
  templateUrl: './student-classes-enrolled-list.component.html',
  styleUrls: ['./student-classes-enrolled-list.component.css']
})
export class StudentClassesEnrolledListComponent extends AbstractMasterComponent<Enrollment, StudentEnrollmentService> {
  constructor(private route: ActivatedRoute, service: StudentEnrollmentService) {
    super(service);
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.findEnrollmentsByStudentId(id).subscribe(items => this.items = items);
  }

  enrollmentUpdated(enrollment: Enrollment): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.findEnrollmentsByStudentId(id).subscribe(items => this.items = items);
  }
}
