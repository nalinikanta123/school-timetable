import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {AbstractService} from "./abstract-service";
import {AbstractEntity} from "./abstract-entity";

export class AbstractDetailComponent<T extends AbstractEntity, S extends AbstractService<T>> {

  private _item: T;

  constructor(private route: ActivatedRoute,
              private _service: S,
              private location: Location) {
  }


  get item(): T {
    return this._item;
  }

  get service(): S {
    return this._service;
  }

  ngOnInit() {
    this.loadById();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this._service.addOrUpdate(this._item).subscribe(cb => {if (cb !== null) {this.goBack()}});
  }

  loadById(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id != 0) {
      console.log("Load entity with id: " + id);
      this._service.getById(id).subscribe(student => this._item = student)
    } else {
      console.log("Create empty abstract entity");
      this._item = Object.create(AbstractEntity);
    }
  }
}
