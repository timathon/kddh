import { Injectable } from '@angular/core';
import englishList from './english/list.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList(subject: string) {
    let list: any[] = [];
    switch (subject) {
      case 'english':
        list = englishList;
        break;
      default:

    }
    return list;

  }

  getQuiz(quizId: string) {
    const quizDetails: any = {
      "e01": [{
        "id": "e01-01",
        "type": "SenScr",
        "content": "What is your name?"
      }],
      "e02": [{
        "id": "e02-01",
        "type": "SenScr",
        "content": "Sam is watching TV."
      }]
    }

    if (Object.keys(quizDetails).indexOf(quizId) > -1) {
      return quizDetails[quizId];
    } else {
      throw ('quiz not found');
    }

  }
}
