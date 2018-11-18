// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.demos.demo_splash');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('material_ui');
goog.require('material_ui_icons');
goog.require('example.utils.http_fx');
goog.require('example.utils.theme');
goog.require('reagent.impl.template');
example.demos.demo_splash.global$module$material_ui = goog.global["MaterialUI"];
example.demos.demo_splash.global$module$material_ui_icons = goog.global["MaterialUIIcons"];
example.demos.demo_splash.h2_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(20),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"normal",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Helvetica",new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)], null);
example.demos.demo_splash.demo_splash = (function example$demos$demo_splash$demo_splash(p__22715){
var map__22716 = p__22715;
var map__22716__$1 = ((((!((map__22716 == null)))?(((((map__22716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22716):map__22716);
var props = map__22716__$1;
var classes = cljs.core.get.call(null,map__22716__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
return ((function (map__22716,map__22716__$1,props,classes){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"margin","margin",-995903681),(50),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(10)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/material-ui-logo.svg",new cljs.core.Keyword(null,"width","width",-384071477),(250)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(320),new cljs.core.Keyword(null,"color","color",1011675173),example.utils.theme.r2d2_blue], null)], null),"&"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/R2D2.svg",new cljs.core.Keyword(null,"width","width",-384071477),(150)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Helvetica",new cljs.core.Keyword(null,"color","color",1011675173),"#666"], null)], null),"MATERIAL-UI"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),example.demos.demo_splash.h2_style,"React components that implement Google's Material Design"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),example.demos.demo_splash.h2_style,"with ClojureScript using Reagent, Re-Frame & the Starwars API"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),example.demos.demo_splash.h2_style,"May the ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"https://clojuredocs.org/clojure.core/force",new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword(null,"color","color",1011675173),example.utils.theme.r2d2_blue], null)], null),"force"], null)," be with you"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(20)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),example.demos.demo_splash.global$module$material_ui.Button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variant","variant",-424354234),"outlined",new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null),new cljs.core.Keyword(null,"class","class",-2030961996),classes.button,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__22716,map__22716__$1,props,classes){
return (function (ev){
return example.utils.http_fx.set_location.call(null,"/#/demos/button");
});})(map__22716,map__22716__$1,props,classes))
], null),"Get Started"], null)], null)], null);
});
;})(map__22716,map__22716__$1,props,classes))
});

//# sourceMappingURL=demo_splash.js.map?rel=1542326833448