import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathRoutingModule } from './math-routing.module';
import { MathComponent } from './math.component';
import { SimpleMathComponent } from './simple-math/simple-math.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MathComponent,
    SimpleMathComponent
  ],
  imports: [
    CommonModule,
    MathRoutingModule,
    SharedModule
  ]
})
export class MathModule { }
