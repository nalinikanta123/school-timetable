import {OnInit} from "@angular/core";
import {Student} from "../entity/student";
import {StudentService} from "../service/student.service";
import {AbstractService} from "./abstract-service";
import {AbstractEntity} from "./abstract-entity";

export class AbstractMasterComponent<T extends AbstractEntity, S extends AbstractService<T>> implements OnInit {

  items: T[];

  constructor(private service: S) {
  }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.service.getAll().subscribe(items => this.items = items);
  }

  delete(item: T): void {
    this.items = this.items.filter(h => h !== item);
    this.service.delete(item).subscribe();
  }
}
