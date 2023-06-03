import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownItemComponent } from './countdown/countdown-item/countdown-item.component';
import { CountdownComponent } from './countdown/countdown.component';



@NgModule({
  declarations: [
    CountdownItemComponent,
    CountdownComponent
  ],
  exports: [
    CountdownComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountdownModule { }
