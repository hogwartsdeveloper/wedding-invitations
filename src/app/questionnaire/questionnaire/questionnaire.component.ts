import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, UntypedFormArray, UntypedFormBuilder} from "@angular/forms";
import {QuestionnaireService} from "../questionnaire.service";
import {take} from "rxjs";

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent {
  form = new FormGroup({
    name: new FormControl(''),
    come: new FormControl(false)
  });

  constructor(private questionnaireService: QuestionnaireService) {}

  onSend() {
    console.log(this.form);
    this.questionnaireService.send(this.form.getRawValue()).pipe(take(1)).subscribe(res => console.log(res));
  }
}
