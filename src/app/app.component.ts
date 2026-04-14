import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const targets = this.host.nativeElement.querySelectorAll(
      '.reveal-on-view, .reveal'
    );
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    targets.forEach((el) => this.observer!.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}