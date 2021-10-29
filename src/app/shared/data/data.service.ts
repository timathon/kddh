import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import englishList from './english/list.json';
import { map } from 'rxjs/operators';

export type SubjectX = 'english' | 'math';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }



  getListz1(subjectX: SubjectX) {
    // const url = `https://gitee.com/api/v5/repos/timliu2117/quizez/contents/${subjectX}/list1.json`;
    const url1 = `https://1586863340063318.cn-zhangjiakou.fc.aliyuncs.com/2016-08-15/proxy/kddh/quiz/books`;
    this.http.get(url1).subscribe(console.log);

    const url = `https://1586863340063318.cn-zhangjiakou.fc.aliyuncs.com/2016-08-15/proxy/kddh/quiz/lists?subject=${subjectX}`;

    return this.http.get(url)
    // return this.http.get(url)
    //   .pipe(
    //     map((data: any) => {
    //       // console.log({ data });
    //       // console.log(Object.keys(data))
    //       console.log(JSON.parse(decodeURIComponent(escape(atob(data.content)))))
    //       return (JSON.parse(decodeURIComponent(escape(atob(data.content)))))
    //     }));
  }

  getQuizz(quizId: string) {
    let subjectX;
    switch (true) {
      case quizId[0] === 'e':
        subjectX = 'english';
        break;
      default:
    }
    // const url = `https://gitee.com/api/v5/repos/timliu2117/quizez/contents/${subjectX}/${quizId}.json`;
    const url = `https://1586863340063318.cn-zhangjiakou.fc.aliyuncs.com/2016-08-15/proxy/kddh/quiz/quizes?subject=${subjectX}&quizId=${quizId}`
    // const url = `http://localhost:8000/2016-08-15/proxy/kddh/quiz/quizes?subject=${subjectX}&quizId=${quizId}`
    return this.http.get(url)
    .pipe(
      map((data: any) => {
        // console.log({ data });
        // console.log(Object.keys(data))
        // return JSON.parse(decodeURIComponent(escape(atob(data.content))));
        return data;
      }));
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
