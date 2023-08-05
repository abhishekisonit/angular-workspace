import { Component } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
})
export class LoggerComponent {
  title = 'app-logger';
  logs: string[] = [];
  count: number = 0;

  isVisible: boolean = true;

  onClickButton() {
    this.isVisible = !this.isVisible;
    this.count++;

    let currentDate: Date = new Date();

    if (this.count > 4) {
      document.getElementById('log-item')?.classList.add('bg-info');
    }

    this.logs.push(currentDate + 'clicked time: ' + this.count);
  }
}
