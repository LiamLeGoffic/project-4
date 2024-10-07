import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exo2',
  standalone: true,
  imports: [
    RouterOutlet,
    FormsModule,
    CommonModule
  ],
  templateUrl: './exo2.component.html',
  styleUrl: './exo2.component.css'
})
export class Exo2Component {
  operation: string = '+';
  number1: string = '1';
  number2: string = '1';
  result: string = '';
  history: string[] = [];

  constructor() {
  }

  compute() {
    switch (this.operation) {
      case '+':
        this.result = (Number(this.number1) + Number(this.number2)).toString();
        break;
      case '-':
        this.result = (Number(this.number1) - Number(this.number2)).toString();
        break;
      case '*':
        this.result = (Number(this.number1) * Number(this.number2)).toString();
        break;
      case '/':
        this.result = (Number(this.number1) / Number(this.number2)).toString();
        break;
    }
    this.history.push(new Date().toLocaleTimeString() + ' : ' + this.number1 + ' ' + this.operation + ' ' + this.number2 + ' = ' + this.result);
  }

  deleteHistoryLine(historyLine: string) {
    console.log(this.history.indexOf(historyLine));
    this.history.splice(this.history.indexOf(historyLine), 1);
  }

}
