import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import {ReactiveFormsModule} from "@angular/forms";
import {QuestionnaireService} from "./questionnaire.service";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    QuestionnaireComponent
  ],
  exports: [
    QuestionnaireComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [QuestionnaireService]
})
export class QuestionnaireModule { }
