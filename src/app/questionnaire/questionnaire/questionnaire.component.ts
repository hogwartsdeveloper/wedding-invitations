import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  UntypedFormArray,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { QuestionnaireService } from '../questionnaire.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    come: new FormControl(null, Validators.required),
  });

  constructor(private questionnaireService: QuestionnaireService) {}

  onSend() {
    console.log(this.form);
    this.questionnaireService
      .send(this.form.getRawValue())
      .pipe(take(1))
      .subscribe((res) => console.log(res));
  }
}
