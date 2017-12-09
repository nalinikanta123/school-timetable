import {StudentService} from "../service/student.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {AbstractService} from "./abstract-service";
import {Student} from "../entity/student";
import {AbstractEntity} from "./abstract-entity";

export class AbstractDetailComponent<T extends AbstractEntity, S extends AbstractService<T>> {

  item : T;

  constructor(private route: ActivatedRoute,
              private service: S,
              private location: Location) {
  }

  ngOnInit() {
    this.loadById();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.service.addOrUpdate(this.item)
      .subscribe(() => this.goBack());
  }

  loadById() : void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id != 0) {
      this.service.getById(id).subscribe(student => this.item = student)
    } else {
       this.item = Object.create(AbstractEntity);
    }
  }
}
