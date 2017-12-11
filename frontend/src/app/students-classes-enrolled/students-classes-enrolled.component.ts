import {Component} from '@angular/core';
import {AbstractMasterComponent} from "../abstract/abstract-master-component";
import {ActivatedRoute} from "@angular/router";
import {StudentEnrollmentService} from "../service/student-enrollment.service";
import {Enrollment} from "../entity/enrollment";

@Component({
  selector: 'app-students-classes-enrolled',
  templateUrl: './students-classes-enrolled.component.html',
  styleUrls: ['./students-classes-enrolled.component.css']
})
export class StudentsClassesEnrolledComponent extends AbstractMasterComponent<Enrollment, StudentEnrollmentService> {


  constructor(private route: ActivatedRoute, service: StudentEnrollmentService) {
    super(service);
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.findEnrollmentsByClassId(id).subscribe(items => this.items = items);
  }
}
