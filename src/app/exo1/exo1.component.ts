import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exo1',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule
  ],
  templateUrl: './exo1.component.html',
  styleUrl: './exo1.component.css'
})
export class Exo1Component {
  name: string = '';
  selectedFont: string = "'Times New Roman', Times, serif";
  size: string = '60';
  textAlignment: string = 'center';

  applyStyles() {
    return {
      'font-family': this.selectedFont,
      'font-size': this.size + 'px',
      'text-align': this.textAlignment
    };
  }
}
