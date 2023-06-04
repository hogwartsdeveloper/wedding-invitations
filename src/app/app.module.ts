import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountdownModule } from './countdown/countdown.module';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';
import { ControlComponent } from './control/control.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, ControlComponent],
  imports: [
    BrowserModule,
    CountdownModule,
    QuestionnaireModule,
    MatButtonModule,
    MatIconModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
