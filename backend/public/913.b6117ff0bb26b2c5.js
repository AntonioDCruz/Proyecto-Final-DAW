"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[913],{4913:(Zt,h,s)=>{s.r(h),s.d(h,{PartidosModule:()=>xt});var c=s(9808),d=s(1083),u=s(9783),x=s(8505),Z=s(4004),t=s(5e3),b=s(384),C=s(1003),T=s(97),g=s(845),A=s(9114),U=s(2726);function F(o,n){1&o&&(t.TgZ(0,"div",2),t._UZ(1,"span",3),t.qZA())}const M=function(){return["./crearPartido"]};function N(o,n){1&o&&(t.TgZ(0,"div",8)(1,"span",9),t._UZ(2,"button",10),t.qZA()()),2&o&&(t.xp6(2),t.Q6J("routerLink",t.DdM(1,M)))}function w(o,n){1&o&&(t.TgZ(0,"div",11)(1,"h2"),t._uU(2,"No hay partidos disponibles"),t.qZA()())}function L(o,n){1&o&&t._UZ(0,"th",17)}function Y(o,n){if(1&o&&(t.TgZ(0,"tr")(1,"th",17),t._uU(2,"Fecha"),t.qZA(),t.TgZ(3,"th",17),t._uU(4,"Hora"),t.qZA(),t.TgZ(5,"th",17),t._uU(6,"Rival"),t.qZA(),t.TgZ(7,"th",17),t._uU(8,"Local/Visitante"),t.qZA(),t.TgZ(9,"th",17),t._uU(10,"Puntos Equipo - Puntos Rival"),t.qZA(),t.YNc(11,L,1,0,"th",18),t.qZA()),2&o){const i=t.oxw(3);t.xp6(11),t.Q6J("ngIf",i.authUser.role_id<3)}}const y=function(){return{"margin-left":".5em"}},J=function(o){return["./editarPartido",o]};function E(o,n){if(1&o){const i=t.EpF();t.TgZ(0,"td"),t._UZ(1,"p-button",21),t.TgZ(2,"p-button",22),t.NdJ("click",function(){t.CHM(i);const r=t.oxw().$implicit;return t.oxw(3).confirm2(r)}),t.qZA()()}if(2&o){const i=t.oxw().$implicit;t.xp6(1),t.Akn(t.DdM(5,y)),t.Q6J("routerLink",t.VKq(6,J,i.id)),t.xp6(1),t.Akn(t.DdM(8,y))}}function Q(o,n){if(1&o&&(t.TgZ(0,"tr")(1,"td",17),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"td",17),t._uU(5),t.qZA(),t.TgZ(6,"td",17)(7,"span"),t._UZ(8,"img",19),t._uU(9),t.qZA()(),t.TgZ(10,"td",17),t._uU(11),t.ALo(12,"titlecase"),t.qZA(),t.TgZ(13,"td",17),t._uU(14),t.qZA(),t.YNc(15,E,3,9,"td",20),t.qZA()),2&o){const i=n.$implicit,e=t.oxw(3);t.xp6(2),t.hij(" ",t.xi3(3,8,i.fecha,"dd/MM/yyyy")," "),t.xp6(3),t.hij(" ",i.hora.substring(0,5)," "),t.xp6(3),t.Q6J("src",i.rival_img,t.LSH),t.xp6(1),t.hij(" ",i.rival_nombre," "),t.xp6(2),t.Oqu(t.lcZ(12,11,i.campo)),t.xp6(3),t.AsE(" ",i.puntos_equipo," - ",i.puntos_rival," "),t.xp6(1),t.Q6J("ngIf",e.authUser.role_id<3)}}function j(o,n){if(1&o&&(t._UZ(0,"p-confirmDialog",12),t.TgZ(1,"div",13)(2,"p-table",14),t.YNc(3,Y,12,1,"ng-template",15),t.YNc(4,Q,16,13,"ng-template",16),t.qZA()()),2&o){const i=t.oxw(2);t.xp6(2),t.Q6J("value",i.partidos)("scrollable",!0)}}function O(o,n){if(1&o&&(t._UZ(0,"p-messages",4),t.YNc(1,N,3,2,"div",5),t.YNc(2,w,3,0,"div",6),t.YNc(3,j,5,2,"ng-template",null,7,t.W1O)),2&o){const i=t.MAs(4),e=t.oxw();t.Q6J("value",e.msgs),t.xp6(1),t.Q6J("ngIf",e.authUser.role_id<3),t.xp6(1),t.Q6J("ngIf",0===e.partidos.length)("ngIfElse",i)}}let k=(()=>{class o{constructor(i,e,r){this.as=i,this.ps=e,this.confirmationService=r,this.msgs=[],this.aux=!1,this.partidos=[]}ngOnInit(){this.authUser=this.as.auth,this.ps.partidosUsuarioRival().subscribe(i=>{this.aux=!0,this.partidos=i})}confirm2(i){this.confirmationService.confirm({message:"\xbfEst\xe1s seguro de eliminar este partido?",header:"Eliminar partido",icon:"pi pi-info-circle",accept:()=>{this.ps.borrarPartido(i.id).pipe((0,x.b)(e=>this.aux=!1),(0,Z.U)(e=>this.msgs=[{severity:"info",summary:"Confirmado",detail:"Partido eliminado"}])).subscribe(e=>{this.ps.partidosUsuario().subscribe(r=>{this.aux=!0,this.partidos=r})})}})}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(b.e),t.Y36(C.r),t.Y36(u.YP))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-listado-partidos"]],features:[t._Bn([u.YP])],decls:3,vars:2,consts:[["class","m-0 vh-100 row justify-content-center align-items-center",4,"ngIf","ngIfElse"],["info",""],[1,"m-0","vh-100","row","justify-content-center","align-items-center"],[1,"loader","col-auto","text-center","p-5"],[3,"value"],["class","row text-center m-4",4,"ngIf"],["class","frase",4,"ngIf","ngIfElse"],["tabla",""],[1,"row","text-center","m-4"],["span","",1,"p-buttonset","text-center"],["pButton","","type","button","label","A\xf1adir partido","icon","pi pi-plus","iconPos","right",3,"routerLink"],[1,"frase"],["header","Confirmation","icon","pi pi-exclamation-triangle"],[1,"content"],["scrollHeight","100%",3,"value","scrollable"],["class","xddd","pTemplate","header"],["pTemplate","body"],[2,"min-width","200px"],["style","min-width: 200px",4,"ngIf"],["alt","",3,"src"],[4,"ngIf"],["label","Editar","icon","pi pi-pencil","iconPos","right","styleClass","p-button-secondary",3,"routerLink"],["icon","pi pi-times","label","Eliminar","iconPos","right","styleClass","p-button-danger",3,"click"]],template:function(i,e){if(1&i&&(t.YNc(0,F,2,0,"div",0),t.YNc(1,O,5,4,"ng-template",null,1,t.W1O)),2&i){const r=t.MAs(2);t.Q6J("ngIf",!e.aux)("ngIfElse",r)}},directives:[c.O5,T.V,g.Hq,d.rH,A.Q,U.iA,u.jx,g.zx],pipes:[c.uU,c.rS],styles:['@import"https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@700&display=swap";.loader[_ngcontent-%COMP%]{width:48px;height:48px;border:5px dotted #bcd8c1;border-radius:50%;display:inline-block;position:relative;box-sizing:border-box;animation:rotation 2s linear infinite}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}img[_ngcontent-%COMP%]{width:50px}h2[_ngcontent-%COMP%]{font-family:"Baloo Tamma 2";text-align:center;width:100%;margin:-40px auto 0;color:#fff;font-size:5vw;letter-spacing:5px;top:50%;position:absolute;text-shadow:-1px -1px 0px #bcd8c1,3px 3px 0px #bcd8c1,6px 6px 0px #98d4a3}']}),o})();var a=s(3075),q=s(3900),_=s(3671),z=s(7010),H=s(5652);function S(o,n){1&o&&(t.TgZ(0,"div",2),t._UZ(1,"span",3),t.qZA())}function W(o,n){if(1&o&&(t.TgZ(0,"small",28),t._uU(1),t.qZA()),2&o){const i=t.oxw(2);t.xp6(1),t.hij("",i.puntosEquipoMsg," ")}}function V(o,n){if(1&o&&(t.TgZ(0,"small",28),t._uU(1),t.qZA()),2&o){const i=t.oxw(2);t.xp6(1),t.hij("",i.puntosRivalMsg," ")}}function B(o,n){if(1&o&&(t.TgZ(0,"small",28),t._uU(1),t.qZA()),2&o){const i=t.oxw(2);t.xp6(1),t.hij("",i.fechaMsg," ")}}function D(o,n){if(1&o&&(t.TgZ(0,"small",28),t._uU(1),t.qZA()),2&o){const i=t.oxw(2);t.xp6(1),t.hij("",i.horaMsg," ")}}function $(o,n){if(1&o&&(t.TgZ(0,"small",28),t._uU(1),t.qZA()),2&o){const i=t.oxw(2);t.xp6(1),t.hij("",i.campoMsg," ")}}function G(o,n){if(1&o&&(t.TgZ(0,"option",29),t._uU(1),t.qZA()),2&o){const i=n.$implicit;t.Q6J("value",i.id),t.xp6(1),t.hij(" ",i.nombre," ")}}function X(o,n){if(1&o&&(t.TgZ(0,"small",28),t._uU(1),t.qZA()),2&o){const i=t.oxw(2);t.xp6(1),t.hij("",i.rivalMsg," ")}}function K(o,n){if(1&o){const i=t.EpF();t.TgZ(0,"h2",4),t._uU(1),t.qZA(),t.TgZ(2,"form",5),t.NdJ("submit",function(){return t.CHM(i),t.oxw().guardar()}),t.TgZ(3,"div",6)(4,"div",7)(5,"span",8),t._uU(6,"Puntos Mi Equipo"),t.qZA(),t._UZ(7,"div",9)(8,"p-inputNumber",10),t.YNc(9,W,2,1,"small",11),t.qZA(),t._UZ(10,"div",12),t.TgZ(11,"div",7)(12,"span",8),t._uU(13,"Puntos Equipo Rival"),t.qZA(),t._UZ(14,"div",9)(15,"p-inputNumber",13),t.YNc(16,V,2,1,"small",11),t.qZA()(),t.TgZ(17,"div",6)(18,"div",14)(19,"span",8),t._uU(20,"D\xeda del partido"),t.qZA(),t._UZ(21,"div",9)(22,"p-calendar",15)(23,"div",9),t.YNc(24,B,2,1,"small",11),t.qZA(),t.TgZ(25,"div",16)(26,"span",8),t._uU(27,"Hora del partido"),t.qZA(),t._UZ(28,"input",17),t.YNc(29,D,2,1,"small",11),t.qZA(),t.TgZ(30,"div",16)(31,"span",8),t._uU(32,"Campo"),t.qZA(),t.TgZ(33,"select",18)(34,"option",19),t._uU(35,"-- Seleccione un campo --"),t.qZA(),t.TgZ(36,"option",20),t._uU(37,"Local"),t.qZA(),t.TgZ(38,"option",21),t._uU(39,"Visitante"),t.qZA()(),t.YNc(40,$,2,1,"small",11),t.qZA(),t.TgZ(41,"div",22)(42,"span",8),t._uU(43,"Rival"),t.qZA(),t.TgZ(44,"select",23)(45,"option",19),t._uU(46,"-- Seleccione un rival --"),t.qZA(),t.YNc(47,G,2,2,"option",24),t.qZA(),t._UZ(48,"p-button",25)(49,"div",9),t.YNc(50,X,2,1,"small",11),t.qZA()(),t.TgZ(51,"div",26),t._UZ(52,"p-button",27),t.qZA()()}if(2&o){const i=t.oxw();t.xp6(1),t.hij("",i.partido?"Editar":"Nuevo"," Partido"),t.xp6(1),t.Q6J("formGroup",i.miFormulario),t.xp6(7),t.Q6J("ngIf",i.error("puntos_equipo")),t.xp6(7),t.Q6J("ngIf",i.error("puntos_rival")),t.xp6(8),t.Q6J("ngIf",i.error("fecha")),t.xp6(5),t.Q6J("ngIf",i.error("hora")),t.xp6(11),t.Q6J("ngIf",i.error("campo")),t.xp6(7),t.Q6J("ngForOf",i.rivales),t.xp6(3),t.Q6J("ngIf",i.error("rival_id"))}}let P=(()=>{class o{constructor(i,e,r,l,p){this.ps=i,this.rs=e,this.fb=r,this.router=l,this.activatedRoute=p,this.miFormulario=this.fb.group({fecha:["",[a.kI.required]],campo:["",[a.kI.required]],hora:["",[a.kI.required]],rival_id:["",[a.kI.required]],puntos_equipo:["",[a.kI.min(0),a.kI.max(200)]],puntos_rival:["",[a.kI.min(0),a.kI.max(200)]]}),this.rivales=[],this.partido=void 0,this.aux=!1}ngOnInit(){this.rs.rivalesEquipo().subscribe(i=>this.rivales=i),this.router.url.includes("editarPartido")?this.activatedRoute.params.pipe((0,q.w)(({id:i})=>this.ps.getPartido(i))).subscribe(i=>{this.aux=!0,this.partido=i,this.miFormulario.reset({fecha:new Date(this.partido.fecha),campo:this.partido.campo,hora:this.partido.hora,rival_id:this.partido.rival_id,puntos_equipo:this.partido.puntos_equipo,puntos_rival:this.partido.puntos_rival}),console.log(this.miFormulario.getRawValue())}):this.aux=!0}get fechaMsg(){var i;const e=null===(i=this.miFormulario.get("fecha"))||void 0===i?void 0:i.errors;return(null==e?void 0:e.required)?"Seleccione el d\xeda del partido":""}get campoMsg(){var i;const e=null===(i=this.miFormulario.get("campo"))||void 0===i?void 0:i.errors;return(null==e?void 0:e.required)?"Seleccione el campo del partido":""}get horaMsg(){var i;const e=null===(i=this.miFormulario.get("hora"))||void 0===i?void 0:i.errors;return(null==e?void 0:e.required)?"Seleccione la hora del partido":""}get rivalMsg(){var i;const e=null===(i=this.miFormulario.get("rival_id"))||void 0===i?void 0:i.errors;return(null==e?void 0:e.required)?"Seleccione un rival":""}get puntosEquipoMsg(){var i;const e=null===(i=this.miFormulario.get("puntos_equipo"))||void 0===i?void 0:i.errors;return(null==e?void 0:e.min)?"Los puntos no puenden ser inferiores a 0":(null==e?void 0:e.max)?"Los puntos no pueden ser superiores a 200":""}get puntosRivalMsg(){var i;const e=null===(i=this.miFormulario.get("puntos_rival"))||void 0===i?void 0:i.errors;return(null==e?void 0:e.min)?"Los puntos no puenden ser inferiores a 0":(null==e?void 0:e.max)?"Los puntos no pueden ser superiores a 200":""}error(i){var e,r,l,p;return(null===(r=null===(e=this.miFormulario.controls)||void 0===e?void 0:e[i])||void 0===r?void 0:r.errors)&&(null===(p=null===(l=this.miFormulario.controls)||void 0===l?void 0:l[i])||void 0===p?void 0:p.touched)}guardar(){var i,e,r,l,p;this.miFormulario.invalid?this.miFormulario.markAllAsTouched():(null===(i=this.partido)||void 0===i?void 0:i.id)?(null===(e=this.miFormulario.get("fecha"))||void 0===e||e.setValue((0,c.p6)(null===(r=this.miFormulario.get("fecha"))||void 0===r?void 0:r.value,"yyyy-MM-dd","en")),this.ps.actualizarPartido(this.partido.id,this.miFormulario.getRawValue()).subscribe(v=>{console.log(v),this.router.navigate(["/inicio/partidos"])})):(null===(l=this.miFormulario.get("fecha"))||void 0===l||l.setValue((0,c.p6)(null===(p=this.miFormulario.get("fecha"))||void 0===p?void 0:p.value,"yyyy-MM-dd","en")),this.ps.crearPartido(this.miFormulario.getRawValue()).subscribe(v=>{var f;console.log(null===(f=this.miFormulario.get("fecha"))||void 0===f?void 0:f.value),this.router.navigate(["/inicio/partidos"]),console.log(v)}))}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(C.r),t.Y36(_.H),t.Y36(a.qu),t.Y36(d.F0),t.Y36(d.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-crear-partido"]],decls:3,vars:2,consts:[["class","m-0 vh-100 row justify-content-center align-items-center",4,"ngIf","ngIfElse"],["info",""],[1,"m-0","vh-100","row","justify-content-center","align-items-center"],[1,"loader","col-auto","text-center","p-5"],[1,"text-center","mt-2"],[3,"formGroup","submit"],[1,"row","m-5"],[1,"col-12","col-xs-12","col-sm-12","col-md-12","col-lg-2","mb-3"],[1,"form-text"],[1,"col"],["inputId","integeronly","formControlName","puntos_equipo"],["class","text-danger","id","",4,"ngIf"],[1,"col-8"],["inputId","integeronly","formControlName","puntos_rival"],[1,"col-12","col-xs-12","col-sm-12","col-md-12","col-lg-1","mb-3"],["formControlName","fecha"],[1,"col-12","col-xs-12","col-sm-12","col-md-12","col-lg-4","mb-3"],["formControlName","hora","type","time","id","appt","name","appt","min","09:00","max","21:00","required","",1,"form-control"],["name","campo","id","campo","formControlName","campo",1,"form-control"],["value",""],["value","local"],["value","visitante"],[1,"col-12","col-xs-12","col-sm-12","col-md-12","col-lg-3","mb-3"],["name","rival","id","rival","formControlName","rival_id",1,"form-control"],[3,"value",4,"ngFor","ngForOf"],["styleClass","p-button-sm","label","Ver rivales","routerLink","/inicio/partidos/listadoRivales","type","button","icon","pi pi-plus","iconPos","right",1,"m-1"],[1,"m-5"],["label","Guardar","type","submit","icon","pi pi-check","iconPos","right",1,"float-end"],["id","",1,"text-danger"],[3,"value"]],template:function(i,e){if(1&i&&(t.YNc(0,S,2,0,"div",0),t.YNc(1,K,53,9,"ng-template",null,1,t.W1O)),2&i){const r=t.MAs(2);t.Q6J("ngIf",!e.aux)("ngIfElse",r)}},directives:[c.O5,a._Y,a.JL,a.sg,z.Rn,a.JJ,a.u,H.f,a.Fj,a.Q7,a.EJ,a.YN,a.Kr,c.sg,g.zx,d.rH],styles:[".loader[_ngcontent-%COMP%]{width:48px;height:48px;border:5px dotted #bcd8c1;border-radius:50%;display:inline-block;position:relative;box-sizing:border-box;animation:rotation 2s linear infinite}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]}),o})();var tt=s(1424),it=s(2340),ot=s(520);let et=(()=>{class o{constructor(i){this.http=i,this.uploaded=new t.vpe,this.baseUrl=it.N.api}ngOnInit(){}upload(i){var e;const r=null===(e=i.target.files)||void 0===e?void 0:e.item(0),l=new FormData;l.append("image",r),this.http.post(`${this.baseUrl}/upload`,l).subscribe(p=>{this.uploaded.emit(p.url)})}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(ot.eN))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-upload-image"]],outputs:{uploaded:"uploaded"},decls:3,vars:0,consts:[[1,"btn","btn-primary"],["type","file","hidden","",3,"change"]],template:function(i,e){1&i&&(t.TgZ(0,"label",0),t._uU(1," Upload "),t.TgZ(2,"input",1),t.NdJ("change",function(l){return e.upload(l)}),t.qZA()())},styles:[""]}),o})();function nt(o,n){1&o&&(t.TgZ(0,"div",2),t._UZ(1,"span",3),t.qZA())}function rt(o,n){if(1&o&&(t.TgZ(0,"small",16),t._uU(1),t.qZA()),2&o){const i=t.oxw(2);t.xp6(1),t.hij("",i.nombreMsg," ")}}function at(o,n){if(1&o){const i=t.EpF();t.TgZ(0,"h2",4),t._uU(1),t.qZA(),t.TgZ(2,"form",5),t.NdJ("submit",function(){return t.CHM(i),t.oxw().guardar()}),t.TgZ(3,"div",6),t._UZ(4,"input",7),t.TgZ(5,"label",8),t._uU(6,"Nombre"),t.qZA(),t.YNc(7,rt,2,1,"small",9),t.qZA(),t.TgZ(8,"div",10)(9,"span",11),t._uU(10,"Imagen"),t.qZA(),t.TgZ(11,"div",12),t._UZ(12,"input",13),t.TgZ(13,"app-upload-image",14),t.NdJ("uploaded",function(r){return t.CHM(i),t.oxw().miFormulario.patchValue({image:r})}),t.qZA()()(),t.TgZ(14,"div",10),t._UZ(15,"p-button",15),t.qZA()()}if(2&o){const i=t.oxw();t.xp6(1),t.hij("",i.rival?"Editar":"Nuevo"," Rival"),t.xp6(1),t.Q6J("formGroup",i.miFormulario),t.xp6(5),t.Q6J("ngIf",i.error("nombre"))}}let I=(()=>{class o{constructor(i,e,r,l){this.fb=i,this.router=e,this.activatedRoute=r,this.rs=l,this.miFormulario=this.fb.group({nombre:["",[a.kI.required,a.kI.pattern("[a-zA-Z\xc0-\xd6\xd8-\xf6\xf8-\xff]+.?(( |-)[a-zA-Z\xc0-\xd6\xd8-\xf6\xf8-\xff]+.?)*")]],image:[""]}),this.rival=void 0,this.aux=!1}ngOnInit(){this.router.url.includes("editarRival")?this.activatedRoute.params.pipe((0,q.w)(({id:i})=>this.rs.getRival(i))).subscribe(i=>{this.aux=!0,this.rival=i,this.miFormulario.reset({image:this.rival.image,nombre:this.rival.nombre})}):this.aux=!0}get nombreMsg(){var i;const e=null===(i=this.miFormulario.get("nombre"))||void 0===i?void 0:i.errors;return(null==e?void 0:e.required)?"Introduce un nombre":(null==e?void 0:e.pattern)?"Introduce un nombre v\xe1lido":""}error(i){var e,r,l,p;return(null===(r=null===(e=this.miFormulario.controls)||void 0===e?void 0:e[i])||void 0===r?void 0:r.errors)&&(null===(p=null===(l=this.miFormulario.controls)||void 0===l?void 0:l[i])||void 0===p?void 0:p.touched)}guardar(){var i;this.miFormulario.invalid?this.miFormulario.markAllAsTouched():(null===(i=this.rival)||void 0===i?void 0:i.id)?this.rs.actualizarRival(this.rival.id,this.miFormulario.getRawValue()).subscribe(e=>{console.log(e),this.router.navigate(["/inicio/partidos/listadoRivales"])}):this.rs.crearRival(this.miFormulario.getRawValue()).subscribe(e=>{console.log(e),this.router.navigate(["/inicio/partidos/listadoRivales"])})}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(a.qu),t.Y36(d.F0),t.Y36(d.gz),t.Y36(_.H))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-crear-rival"]],decls:3,vars:2,consts:[["class","m-0 vh-100 row justify-content-center align-items-center",4,"ngIf","ngIfElse"],["info",""],[1,"m-0","vh-100","row","justify-content-center","align-items-center"],[1,"loader","col-auto","text-center","p-5"],[1,"text-center","mt-2"],[3,"formGroup","submit"],[1,"row","m-5","p-float-label"],["formControlName","nombre","type","text","pInputText","",1,"p-inputtext-lg"],["for","float-input"],["class","text-danger","id","",4,"ngIf"],[1,"m-5"],[1,"form-text"],[1,"input-group"],["formControlName","image","name","image",1,"form-control"],[3,"uploaded"],["label","Guardar","type","submit","icon","pi pi-check","iconPos","right",1,"float-end"],["id","",1,"text-danger"]],template:function(i,e){if(1&i&&(t.YNc(0,nt,2,0,"div",0),t.YNc(1,at,16,3,"ng-template",null,1,t.W1O)),2&i){const r=t.MAs(2);t.Q6J("ngIf",!e.aux)("ngIfElse",r)}},directives:[c.O5,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,tt.o,et,g.zx],styles:[".loader[_ngcontent-%COMP%]{width:48px;height:48px;border:5px dotted #bcd8c1;border-radius:50%;display:inline-block;position:relative;box-sizing:border-box;animation:rotation 2s linear infinite}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}"]}),o})();function st(o,n){1&o&&(t.TgZ(0,"div",2),t._UZ(1,"span",3),t.qZA())}function lt(o,n){1&o&&(t.TgZ(0,"div",8)(1,"span",9),t._UZ(2,"button",10),t.qZA()())}function pt(o,n){1&o&&(t.TgZ(0,"div",11)(1,"h2"),t._uU(2,"No hay rivales disponibles"),t.qZA()())}function ct(o,n){1&o&&(t.TgZ(0,"tr")(1,"th",17),t._uU(2,"Escudo"),t.qZA(),t.TgZ(3,"th",17),t._uU(4,"Nombre"),t.qZA(),t._UZ(5,"th",17),t.qZA())}const R=function(){return{"margin-left":".5em"}},mt=function(o){return["/inicio/partidos/editarRival",o]};function dt(o,n){if(1&o){const i=t.EpF();t.TgZ(0,"tr")(1,"td",17),t._UZ(2,"img",18),t.qZA(),t.TgZ(3,"td",17),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._UZ(6,"p-button",19),t.TgZ(7,"p-button",20),t.NdJ("click",function(){const l=t.CHM(i).$implicit;return t.oxw(3).confirm2(l)}),t.qZA()()()}if(2&o){const i=n.$implicit;t.xp6(2),t.Q6J("src",i.image,t.LSH),t.xp6(2),t.Oqu(i.nombre),t.xp6(2),t.Akn(t.DdM(7,R)),t.Q6J("routerLink",t.VKq(8,mt,i.id)),t.xp6(1),t.Akn(t.DdM(10,R))}}function ut(o,n){if(1&o&&(t._UZ(0,"p-confirmDialog",12),t.TgZ(1,"div",13)(2,"p-table",14),t.YNc(3,ct,6,0,"ng-template",15),t.YNc(4,dt,8,11,"ng-template",16),t.qZA()()),2&o){const i=t.oxw(2);t.xp6(2),t.Q6J("value",i.rivales)("scrollable",!0)}}function gt(o,n){if(1&o&&(t._UZ(0,"p-messages",4),t.YNc(1,lt,3,0,"div",5),t.YNc(2,pt,3,0,"div",6),t.YNc(3,ut,5,2,"ng-template",null,7,t.W1O)),2&o){const i=t.MAs(4),e=t.oxw();t.Q6J("value",e.msgs),t.xp6(1),t.Q6J("ngIf",e.authUser.role_id<3),t.xp6(1),t.Q6J("ngIf",0===e.rivales.length)("ngIfElse",i)}}let _t=(()=>{class o{constructor(i,e,r){this.rs=i,this.as=e,this.confirmationService=r,this.msgs=[],this.aux=!1,this.rivales=[]}ngOnInit(){this.authUser=this.as.auth,this.rs.rivalesEquipo().subscribe(i=>{this.aux=!0,this.rivales=i})}confirm2(i){this.confirmationService.confirm({message:`\xbfEst\xe1s seguro de eliminar a ${i.nombre}? Se eliminar\xe1n todos los partidos`,header:"Eliminar Rival",icon:"pi pi-info-circle",accept:()=>{this.rs.borrarRival(i.id).pipe((0,x.b)(e=>this.aux=!1),(0,Z.U)(e=>this.msgs=[{severity:"info",summary:"Confirmado",detail:`${i.nombre} eliminado`}])).subscribe(e=>{this.rs.rivalesEquipo().subscribe(r=>{this.aux=!0,this.rivales=r})})}})}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(_.H),t.Y36(b.e),t.Y36(u.YP))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-listado-rivales"]],features:[t._Bn([u.YP])],decls:3,vars:2,consts:[["class","m-0 vh-100 row justify-content-center align-items-center",4,"ngIf","ngIfElse"],["info",""],[1,"m-0","vh-100","row","justify-content-center","align-items-center"],[1,"loader","col-auto","text-center","p-5"],[3,"value"],["class","row text-center m-4",4,"ngIf"],["class","frase",4,"ngIf","ngIfElse"],["tabla",""],[1,"row","text-center","m-4"],["span","",1,"p-buttonset","text-center"],["pButton","","type","button","routerLink","/inicio/partidos/crearRival","label","A\xf1adir rival","icon","pi pi-plus","iconPos","right"],[1,"frase"],["header","Confirmation","icon","pi pi-exclamation-triangle"],[1,"content"],["scrollHeight","100%",3,"value","scrollable"],["class","xddd","pTemplate","header"],["pTemplate","body"],[2,"min-width","200px"],["alt","",3,"src"],["label","Editar","icon","pi pi-pencil","iconPos","right","styleClass","p-button-secondary",3,"routerLink"],["icon","pi pi-times","label","Eliminar","iconPos","right","styleClass","p-button-danger",3,"click"]],template:function(i,e){if(1&i&&(t.YNc(0,st,2,0,"div",0),t.YNc(1,gt,5,4,"ng-template",null,1,t.W1O)),2&i){const r=t.MAs(2);t.Q6J("ngIf",!e.aux)("ngIfElse",r)}},directives:[c.O5,T.V,g.Hq,d.rH,A.Q,U.iA,u.jx,g.zx],styles:['@import"https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@700&display=swap";img[_ngcontent-%COMP%]{width:100px}.loader[_ngcontent-%COMP%]{width:48px;height:48px;border:5px dotted #bcd8c1;border-radius:50%;display:inline-block;position:relative;box-sizing:border-box;animation:rotation 2s linear infinite}@keyframes rotation{0%{transform:rotate(0)}to{transform:rotate(360deg)}}h2[_ngcontent-%COMP%]{font-family:"Baloo Tamma 2";text-align:center;width:100%;margin:-40px auto 0;color:#fff;font-size:5vw;letter-spacing:5px;top:50%;position:absolute;text-shadow:-1px -1px 0px #bcd8c1,3px 3px 0px #bcd8c1,6px 6px 0px #98d4a3}']}),o})();var m=s(7538);const vt=[{path:"",children:[{path:"",component:k},{path:"crearPartido",component:P,canActivate:[m.W],canLoad:[m.W]},{path:"editarPartido/:id",component:P,canActivate:[m.W],canLoad:[m.W]},{path:"listadoRivales",component:_t,canActivate:[m.W],canLoad:[m.W]},{path:"crearRival",component:I,canActivate:[m.W],canLoad:[m.W]},{path:"editarRival/:id",component:I,canActivate:[m.W],canLoad:[m.W]},{path:"**",redirectTo:""}]}];let ft=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.Bz.forChild(vt)],d.Bz]}),o})();var ht=s(6559);let xt=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.ez,ft,ht.g]]}),o})()}}]);