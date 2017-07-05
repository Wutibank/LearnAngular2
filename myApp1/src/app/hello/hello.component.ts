import { Component, OnInit } from '@angular/core';
import {SayComponent} from '../say/say.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  entryComponents : [SayComponent]
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
