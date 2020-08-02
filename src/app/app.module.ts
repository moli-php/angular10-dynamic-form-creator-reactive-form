import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { ParentChildModule } from './modules/parent-child/parent-child.module';
import { HeroesModule } from './modules/heroes/heroes.module';
import { DummiesModule } from './modules/dummies/dummies.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ParentChildModule,
    HeroesModule,
    DummiesModule
  ],
  providers: [
    //{provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
