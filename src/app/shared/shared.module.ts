import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';

import { SharedRoutingModule } from './shared-routing.module';

const materialModules = [
  MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatDividerModule, MatCheckboxModule,
  MatCardModule, MatSnackBarModule, MatRadioModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    [...materialModules]

  ],
  exports: [
    CommonModule,
    FormsModule,
    QuillModule,
    ReactiveFormsModule,
    [...materialModules]

  ]
})
export class SharedModule { }
