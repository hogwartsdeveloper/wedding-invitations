import {AfterViewInit, Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements AfterViewInit, OnDestroy {
  interval: any;
  times: {
    title: string;
    ten: number;
    one: number
  }[] = [
    {
      title: 'Days',
      ten: 0,
      one: 0
    },
    {
      title: 'Hours',
      ten: 0,
      one: 0
    },
    {
      title: 'Minutes',
      ten: 0,
      one: 0
    },
    {
      title: 'Seconds',
      ten: 0,
      one: 0
    },
  ]

  ngAfterViewInit() {
    const countToDate = new Date('2023-08-04 19:00:00');
    let previousTimeBetweenDates: number;

    this.interval = setInterval(() => {
      const currentDate = new Date();
      const timeBetweenDates = Math.ceil((countToDate.getTime() - currentDate.getTime()) / 1000);
      if (timeBetweenDates > 0) {
        this.flipAllCards(timeBetweenDates);
      }

      previousTimeBetweenDates = timeBetweenDates;
    }, 250)
  }

  flipAllCards(time: number) {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor((time / 3600) % 24);
    const days = Math.floor(time / (3600 * 24));

    this.times.forEach(time => {
      switch (time.title) {
        case 'Days':
          time.ten = Math.floor(days / 10);
          time.one = days % 10;
          break;
        case 'Hours':
          time.ten = Math.floor(hours / 10);
          time.one = hours % 10;
          break;
        case 'Minutes':
          time.ten = Math.floor(minutes / 10);
          time.one = minutes % 10;
          break;
        case 'Seconds':
          time.ten = Math.floor(seconds / 10);
          time.one = seconds % 10;
      }
    });
  }

  ngOnDestroy() {
    clearInterval(this.interval)
  }
}
