(self.webpackChunkkddh=self.webpackChunkkddh||[]).push([[244],{2244:(t,e,n)=>{"use strict";n.r(e),n.d(e,{MathModule:()=>f});var o=n(1116),s=n(3337),r=n(5366),u=n(1041),i=n(6897),c=n(2797),a=n(4369);const l=["answer"];let m=(()=>{class t{constructor(t){this._snackBar=t,this.check=new r.vpe,this.answer="",this.editorForm=new u.cw({editor:new u.NI}),this.questionForm=new u.cw({answer:new u.NI("",u.kI.required)})}ngOnInit(){}ngAfterViewInit(){this.answerElement.nativeElement.focus()}onCheck(){const t=this.questionForm.get("answer"),e=(null==t?void 0:t.value)==this.question.answer;this.check.emit(e),this._snackBar.open(e?"yes":"uh-oh","",{duration:1e3,verticalPosition:"top"}),null==t||t.setValue(""),this.answerElement.nativeElement.focus()}onSubmit(t){var e;const n=null===(e=this.editorForm.get("editor"))||void 0===e?void 0:e.value;console.log(n)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(i.ux))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-simple-math"]],viewQuery:function(t,e){if(1&t&&r.Gf(l,5),2&t){let t;r.iGM(t=r.CRH())&&(e.answerElement=t.first)}},inputs:{question:"question"},outputs:{check:"check"},decls:16,vars:4,consts:[[3,"formGroup","ngSubmit"],["mat-button","","color","primary"],["mat-button","","color","accent"],["matInput","","placeholder","","formControlName","answer"],["answer",""],["type","submit","mat-raised-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(r.TgZ(0,"mat-card"),r.TgZ(1,"form",0),r.NdJ("ngSubmit",function(){return e.onCheck()}),r.TgZ(2,"button",1),r._uU(3),r.qZA(),r.TgZ(4,"button",2),r._uU(5),r.qZA(),r.TgZ(6,"button",1),r._uU(7),r.qZA(),r.TgZ(8,"button",2),r._uU(9,"="),r.qZA(),r._UZ(10,"input",3,4),r.TgZ(12,"span"),r._uU(13,"\xa0"),r.qZA(),r.TgZ(14,"button",5),r.NdJ("click",function(){return e.check.emit()}),r._uU(15,"check"),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(1),r.Q6J("formGroup",e.questionForm),r.xp6(2),r.Oqu(e.question.numberA),r.xp6(2),r.Oqu(e.question.sign),r.xp6(2),r.Oqu(e.question.numberB))},directives:[c.a8,u._Y,u.JL,u.sg,a.lW,u.Fj,u.JJ,u.u],styles:[""]}),t})();const h=[{path:"",component:(()=>{class t{constructor(){this.options={method:"add"},this.currentQuestion=null}ngOnInit(){this.onCheck(null,this.options)}onCheck(t,e){const n=Math.round(10*Math.random()),o=Math.round(10*Math.random());let s="",r=0;switch(e.method){case"add":s="+",r=n+o}this.currentQuestion={numberA:n,numberB:o,sign:s,answer:r},console.log(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-math"]],decls:1,vars:1,consts:[[3,"question","check"]],template:function(t,e){1&t&&(r.TgZ(0,"app-simple-math",0),r.NdJ("check",function(t){return e.onCheck(t,e.options)}),r.qZA()),2&t&&r.Q6J("question",e.currentQuestion)},directives:[m],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[s.Bz.forChild(h)],s.Bz]}),t})();var d=n(5027);let f=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[o.ez,p,d.m]]}),t})()}}]);