import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Options {
  method: 'add' | 'sub' | 'multiply' | 'devide'
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
  action$ = new BehaviorSubject(false);
  constructor() { }

  ngOnInit(): void {
    this.action$.subscribe(isStarted => {
      if (isStarted) {
        this.onCheck(null, this.options);
      }
    })
  }

  onCheck(e: any, options: Options) {
    // const numberA = Math.round(Math.random() * 10);
    // const numberB = Math.round(Math.random() * 10);
    let numberA, numberB, sign: string = '', answer: number = 0;
    switch (options.method) {
      case 'add':
        sign = '➕';
        numberA = Math.round(Math.random() * 10);
        numberB = Math.round(Math.random() * 10);
        answer = numberA + numberB;
        break;
      case 'sub':
        sign = '➖';
        numberA = Math.round(Math.random() * 20);
        numberB = Math.round(Math.random() * numberA);
        answer = numberA - numberB;
        break;
      case 'multiply':
        sign = '✖️';
        numberA = Math.round(Math.random() * 9);
        numberB = Math.round(Math.random() * 9);
        answer = numberA * numberB;
        break;
      case 'devide':
        sign = '➗';
        numberB = Math.round(Math.random() * 8) + 1;
        answer = Math.round(Math.random() * 8) + 1;
        numberA = answer * numberB;
        break;
      default:
        numberA = 0;
        numberB = 0;
    }
    this.currentQuestion = {
      numberA, numberB, sign, answer
    }

    // get answer and print on screen
    console.log(e);
  }



}
