import { Component } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
})
export class LoggerComponent {
  title = 'app-logger';

  isVisible: boolean = true;

  onClickButton() {
    this.isVisible = !this.isVisible;

    
  }
}
