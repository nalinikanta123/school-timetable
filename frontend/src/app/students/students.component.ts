import {Component} from '@angular/core';
import {Student} from "../entity/student";
import {StudentService} from "../service/student.service";
import {AbstractMasterComponent} from "../abstract/abstract-master-component";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent extends AbstractMasterComponent<Student, StudentService> {
  constructor(service: StudentService) {
    super(service);
  }


  ngOnInit(): void {
    super.ngOnInit();
  }


  delete(item: Student): void {
    this.service.delete(item).subscribe(cb => {if (cb === null) {this.items = this.items.filter(h => h !== item); item.isActive = false; this.items.push(item);this.onItemDeleted(cb)}});

  }
}
