import {OnInit} from "@angular/core";
import {AbstractService} from "./abstract-service";
import {AbstractEntity} from "./abstract-entity";

export class AbstractMasterComponent<T extends AbstractEntity, S extends AbstractService<T>> implements OnInit {

  items: T[];

  constructor(private _service: S) {
  }

  get service(): S {
    return this._service;
  }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this._service.getAll().subscribe(items => this.items = items);
  }

  delete(item: T): void {
    this.items = this.items.filter(h => h !== item);
    this._service.delete(item).subscribe();
  }
}
