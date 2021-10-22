import { Component, Input, OnInit } from '@angular/core';
import { CdkDragEnter, CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-quiz-item-senscr',
  templateUrl: './quiz-item-senscr.component.html',
  styleUrls: ['./quiz-item-senscr.component.scss']
})
export class QuizItemSenscrComponent implements OnInit {
  quizItem2: any;
  @Input() quizStatus!: any;
  @Input() currentItemId!: any;

  blocks!: any[];
  // answerBlocks = [] as string[];
  answerSentence: string = '';

  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnChanges() {
    this.quizItem2 = this.quizStatus.quizItems$.getValue()[this.quizStatus.currentItemId$.getValue()];
    console.log({
      q2: this.quizItem2
    })
    this.blocks = this.prepareBlocks(this.quizItem2.content, this.quizItem2.noise);
    this.answerSentence = this.formSenence(this.blocks);
  }

  prepareBlocks(sentence: string, noise?: string) {
    const elements = sentence.split(/(?=\.|\?|,)| /);
    let noiseELements: string[] = [];
    if (noise) {
      noiseELements = noise.split(/(?=\.|\?|,)| /);
    }
    return [...elements, ...noiseELements].map(word => ([word, true])).sort(function (a, b) { return 0.5 - Math.random() });
  }

  // drop(event: CdkDragDrop<number[]> | any) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   }
  //   console.log({
  //     event: event,
  //     blocks: this.blocks,
  //     answerBlocks: this.answerBlocks
  //   })
  // }

  entered(event: CdkDragEnter) {
    moveItemInArray(this.blocks, event.item.data, event.container.data);
    this.answerSentence = this.formSenence(this.blocks);
  }

  formSenence(blocks: any[]) {
    const theSentence = blocks.filter(item => item[1]).map(item => item[0]).join(' ').replace(/ (\.|,|\?)/, '$1');
    setTimeout(() => {
      this.quizStatus.currentAnswer$.next(theSentence);
    }, 0)
    return theSentence;
  }

  onButtonClick(index: any) {
    console.log('click', index);
    this.blocks[index][1] = !this.blocks[index][1];
    this.answerSentence = this.formSenence(this.blocks);
  }


}
