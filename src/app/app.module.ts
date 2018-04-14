import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ContactListModule} from "./contact-list/contact-list.module";
import {routing} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    ContactListModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
