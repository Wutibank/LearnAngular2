import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {

  constructor(private http: Http) { }

getItemAll(){
  return this.http.get('https://api.github.com/gists/public')
  .map( data => data.json());
}


getItem(pid){
  return this.http.get('https://api.github.com/gists/public?id='+pid)
  .map( res => res.json());
}
}
