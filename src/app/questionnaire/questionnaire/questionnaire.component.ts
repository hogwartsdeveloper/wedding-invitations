import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuestionnaireService } from '../questionnaire.service';
import { take } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private questionnaireService: QuestionnaireService,
    private toastService: ToastrService
  ) {}

  onSend() {
    this.questionnaireService
      .send(this.form.getRawValue())
      .pipe(take(1))
      .subscribe(
        () => {
          this.form.reset();
          this.toastService.success('Жіберілді');
        },
        (res: any) => {
          if (res?.status === 200) {
            this.form.reset();
            this.toastService.success('Жіберілді');
          }
        }
      );
  }
}
