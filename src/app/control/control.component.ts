import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ILanguage, LanguageEnum } from '../models/lang.model';
import { TranslateService } from '@ngx-translate/core';
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
  selectedLang: ILanguage;
  langs: ILanguage[] = [
    { value: LanguageEnum.Kz, name: 'kz' },
    { value: LanguageEnum.Ru, name: 'ru' },
  ];

  constructor(
    private translateService: TranslateService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getFirstLang();
  }

  ngOnInit() {
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

  getFirstLang() {
    const lang =
      this.translateService.currentLang ?? this.translateService.defaultLang;

    switch (lang) {
      case 'kz':
        this.selectedLang = { value: LanguageEnum.Kz, name: lang };
        break;
      case 'ru':
        this.selectedLang = { value: LanguageEnum.Ru, name: lang };
    }
  }

  onSelectLang(lang: ILanguage) {
    this.selectedLang = lang;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        lang: lang.name,
      },
      queryParamsHandling: 'merge',
    });
  }

  openLangMenu(menu: HTMLUListElement) {
    menu.style.display = 'block';
  }

  closeLangMenu(menu: HTMLUListElement) {
    menu.style.display = 'none';
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
}
