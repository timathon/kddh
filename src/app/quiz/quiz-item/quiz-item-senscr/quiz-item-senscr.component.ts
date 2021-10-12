import { Component, Input, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-quiz-item-senscr',
  templateUrl: './quiz-item-senscr.component.html',
  styleUrls: ['./quiz-item-senscr.component.scss']
})
export class QuizItemSenscrComponent implements OnInit {
  @Input() quizItem!: any;
  blocks!: string[];
  answerBlocks = [] as string[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.quizItem);
    this.blocks = this.prepareBlocks(this.quizItem.content);
  }

  prepareBlocks(sentence: string) {
    const elements = sentence.split(/(?=\.|\?|,)| /).sort(function(a, b){return 0.5 - Math.random()});
    return elements;
  }

  drop(event: CdkDragDrop<number[]> | any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
