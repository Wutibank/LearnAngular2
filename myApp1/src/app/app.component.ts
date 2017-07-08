import { Component } from '@angular/core';
import {HelloComponent} from './hello/hello.component';
import {ProductService} from "./services/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ProductService]


})
export class AppComponent {
  title = 'appComponent Started';
  datame = 'DataData';
  textValue = '';

  person : any;

getdataProduct : string;



  constructor(private _productservice : ProductService){
    this.person = [
      {id : 123,name : 'wuti'}
    ]
    console.log(this.person);

    this.getProduct();
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
}
