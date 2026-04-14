import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeKk from '@angular/common/locales/kk';

import { AppComponent } from './app.component';
import { CountdownModule } from './countdown/countdown.module';
import { QuestionnaireModule } from './questionnaire/questionnaire.module';
import { ControlComponent } from './control/control.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';

registerLocaleData(localeKk);

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
        MatDatepickerModule,
      MatNativeDateModule
    ],
  providers: [
    { provide: LOCALE_ID, useValue: 'kk-KZ' },
    { provide: MAT_DATE_LOCALE, useValue: 'kk-KZ' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
