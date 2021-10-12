import { NgModule } from '@angular/core';
import { QuizModule } from '../quiz/quiz.module';
import { SharedModule } from '../shared/shared.module';

import { EnglishRoutingModule } from './english-routing.module';
import { EnglishComponent } from './english.component';


@NgModule({
  declarations: [
    EnglishComponent
  ],
  imports: [
    EnglishRoutingModule,
    SharedModule,
    QuizModule
  ]
})
export class EnglishModule { }
