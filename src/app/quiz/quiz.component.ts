import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../shared/data/data.service';

interface QuizStatus {
  quizList$: BehaviorSubject<any[]>,
  quizSelected$: BehaviorSubject<any>,
  isStarted$: BehaviorSubject<boolean>,
  quizItems$: BehaviorSubject<any[]>,
  currentItemId$: BehaviorSubject<number>,
  currentItem$: BehaviorSubject<any>,
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  @Input() quizList!: any[];
  quizStatus: QuizStatus = {
    quizList$: new BehaviorSubject([] as any[]),
    quizSelected$: new BehaviorSubject(null),
    isStarted$: new BehaviorSubject(false as boolean),
    quizItems$: new BehaviorSubject([] as any[]),
    currentItemId$: new BehaviorSubject(0),
    currentItem$: new BehaviorSubject(''),
  }
  constructor(private data: DataService) { 
  }
  
  ngOnInit(): void {
    this.quizStatus.quizList$.next(this.quizList);
    this.quizStatus.isStarted$.subscribe((isStarted) => {
      if (isStarted) {
        this.startQuiz(this.quizStatus.quizSelected$.getValue())
      }
    })
  }

  startQuiz(quizId: any) {
    const quizItems = this.data.getQuiz(quizId);
    this.quizStatus.quizItems$.next(quizItems);
    this.quizStatus.currentItem$.next(quizItems[0]);
  }

}
