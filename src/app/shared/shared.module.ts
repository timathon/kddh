import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';
// import { QuillModule } from 'ngx-quill';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';

import { SharedRoutingModule } from './shared-routing.module';

const materialModules = [
  MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatDividerModule, MatCheckboxModule,
  MatCardModule, MatSnackBarModule, MatRadioModule, MatListModule, DragDropModule, MatGridListModule,
  MatSelectModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedRoutingModule,
    FormsModule,
    FlexModule,
    // QuillModule.forRoot(),
    ReactiveFormsModule,
    [...materialModules]

  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexModule,
    // QuillModule,
    ReactiveFormsModule,
    [...materialModules]

  ]
})
export class SharedModule { }
