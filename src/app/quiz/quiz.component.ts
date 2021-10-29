import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataService } from '../shared/data/data.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

interface QuizStatus {
  subject: string;
  quizList1$?: Observable<any>,
  quizSelected$: BehaviorSubject<any>,
  isStarted$: BehaviorSubject<boolean>,
  quizItems$: BehaviorSubject<any[]>,
  currentItemId$: BehaviorSubject<number>,
  currentItem$: BehaviorSubject<any>,
  currentAnswer$: BehaviorSubject<string>,
  quizItems2: any[]
}

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnDestroy {
  @Input() quizList1$!: Observable<any>;
  @Input() subject!: string;
  quizStatus!: QuizStatus;
  subs_: { [keys: string]: Subscription } = {};
  currentQuizItem: any;
  constructor(private data: DataService) {
    this.quizStatus = {
      // quizList$: new BehaviorSubject([] as any[]),
      subject: '',
      quizSelected$: new BehaviorSubject(null),
      isStarted$: new BehaviorSubject(false as boolean),
      quizItems$: new BehaviorSubject([] as any[]),
      quizItems2: [],
      currentItemId$: new BehaviorSubject(0),
      currentItem$: new BehaviorSubject(''),
      currentAnswer$: new BehaviorSubject('')
    }
  }

  ngOnInit(): void {
    this.quizStatus.quizList1$ = this.quizList1$;
    this.quizStatus.subject = this.subject;
    const sub0_ = this.quizStatus.isStarted$.subscribe((isStarted) => {
      if (isStarted) {
        this.init();
        // this.startQuiz(this.quizStatus.quizSelected$.getValue())
      }
    });
    this.subs_['sub0_'] = sub0_;
  }

  init() {
    const quizId = this.quizStatus.quizSelected$.getValue();
    // console.log({quizId})
    // const quizItems = this.data.getQuizz(quizId)
    //   .map(item => ({
    //     ...item, answer: '',
    //     checked: false,
    //     correct: null
    //   }))
    //   .sort(function (a, b) { return 0.5 - Math.random() });;
    // this.quizStatus.quizItems$.next(quizItems);

    this.quizStatus = {
      ...this.quizStatus,
      quizItems$: new BehaviorSubject([] as any[]),
      currentItemId$: new BehaviorSubject(0),
      currentItem$: new BehaviorSubject(''),
      currentAnswer$: new BehaviorSubject('')
    }

    if (this.subs_['sub1_']) {
      this.subs_['sub1_'].unsubscribe();
    }
    const sub1_ = this.data.getQuizz(quizId)
      .pipe(map((items) => {
        console.log(items);
        const items2 = items
          .map((item: any) => ({
            ...item, answer: '',
            checked: false,
            correct: null
          }))
          .sort(function (a: any, b: any) { return 0.5 - Math.random() })
        this.quizStatus.quizItems2 = items2;
        return items2;
      }),
        switchMap((items2) => {
          return this.quizStatus.currentItemId$
            .pipe(map(id => {
              return items2[id];
            }))
        })
      )
      .subscribe(currentItem => {
        this.currentQuizItem = currentItem;
      });

    this.subs_['sub1_'] = sub1_;




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


  onCheck(event: any) {
    let result = false;
    const currentItem = this.currentQuizItem;
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

  ngOnDestroy() {
    Object.keys(this.subs_).forEach(key => {
      this.subs_[key].unsubscribe();
    })
  }
}
