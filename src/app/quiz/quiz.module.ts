import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { QuizComponent } from './quiz.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizItemComponent } from './quiz-item/quiz-item.component';
import { QuizItemSenscrComponent } from './quiz-item/quiz-item-senscr/quiz-item-senscr.component';
import { QuizListEnglishComponent } from './quiz-list/quiz-list-english/quiz-list-english.component';



@NgModule({
  declarations: [
    QuizComponent,
    QuizListComponent,
    QuizItemComponent,
    QuizItemSenscrComponent,
    QuizListEnglishComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    QuizComponent
  ]
})
export class QuizModule { }
