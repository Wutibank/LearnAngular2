import { Component } from '@angular/core';
import {HelloComponent} from './hello/hello.component';
import {ProductService} from "./services/product.service";
import {ServiceObservableService} from "./services/service-observable.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ProductService,ServiceObservableService]


})
export class AppComponent {
  title = 'appComponent Started';
  datame = 'DataData';
  textValue = '';

  person : any;

getdataProduct : string;
getDataObservable : string[];



  constructor(private _productservice : ProductService, private _service_observable : ServiceObservableService){
    this.person = [
      {id : 123,name : 'wuti'}
    ]
    console.log(this.person);

    this.getProduct();
    this.getProductObservable();
  }


  ClickMe(txt){
    console.log("Clicked"+txt.value);
  }
  ChangeText(txt){
    this.textValue= txt;
  }

  getProduct(){
    this._productservice.getProduct().subscribe(
      (data) => this.getdataProduct = data,
      (error) => alert(error),
      () => console.log("async completed!")
    );
  }

  getProductObservable(){
    this._service_observable.getProductObservable().subscribe(
      (data) => this.getDataObservable = data,
      (error) => alert(error),
      () => console.log('async data observable success!!')
    )
  }
}
