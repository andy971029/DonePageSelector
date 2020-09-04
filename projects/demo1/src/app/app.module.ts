import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonePageSelectorModule } from 'done-page-selector';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DonePageSelectorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
