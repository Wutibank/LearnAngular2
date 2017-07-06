import { Component } from '@angular/core';
import {HelloComponent} from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appComponent Started';
  datame = 'DataData';
  textValue = '';

  person : any;
  constructor(){
    this.person = [
      {id : 123,name : 'wuti'}
    ]

    console.log(this.person);
  }


  ClickMe(txt){
    console.log("Clicked"+txt.value);
  }
  ChangeText(txt){
    this.textValue= txt;
  }
}
