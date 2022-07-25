import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'courses-app';

  currentUserName = 'Dove (mock)';

  getUserName(): string {
    return this.currentUserName;
  }
}
