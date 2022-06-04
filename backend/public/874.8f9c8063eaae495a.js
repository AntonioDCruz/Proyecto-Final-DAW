"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[874],{8874:(tt,x,r)=>{r.r(x),r.d(x,{EventosModule:()=>K});var m=r(9808),u=r(1083),v=r(9783),T=r(8505),C=r(4004),t=r(5e3),y=r(384),_=r(7676),b=r(97),g=r(845),A=r(9114),U=r(2726);function M(o,i){1&o&&(t.TgZ(0,"div",2),t._UZ(1,"span",3),t.qZA())}const I=function(){return["./crearEvento"]};function F(o,i){1&o&&(t.TgZ(0,"div",8)(1,"span",9),t._UZ(2,"button",10),t.qZA()()),2&o&&(t.xp6(2),t.Q6J("routerLink",t.DdM(1,I)))}function J(o,i){1&o&&(t.TgZ(0,"div",11)(1,"h2"),t._uU(2,"No hay eventos disponibles"),t.qZA()())}function Y(o,i){1&o&&t._UZ(0,"th",17)}function q(o,i){if(1&o&&(t.TgZ(0,"tr")(1,"th",17),t._uU(2,"T\xedtulo"),t.qZA(),t.TgZ(3,"th",17),t._uU(4,"Fecha"),t.qZA(),t.TgZ(5,"th",17),t._uU(6,"Hora"),t.qZA(),t.TgZ(7,"th",17),t._uU(8,"Descripcion"),t.qZA(),t.YNc(9,Y,1,0,"th",18),t.qZA()),2&o){const e=t.oxw(3);t.xp6(9),t.Q6J("ngIf",e.authUser.role_id<3)}}const Z=function(){return{"margin-left":".5em"}},w=function(o){return["./editarEvento",o]};function N(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"td"),t._UZ(1,"p-button",20),t.TgZ(2,"p-button",21),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw(3).confirm2(a)}),t.qZA()()}if(2&o){const e=t.oxw().$implicit;t.xp6(1),t.Akn(t.DdM(5,Z)),t.Q6J("routerLink",t.VKq(6,w,e.id)),t.xp6(1),t.Akn(t.DdM(8,Z))}}function L(o,i){if(1&o&&(t.TgZ(0,"tr")(1,"td",17),t._uU(2),t.qZA(),t.TgZ(3,"td",17),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td",17),t._uU(7),t.qZA(),t.TgZ(8,"td",17),t._uU(9),t.qZA(),t.YNc(10,N,3,9,"td",19),t.qZA()),2&o){const e=i.$implicit,n=t.oxw(3);t.xp6(2),t.Oqu(e.titulo),t.xp6(2),t.hij(" ",t.xi3(5,5,e.fecha,"dd/MM/yyyy")," "),t.xp6(3),t.Oqu(e.hora.substring(0,5)),t.xp6(2),t.Oqu(e.descripcion),t.xp6(1),t.Q6J("ngIf",n.authUser.role_id<3)}}function Q(o,i){if(1&o&&(t._UZ(0,"p-confirmDialog",12),t.TgZ(1,"div",13)(2,"p-table",14),t.YNc(3,q,10,1,"ng-template",15),t.YNc(4,L,11,8,"ng-template",16),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(2),t.Q6J("value",e.eventos)("scrollable",!0)}}function j(o,i){if(1&o&&(t._UZ(0,"p-messages",4),t.YNc(1,F,3,2,"div",5),t.YNc(2,J,3,0,"div",6),t.YNc(3,Q,5,2,"ng-template",null,7,t.W1O)),2&o){const e=t.MAs(4),n=t.oxw();t.Q6J("value",n.msgs),t.xp6(1),t.Q6J("ngIf",1===n.authUser.role_id),t.xp6(1),t.Q6J("ngIf",0===n.eventos.length)("ngIfElse",e)}}let O=(()=>{class o{constructor(e,n,a){this.as=e,this.evs=n,this.confirmationService=a,this.msgs=[],this.eventos=[],this.aux=!1}ngOnInit(){this.authUser=this.as.auth,this.evs.eventosUsuario().subscribe(e=>{this.aux=!0,this.eventos=e})}confirm2(e){this.confirmationService.confirm({message:"\xbfEst\xe1s seguro de eliminar este evento?",header:"Eliminar evento",icon:"pi pi-info-circle",accept:()=>{this.evs.borrarEvento(e.id).pipe((0,T.b)(n=>this.aux=!1),(0,C.U)(n=>this.msgs=[{severity:"info",summary:"Confirmado",detail:"Evento eliminado"}])).subscribe(n=>{this.evs.eventosUsuario().subscribe(a=>{this.aux=!0,this.eventos=a})})}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(y.e),t.Y36(_.S),t.Y36(v.YP))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-listado-eventos"]],features:[t._Bn([v.YP])],decls:3,vars:2,consts:[["class","m-0 vh-100 row justify-content-center align-items-center",4,"ngIf","ngIfElse"],["info",""],[1,"m-0","vh-100","row","justify-content-center","align-items-center"],[1,"loader","col-auto","text-center","p-5"],[3,"value"],["class","row text-center m-4",4,"ngIf"],["class","frase",4,"ngIf","ngIfElse"],["tabla",""],[1,"row","text-center","m-4"],["span","",1,"p-buttonset","text-center"],["pButton","","type","button","label","A\xf1adir evento","icon","pi pi-plus","iconPos","right",3,"routerLink"],[1,"frase"],["header","Confirmation","icon","pi pi-exclamation-triangle"],[1,"content"],["scrollHeight","100%",3,"value","scrollable"],["pTemplate","header"],["pTemplate","body"],[2,"min-width","200px"],["style","min-width: 200px",4,"ngIf"],[4,"ngIf"],["label","Editar","icon","pi pi-pencil","iconPos","right","styleClass","p-button-secondary",3,"routerLink"],["icon","pi pi-times","label","Eliminar","iconPos","right","styleClass","p-button-danger",3,"click"]],template:function(e,n){if(1&e&&(t.YNc(0,M,2,0,"div",0),t.YNc(1,j,5,4,"ng-template",null,1,t.W1O)),2&e){const a=t.MAs(2);t.Q6J("ngIf",!n.aux)("ngIfElse",a)}},directives:[m.O5,b.V,g.Hq,u.rH,A.Q,U.iA,v.jx,g.zx],pipes:[m.uU],styles:['@import"https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@700&display=swap";.loader[_ngcontent-%COMP%]{width:48px;height:48px;border:5px dotted #bcd8c1;border-radius:50%;display:inline-block;position:relative;box-sizing:border-box;animation:rotation 2s linear infinite}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.frase[_ngcontent-%COMP%]{width:100%}h2[_ngcontent-%COMP%]{font-family:"Baloo Tamma 2";text-align:center;width:100%;margin:-40px auto 0;color:#fff;font-size:5vw;letter-spacing:5px;top:50%;position:absolute;text-shadow:-1px -1px 0px #bcd8c1,3px 3px 0px #bcd8c1,6px 6px 0px #98d4a3}']}),o})();var s=r(3075),z=r(3900),D=r(1424),R=r(5652),P=r(3407);function B(o,i){1&o&&(t.TgZ(0,"div",2),t._UZ(1,"span",3),t.qZA())}function S(o,i){if(1&o&&(t.TgZ(0,"small",19),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij("",e.tituloMsg," ")}}function H(o,i){if(1&o&&(t.TgZ(0,"small",19),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij("",e.fechaMsg," ")}}function V(o,i){if(1&o&&(t.TgZ(0,"small",19),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij("",e.horaMsg," ")}}function W(o,i){if(1&o&&(t.TgZ(0,"small",19),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij("",e.descMsg," ")}}function G(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"h2",4),t._uU(1),t.qZA(),t.TgZ(2,"form",5),t.NdJ("submit",function(){return t.CHM(e),t.oxw().guardar()}),t.TgZ(3,"div",6)(4,"div",7)(5,"span",8),t._uU(6,"T\xedtulo del evento"),t.qZA(),t._UZ(7,"div",9)(8,"input",10)(9,"div",9),t.YNc(10,S,2,1,"small",11),t.qZA(),t.TgZ(11,"div",7)(12,"span",8),t._uU(13,"D\xeda del evento"),t.qZA(),t._UZ(14,"div",9)(15,"p-calendar",12)(16,"div",9),t.YNc(17,H,2,1,"small",11),t.qZA(),t.TgZ(18,"div",13)(19,"span",8),t._uU(20,"Hora del evento"),t.qZA(),t._UZ(21,"input",14),t.YNc(22,V,2,1,"small",11),t.qZA(),t.TgZ(23,"div",15)(24,"span",8),t._uU(25,"Descripcion"),t.qZA(),t._UZ(26,"div",9)(27,"textarea",16)(28,"div",9),t.YNc(29,W,2,1,"small",11),t.qZA()(),t.TgZ(30,"div",17),t._UZ(31,"p-button",18),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.hij("",e.evento?"Editar":"Nuevo"," Evento"),t.xp6(1),t.Q6J("formGroup",e.miFormulario),t.xp6(8),t.Q6J("ngIf",e.error("titulo")),t.xp6(7),t.Q6J("ngIf",e.error("fecha")),t.xp6(5),t.Q6J("ngIf",e.error("hora")),t.xp6(5),t.Q6J("rows",5)("cols",40)("autoResize",!0),t.xp6(2),t.Q6J("ngIf",e.error("descripcion"))}}let E=(()=>{class o{constructor(e,n,a,l){this.evs=e,this.fb=n,this.router=a,this.activatedRoute=l,this.miFormulario=this.fb.group({fecha:["",[s.kI.required]],hora:["",[s.kI.required]],descripcion:["",[s.kI.required]],titulo:["",[s.kI.required]]}),this.evento=void 0,this.aux=!1}ngOnInit(){this.router.url.includes("editarEvento")?this.activatedRoute.params.pipe((0,z.w)(({id:e})=>this.evs.getEvento(e))).subscribe(e=>{this.aux=!0,this.evento=e,this.miFormulario.reset({fecha:new Date(this.evento.fecha),hora:this.evento.hora,descripcion:this.evento.descripcion,titulo:this.evento.titulo}),console.log(this.miFormulario.getRawValue())}):this.aux=!0}get fechaMsg(){var e;const n=null===(e=this.miFormulario.get("fecha"))||void 0===e?void 0:e.errors;return(null==n?void 0:n.required)?"Seleccione el d\xeda del partido":""}get horaMsg(){var e;const n=null===(e=this.miFormulario.get("hora"))||void 0===e?void 0:e.errors;return(null==n?void 0:n.required)?"Seleccione la hora del partido":""}get tituloMsg(){var e;const n=null===(e=this.miFormulario.get("titulo"))||void 0===e?void 0:e.errors;return(null==n?void 0:n.required)?"Introduce el titulo del Evento":""}get descMsg(){var e;const n=null===(e=this.miFormulario.get("descripcion"))||void 0===e?void 0:e.errors;return(null==n?void 0:n.required)?"Rellene la descripci\xf3n del evento":""}error(e){var n,a,l,c;return(null===(a=null===(n=this.miFormulario.controls)||void 0===n?void 0:n[e])||void 0===a?void 0:a.errors)&&(null===(c=null===(l=this.miFormulario.controls)||void 0===l?void 0:l[e])||void 0===c?void 0:c.touched)}guardar(){var e,n,a,l,c;this.miFormulario.invalid?this.miFormulario.markAllAsTouched():(null===(e=this.evento)||void 0===e?void 0:e.id)?(null===(n=this.miFormulario.get("fecha"))||void 0===n||n.setValue((0,m.p6)(null===(a=this.miFormulario.get("fecha"))||void 0===a?void 0:a.value,"yyyy-MM-dd","en")),this.evs.actualizarEvento(this.evento.id,this.miFormulario.getRawValue()).subscribe(f=>{console.log(f),this.router.navigate(["/inicio/eventos"])})):(null===(l=this.miFormulario.get("fecha"))||void 0===l||l.setValue((0,m.p6)(null===(c=this.miFormulario.get("fecha"))||void 0===c?void 0:c.value,"yyyy-MM-dd","en")),this.evs.crearEvento(this.miFormulario.getRawValue()).subscribe(f=>{var h;console.log(null===(h=this.miFormulario.get("fecha"))||void 0===h?void 0:h.value),this.router.navigate(["/inicio/eventos"]),console.log(f)}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.S),t.Y36(s.qu),t.Y36(u.F0),t.Y36(u.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-crear-evento"]],decls:3,vars:2,consts:[["class","m-0 vh-100 row justify-content-center align-items-center",4,"ngIf","ngIfElse"],["info",""],[1,"m-0","vh-100","row","justify-content-center","align-items-center"],[1,"loader","col-auto","text-center","p-5"],[1,"text-center","mt-2"],[3,"formGroup","submit"],[1,"row","m-5","justify-content-center"],[1,"col-12","col-xs-12","col-sm-12","col-md-12","col-lg-2","mb-3"],[1,"form-text"],[1,"col"],["formControlName","titulo","type","text","pInputText","",1,"p-inputtext"],["class","text-danger","id","",4,"ngIf"],["formControlName","fecha"],[1,"col-12","col-xs-12","col-sm-12","col-md-12","col-lg-4","mb-3"],["formControlName","hora","type","time","id","appt","name","appt","min","09:00","max","21:00","required","",1,"form-control"],[1,"ms-2","col-12","col-xs-12","col-sm-12","col-md-12","col-lg-3","mb-3"],["formControlName","descripcion","pInputTextarea","",3,"rows","cols","autoResize"],[1,"m-5"],["label","Guardar","type","submit","icon","pi pi-check","iconPos","right",1,"float-end"],["id","",1,"text-danger"]],template:function(e,n){if(1&e&&(t.YNc(0,B,2,0,"div",0),t.YNc(1,G,32,9,"ng-template",null,1,t.W1O)),2&e){const a=t.MAs(2);t.Q6J("ngIf",!n.aux)("ngIfElse",a)}},directives:[m.O5,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,D.o,R.f,s.Q7,P.g,g.zx],styles:[".loader[_ngcontent-%COMP%]{width:48px;height:48px;border:5px dotted #bcd8c1;border-radius:50%;display:inline-block;position:relative;box-sizing:border-box;animation:rotation 2s linear infinite}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]}),o})();var d=r(7538),p=r(3460);const $=[{path:"",children:[{path:"",component:O},{path:"crearEvento",component:E,canActivate:[d.W,p.J],canLoad:[d.W,p.J]},{path:"editarEvento/:id",component:E,canActivate:[d.W,p.J],canLoad:[d.W,p.J]},{path:"**",redirectTo:""}]}];let k=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.Bz.forChild($)],u.Bz]}),o})();var X=r(6559);let K=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.ez,k,X.g]]}),o})()}}]);