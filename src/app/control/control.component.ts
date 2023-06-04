import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent implements OnInit {
  @ViewChild('audio', { static: true }) audio: ElementRef<HTMLAudioElement>;

  sound = false;
  currPage = 1;
  maxPage = 6;

  @HostListener('document:scroll', ['$event'])
  listenScroll() {
    this.getScroll();
  }

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getFirstMusic();
    this.getScroll();
  }

  getScroll() {
    this.currPage =
      Math.round(document.documentElement.scrollTop / window.innerHeight) + 1;
  }

  getFirstMusic() {
    const audioPlay = localStorage.getItem('audio');
    if (audioPlay === 'play') {
      this.audio.nativeElement
        .play()
        .then(() => {
          this.sound = true;
        })
        .catch(() => {
          this.sound = false;
        });
    }
    this.audio.nativeElement.volume = 0.7;
  }

  onSound() {
    this.sound = !this.sound;

    if (this.sound) {
      this.audio.nativeElement.play();
      localStorage.setItem('audio', 'play');
      return;
    }

    this.audio.nativeElement.pause();
    localStorage.setItem('audio', 'pause');
  }

  onScroll() {
    const el = document.querySelector('#main')!.children.item(this.currPage);
    el?.scrollIntoView({ behavior: 'smooth' });
    this.currPage = this.currPage === this.maxPage ? 1 : ++this.currPage;

    let top;
    switch (this.currPage) {
      case 1:
        top = 0;
        break;
      case this.maxPage:
        top = window.innerHeight * this.maxPage;
        break;
    }

    if (top || top === 0) {
      window.scroll({
        top,
        left: 0,
        behavior: 'smooth',
      });
    }
  }
}
