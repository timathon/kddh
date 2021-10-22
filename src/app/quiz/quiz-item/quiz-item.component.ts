import { Component, Input, OnInit, EventEmitter, ChangeDetectionStrategy, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-item',
  templateUrl: './quiz-item.component.html',
  styleUrls: ['./quiz-item.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizItemComponent implements OnInit {
  quizItem2: any;
  @Input() quizStatus!: any;
  @Input() currentItemId!: any;
  @Output() checking = new EventEmitter();
  @Output() goNext = new EventEmitter();
  @Output() goFinish = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // this.quizItem2 = this.quizStatus.quizItems$.getValue()[this.currentItemId];
    // console.log(this.currentItemId);
  }
  
  ngOnChanges() {
    this.quizItem2 = this.quizStatus.quizItems$.getValue()[this.currentItemId];
  }

  checkIfFinished() {
    const currentItemId = this.quizStatus.currentItemId$.getValue();
    const quizLength = this.quizStatus.quizItems$.getValue().length;
    const checked = this.quizItem2.checked;
    const finished = checked && (currentItemId + 1 == quizLength);
    return finished;
  }

}
