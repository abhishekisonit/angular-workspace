import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent {
  username: string = '';

  isUsername() {
    if (this.username == '') return true;
    return false;
  }

  onClickReset() {
    this.username = '';
  }
}
