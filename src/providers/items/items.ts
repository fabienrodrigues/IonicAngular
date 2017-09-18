import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Item } from '../../models/item';

@Injectable()
export class Items {

  constructor(public http: Http) {
  }

  /*query(params?: any) {
    return this.api.get('/items', params)
      .map(resp => resp.json());
  }*/

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
