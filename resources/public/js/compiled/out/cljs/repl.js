// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24607_24621 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24608_24622 = null;
var count__24609_24623 = (0);
var i__24610_24624 = (0);
while(true){
if((i__24610_24624 < count__24609_24623)){
var f_24625 = cljs.core._nth.call(null,chunk__24608_24622,i__24610_24624);
cljs.core.println.call(null,"  ",f_24625);

var G__24626 = seq__24607_24621;
var G__24627 = chunk__24608_24622;
var G__24628 = count__24609_24623;
var G__24629 = (i__24610_24624 + (1));
seq__24607_24621 = G__24626;
chunk__24608_24622 = G__24627;
count__24609_24623 = G__24628;
i__24610_24624 = G__24629;
continue;
} else {
var temp__4657__auto___24630 = cljs.core.seq.call(null,seq__24607_24621);
if(temp__4657__auto___24630){
var seq__24607_24631__$1 = temp__4657__auto___24630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24607_24631__$1)){
var c__19173__auto___24632 = cljs.core.chunk_first.call(null,seq__24607_24631__$1);
var G__24633 = cljs.core.chunk_rest.call(null,seq__24607_24631__$1);
var G__24634 = c__19173__auto___24632;
var G__24635 = cljs.core.count.call(null,c__19173__auto___24632);
var G__24636 = (0);
seq__24607_24621 = G__24633;
chunk__24608_24622 = G__24634;
count__24609_24623 = G__24635;
i__24610_24624 = G__24636;
continue;
} else {
var f_24637 = cljs.core.first.call(null,seq__24607_24631__$1);
cljs.core.println.call(null,"  ",f_24637);

var G__24638 = cljs.core.next.call(null,seq__24607_24631__$1);
var G__24639 = null;
var G__24640 = (0);
var G__24641 = (0);
seq__24607_24621 = G__24638;
chunk__24608_24622 = G__24639;
count__24609_24623 = G__24640;
i__24610_24624 = G__24641;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24642 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18370__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24642);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24642)))?cljs.core.second.call(null,arglists_24642):arglists_24642));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24611 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24612 = null;
var count__24613 = (0);
var i__24614 = (0);
while(true){
if((i__24614 < count__24613)){
var vec__24615 = cljs.core._nth.call(null,chunk__24612,i__24614);
var name = cljs.core.nth.call(null,vec__24615,(0),null);
var map__24616 = cljs.core.nth.call(null,vec__24615,(1),null);
var map__24616__$1 = ((((!((map__24616 == null)))?((((map__24616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24616):map__24616);
var doc = cljs.core.get.call(null,map__24616__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24616__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24643 = seq__24611;
var G__24644 = chunk__24612;
var G__24645 = count__24613;
var G__24646 = (i__24614 + (1));
seq__24611 = G__24643;
chunk__24612 = G__24644;
count__24613 = G__24645;
i__24614 = G__24646;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24611);
if(temp__4657__auto__){
var seq__24611__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24611__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__24611__$1);
var G__24647 = cljs.core.chunk_rest.call(null,seq__24611__$1);
var G__24648 = c__19173__auto__;
var G__24649 = cljs.core.count.call(null,c__19173__auto__);
var G__24650 = (0);
seq__24611 = G__24647;
chunk__24612 = G__24648;
count__24613 = G__24649;
i__24614 = G__24650;
continue;
} else {
var vec__24618 = cljs.core.first.call(null,seq__24611__$1);
var name = cljs.core.nth.call(null,vec__24618,(0),null);
var map__24619 = cljs.core.nth.call(null,vec__24618,(1),null);
var map__24619__$1 = ((((!((map__24619 == null)))?((((map__24619.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24619.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24619):map__24619);
var doc = cljs.core.get.call(null,map__24619__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24619__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24651 = cljs.core.next.call(null,seq__24611__$1);
var G__24652 = null;
var G__24653 = (0);
var G__24654 = (0);
seq__24611 = G__24651;
chunk__24612 = G__24652;
count__24613 = G__24653;
i__24614 = G__24654;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1460649304006