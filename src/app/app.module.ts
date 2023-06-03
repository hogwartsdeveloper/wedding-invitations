import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CountdownModule} from "./countdown/countdown.module";
import {QuestionnaireModule} from "./questionnaire/questionnaire.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        CountdownModule,
        QuestionnaireModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
