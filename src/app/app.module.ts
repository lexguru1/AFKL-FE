import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FindTripComponent } from './components/find-trip/find-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FindTripComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
