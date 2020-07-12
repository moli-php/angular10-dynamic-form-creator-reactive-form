import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { ParentChildModule } from './modules/parent-child/parent-child.module';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParentChildModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
