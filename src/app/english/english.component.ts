import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data/data.service';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.scss']
})
export class EnglishComponent implements OnInit {
  quizListz1$ = this.data.getListz1('english');
  constructor(private data: DataService) { }

  ngOnInit(): void {
  }

}
