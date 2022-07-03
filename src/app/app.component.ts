import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courses-app';

  currentUserName = 'Dove (mock)';

  getUserName(): string {
    return this.currentUserName;
  }
}
