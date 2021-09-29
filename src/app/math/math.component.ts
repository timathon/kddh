import { Component, OnInit } from '@angular/core';

interface Options {
  method: 'add' | 'sub'
}

interface Question {
  numberA: number;
  numberB: number;
  sign: string;
  answer: number;
}

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})

export class MathComponent implements OnInit {
  options: Options = {
    method: 'add'
  }
  currentQuestion: Question | null = null;
  constructor() { }

  ngOnInit(): void {
    this.onCheck(null, this.options);
  }

  onCheck(e: any, options: Options) {
    const numberA = Math.round(Math.random() * 10);
    const numberB = Math.round(Math.random() * 10);
    let sign: string = '', answer: number = 0;
    switch (options.method) {
      case 'add':
        sign = '+';
        answer = numberA + numberB;
        break;
      default:
    }
    this.currentQuestion = {
      numberA, numberB, sign, answer
    }

    // get answer and print on screen
    console.log(e);
  }



}
