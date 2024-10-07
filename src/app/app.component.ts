import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ExosAngular';
  time: string = '';
  date: string = '';

  constructor() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
    setInterval(() => {
      this.date = new Date().toLocaleDateString();
    }, 1000);
  }
}
