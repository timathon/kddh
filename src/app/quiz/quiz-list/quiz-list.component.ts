import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizListComponent implements OnInit {
  @Input() quizStatus!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
