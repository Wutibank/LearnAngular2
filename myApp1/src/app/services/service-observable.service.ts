import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ServiceObservableService {

  constructor(private _http : Http) { }

getProductObservable():Observable<any>{
  return this._http.get('https://api.github.com/gists/public')
  .map( (res:Response) => res.json())
  .catch( (error:any) => Observable.throw(error.json().error || 'Server Error!'))
}
}
