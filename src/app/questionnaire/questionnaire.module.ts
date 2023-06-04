import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionnaireService } from './questionnaire.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [QuestionnaireComponent],
  exports: [QuestionnaireComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
  ],
  providers: [QuestionnaireService],
})
export class QuestionnaireModule {}
