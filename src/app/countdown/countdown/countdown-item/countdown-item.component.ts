import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  QueryList,
  Renderer2,
  SimpleChanges,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'app-countdown-item',
  templateUrl: './countdown-item.component.html',
  styleUrls: ['./countdown-item.component.scss']
})
export class CountdownItemComponent implements OnChanges {
  @Input() title: string;
  @Input() ten: number;
  @Input() one: number;
  @ViewChildren('flipCard') flipCard: QueryList<ElementRef<HTMLDivElement>>;

  constructor(private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['ten'] || changes['one']) {
      this.allFlip();
    }
  }

  allFlip() {
    this.flipCard?.forEach((el, index) => {
      switch (index) {
        case 0:
          this.flip(el.nativeElement, this.ten);
          break;
        case 1:
          this.flip(el.nativeElement, this.one);
          break;
      }
    })
  }

  flip(flipCard: HTMLDivElement, newNumber: number) {
    const topHalf = flipCard.querySelector('.top');
    const startNumber = parseInt(topHalf!.textContent!);

    if (newNumber === startNumber) return;

    const bottomHalf = flipCard.querySelector('.bottom');

    const topFlip = document.createElement('div');
    this.renderer.addClass(topFlip, 'top-flip');

    const bottomFlip = document.createElement('div');
    this.renderer.addClass(bottomFlip, 'bottom-flip');

    topHalf!.textContent = String(startNumber);
    bottomHalf!.textContent = String(startNumber);

    topFlip!.textContent = String(startNumber);
    bottomFlip!.textContent = String(newNumber);

    topFlip.addEventListener('animationstart', e => {
      topHalf!.textContent = String(newNumber)
    });

    topFlip.addEventListener('animationend', () => {
      topFlip.remove();
    });

    bottomFlip.addEventListener('animationend', () => {
      bottomHalf!.textContent = String(newNumber);
      bottomFlip.remove();
    });

    flipCard.dataset['currentNumber'] = String(startNumber);
    flipCard.dataset['nextNumber'] = String(newNumber);
    flipCard.append(topFlip, bottomFlip);
  }
}
