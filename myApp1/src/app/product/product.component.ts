import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
params : string;
  constructor(private route : ActivatedRoute,private router : Router) { 
    this.params = route.snapshot.params['id'];
  }

  ngOnInit() {

  }
  gotoContact(){
    this.router.navigate(['contact']);
  }

}
