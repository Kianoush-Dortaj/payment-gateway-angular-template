import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
   CommonModule,
   BrowserAnimationsModule
  ],

  providers: [
    DatePipe
],
  bootstrap: [AppComponent]
})
export class AppModule { }
