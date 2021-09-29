import { Component, ElementRef, EventEmitter, Input, OnInit, AfterViewInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-simple-math',
  templateUrl: './simple-math.component.html',
  styleUrls: ['./simple-math.component.scss']
})
export class SimpleMathComponent implements OnInit, AfterViewInit {
  @Input() question: any;
  @Output() check = new EventEmitter();
  @ViewChild('answer') answerElement!: ElementRef;
  editorForm: FormGroup;
  questionForm: FormGroup;
  answer = '';
  constructor(private _snackBar: MatSnackBar) {
    this.editorForm = new FormGroup({
      'editor': new FormControl()
    });
    this.questionForm = new FormGroup({
      'answer': new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    this.answerElement.nativeElement.focus();
  }
  

  onCheck() {
    const answerCtrl = this.questionForm.get('answer');
    console.log(answerCtrl?.value);
    const isCorrect = answerCtrl?.value == this.question.answer;
    this.check.emit(isCorrect);
    if (isCorrect) {
      this._snackBar.open('✔️', '', {
        duration: 1000,
        verticalPosition: 'top',
        panelClass: 'feedbackbar'
      });
      (new Audio('assets/sounds/correct.mp3')).play();
    } else {
      this._snackBar.open('❌', '', {
        duration: 1000,
        verticalPosition: 'top',
        panelClass: 'feedbackbar'
      });
      (new Audio('assets/sounds/wrong.mp3')).play();
    }
    answerCtrl?.setValue('');
    this.answerElement.nativeElement.focus();
  }

  onSubmit(e: any) {
    const editorValue = this.editorForm.get('editor')?.value;
    console.log(editorValue);
  }

}
