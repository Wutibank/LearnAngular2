import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private _http:Http) { }

  getProduct(){
    return this._http.get('https://api.github.com/gists/public')
    .map(data => data.json());
  }

}
