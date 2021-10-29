import { Component, OnInit, OnDestroy, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';


@Component({
  selector: 'app-quiz-list-english',
  templateUrl: './quiz-list-english.component.html',
  styleUrls: ['./quiz-list-english.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizListEnglishComponent implements OnInit, OnDestroy {
  @Input() list!: any;
  // @Input() isStarted!: boolean | null;
  @Input() quizSelected$!: BehaviorSubject<any>;
  quizSelected: FormGroup;
  // sub0_: Subscription;
  sub1_?: Subscription;
  sub2_?: Subscription;
  sub3_?: Subscription;
  books: string[] = [];
  modules: string[] = [];
  quizes: any[] = [];
  previousQuizSelectedFormValue: any = {};
  constructor(private fb: FormBuilder) {
    // get last selected quiz from localStorage

    this.quizSelected = this.fb.group({
      book: ['', Validators.required],
      module: ['', Validators.required],
      quiz: ['', Validators.required]
    });
    this.quizSelected.disable();
    this.sub1_ = this.quizSelected.get('book')?.valueChanges.subscribe(book => {
      console.log({book})
      if (book) {
        this.quizSelected.get('module')?.enable();
        this.modules = Object.keys(this.list[book]);
        this.quizSelected.get('module')?.setValue('');
      } else {
        this.quizSelected.get('module')?.disable();
        this.modules = [];
      }
      this.previousQuizSelectedFormValue['book'] = book;
    });

    this.sub2_ = this.quizSelected.get('module')?.valueChanges.subscribe(modulex => {
      if (modulex) {
        this.quizSelected.get('quiz')?.enable();
        // console.log(this.quizSelected.get('book')?.value);
        // console.log(this.list[this.quizSelected.get('book')?.value]);
        this.quizes = this.list[this.quizSelected.get('book')?.value][modulex];
        this.quizSelected.get('quiz')?.setValue('');
      } else {
        this.quizSelected.get('quiz')?.disable();
        this.quizes = [];
      }
      this.previousQuizSelectedFormValue['modulex'] = modulex;

    })

    this.sub3_ = this.quizSelected.get('quiz')?.valueChanges.subscribe(quizx => {
      if (quizx) {
        this.quizSelected$.next(quizx);
      } else {
        this.quizSelected$.next(null);
      }
      this.previousQuizSelectedFormValue['quizx'] = quizx;

    })


    // this.sub0_ = this.quizSelected.valueChanges
    //   // .pipe(startWith({}))
    //   .subscribe(value => {
    //     if (value['book']) {
    //       this.modules = Object.keys(this.list[value['book']]);
    //       // this.quizSelected.get('module')?.setValue('', {emitEvent: false})
    //     } else {
    //       this.modules = [];
    //     }
    //     if (value['module']) {
    //       this.quizes = this.list[value['book']][value['module']];
    //     } else {
    //       this.quizes = [];
    //     }
    //     if (value['quiz'] && this.quizSelected$) {
    //       this.quizSelected$.next(value['quiz']);
    //     }
    //     this.previousQuizSelectedFormValue = value;
    //   });

  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.list) {
      this.books = Object.keys(this.list);
      this.quizSelected.get('book')?.enable();
    }

    // console.log(this.books);
  }



  ngOnDestroy() {
    this.sub1_?.unsubscribe();
    this.sub2_?.unsubscribe();
    this.sub3_?.unsubscribe();
  }

}
