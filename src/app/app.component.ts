import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  destroy$ = new Subject();

  constructor(
    private translateService: TranslateService,
    private route: ActivatedRoute
  ) {
    this.translateService.setDefaultLang('kz');
    this.listenLang();
  }

  listenLang() {
    this.route.queryParamMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((param) => {
        if (param.has('lang')) {
          const language = param.get('lang');
          if (language?.includes('ru')) {
            this.translateService.use('ru');
            return;
          }

          this.translateService.use('kz');
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
