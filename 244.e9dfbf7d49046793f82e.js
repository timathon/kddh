(self.webpackChunkkddh=self.webpackChunkkddh||[]).push([[244],{2244:(t,n,e)=>{"use strict";e.r(n),e.d(n,{MathModule:()=>b});var o=e(1116),s=e(3337),a=e(8512),i=e(5366),r=e(2797),c=e(7436),u=e(1041),l=e(4369),p=e(6897);const d=["answer"];let m=(()=>{class t{constructor(t){this._snackBar=t,this.check=new i.vpe,this.answer="",this.editorForm=new u.cw({editor:new u.NI}),this.questionForm=new u.cw({answer:new u.NI("",u.kI.required)})}ngOnInit(){}ngAfterViewInit(){this.answerElement.nativeElement.focus()}onCheck(){const t=this.questionForm.get("answer");console.log({answser:null==t?void 0:t.value});const n=(null==t?void 0:t.value)==this.question.answer;this.check.emit(n),n?(this._snackBar.open("\u2714\ufe0f","",{duration:1e3,verticalPosition:"top",panelClass:"feedbackbar"}),new Audio("assets/sounds/correct.mp3").play()):(this._snackBar.open("\u274c","",{duration:1e3,verticalPosition:"top",panelClass:"feedbackbar"}),new Audio("assets/sounds/wrong.mp3").play()),null==t||t.setValue(""),this.answerElement.nativeElement.focus()}onSubmit(t){var n;const e=null===(n=this.editorForm.get("editor"))||void 0===n?void 0:n.value;console.log(e)}}return t.\u0275fac=function(n){return new(n||t)(i.Y36(p.ux))},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-simple-math"]],viewQuery:function(t,n){if(1&t&&i.Gf(d,5),2&t){let t;i.iGM(t=i.CRH())&&(n.answerElement=t.first)}},inputs:{question:"question"},outputs:{check:"check"},decls:15,vars:4,consts:[[3,"formGroup","ngSubmit"],["mat-mini-fab","","type","button","color","primary",1,"expression"],["mat-icon-button","","type","button","color","accent",1,"expression"],["matInput","","placeholder","","formControlName","answer"],["answer",""],[2,"flex","1 1 auto"],["type","submit","mat-raised-button","","color","primary"]],template:function(t,n){1&t&&(i.TgZ(0,"mat-card"),i.TgZ(1,"form",0),i.NdJ("ngSubmit",function(){return n.onCheck()}),i.TgZ(2,"button",1),i._uU(3),i.qZA(),i.TgZ(4,"button",2),i._uU(5),i.qZA(),i.TgZ(6,"button",1),i._uU(7),i.qZA(),i.TgZ(8,"button",2),i._uU(9,"="),i.qZA(),i._UZ(10,"input",3,4),i._UZ(12,"span",5),i.TgZ(13,"button",6),i._uU(14,"check"),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(1),i.Q6J("formGroup",n.questionForm),i.xp6(2),i.Oqu(n.question.numberA),i.xp6(2),i.Oqu(n.question.sign),i.xp6(2),i.Oqu(n.question.numberB))},directives:[r.a8,u._Y,u.JL,u.sg,l.lW,u.Fj,u.JJ,u.u],styles:["button.expression[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{font-size:1.5em}input[_ngcontent-%COMP%]{width:2em}form[_ngcontent-%COMP%]{display:flex}"]}),t})();function h(t,n){if(1&t){const t=i.EpF();i.TgZ(0,"app-simple-math",9),i.NdJ("check",function(n){i.CHM(t);const e=i.oxw();return e.onCheck(n,e.options)}),i.qZA()}if(2&t){const t=i.oxw();i.Q6J("question",t.currentQuestion)}}const g=[{path:"",component:(()=>{class t{constructor(){this.options={method:"add"},this.currentQuestion=null,this.action$=new a.X(!1)}ngOnInit(){this.action$.subscribe(t=>{t&&this.onCheck(null,this.options)})}onCheck(t,n){let e,o,s="",a=0;switch(n.method){case"add":s="+",e=Math.round(10*Math.random()),o=Math.round(10*Math.random()),a=e+o;break;case"multiply":s="x",e=Math.round(5*Math.random()),o=Math.round(5*Math.random()),a=e*o;break;default:e=0,o=0}this.currentQuestion={numberA:e,numberB:o,sign:s,answer:a},console.log(t)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-math"]],decls:23,vars:13,consts:[[2,"display","flex"],[2,"margin","auto"],["aria-label","Select an option",3,"ngModel","disabled","ngModelChange"],["value","add","color","primary"],["value","multiply","color","primary"],[2,"flex","1 1 auto"],["mat-raised-button","","color","primary",3,"disabled","click"],["mat-raised-button","","color","accent",3,"disabled","click"],[3,"question","check",4,"ngIf"],[3,"question","check"]],template:function(t,n){1&t&&(i.TgZ(0,"mat-card"),i.TgZ(1,"div",0),i.TgZ(2,"span",1),i.TgZ(3,"mat-radio-group",2),i.NdJ("ngModelChange",function(t){return n.options.method=t}),i.ALo(4,"async"),i.TgZ(5,"mat-radio-button",3),i._uU(6,"\u52a0\u6cd5"),i.qZA(),i.TgZ(7,"span"),i._uU(8,"\xa0\xa0"),i.qZA(),i.TgZ(9,"mat-radio-button",4),i._uU(10,"\u4e58\u6cd5"),i.qZA(),i.qZA(),i.qZA(),i._UZ(11,"span",5),i.TgZ(12,"span"),i.TgZ(13,"button",6),i.NdJ("click",function(){return n.action$.next(!0)}),i.ALo(14,"async"),i._uU(15,"Start"),i.qZA(),i.TgZ(16,"span"),i._uU(17,"\xa0\xa0"),i.qZA(),i.TgZ(18,"button",7),i.NdJ("click",function(){return n.action$.next(!1)}),i.ALo(19,"async"),i._uU(20,"End"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.YNc(21,h,1,1,"app-simple-math",8),i.ALo(22,"async")),2&t&&(i.xp6(3),i.Q6J("ngModel",n.options.method)("disabled",!!i.lcZ(4,5,n.action$)),i.xp6(10),i.Q6J("disabled",i.lcZ(14,7,n.action$)),i.xp6(5),i.Q6J("disabled",!i.lcZ(19,9,n.action$)),i.xp6(3),i.Q6J("ngIf",i.lcZ(22,11,n.action$)))},directives:[r.a8,c.VQ,u.JJ,u.On,c.U0,l.lW,o.O5,m],pipes:[o.Ov],styles:[""]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[s.Bz.forChild(g)],s.Bz]}),t})();var f=e(5027);let b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.ez,Z,f.m]]}),t})()}}]);