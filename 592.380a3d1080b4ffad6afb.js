(self.webpackChunkkddh=self.webpackChunkkddh||[]).push([[592],{1592:(t,e,i)=>{"use strict";i.r(e),i.d(e,{EnglishModule:()=>E});var n=i(1221),s=i(5366);let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.m]]}),t})();var c=i(3337),o=i(9996);const r=JSON.parse('[{"id":"e01","name":"A4A-M01-senScr","title":"A4A-M01-\u8fde\u8bcd\u6210\u53e5"},{"id":"e02","name":"A4A-M02-senScr","title":"A4A-M02-\u8fde\u8bcd\u6210\u53e5"}]');var a=i(2693);let l=(()=>{class t{constructor(t){this.http=t}getLista(){return this.http.get("https://api.github.com/repos/timathon/quizes/contents/english/list.json",{headers:{Authorization:"token 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",Accept:"application/vnd.github.v4.raw"}})}getListz(t){return this.http.get(`https://gitee.com/api/v5/repos/timliu2117/quizez/contents/${t}/list.json`,{headers:{Authorization:"token a6ef267b6e6d1a8cdd8f7a086b190542"}}).pipe((0,o.U)(t=>JSON.parse(decodeURIComponent(escape(atob(t.content)))).map(t=>Object.assign(Object.assign({},t),{type:this.getTypeName(t.type)}))))}getListz1(t){return this.http.get(`https://gitee.com/api/v5/repos/timliu2117/quizez/contents/${t}/list1.json`,{headers:{Authorization:"token a6ef267b6e6d1a8cdd8f7a086b190542"}}).pipe((0,o.U)(t=>JSON.parse(decodeURIComponent(escape(atob(t.content))))))}getQuizz(t){let e;switch(!0){case"e"===t[0]:e="english"}return this.http.get(`https://gitee.com/api/v5/repos/timliu2117/quizez/contents/${e}/${t}.json`,{headers:{Authorization:"token a6ef267b6e6d1a8cdd8f7a086b190542"}}).pipe((0,o.U)(t=>JSON.parse(decodeURIComponent(escape(atob(t.content))))))}getList(t){let e=[];switch(t){case"english":e=r}return e}getQuiz(t){const e={e01:[{id:"e01-01",type:"senScr",content:"What is your name?"}],e02:[{id:"e02-01",type:"senScr",content:"I'm going to the supermarket this Saturday afternoon.",noise:"is"},{id:"e02-01",type:"senScr",content:"Sam is watching TV."}]};if(Object.keys(e).indexOf(t)>-1)return e[t];throw"quiz not found"}getTypeName(t){switch(t){case"senScr":return"\u8fde\u8bcd\u6210\u53e5";default:return"\u65e0"}}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(a.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=i(8512),p=i(4689),h=i(2797),m=i(1116),g=i(1041),z=i(3070),f=i(3841),q=i(7064);function b(t,e){if(1&t&&(s.TgZ(0,"mat-option",6),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.Q6J("value",t),s.xp6(1),s.hij(" ",t," ")}}function x(t,e){if(1&t&&(s.TgZ(0,"mat-option",6),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.Q6J("value",t),s.xp6(1),s.hij(" ",t," ")}}function I(t,e){if(1&t&&(s.TgZ(0,"mat-option",6),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.Q6J("value",t.id),s.xp6(1),s.hij(" ",t.type," ")}}let S=(()=>{class t{constructor(t){var e,i,n;this.fb=t,this.books=[],this.modules=[],this.quizes=[],this.previousQuizSelectedFormValue={},this.quizSelected=this.fb.group({book:["",g.kI.required],module:["",g.kI.required],quiz:["",g.kI.required]}),this.quizSelected.disable(),this.sub1_=null===(e=this.quizSelected.get("book"))||void 0===e?void 0:e.valueChanges.subscribe(t=>{var e,i,n;console.log({book:t}),t?(null===(e=this.quizSelected.get("module"))||void 0===e||e.enable(),this.modules=Object.keys(this.list[t]),null===(i=this.quizSelected.get("module"))||void 0===i||i.setValue("")):(null===(n=this.quizSelected.get("module"))||void 0===n||n.disable(),this.modules=[]),this.previousQuizSelectedFormValue.book=t}),this.sub2_=null===(i=this.quizSelected.get("module"))||void 0===i?void 0:i.valueChanges.subscribe(t=>{var e,i,n,s;t?(null===(e=this.quizSelected.get("quiz"))||void 0===e||e.enable(),this.quizes=this.list[null===(i=this.quizSelected.get("book"))||void 0===i?void 0:i.value][t],null===(n=this.quizSelected.get("quiz"))||void 0===n||n.setValue("")):(null===(s=this.quizSelected.get("quiz"))||void 0===s||s.disable(),this.quizes=[]),this.previousQuizSelectedFormValue.modulex=t}),this.sub3_=null===(n=this.quizSelected.get("quiz"))||void 0===n?void 0:n.valueChanges.subscribe(t=>{this.quizSelected$.next(t||null),this.previousQuizSelectedFormValue.quizx=t})}ngOnInit(){}ngOnChanges(){var t;this.list&&(this.books=Object.keys(this.list),null===(t=this.quizSelected.get("book"))||void 0===t||t.enable())}ngOnDestroy(){var t,e,i;null===(t=this.sub1_)||void 0===t||t.unsubscribe(),null===(e=this.sub2_)||void 0===e||e.unsubscribe(),null===(i=this.sub3_)||void 0===i||i.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(g.qu))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-quiz-list-english"]],inputs:{list:"list",quizSelected$:"quizSelected$"},features:[s.TTD],decls:20,vars:4,consts:[[3,"formGroup"],[2,"width","20vw"],["formControlName","book"],[3,"value",4,"ngFor","ngForOf"],["formControlName","module"],["formControlName","quiz"],[3,"value"]],template:function(t,e){1&t&&(s.TgZ(0,"form",0),s.TgZ(1,"mat-form-field",1),s.TgZ(2,"mat-label"),s._uU(3,"\u6559\u6750"),s.qZA(),s.TgZ(4,"mat-select",2),s.YNc(5,b,2,2,"mat-option",3),s.qZA(),s.qZA(),s.TgZ(6,"span"),s._uU(7,"\xa0"),s.qZA(),s.TgZ(8,"mat-form-field",1),s.TgZ(9,"mat-label"),s._uU(10,"\u6a21\u5757"),s.qZA(),s.TgZ(11,"mat-select",4),s.YNc(12,x,2,2,"mat-option",3),s.qZA(),s.qZA(),s.TgZ(13,"span"),s._uU(14,"\xa0"),s.qZA(),s.TgZ(15,"mat-form-field",1),s.TgZ(16,"mat-label"),s._uU(17,"\u6d4b\u8bd5"),s.qZA(),s.TgZ(18,"mat-select",5),s.YNc(19,I,2,2,"mat-option",3),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.Q6J("formGroup",e.quizSelected),s.xp6(5),s.Q6J("ngForOf",e.books),s.xp6(7),s.Q6J("ngForOf",e.modules),s.xp6(7),s.Q6J("ngForOf",e.quizes))},directives:[g._Y,g.JL,g.sg,z.KE,z.hX,f.gD,g.JJ,g.u,m.sg,q.ey],styles:[""],changeDetection:0}),t})();function k(t,e){if(1&t&&(s._UZ(0,"app-quiz-list-english",1),s.ALo(1,"async")),2&t){const t=s.oxw();s.Q6J("list",s.lcZ(1,2,t.quizStatus.quizList1$))("quizSelected$",t.quizStatus.quizSelected$)}}let Z=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-quiz-list"]],inputs:{quizStatus:"quizStatus"},decls:1,vars:1,consts:[[3,"list","quizSelected$",4,"ngIf"],[3,"list","quizSelected$"]],template:function(t,e){1&t&&s.YNc(0,k,2,4,"app-quiz-list-english",0),2&t&&s.Q6J("ngIf","english"===e.quizStatus.subject)},directives:[m.O5,S],pipes:[m.Ov],styles:[".quiz-list[_ngcontent-%COMP%]{max-height:30vh;overflow-x:auto}.not-started-list[_ngcontent-%COMP%]{min-height:15vh}"]}),t})();var w=i(4369),v=i(6278),$=i(9244),A=i(2309);function Q(t,e){1&t&&s._UZ(0,"div")}function _(t,e){if(1&t&&(s.TgZ(0,"span"),s._uU(1),s.qZA()),2&t){const t=s.oxw().$implicit;s.xp6(1),s.Oqu(t[0])}}function y(t,e){if(1&t&&(s.TgZ(0,"span",8),s._uU(1),s.qZA()),2&t){const t=s.oxw().$implicit;s.xp6(1),s.Oqu(t[0])}}function O(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"mat-grid-tile",2),s.TgZ(1,"div",3),s.NdJ("cdkDragEntered",function(e){return s.CHM(t),s.oxw().entered(e)}),s.YNc(2,Q,1,0,"div",4),s.TgZ(3,"button",5),s.NdJ("click",function(){const e=s.CHM(t).index;return s.oxw().onButtonClick(e)}),s.YNc(4,_,2,1,"span",6),s.YNc(5,y,2,1,"span",7),s.qZA(),s.qZA(),s.qZA()}if(2&t){const t=e.$implicit,i=e.index,n=s.oxw();s.Q6J("cdkDropListData",i)("colspan",5)("rowspan",3),s.xp6(1),s.Q6J("cdkDragData",i),s.xp6(2),s.Q6J("disabled",n.currentQuizItem.checked),s.xp6(1),s.Q6J("ngIf",t[1]),s.xp6(1),s.Q6J("ngIf",!t[1])}}let J=(()=>{class t{constructor(){this.answerSentence=""}ngOnInit(){}ngOnChanges(){this.quizItem2=this.quizStatus.quizItems$.getValue()[this.quizStatus.currentItemId$.getValue()],console.log({q2:this.quizItem2}),this.blocks=this.prepareBlocks(this.currentQuizItem.content,this.currentQuizItem.noise),this.answerSentence=this.formSenence(this.blocks)}prepareBlocks(t,e){const i=t.split(/(?=\.|\?|,)| /);let n=[];return e&&(n=e.split(/(?=\.|\?|,)| /)),[...i,...n].map(t=>[t,!0]).sort(function(t,e){return.5-Math.random()})}entered(t){(0,$.bA)(this.blocks,t.item.data,t.container.data),this.answerSentence=this.formSenence(this.blocks)}formSenence(t){const e=t.filter(t=>t[1]).map(t=>t[0]).join(" ").replace(/ (\.|,|\?)/,"$1");return setTimeout(()=>{this.quizStatus.currentAnswer$.next(e)},0),e}onButtonClick(t){console.log("click",t),this.blocks[t][1]=!this.blocks[t][1],this.answerSentence=this.formSenence(this.blocks)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-quiz-item-senscr"]],inputs:{currentQuizItem:"currentQuizItem",quizStatus:"quizStatus",currentItemId:"currentItemId"},features:[s.TTD],decls:2,vars:2,consts:[["cdkDropListGroup","","cols","20",2,"max-width","30em","margin-bottom","1em",3,"cdkDropListGroupDisabled"],["cdkDropList","",3,"cdkDropListData","colspan","rowspan",4,"ngFor","ngForOf"],["cdkDropList","",3,"cdkDropListData","colspan","rowspan"],["cdkDrag","",3,"cdkDragData","cdkDragEntered"],[4,"cdkDragPlaceholder"],["mat-raised-button","",1,"example-button",3,"disabled","click"],[4,"ngIf"],["class","deleted",4,"ngIf"],[1,"deleted"]],template:function(t,e){1&t&&(s.TgZ(0,"mat-grid-list",0),s.YNc(1,O,6,7,"mat-grid-tile",1),s.qZA()),2&t&&(s.Q6J("cdkDropListGroupDisabled",e.currentQuizItem.checked),s.xp6(1),s.Q6J("ngForOf",e.blocks))},directives:[A.Il,$.Fd,m.sg,A.DX,$.Wj,$.Zt,$.Hk,w.lW,m.O5],styles:[".example-list1[_ngcontent-%COMP%]{max-width:100%;border:1px solid #ccc;min-height:60px;flex-wrap:wrap;border-radius:4px;overflow:hidden}.example-box1[_ngcontent-%COMP%], .example-list1[_ngcontent-%COMP%]{display:flex;flex-direction:row;background:#fff}.example-box1[_ngcontent-%COMP%]{padding:20px 10px;border:1px solid #ccc;color:#000000de;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;font-size:1em;font-weight:700;flex-basis:0}.example-list[_ngcontent-%COMP%]{width:1000px;max-width:100%;border:1px solid #ccc;min-height:60px;display:flex;overflow-x:scroll;flex-wrap:wrap;background:#fff;border-radius:4px}.example-box[_ngcontent-%COMP%]{padding:20px 10px;border:1px solid #ccc;color:#000000de;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;flex-basis:0}.example-box[_ngcontent-%COMP%], .example-button[_ngcontent-%COMP%]{font-size:1em;font-weight:700}.deleted[_ngcontent-%COMP%]{text-decoration:line-through;color:rgba(0,0,0,.274)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.example-custom-placeholder[_ngcontent-%COMP%]{background:#ccc;border:3px dotted #999;display:flex;flex-direction:row;padding:0 10px;align-items:center;justify-content:space-between;flex-basis:0;font-size:1em;font-weight:700}"]}),t})();function C(t,e){if(1&t&&(s._UZ(0,"app-quiz-item-senscr",9),s.ALo(1,"async")),2&t){const t=s.oxw();s.Q6J("currentQuizItem",t.currentQuizItem)("currentItemId",s.lcZ(1,3,t.quizStatus.currentItemId$))("quizStatus",t.quizStatus)}}function T(t,e){if(1&t&&(s.TgZ(0,"button",10),s._uU(1),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Oqu(t.currentQuizItem.correct?"\u2714\ufe0f":"\u274c")}}function N(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"button",11),s.NdJ("click",function(){return s.CHM(t),s.oxw().checking.emit(1)}),s._uU(1,"Check"),s.qZA()}if(2&t){const t=s.oxw();s.Q6J("disabled",t.currentQuizItem.checked)}}function L(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"button",12),s.NdJ("click",function(){return s.CHM(t),s.oxw().goNext.emit()}),s._uU(1,"Next"),s.qZA()}}function j(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"button",13),s.NdJ("click",function(){return s.CHM(t),s.oxw().goFinish.emit()}),s._uU(1,"Finish"),s.qZA()}}const U=function(t){return{visibility:t}};let M=(()=>{class t{constructor(){this.checking=new s.vpe,this.goNext=new s.vpe,this.goFinish=new s.vpe}ngOnInit(){}ngOnChanges(){this.quizItem2=this.quizStatus.quizItems$.getValue()[this.currentItemId]}checkIfFinished(){const t=this.quizStatus.currentItemId$.getValue();return this.currentQuizItem.checked&&t+1==this.quizStatus.quizItems2.length}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-quiz-item"]],inputs:{currentQuizItem:"currentQuizItem",quizStatus:"quizStatus",currentItemId:"currentItemId"},outputs:{checking:"checking",goNext:"goNext",goFinish:"goFinish"},features:[s.TTD],decls:19,vars:12,consts:[[3,"currentQuizItem","currentItemId","quizStatus",4,"ngIf"],[1,"subtitle"],[3,"ngStyle"],[2,"display","flex"],["mat-button","",4,"ngIf"],[2,"flex","1 1 auto"],["mat-stroked-button","","color","primary",3,"disabled","click",4,"ngIf"],["mat-stroked-button","","color","accent",3,"click",4,"ngIf"],["mat-raised-button","","color","accent",3,"click",4,"ngIf"],[3,"currentQuizItem","currentItemId","quizStatus"],["mat-button",""],["mat-stroked-button","","color","primary",3,"disabled","click"],["mat-stroked-button","","color","accent",3,"click"],["mat-raised-button","","color","accent",3,"click"]],template:function(t,e){1&t&&(s.TgZ(0,"mat-card"),s.YNc(1,C,2,5,"app-quiz-item-senscr",0),s._UZ(2,"mat-divider"),s.TgZ(3,"mat-card-subtitle",1),s._uU(4,"MY ANSWER"),s.qZA(),s.TgZ(5,"mat-card-title"),s._uU(6),s.ALo(7,"async"),s.qZA(),s._UZ(8,"mat-divider"),s.TgZ(9,"mat-card-subtitle",1),s._uU(10,"KEY"),s.qZA(),s.TgZ(11,"mat-card-title",2),s._uU(12),s.qZA(),s.TgZ(13,"mat-card-actions",3),s.YNc(14,T,2,1,"button",4),s._UZ(15,"span",5),s.YNc(16,N,2,1,"button",6),s.YNc(17,L,2,0,"button",7),s.YNc(18,j,2,0,"button",8),s.qZA(),s.qZA()),2&t&&(s.xp6(1),s.Q6J("ngIf","senScr"===e.currentQuizItem.type),s.xp6(5),s.hij(" ",s.lcZ(7,8,e.quizStatus.currentAnswer$)," "),s.xp6(5),s.Q6J("ngStyle",s.VKq(10,U,e.currentQuizItem.checked?"inherit":"hidden")),s.xp6(1),s.hij(" ",e.currentQuizItem.content," "),s.xp6(2),s.Q6J("ngIf",e.currentQuizItem.checked),s.xp6(2),s.Q6J("ngIf",!e.currentQuizItem.checked),s.xp6(1),s.Q6J("ngIf",e.currentQuizItem.checked&&!e.checkIfFinished()),s.xp6(1),s.Q6J("ngIf",e.checkIfFinished()))},directives:[h.a8,m.O5,v.d,h.$j,h.n5,m.PC,h.hq,J,w.lW],pipes:[m.Ov],styles:[".subtitle[_ngcontent-%COMP%]{margin-top:2em}"]}),t})();function F(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"button",4),s.NdJ("click",function(){return s.CHM(t),s.oxw().quizStatus.isStarted$.next(!0)}),s.ALo(1,"async"),s._uU(2,"\u5f00\u59cb"),s.qZA()}if(2&t){const t=s.oxw();s.Q6J("disabled",!s.lcZ(1,1,t.quizStatus.quizSelected$))}}function D(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"button",5),s.NdJ("click",function(){return s.CHM(t),s.oxw().quizStatus.isStarted$.next(!1)}),s._uU(1,"\u7ed3\u675f"),s.qZA()}}function Y(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"app-quiz-item",6),s.NdJ("checking",function(e){return s.CHM(t),s.oxw().onCheck(e)})("goNext",function(){return s.CHM(t),s.oxw().onNext()})("goFinish",function(){return s.CHM(t),s.oxw().onFinish()}),s.ALo(1,"async"),s.qZA()}if(2&t){const t=s.oxw();s.Q6J("currentQuizItem",t.currentQuizItem)("currentItemId",s.lcZ(1,3,t.quizStatus.currentItemId$))("quizStatus",t.quizStatus)}}let P=(()=>{class t{constructor(t){this.data=t,this.subs_={},this.quizStatus={subject:"",quizSelected$:new d.X(null),isStarted$:new d.X(!1),quizItems$:new d.X([]),quizItems2:[],currentItemId$:new d.X(0),currentItem$:new d.X(""),currentAnswer$:new d.X("")}}ngOnInit(){this.quizStatus.quizList$=this.quizList$,this.quizStatus.quizList1$=this.quizList1$,this.quizStatus.subject=this.subject;const t=this.quizStatus.isStarted$.subscribe(t=>{t&&this.init()});this.subs_.sub0_=t}init(){const t=this.quizStatus.quizSelected$.getValue();this.quizStatus=Object.assign(Object.assign({},this.quizStatus),{quizItems$:new d.X([]),currentItemId$:new d.X(0),currentItem$:new d.X(""),currentAnswer$:new d.X("")}),this.subs_.sub1_&&this.subs_.sub1_.unsubscribe();const e=this.data.getQuizz(t).pipe((0,o.U)(t=>{console.log(t);const e=t.map(t=>Object.assign(Object.assign({},t),{answer:"",checked:!1,correct:null})).sort(function(t,e){return.5-Math.random()});return this.quizStatus.quizItems2=e,e}),(0,p.w)(t=>this.quizStatus.currentItemId$.pipe((0,o.U)(e=>t[e])))).subscribe(t=>{this.currentQuizItem=t});this.subs_.sub1_=e}startQuiz(t){const e=this.data.getQuiz(t).map(t=>Object.assign(Object.assign({},t),{answer:"",checked:!1,correct:null})).sort(function(t,e){return.5-Math.random()});this.quizStatus.quizItems$.next(e)}onCheck(t){let e=!1;const i=this.currentQuizItem,n=this.quizStatus.currentAnswer$.getValue();switch(i.type){case"senScr":e=i.content===n;break;default:e=i.key===n}return i.answer=n,i.checked=!0,i.correct=e,e}onNext(){const t=this.quizStatus.currentItemId$.getValue();this.quizStatus.currentItemId$.next(t+1),console.log(this.quizStatus.currentItemId$.getValue())}onFinish(){this.quizStatus.isStarted$.next(!1)}ngOnDestroy(){Object.keys(this.subs_).forEach(t=>{this.subs_[t].unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(l))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-quiz"]],inputs:{quizList$:"quizList$",quizList1$:"quizList1$",subject:"subject"},decls:9,vars:10,consts:[[3,"quizStatus"],["mat-raised-button","","color","primary",3,"disabled","click",4,"ngIf"],["mat-raised-button","","color","accent",3,"click",4,"ngIf"],[3,"currentQuizItem","currentItemId","quizStatus","checking","goNext","goFinish",4,"ngIf"],["mat-raised-button","","color","primary",3,"disabled","click"],["mat-raised-button","","color","accent",3,"click"],[3,"currentQuizItem","currentItemId","quizStatus","checking","goNext","goFinish"]],template:function(t,e){1&t&&(s.TgZ(0,"mat-card"),s._UZ(1,"app-quiz-list",0),s.YNc(2,F,3,3,"button",1),s.ALo(3,"async"),s.YNc(4,D,2,0,"button",2),s.ALo(5,"async"),s.qZA(),s.TgZ(6,"mat-card"),s.YNc(7,Y,2,5,"app-quiz-item",3),s.ALo(8,"async"),s.qZA()),2&t&&(s.xp6(1),s.Q6J("quizStatus",e.quizStatus),s.xp6(1),s.Q6J("ngIf",!s.lcZ(3,4,e.quizStatus.isStarted$)),s.xp6(2),s.Q6J("ngIf",s.lcZ(5,6,e.quizStatus.isStarted$)),s.xp6(3),s.Q6J("ngIf",s.lcZ(8,8,e.quizStatus.isStarted$)&&e.currentQuizItem))},directives:[h.a8,Z,m.O5,w.lW,M],pipes:[m.Ov],styles:[""]}),t})();const X=[{path:"",component:(()=>{class t{constructor(t){this.data=t,this.quizList=this.data.getList("english"),this.quizListz$=this.data.getListz("english"),this.quizListz1$=this.data.getListz1("english")}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(l))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-english"]],decls:1,vars:3,consts:[[3,"quizList$","quizList1$","subject"]],template:function(t,e){1&t&&s._UZ(0,"app-quiz",0),2&t&&s.Q6J("quizList$",e.quizListz$)("quizList1$",e.quizListz1$)("subject","english")},directives:[P],styles:[""]}),t})()}];let V=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[c.Bz.forChild(X)],c.Bz]}),t})(),E=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[V,n.m,u]]}),t})()}}]);