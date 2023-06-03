import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl, ɵFormGroupRawValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable()
export class QuestionnaireService {

  constructor(private http: HttpClient) {}

  send(data: ɵTypedOrUntyped<{
    name: FormControl<string | null>;
    come: FormControl<boolean | null>
  }, ɵFormGroupRawValue<{ name: FormControl<string | null>; come: FormControl<boolean | null> }>, any>) {
    return this.http.post('https://postmail.invotes.com/send', {
      subject: data.name,
      text: data.come,
      "access_token": "3yfevk9cu6zxyzt42qjqqgk6"
    });
  }
}
