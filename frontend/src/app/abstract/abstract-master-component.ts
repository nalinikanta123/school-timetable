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
    this._service.getAll().subscribe(items => {this.items = items; this.onItemsLoaded(items)});
  }

  public onItemsLoaded(items: T[]) {

  }

  delete(item: T): void {
    this._service.delete(item).subscribe(cb => {if (cb === null) {this.items = this.items.filter(h => h !== item); this.onItemDeleted(cb)}});
  }

  public onItemDeleted(item: T) {

  }
}
