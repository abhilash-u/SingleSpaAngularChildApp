import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { PublisherComponent } from './publisher/publisher.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    PublisherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }