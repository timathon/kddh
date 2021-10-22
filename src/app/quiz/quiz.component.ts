import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService } from '../shared/data/data.service';
import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

interface QuizStatus {
  quizList$?: Observable<any>,
  quizSelected$: BehaviorSubject<any>,
  isStarted$: BehaviorSubject<boolean>,
  quizItems$: BehaviorSubject<any[]>,
  currentItemId$: BehaviorSubject<number>,
  currentItem$: BehaviorSubject<any>,
  currentAnswer$: BehaviorSubject<string>
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  @Input() quizList$!: Observable<any[]>;
  quizStatus!: QuizStatus;
  subs_: {[keys: string]: Subscription} = {};
  constructor(private data: DataService) {
    this.quizStatus = {
      // quizList$: new BehaviorSubject([] as any[]),
      quizSelected$: new BehaviorSubject(null),
      isStarted$: new BehaviorSubject(false as boolean),
      quizItems$: new BehaviorSubject([] as any[]),
      currentItemId$: new BehaviorSubject(0),
      currentItem$: new BehaviorSubject(''),
      currentAnswer$: new BehaviorSubject('')
    }
  }

  ngOnInit(): void {
    this.quizStatus.quizList$ = this.quizList$;
    const sub0_ = this.quizStatus.isStarted$.subscribe((isStarted) => {
      if (isStarted) {
        this.init();
        this.startQuiz(this.quizStatus.quizSelected$.getValue())
      }
    });
    this.subs_['sub0_'] = sub0_;
  }

  init() {
    const quizId = this.quizStatus.quizSelected$.getValue();
    // const quizItems = this.data.getQuizz(quizId)
    //   .map(item => ({
    //     ...item, answer: '',
    //     checked: false,
    //     correct: null
    //   }))
    //   .sort(function (a, b) { return 0.5 - Math.random() });;
    // this.quizStatus.quizItems$.next(quizItems);

    if (this.subs_['sub1_']) {
      this.subs_['sub1_'].unsubscribe();
    }
    const sub1_ = this.data.getQuizz(quizId)
      .pipe(tap((items) => {
        return items
          .map((item: any) => ({
            ...item, answer: '',
            checked: false,
            correct: null
          }))
          .sort(function (a: any, b: any) { return 0.5 - Math.random() })
      }))
      .subscribe(this.quizStatus.quizItems$);

    this.subs_['sub1_'] = sub1_;

    this.quizStatus = {
      ...this.quizStatus,
      quizItems$: new BehaviorSubject([] as any[]),
      currentItemId$: new BehaviorSubject(0),
      currentItem$: new BehaviorSubject(''),
      currentAnswer$: new BehaviorSubject('')
    }
  }

  // init() {
  //   this.quizStatus = {
  //     quizList$: new BehaviorSubject(this.quizList),
  //     quizSelected$: new BehaviorSubject(null),
  //     isStarted$: new BehaviorSubject(false as boolean),
  //     quizItems$: new BehaviorSubject([] as any[]),
  //     currentItemId$: new BehaviorSubject(0),
  //     currentItem$: new BehaviorSubject(''),
  //     currentAnswer$: new BehaviorSubject('')
  //   }
  // }

  startQuiz(quizId: any) {
    const quizItems = this.data.getQuiz(quizId)
      .map(item => ({
        ...item, answer: '',
        checked: false,
        correct: null
      }))
      .sort(function (a, b) { return 0.5 - Math.random() });;
    this.quizStatus.quizItems$.next(quizItems);
  }

  onCheck(event: any) {
    let result = false;
    const currentItem = this.quizStatus.quizItems$.getValue()[this.quizStatus.currentItemId$.getValue()];
    const currentAnswer = this.quizStatus.currentAnswer$.getValue();
    switch (currentItem.type) {
      case 'senScr':
        result = (currentItem.content === currentAnswer);
        break;
      default:
        result = (currentItem.key === currentAnswer);
    }
    currentItem.answer = currentAnswer;
    currentItem.checked = true;
    currentItem.correct = result;
    return result;
  }

  onNext() {
    const oldId = this.quizStatus.currentItemId$.getValue();
    this.quizStatus.currentItemId$.next(oldId + 1);
    console.log(this.quizStatus.currentItemId$.getValue())
  }

  onFinish() {
    this.quizStatus.isStarted$.next(false)
  }

}
