import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import englishList from './english/list.json';
import { map } from 'rxjs/operators';

export type SubjectX = 'english' | 'math';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getLista() {
    const url = 'https://api.github.com/repos/timathon/quizes/contents/english/list.json';
    return this.http.get(url, {
      headers: {
        'Authorization': 'token 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',
        'Accept': 'application/vnd.github.v4.raw'
      }
    })
  }

  getListz(subjectX: SubjectX) {
    const url = `https://gitee.com/api/v5/repos/timliu2117/quizez/contents/${subjectX}/list.json`;
    return this.http.get(url)
      .pipe(
        map((data: any) => {
          // console.log({ data });
          // console.log(Object.keys(data))
          return (JSON.parse(decodeURIComponent(escape(atob(data.content)))) as any[])
            .map(item => ({
              ...item,
              type: this.getTypeName(item.type)
            }))
        }));
  }

  getQuizz(quizId: string) {
    let subjectX;
    switch (true) {
      case quizId[0] === 'e':
        subjectX = 'english';
        break;
      default:
    }
    const url = `https://gitee.com/api/v5/repos/timliu2117/quizez/contents/${subjectX}/${quizId}.json`;
    return this.http.get(url)
    .pipe(
      map((data: any) => {
        // console.log({ data });
        // console.log(Object.keys(data))
        return JSON.parse(decodeURIComponent(escape(atob(data.content))));
      }));
  }

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
    const quizDetails: { [key: string]: any[] } = {
      "e01": [{
        "id": "e01-01",
        "type": "senScr",
        "content": "What is your name?"
      }],
      "e02": [{
        "id": "e02-01",
        "type": "senScr",
        "content": "I'm going to the supermarket this Saturday afternoon.",
        "noise": "is"
      },
      {
        "id": "e02-01",
        "type": "senScr",
        "content": "Sam is watching TV."
      }]
    }

    if (Object.keys(quizDetails).indexOf(quizId) > -1) {
      return quizDetails[quizId];
    } else {
      throw ('quiz not found');
    }

  }

  getTypeName(type: string) {
    switch (type) {
      case 'senScr':
        return '连词成句';
      default:
        return '无';
    }
  }
}
