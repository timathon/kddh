(self.webpackChunkkddh=self.webpackChunkkddh||[]).push([[4],{1004:(t,e,i)=>{"use strict";i.r(e),i.d(e,{EnglishModule:()=>K});var n=i(9683),s=i(5366);let u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.m]]}),t})();var o=i(3337),c=i(9996),r=i(2693);let a=(()=>{class t{constructor(t){this.http=t}getListz1(t){return this.http.get("https://1586863340063318.cn-zhangjiakou.fc.aliyuncs.com/2016-08-15/proxy/kddh/quiz/books").subscribe(console.log),this.http.get(`https://1586863340063318.cn-zhangjiakou.fc.aliyuncs.com/2016-08-15/proxy/kddh/quiz/lists?subject=${t}`)}getQuizz(t){let e;switch(!0){case"e"===t[0]:e="english"}return this.http.get(`https://1586863340063318.cn-zhangjiakou.fc.aliyuncs.com/2016-08-15/proxy/kddh/quiz/quizes?subject=${e}&quizId=${t}`).pipe((0,c.U)(t=>t))}getTypeName(t){switch(t){case"senScr":return"\u8fde\u8bcd\u6210\u53e5";default:return"\u65e0"}}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(r.eN))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=i(1116),d=i(8512),p=i(4689),m=i(2935),g=i(4369);let h=(()=>{class t{constructor(t,e){this.dialogRef=t,this.data=e}onNoClick(){this.dialogRef.close(!1)}onYesClick(){this.dialogRef.close(!0)}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(m.so),s.Y36(m.WI))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-dialog-yes-no"]],decls:7,vars:2,consts:[["mat-dialog-title",""],["mat-dialog-actions",""],["mat-button","","cdkFocusInitial","",3,"mat-dialog-close"],["mat-button","",3,"mat-dialog-close"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s._uU(1,"\u73b0\u5728\u7ed3\u675f\u6d4b\u8bd5\uff1f"),s.qZA(),s.TgZ(2,"div",1),s.TgZ(3,"button",2),s._uU(4,"\u7ee7\u7eed\u7b54\u9898"),s.qZA(),s.TgZ(5,"button",3),s._uU(6,"\u786e\u8ba4\u7ed3\u675f"),s.qZA(),s.qZA()),2&t&&(s.xp6(3),s.Q6J("mat-dialog-close",!1),s.xp6(2),s.Q6J("mat-dialog-close",!0))},directives:[m.uh,m.H8,g.lW,m.ZT],styles:[""]}),t})();var f=i(2797),b=i(1041),z=i(3070),q=i(3841),x=i(7064);function I(t,e){if(1&t&&(s.TgZ(0,"mat-option",6),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.Q6J("value",t),s.xp6(1),s.hij(" ",t," ")}}function k(t,e){if(1&t&&(s.TgZ(0,"mat-option",6),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.Q6J("value",t),s.xp6(1),s.hij(" ",t," ")}}function Z(t,e){if(1&t&&(s.TgZ(0,"mat-option",6),s._uU(1),s.qZA()),2&t){const t=e.$implicit;s.Q6J("value",t.id),s.xp6(1),s.hij(" ",t.type," ")}}let w=(()=>{class t{constructor(t){var e,i,n;this.fb=t,this.books=[],this.modules=[],this.quizes=[],this.previousQuizSelectedFormValue={},this.quizSelectedForm=this.fb.group({book:["",b.kI.required],module:["",b.kI.required],quiz:["",b.kI.required]}),this.quizSelectedForm.disable(),this.sub1_=null===(e=this.quizSelectedForm.get("book"))||void 0===e?void 0:e.valueChanges.subscribe(t=>{var e,i,n;console.log({book:t}),t?(null===(e=this.quizSelectedForm.get("module"))||void 0===e||e.enable(),this.modules=Object.keys(this.list[t]),null===(i=this.quizSelectedForm.get("module"))||void 0===i||i.setValue("")):(null===(n=this.quizSelectedForm.get("module"))||void 0===n||n.disable(),this.modules=[]),this.previousQuizSelectedFormValue.book=t}),this.sub2_=null===(i=this.quizSelectedForm.get("module"))||void 0===i?void 0:i.valueChanges.subscribe(t=>{var e,i,n,s;t?(null===(e=this.quizSelectedForm.get("quiz"))||void 0===e||e.enable(),this.quizes=this.list[null===(i=this.quizSelectedForm.get("book"))||void 0===i?void 0:i.value][t],null===(n=this.quizSelectedForm.get("quiz"))||void 0===n||n.setValue("")):(null===(s=this.quizSelectedForm.get("quiz"))||void 0===s||s.disable(),this.quizes=[]),this.previousQuizSelectedFormValue.modulex=t}),this.sub3_=null===(n=this.quizSelectedForm.get("quiz"))||void 0===n?void 0:n.valueChanges.subscribe(t=>{this.quizSelected$.next(t||null),this.previousQuizSelectedFormValue.quizx=t})}ngOnInit(){}ngOnChanges(){var t;this.list&&(this.books=Object.keys(this.list),null===(t=this.quizSelectedForm.get("book"))||void 0===t||t.enable())}ngOnDestroy(){var t,e,i;null===(t=this.sub1_)||void 0===t||t.unsubscribe(),null===(e=this.sub2_)||void 0===e||e.unsubscribe(),null===(i=this.sub3_)||void 0===i||i.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(b.qu))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-quiz-list-english"]],inputs:{list:"list",quizSelected$:"quizSelected$"},features:[s.TTD],decls:20,vars:4,consts:[[3,"formGroup"],[2,"width","20vw"],["formControlName","book"],[3,"value",4,"ngFor","ngForOf"],["formControlName","module"],["formControlName","quiz"],[3,"value"]],template:function(t,e){1&t&&(s.TgZ(0,"form",0),s.TgZ(1,"mat-form-field",1),s.TgZ(2,"mat-label"),s._uU(3,"\u6559\u6750"),s.qZA(),s.TgZ(4,"mat-select",2),s.YNc(5,I,2,2,"mat-option",3),s.qZA(),s.qZA(),s.TgZ(6,"span"),s._uU(7,"\xa0"),s.qZA(),s.TgZ(8,"mat-form-field",1),s.TgZ(9,"mat-label"),s._uU(10,"\u6a21\u5757"),s.qZA(),s.TgZ(11,"mat-select",4),s.YNc(12,k,2,2,"mat-option",3),s.qZA(),s.qZA(),s.TgZ(13,"span"),s._uU(14,"\xa0"),s.qZA(),s.TgZ(15,"mat-form-field",1),s.TgZ(16,"mat-label"),s._uU(17,"\u6d4b\u8bd5"),s.qZA(),s.TgZ(18,"mat-select",5),s.YNc(19,Z,2,2,"mat-option",3),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.Q6J("formGroup",e.quizSelectedForm),s.xp6(5),s.Q6J("ngForOf",e.books),s.xp6(7),s.Q6J("ngForOf",e.modules),s.xp6(7),s.Q6J("ngForOf",e.quizes))},directives:[b._Y,b.JL,b.sg,z.KE,z.hX,q.gD,b.JJ,b.u,l.sg,x.ey],styles:[""],changeDetection:0}),t})();function S(t,e){if(1&t&&(s._UZ(0,"app-quiz-list-english",1),s.ALo(1,"async")),2&t){const t=s.oxw();s.Q6J("list",s.lcZ(1,2,t.quizStatus.quizList1$))("quizSelected$",t.quizStatus.quizSelected$)}}let v=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-quiz-list"]],inputs:{quizStatus:"quizStatus"},decls:1,vars:1,consts:[[3,"list","quizSelected$",4,"ngIf"],[3,"list","quizSelected$"]],template:function(t,e){1&t&&s.YNc(0,S,2,4,"app-quiz-list-english",0),2&t&&s.Q6J("ngIf","english"===e.quizStatus.subject)},directives:[l.O5,w],pipes:[l.Ov],styles:[".quiz-list[_ngcontent-%COMP%]{max-height:30vh;overflow-x:auto}.not-started-list[_ngcontent-%COMP%]{min-height:15vh}"]}),t})();var Q=i(6278),_=i(9244),A=i(2309);function y(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"button",7),s.NdJ("click",function(){return s.CHM(t),s.oxw().toggleHint()})("touchstart",function(){return s.CHM(t),s.oxw().onMouseDown()})("mousedown",function(){return s.CHM(t),s.oxw().onMouseDown()})("mouseup",function(){return s.CHM(t),s.oxw().onMouseUp()})("touchend",function(){return s.CHM(t),s.oxw().onMouseUp()}),s._uU(1,"\u63d0\u793a"),s.qZA()}}function $(t,e){if(1&t&&(s.TgZ(0,"button",4),s._uU(1),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Oqu(t.currentQuizItem.hint.content)}}function C(t,e){1&t&&s._UZ(0,"div")}function T(t,e){if(1&t&&(s.TgZ(0,"span"),s._uU(1),s.qZA()),2&t){const t=s.oxw().$implicit;s.xp6(1),s.Oqu(t[0])}}function O(t,e){if(1&t&&(s.TgZ(0,"span",14),s._uU(1),s.qZA()),2&t){const t=s.oxw().$implicit;s.xp6(1),s.Oqu(t[0])}}function F(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"mat-grid-tile",8),s.TgZ(1,"div",9),s.NdJ("cdkDragDropped",function(e){return s.CHM(t),s.oxw().drop(e)}),s.YNc(2,C,1,0,"div",10),s.TgZ(3,"button",11),s.NdJ("click",function(){const e=s.CHM(t).index;return s.oxw().onButtonClick(e)}),s.YNc(4,T,2,1,"span",12),s.YNc(5,O,2,1,"span",13),s.qZA(),s.qZA(),s.qZA()}if(2&t){const t=e.$implicit,i=e.index,n=s.oxw();s.Q6J("cdkDropListData",i)("colspan",5)("rowspan",3),s.xp6(1),s.Q6J("cdkDragData",i),s.xp6(2),s.Q6J("disabled",n.currentQuizItem.checked),s.xp6(1),s.Q6J("ngIf",t[1]),s.xp6(1),s.Q6J("ngIf",!t[1])}}let J=(()=>{class t{constructor(t){this.changeRef=t,this.showHint=!1,this.showHint2=!1,this.answerSentence=""}ngOnInit(){}ngOnChanges(){this.blocks=this.prepareBlocks(this.currentQuizItem.content,this.currentQuizItem.noise),this.answerSentence=this.formSenence(this.blocks)}getNoiseCount(){return this.currentQuizItem.noise?this.currentQuizItem.noise.split(" ").length:0}prepareBlocks(t,e){const i=t.split(/(?=\.$|\?|,|!)| /);let n=[];return e&&(n=e.split(" ")),[...i,...n].map(t=>[t,!0]).sort(function(t,e){return.5-Math.random()})}toggleHint(){this.showHint=!this.showHint}onMouseDown(){this.showHint2=!0,this.changeRef.markForCheck()}onMouseUp(){this.showHint2=!1,this.changeRef.markForCheck()}entered(t){(0,_.bA)(this.blocks,t.item.data,t.container.data),this.answerSentence=this.formSenence(this.blocks)}drop(t){(0,_.bA)(this.blocks,t.item.data,t.container.data),this.answerSentence=this.formSenence(this.blocks)}formSenence(t){const e=t.filter(t=>t[1]).map(t=>t[0]).join(" ").replace(/ (\.|,|\?|!)/g,"$1");return setTimeout(()=>{this.quizStatus.currentAnswer$.next(e)},0),e}onButtonClick(t){console.log("click",t),this.blocks[t][1]=!this.blocks[t][1],this.answerSentence=this.formSenence(this.blocks)}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(s.sBO))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-quiz-item-senscr"]],inputs:{currentQuizItem:"currentQuizItem",quizStatus:"quizStatus",currentItemId:"currentItemId"},features:[s.TTD],decls:9,vars:5,consts:[[2,"padding-bottom","1em","display","flex"],["mat-button","","color","primary",3,"click","touchstart","mousedown","mouseup","touchend",4,"ngIf"],["mat-button","",4,"ngIf"],[2,"flex","1 1 auto"],["mat-button",""],["cdkDropListGroup","","cols","20",1,"drag-boundary",2,"max-width","30em","margin-bottom","1em","margin-top","1em",3,"cdkDropListGroupDisabled"],["cdkDropList","",3,"cdkDropListData","colspan","rowspan",4,"ngFor","ngForOf"],["mat-button","","color","primary",3,"click","touchstart","mousedown","mouseup","touchend"],["cdkDropList","",3,"cdkDropListData","colspan","rowspan"],["cdkDrag","","cdkDragBoundary",".drag-boundary",3,"cdkDragData","cdkDragDropped"],[4,"cdkDragPlaceholder"],["mat-raised-button","",1,"example-button",3,"disabled","click"],[4,"ngIf"],["class","deleted",4,"ngIf"],[1,"deleted"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.YNc(1,y,2,0,"button",1),s.YNc(2,$,2,1,"button",2),s._UZ(3,"span",3),s.TgZ(4,"button",4),s._uU(5),s.qZA(),s.qZA(),s._UZ(6,"mat-divider"),s.TgZ(7,"mat-grid-list",5),s.YNc(8,F,6,7,"mat-grid-tile",6),s.qZA()),2&t&&(s.xp6(1),s.Q6J("ngIf",(null==e.currentQuizItem?null:e.currentQuizItem.hint)&&!(null!=e.currentQuizItem&&null!=e.currentQuizItem.hint&&e.currentQuizItem.hint.alwaysOn)),s.xp6(1),s.Q6J("ngIf",e.showHint2),s.xp6(3),s.hij("\u5e72\u6270\u8bcd\uff1a",e.getNoiseCount(),""),s.xp6(2),s.Q6J("cdkDropListGroupDisabled",e.currentQuizItem.checked),s.xp6(1),s.Q6J("ngForOf",e.blocks))},directives:[l.O5,g.lW,Q.d,A.Il,_.Fd,l.sg,A.DX,_.Wj,_.Zt,_.Hk],styles:[".example-list1[_ngcontent-%COMP%]{max-width:100%;border:1px solid #ccc;min-height:60px;flex-wrap:wrap;border-radius:4px;overflow:hidden}.example-box1[_ngcontent-%COMP%], .example-list1[_ngcontent-%COMP%]{display:flex;flex-direction:row;background:#fff}.example-box1[_ngcontent-%COMP%]{padding:20px 10px;border:1px solid #ccc;color:#000000de;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;font-size:1em;font-weight:700;flex-basis:0}.example-list[_ngcontent-%COMP%]{width:1000px;max-width:100%;border:1px solid #ccc;min-height:60px;display:flex;overflow-x:scroll;flex-wrap:wrap;background:#fff;border-radius:4px}.example-box[_ngcontent-%COMP%]{padding:20px 10px;border:1px solid #ccc;color:#000000de;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;flex-basis:0}.example-box[_ngcontent-%COMP%], .example-button[_ngcontent-%COMP%]{font-size:1em;font-weight:700}.deleted[_ngcontent-%COMP%]{text-decoration:line-through;color:rgba(0,0,0,.274)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.example-custom-placeholder[_ngcontent-%COMP%]{background:#ccc;border:3px dotted #999;display:flex;flex-direction:row;padding:0 10px;align-items:center;justify-content:space-between;flex-basis:0;font-size:1em;font-weight:700}"]}),t})();function N(t,e){if(1&t&&(s._UZ(0,"app-quiz-item-senscr",10),s.ALo(1,"async")),2&t){const t=s.oxw();s.Q6J("currentQuizItem",t.currentQuizItem)("currentItemId",s.lcZ(1,3,t.quizStatus.currentItemId$))("quizStatus",t.quizStatus)}}function U(t,e){if(1&t&&(s.TgZ(0,"span"),s._uU(1),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Oqu(t.currentQuizItem.correct?"\u2714\ufe0f":"\u274c")}}function M(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"button",11),s.NdJ("click",function(){return s.CHM(t),s.oxw().checking.emit(1)}),s._uU(1,"Check"),s.qZA()}if(2&t){const t=s.oxw();s.Q6J("disabled",t.currentQuizItem.checked)}}function j(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"button",12),s.NdJ("click",function(){return s.CHM(t),s.oxw().goNext.emit()}),s._uU(1,"Next"),s.qZA()}}function D(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"button",13),s.NdJ("click",function(){return s.CHM(t),s.oxw().goFinish.emit()}),s._uU(1,"Finish"),s.qZA()}}const L=function(t){return{visibility:t}};let Y=(()=>{class t{constructor(){this.checking=new s.vpe,this.goNext=new s.vpe,this.goFinish=new s.vpe}ngOnInit(){}ngOnChanges(){this.quizItem2=this.quizStatus.quizItems$.getValue()[this.currentItemId]}checkIfFinished(){const t=this.quizStatus.currentItemId$.getValue();return this.currentQuizItem.checked&&t+1==this.quizStatus.quizItems2.length}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-quiz-item"]],inputs:{currentQuizItem:"currentQuizItem",quizStatus:"quizStatus",currentItemId:"currentItemId"},outputs:{checking:"checking",goNext:"goNext",goFinish:"goFinish"},features:[s.TTD],decls:23,vars:15,consts:[[3,"currentQuizItem","currentItemId","quizStatus",4,"ngIf"],[1,"subtitle"],[2,"display","flex"],[2,"flex","1 1 auto"],["mat-button","",3,"ngStyle"],[4,"ngIf"],[3,"ngStyle"],["mat-flat-button","","color","primary",3,"disabled","click",4,"ngIf"],["mat-flat-button","","color","accent",3,"click",4,"ngIf"],["mat-raised-button","","color","accent",3,"click",4,"ngIf"],[3,"currentQuizItem","currentItemId","quizStatus"],["mat-flat-button","","color","primary",3,"disabled","click"],["mat-flat-button","","color","accent",3,"click"],["mat-raised-button","","color","accent",3,"click"]],template:function(t,e){1&t&&(s.TgZ(0,"mat-card"),s.YNc(1,N,2,5,"app-quiz-item-senscr",0),s._UZ(2,"mat-divider"),s.TgZ(3,"mat-card-subtitle",1),s._uU(4,"MY ANSWER"),s.qZA(),s.TgZ(5,"mat-card-title"),s._uU(6),s.ALo(7,"async"),s.qZA(),s.TgZ(8,"mat-card-actions",2),s._UZ(9,"span",3),s.TgZ(10,"button",4),s._uU(11,"\xa0 "),s.YNc(12,U,2,1,"span",5),s.qZA(),s.qZA(),s._UZ(13,"mat-divider"),s.TgZ(14,"mat-card-subtitle",1),s._uU(15,"KEY"),s.qZA(),s.TgZ(16,"mat-card-title",6),s._uU(17),s.qZA(),s.TgZ(18,"mat-card-actions",2),s._UZ(19,"span",3),s.YNc(20,M,2,1,"button",7),s.YNc(21,j,2,0,"button",8),s.YNc(22,D,2,0,"button",9),s.qZA(),s.qZA()),2&t&&(s.xp6(1),s.Q6J("ngIf","senScr"===e.currentQuizItem.type),s.xp6(5),s.hij(" ",s.lcZ(7,9,e.quizStatus.currentAnswer$)," "),s.xp6(4),s.Q6J("ngStyle",s.VKq(11,L,e.currentQuizItem.checked?"inherit":"hidden")),s.xp6(2),s.Q6J("ngIf",e.currentQuizItem.checked),s.xp6(4),s.Q6J("ngStyle",s.VKq(13,L,e.currentQuizItem.checked?"inherit":"hidden")),s.xp6(1),s.hij(" ",e.currentQuizItem.content," "),s.xp6(3),s.Q6J("ngIf",!e.currentQuizItem.checked),s.xp6(1),s.Q6J("ngIf",e.currentQuizItem.checked&&!e.checkIfFinished()),s.xp6(1),s.Q6J("ngIf",e.checkIfFinished()))},directives:[f.a8,l.O5,Q.d,f.$j,f.n5,f.hq,g.lW,l.PC,J],pipes:[l.Ov],styles:[".subtitle[_ngcontent-%COMP%]{margin-top:2em}"]}),t})();function H(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"button",7),s.NdJ("click",function(){return s.CHM(t),s.oxw().quizStatus.isStarted$.next(!0)}),s.ALo(1,"async"),s._uU(2,"\u5f00\u59cb"),s.qZA()}if(2&t){const t=s.oxw();s.Q6J("disabled",!s.lcZ(1,1,t.quizStatus.quizSelected$))}}function X(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"button",8),s.NdJ("click",function(){return s.CHM(t),s.oxw().endBeforeFinish()}),s._uU(1,"\u7ed3\u675f"),s.qZA()}}function P(t,e){if(1&t&&(s.TgZ(0,"button",9),s._uU(1),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.AsE("\u7b2c",t.getCurrentId(),"\u9898\uff0c\u5171",t.quizStatus.quizItems2.length,"\u9898")}}function E(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"app-quiz-item",10),s.NdJ("checking",function(e){return s.CHM(t),s.oxw().onCheck(e)})("goNext",function(){return s.CHM(t),s.oxw().onNext()})("goFinish",function(){return s.CHM(t),s.oxw().onFinish()}),s.ALo(1,"async"),s.qZA()}if(2&t){const t=s.oxw();s.Q6J("currentQuizItem",t.currentQuizItem)("currentItemId",s.lcZ(1,3,t.quizStatus.currentItemId$))("quizStatus",t.quizStatus)}}let V=(()=>{class t{constructor(t,e){this.data=t,this.dialog=e,this.subs_={},this.quizStatus={subject:"",quizSelected$:new d.X(null),isStarted$:new d.X(!1),quizItems$:new d.X([]),quizItems2:[],currentItemId$:new d.X(0),currentItem$:new d.X(""),currentAnswer$:new d.X("")}}ngOnInit(){this.quizStatus.quizList1$=this.quizList1$,this.quizStatus.subject=this.subject;const t=this.quizStatus.isStarted$.subscribe(t=>{t&&this.init()});this.subs_.sub0_=t}init(){const t=this.quizStatus.quizSelected$.getValue();this.quizStatus=Object.assign(Object.assign({},this.quizStatus),{quizItems$:new d.X([]),currentItemId$:new d.X(0),currentItem$:new d.X(""),currentAnswer$:new d.X("")}),this.subs_.sub1_&&this.subs_.sub1_.unsubscribe();const e=this.data.getQuizz(t).pipe((0,c.U)(t=>{console.log(t);const e=t.map(t=>Object.assign(Object.assign({},t),{answer:"",checked:!1,correct:null})).sort(function(t,e){return.5-Math.random()});return this.quizStatus.quizItems2=e,e}),(0,p.w)(t=>this.quizStatus.currentItemId$.pipe((0,c.U)(e=>t[e])))).subscribe(t=>{this.currentQuizItem=t});this.subs_.sub1_=e}getCurrentId(){return this.quizStatus.currentItemId$.getValue()+1}onCheck(t){let e=!1;const i=this.currentQuizItem,n=this.quizStatus.currentAnswer$.getValue();switch(i.type){case"senScr":e=i.content===n;break;default:e=i.key===n}return i.answer=n,i.checked=!0,i.correct=e,e}onNext(){const t=this.quizStatus.currentItemId$.getValue();this.quizStatus.currentItemId$.next(t+1),console.log(this.quizStatus.currentItemId$.getValue())}onFinish(){this.quizStatus.isStarted$.next(!1)}ngOnDestroy(){Object.keys(this.subs_).forEach(t=>{this.subs_[t].unsubscribe()})}endBeforeFinish(){this.dialog.open(h,{width:"250px"}).afterClosed().subscribe(t=>{console.log(t),t&&this.quizStatus.isStarted$.next(!1)})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(a),s.Y36(m.uw))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-quiz"]],inputs:{quizList1$:"quizList1$",subject:"subject"},decls:13,vars:13,consts:[[3,"quizStatus"],[2,"display","flex"],["mat-raised-button","","color","primary",3,"disabled","click",4,"ngIf"],["mat-raised-button","","color","accent",3,"click",4,"ngIf"],[2,"flex","1 1 auto"],["mat-flat-button","",4,"ngIf"],[3,"currentQuizItem","currentItemId","quizStatus","checking","goNext","goFinish",4,"ngIf"],["mat-raised-button","","color","primary",3,"disabled","click"],["mat-raised-button","","color","accent",3,"click"],["mat-flat-button",""],[3,"currentQuizItem","currentItemId","quizStatus","checking","goNext","goFinish"]],template:function(t,e){1&t&&(s.TgZ(0,"mat-card"),s._UZ(1,"app-quiz-list",0),s.TgZ(2,"div",1),s.YNc(3,H,3,3,"button",2),s.ALo(4,"async"),s.YNc(5,X,2,0,"button",3),s.ALo(6,"async"),s._UZ(7,"span",4),s.YNc(8,P,2,2,"button",5),s.ALo(9,"async"),s.qZA(),s.qZA(),s.TgZ(10,"mat-card"),s.YNc(11,E,2,5,"app-quiz-item",6),s.ALo(12,"async"),s.qZA()),2&t&&(s.xp6(1),s.Q6J("quizStatus",e.quizStatus),s.xp6(2),s.Q6J("ngIf",!s.lcZ(4,5,e.quizStatus.isStarted$)),s.xp6(2),s.Q6J("ngIf",s.lcZ(6,7,e.quizStatus.isStarted$)),s.xp6(3),s.Q6J("ngIf",s.lcZ(9,9,e.quizStatus.isStarted$)),s.xp6(3),s.Q6J("ngIf",s.lcZ(12,11,e.quizStatus.isStarted$)&&e.currentQuizItem))},directives:[f.a8,v,l.O5,g.lW,Y],pipes:[l.Ov],styles:[""]}),t})();function B(t,e){if(1&t&&s._UZ(0,"app-quiz",2),2&t){const t=s.oxw();s.Q6J("quizList1$",t.quizListz1$)("subject","english")}}function W(t,e){1&t&&s._uU(0,"Loading...")}const R=[{path:"",component:(()=>{class t{constructor(t){this.data=t,this.quizListz1$=this.data.getListz1("english")}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(a))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-english"]],decls:4,vars:4,consts:[[3,"quizList1$","subject",4,"ngIf","ngIfElse"],["loading",""],[3,"quizList1$","subject"]],template:function(t,e){if(1&t&&(s.YNc(0,B,1,2,"app-quiz",0),s.ALo(1,"async"),s.YNc(2,W,1,0,"ng-template",null,1,s.W1O)),2&t){const t=s.MAs(3);s.Q6J("ngIf",s.lcZ(1,2,e.quizListz1$))("ngIfElse",t)}},directives:[l.O5,V],pipes:[l.Ov],styles:[""]}),t})()}];let G=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[o.Bz.forChild(R)],o.Bz]}),t})(),K=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[G,n.m,u]]}),t})()}}]);