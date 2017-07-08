import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { SayComponent } from './say/say.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import {routing} from './app.routes';
import { ContactComponent } from './contact/contact.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SayComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
