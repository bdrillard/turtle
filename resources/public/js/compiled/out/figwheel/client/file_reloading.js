// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18370__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18370__auto__){
return or__18370__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18370__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23583_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23583_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23588 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23589 = null;
var count__23590 = (0);
var i__23591 = (0);
while(true){
if((i__23591 < count__23590)){
var n = cljs.core._nth.call(null,chunk__23589,i__23591);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23592 = seq__23588;
var G__23593 = chunk__23589;
var G__23594 = count__23590;
var G__23595 = (i__23591 + (1));
seq__23588 = G__23592;
chunk__23589 = G__23593;
count__23590 = G__23594;
i__23591 = G__23595;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23588);
if(temp__4657__auto__){
var seq__23588__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23588__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__23588__$1);
var G__23596 = cljs.core.chunk_rest.call(null,seq__23588__$1);
var G__23597 = c__19173__auto__;
var G__23598 = cljs.core.count.call(null,c__19173__auto__);
var G__23599 = (0);
seq__23588 = G__23596;
chunk__23589 = G__23597;
count__23590 = G__23598;
i__23591 = G__23599;
continue;
} else {
var n = cljs.core.first.call(null,seq__23588__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23600 = cljs.core.next.call(null,seq__23588__$1);
var G__23601 = null;
var G__23602 = (0);
var G__23603 = (0);
seq__23588 = G__23600;
chunk__23589 = G__23601;
count__23590 = G__23602;
i__23591 = G__23603;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23642_23649 = cljs.core.seq.call(null,deps);
var chunk__23643_23650 = null;
var count__23644_23651 = (0);
var i__23645_23652 = (0);
while(true){
if((i__23645_23652 < count__23644_23651)){
var dep_23653 = cljs.core._nth.call(null,chunk__23643_23650,i__23645_23652);
topo_sort_helper_STAR_.call(null,dep_23653,(depth + (1)),state);

var G__23654 = seq__23642_23649;
var G__23655 = chunk__23643_23650;
var G__23656 = count__23644_23651;
var G__23657 = (i__23645_23652 + (1));
seq__23642_23649 = G__23654;
chunk__23643_23650 = G__23655;
count__23644_23651 = G__23656;
i__23645_23652 = G__23657;
continue;
} else {
var temp__4657__auto___23658 = cljs.core.seq.call(null,seq__23642_23649);
if(temp__4657__auto___23658){
var seq__23642_23659__$1 = temp__4657__auto___23658;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23642_23659__$1)){
var c__19173__auto___23660 = cljs.core.chunk_first.call(null,seq__23642_23659__$1);
var G__23661 = cljs.core.chunk_rest.call(null,seq__23642_23659__$1);
var G__23662 = c__19173__auto___23660;
var G__23663 = cljs.core.count.call(null,c__19173__auto___23660);
var G__23664 = (0);
seq__23642_23649 = G__23661;
chunk__23643_23650 = G__23662;
count__23644_23651 = G__23663;
i__23645_23652 = G__23664;
continue;
} else {
var dep_23665 = cljs.core.first.call(null,seq__23642_23659__$1);
topo_sort_helper_STAR_.call(null,dep_23665,(depth + (1)),state);

var G__23666 = cljs.core.next.call(null,seq__23642_23659__$1);
var G__23667 = null;
var G__23668 = (0);
var G__23669 = (0);
seq__23642_23649 = G__23666;
chunk__23643_23650 = G__23667;
count__23644_23651 = G__23668;
i__23645_23652 = G__23669;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23646){
var vec__23648 = p__23646;
var x = cljs.core.nth.call(null,vec__23648,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23648,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23648,x,xs,get_deps__$1){
return (function (p1__23604_SHARP_){
return clojure.set.difference.call(null,p1__23604_SHARP_,x);
});})(vec__23648,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23682 = cljs.core.seq.call(null,provides);
var chunk__23683 = null;
var count__23684 = (0);
var i__23685 = (0);
while(true){
if((i__23685 < count__23684)){
var prov = cljs.core._nth.call(null,chunk__23683,i__23685);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23686_23694 = cljs.core.seq.call(null,requires);
var chunk__23687_23695 = null;
var count__23688_23696 = (0);
var i__23689_23697 = (0);
while(true){
if((i__23689_23697 < count__23688_23696)){
var req_23698 = cljs.core._nth.call(null,chunk__23687_23695,i__23689_23697);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23698,prov);

var G__23699 = seq__23686_23694;
var G__23700 = chunk__23687_23695;
var G__23701 = count__23688_23696;
var G__23702 = (i__23689_23697 + (1));
seq__23686_23694 = G__23699;
chunk__23687_23695 = G__23700;
count__23688_23696 = G__23701;
i__23689_23697 = G__23702;
continue;
} else {
var temp__4657__auto___23703 = cljs.core.seq.call(null,seq__23686_23694);
if(temp__4657__auto___23703){
var seq__23686_23704__$1 = temp__4657__auto___23703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23686_23704__$1)){
var c__19173__auto___23705 = cljs.core.chunk_first.call(null,seq__23686_23704__$1);
var G__23706 = cljs.core.chunk_rest.call(null,seq__23686_23704__$1);
var G__23707 = c__19173__auto___23705;
var G__23708 = cljs.core.count.call(null,c__19173__auto___23705);
var G__23709 = (0);
seq__23686_23694 = G__23706;
chunk__23687_23695 = G__23707;
count__23688_23696 = G__23708;
i__23689_23697 = G__23709;
continue;
} else {
var req_23710 = cljs.core.first.call(null,seq__23686_23704__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23710,prov);

var G__23711 = cljs.core.next.call(null,seq__23686_23704__$1);
var G__23712 = null;
var G__23713 = (0);
var G__23714 = (0);
seq__23686_23694 = G__23711;
chunk__23687_23695 = G__23712;
count__23688_23696 = G__23713;
i__23689_23697 = G__23714;
continue;
}
} else {
}
}
break;
}

var G__23715 = seq__23682;
var G__23716 = chunk__23683;
var G__23717 = count__23684;
var G__23718 = (i__23685 + (1));
seq__23682 = G__23715;
chunk__23683 = G__23716;
count__23684 = G__23717;
i__23685 = G__23718;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23682);
if(temp__4657__auto__){
var seq__23682__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23682__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__23682__$1);
var G__23719 = cljs.core.chunk_rest.call(null,seq__23682__$1);
var G__23720 = c__19173__auto__;
var G__23721 = cljs.core.count.call(null,c__19173__auto__);
var G__23722 = (0);
seq__23682 = G__23719;
chunk__23683 = G__23720;
count__23684 = G__23721;
i__23685 = G__23722;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23682__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23690_23723 = cljs.core.seq.call(null,requires);
var chunk__23691_23724 = null;
var count__23692_23725 = (0);
var i__23693_23726 = (0);
while(true){
if((i__23693_23726 < count__23692_23725)){
var req_23727 = cljs.core._nth.call(null,chunk__23691_23724,i__23693_23726);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23727,prov);

var G__23728 = seq__23690_23723;
var G__23729 = chunk__23691_23724;
var G__23730 = count__23692_23725;
var G__23731 = (i__23693_23726 + (1));
seq__23690_23723 = G__23728;
chunk__23691_23724 = G__23729;
count__23692_23725 = G__23730;
i__23693_23726 = G__23731;
continue;
} else {
var temp__4657__auto___23732__$1 = cljs.core.seq.call(null,seq__23690_23723);
if(temp__4657__auto___23732__$1){
var seq__23690_23733__$1 = temp__4657__auto___23732__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23690_23733__$1)){
var c__19173__auto___23734 = cljs.core.chunk_first.call(null,seq__23690_23733__$1);
var G__23735 = cljs.core.chunk_rest.call(null,seq__23690_23733__$1);
var G__23736 = c__19173__auto___23734;
var G__23737 = cljs.core.count.call(null,c__19173__auto___23734);
var G__23738 = (0);
seq__23690_23723 = G__23735;
chunk__23691_23724 = G__23736;
count__23692_23725 = G__23737;
i__23693_23726 = G__23738;
continue;
} else {
var req_23739 = cljs.core.first.call(null,seq__23690_23733__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23739,prov);

var G__23740 = cljs.core.next.call(null,seq__23690_23733__$1);
var G__23741 = null;
var G__23742 = (0);
var G__23743 = (0);
seq__23690_23723 = G__23740;
chunk__23691_23724 = G__23741;
count__23692_23725 = G__23742;
i__23693_23726 = G__23743;
continue;
}
} else {
}
}
break;
}

var G__23744 = cljs.core.next.call(null,seq__23682__$1);
var G__23745 = null;
var G__23746 = (0);
var G__23747 = (0);
seq__23682 = G__23744;
chunk__23683 = G__23745;
count__23684 = G__23746;
i__23685 = G__23747;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23752_23756 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23753_23757 = null;
var count__23754_23758 = (0);
var i__23755_23759 = (0);
while(true){
if((i__23755_23759 < count__23754_23758)){
var ns_23760 = cljs.core._nth.call(null,chunk__23753_23757,i__23755_23759);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23760);

var G__23761 = seq__23752_23756;
var G__23762 = chunk__23753_23757;
var G__23763 = count__23754_23758;
var G__23764 = (i__23755_23759 + (1));
seq__23752_23756 = G__23761;
chunk__23753_23757 = G__23762;
count__23754_23758 = G__23763;
i__23755_23759 = G__23764;
continue;
} else {
var temp__4657__auto___23765 = cljs.core.seq.call(null,seq__23752_23756);
if(temp__4657__auto___23765){
var seq__23752_23766__$1 = temp__4657__auto___23765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23752_23766__$1)){
var c__19173__auto___23767 = cljs.core.chunk_first.call(null,seq__23752_23766__$1);
var G__23768 = cljs.core.chunk_rest.call(null,seq__23752_23766__$1);
var G__23769 = c__19173__auto___23767;
var G__23770 = cljs.core.count.call(null,c__19173__auto___23767);
var G__23771 = (0);
seq__23752_23756 = G__23768;
chunk__23753_23757 = G__23769;
count__23754_23758 = G__23770;
i__23755_23759 = G__23771;
continue;
} else {
var ns_23772 = cljs.core.first.call(null,seq__23752_23766__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23772);

var G__23773 = cljs.core.next.call(null,seq__23752_23766__$1);
var G__23774 = null;
var G__23775 = (0);
var G__23776 = (0);
seq__23752_23756 = G__23773;
chunk__23753_23757 = G__23774;
count__23754_23758 = G__23775;
i__23755_23759 = G__23776;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18370__auto__ = goog.require__;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23777__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23777 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23778__i = 0, G__23778__a = new Array(arguments.length -  0);
while (G__23778__i < G__23778__a.length) {G__23778__a[G__23778__i] = arguments[G__23778__i + 0]; ++G__23778__i;}
  args = new cljs.core.IndexedSeq(G__23778__a,0);
} 
return G__23777__delegate.call(this,args);};
G__23777.cljs$lang$maxFixedArity = 0;
G__23777.cljs$lang$applyTo = (function (arglist__23779){
var args = cljs.core.seq(arglist__23779);
return G__23777__delegate(args);
});
G__23777.cljs$core$IFn$_invoke$arity$variadic = G__23777__delegate;
return G__23777;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23781 = cljs.core._EQ_;
var expr__23782 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23781.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23782))){
var path_parts = ((function (pred__23781,expr__23782){
return (function (p1__23780_SHARP_){
return clojure.string.split.call(null,p1__23780_SHARP_,/[\/\\]/);
});})(pred__23781,expr__23782))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23781,expr__23782){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23784){if((e23784 instanceof Error)){
var e = e23784;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23784;

}
}})());
});
;})(path_parts,sep,root,pred__23781,expr__23782))
} else {
if(cljs.core.truth_(pred__23781.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23782))){
return ((function (pred__23781,expr__23782){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23781,expr__23782){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23781,expr__23782))
);

return deferred.addErrback(((function (deferred,pred__23781,expr__23782){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23781,expr__23782))
);
});
;})(pred__23781,expr__23782))
} else {
return ((function (pred__23781,expr__23782){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23781,expr__23782))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23785,callback){
var map__23788 = p__23785;
var map__23788__$1 = ((((!((map__23788 == null)))?((((map__23788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23788):map__23788);
var file_msg = map__23788__$1;
var request_url = cljs.core.get.call(null,map__23788__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23788,map__23788__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23788,map__23788__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto__){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto__){
return (function (state_23812){
var state_val_23813 = (state_23812[(1)]);
if((state_val_23813 === (7))){
var inst_23808 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
var statearr_23814_23834 = state_23812__$1;
(statearr_23814_23834[(2)] = inst_23808);

(statearr_23814_23834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (1))){
var state_23812__$1 = state_23812;
var statearr_23815_23835 = state_23812__$1;
(statearr_23815_23835[(2)] = null);

(statearr_23815_23835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (4))){
var inst_23792 = (state_23812[(7)]);
var inst_23792__$1 = (state_23812[(2)]);
var state_23812__$1 = (function (){var statearr_23816 = state_23812;
(statearr_23816[(7)] = inst_23792__$1);

return statearr_23816;
})();
if(cljs.core.truth_(inst_23792__$1)){
var statearr_23817_23836 = state_23812__$1;
(statearr_23817_23836[(1)] = (5));

} else {
var statearr_23818_23837 = state_23812__$1;
(statearr_23818_23837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (6))){
var state_23812__$1 = state_23812;
var statearr_23819_23838 = state_23812__$1;
(statearr_23819_23838[(2)] = null);

(statearr_23819_23838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (3))){
var inst_23810 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23812__$1,inst_23810);
} else {
if((state_val_23813 === (2))){
var state_23812__$1 = state_23812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23812__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23813 === (11))){
var inst_23804 = (state_23812[(2)]);
var state_23812__$1 = (function (){var statearr_23820 = state_23812;
(statearr_23820[(8)] = inst_23804);

return statearr_23820;
})();
var statearr_23821_23839 = state_23812__$1;
(statearr_23821_23839[(2)] = null);

(statearr_23821_23839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (9))){
var inst_23798 = (state_23812[(9)]);
var inst_23796 = (state_23812[(10)]);
var inst_23800 = inst_23798.call(null,inst_23796);
var state_23812__$1 = state_23812;
var statearr_23822_23840 = state_23812__$1;
(statearr_23822_23840[(2)] = inst_23800);

(statearr_23822_23840[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (5))){
var inst_23792 = (state_23812[(7)]);
var inst_23794 = figwheel.client.file_reloading.blocking_load.call(null,inst_23792);
var state_23812__$1 = state_23812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23812__$1,(8),inst_23794);
} else {
if((state_val_23813 === (10))){
var inst_23796 = (state_23812[(10)]);
var inst_23802 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23796);
var state_23812__$1 = state_23812;
var statearr_23823_23841 = state_23812__$1;
(statearr_23823_23841[(2)] = inst_23802);

(statearr_23823_23841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (8))){
var inst_23798 = (state_23812[(9)]);
var inst_23792 = (state_23812[(7)]);
var inst_23796 = (state_23812[(2)]);
var inst_23797 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23798__$1 = cljs.core.get.call(null,inst_23797,inst_23792);
var state_23812__$1 = (function (){var statearr_23824 = state_23812;
(statearr_23824[(9)] = inst_23798__$1);

(statearr_23824[(10)] = inst_23796);

return statearr_23824;
})();
if(cljs.core.truth_(inst_23798__$1)){
var statearr_23825_23842 = state_23812__$1;
(statearr_23825_23842[(1)] = (9));

} else {
var statearr_23826_23843 = state_23812__$1;
(statearr_23826_23843[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__20640__auto__))
;
return ((function (switch__20528__auto__,c__20640__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20529__auto__ = null;
var figwheel$client$file_reloading$state_machine__20529__auto____0 = (function (){
var statearr_23830 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23830[(0)] = figwheel$client$file_reloading$state_machine__20529__auto__);

(statearr_23830[(1)] = (1));

return statearr_23830;
});
var figwheel$client$file_reloading$state_machine__20529__auto____1 = (function (state_23812){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_23812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e23831){if((e23831 instanceof Object)){
var ex__20532__auto__ = e23831;
var statearr_23832_23844 = state_23812;
(statearr_23832_23844[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23845 = state_23812;
state_23812 = G__23845;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20529__auto__ = function(state_23812){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20529__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20529__auto____1.call(this,state_23812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20529__auto____0;
figwheel$client$file_reloading$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20529__auto____1;
return figwheel$client$file_reloading$state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto__))
})();
var state__20642__auto__ = (function (){var statearr_23833 = f__20641__auto__.call(null);
(statearr_23833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto__);

return statearr_23833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto__))
);

return c__20640__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23846,callback){
var map__23849 = p__23846;
var map__23849__$1 = ((((!((map__23849 == null)))?((((map__23849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23849):map__23849);
var file_msg = map__23849__$1;
var namespace = cljs.core.get.call(null,map__23849__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23849,map__23849__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23849,map__23849__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23851){
var map__23854 = p__23851;
var map__23854__$1 = ((((!((map__23854 == null)))?((((map__23854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23854):map__23854);
var file_msg = map__23854__$1;
var namespace = cljs.core.get.call(null,map__23854__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18358__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18358__auto__){
var or__18370__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
var or__18370__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18370__auto____$1)){
return or__18370__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18358__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23856,callback){
var map__23859 = p__23856;
var map__23859__$1 = ((((!((map__23859 == null)))?((((map__23859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23859):map__23859);
var file_msg = map__23859__$1;
var request_url = cljs.core.get.call(null,map__23859__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23859__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20640__auto___23947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto___23947,out){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto___23947,out){
return (function (state_23929){
var state_val_23930 = (state_23929[(1)]);
if((state_val_23930 === (1))){
var inst_23907 = cljs.core.nth.call(null,files,(0),null);
var inst_23908 = cljs.core.nthnext.call(null,files,(1));
var inst_23909 = files;
var state_23929__$1 = (function (){var statearr_23931 = state_23929;
(statearr_23931[(7)] = inst_23907);

(statearr_23931[(8)] = inst_23909);

(statearr_23931[(9)] = inst_23908);

return statearr_23931;
})();
var statearr_23932_23948 = state_23929__$1;
(statearr_23932_23948[(2)] = null);

(statearr_23932_23948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23930 === (2))){
var inst_23912 = (state_23929[(10)]);
var inst_23909 = (state_23929[(8)]);
var inst_23912__$1 = cljs.core.nth.call(null,inst_23909,(0),null);
var inst_23913 = cljs.core.nthnext.call(null,inst_23909,(1));
var inst_23914 = (inst_23912__$1 == null);
var inst_23915 = cljs.core.not.call(null,inst_23914);
var state_23929__$1 = (function (){var statearr_23933 = state_23929;
(statearr_23933[(11)] = inst_23913);

(statearr_23933[(10)] = inst_23912__$1);

return statearr_23933;
})();
if(inst_23915){
var statearr_23934_23949 = state_23929__$1;
(statearr_23934_23949[(1)] = (4));

} else {
var statearr_23935_23950 = state_23929__$1;
(statearr_23935_23950[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23930 === (3))){
var inst_23927 = (state_23929[(2)]);
var state_23929__$1 = state_23929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23929__$1,inst_23927);
} else {
if((state_val_23930 === (4))){
var inst_23912 = (state_23929[(10)]);
var inst_23917 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23912);
var state_23929__$1 = state_23929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23929__$1,(7),inst_23917);
} else {
if((state_val_23930 === (5))){
var inst_23923 = cljs.core.async.close_BANG_.call(null,out);
var state_23929__$1 = state_23929;
var statearr_23936_23951 = state_23929__$1;
(statearr_23936_23951[(2)] = inst_23923);

(statearr_23936_23951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23930 === (6))){
var inst_23925 = (state_23929[(2)]);
var state_23929__$1 = state_23929;
var statearr_23937_23952 = state_23929__$1;
(statearr_23937_23952[(2)] = inst_23925);

(statearr_23937_23952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23930 === (7))){
var inst_23913 = (state_23929[(11)]);
var inst_23919 = (state_23929[(2)]);
var inst_23920 = cljs.core.async.put_BANG_.call(null,out,inst_23919);
var inst_23909 = inst_23913;
var state_23929__$1 = (function (){var statearr_23938 = state_23929;
(statearr_23938[(8)] = inst_23909);

(statearr_23938[(12)] = inst_23920);

return statearr_23938;
})();
var statearr_23939_23953 = state_23929__$1;
(statearr_23939_23953[(2)] = null);

(statearr_23939_23953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__20640__auto___23947,out))
;
return ((function (switch__20528__auto__,c__20640__auto___23947,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20529__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20529__auto____0 = (function (){
var statearr_23943 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23943[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20529__auto__);

(statearr_23943[(1)] = (1));

return statearr_23943;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20529__auto____1 = (function (state_23929){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_23929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e23944){if((e23944 instanceof Object)){
var ex__20532__auto__ = e23944;
var statearr_23945_23954 = state_23929;
(statearr_23945_23954[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23955 = state_23929;
state_23929 = G__23955;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20529__auto__ = function(state_23929){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20529__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20529__auto____1.call(this,state_23929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20529__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20529__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto___23947,out))
})();
var state__20642__auto__ = (function (){var statearr_23946 = f__20641__auto__.call(null);
(statearr_23946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___23947);

return statearr_23946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto___23947,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23956,opts){
var map__23960 = p__23956;
var map__23960__$1 = ((((!((map__23960 == null)))?((((map__23960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23960):map__23960);
var eval_body__$1 = cljs.core.get.call(null,map__23960__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23960__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18358__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18358__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18358__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23962){var e = e23962;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23963_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23963_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23968){
var vec__23969 = p__23968;
var k = cljs.core.nth.call(null,vec__23969,(0),null);
var v = cljs.core.nth.call(null,vec__23969,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23970){
var vec__23971 = p__23970;
var k = cljs.core.nth.call(null,vec__23971,(0),null);
var v = cljs.core.nth.call(null,vec__23971,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23975,p__23976){
var map__24223 = p__23975;
var map__24223__$1 = ((((!((map__24223 == null)))?((((map__24223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24223):map__24223);
var opts = map__24223__$1;
var before_jsload = cljs.core.get.call(null,map__24223__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__24223__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__24223__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__24224 = p__23976;
var map__24224__$1 = ((((!((map__24224 == null)))?((((map__24224.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24224.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24224):map__24224);
var msg = map__24224__$1;
var files = cljs.core.get.call(null,map__24224__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__24224__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__24224__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_24377){
var state_val_24378 = (state_24377[(1)]);
if((state_val_24378 === (7))){
var inst_24240 = (state_24377[(7)]);
var inst_24238 = (state_24377[(8)]);
var inst_24239 = (state_24377[(9)]);
var inst_24241 = (state_24377[(10)]);
var inst_24246 = cljs.core._nth.call(null,inst_24239,inst_24241);
var inst_24247 = figwheel.client.file_reloading.eval_body.call(null,inst_24246,opts);
var inst_24248 = (inst_24241 + (1));
var tmp24379 = inst_24240;
var tmp24380 = inst_24238;
var tmp24381 = inst_24239;
var inst_24238__$1 = tmp24380;
var inst_24239__$1 = tmp24381;
var inst_24240__$1 = tmp24379;
var inst_24241__$1 = inst_24248;
var state_24377__$1 = (function (){var statearr_24382 = state_24377;
(statearr_24382[(7)] = inst_24240__$1);

(statearr_24382[(8)] = inst_24238__$1);

(statearr_24382[(9)] = inst_24239__$1);

(statearr_24382[(11)] = inst_24247);

(statearr_24382[(10)] = inst_24241__$1);

return statearr_24382;
})();
var statearr_24383_24469 = state_24377__$1;
(statearr_24383_24469[(2)] = null);

(statearr_24383_24469[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (20))){
var inst_24281 = (state_24377[(12)]);
var inst_24289 = figwheel.client.file_reloading.sort_files.call(null,inst_24281);
var state_24377__$1 = state_24377;
var statearr_24384_24470 = state_24377__$1;
(statearr_24384_24470[(2)] = inst_24289);

(statearr_24384_24470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (27))){
var state_24377__$1 = state_24377;
var statearr_24385_24471 = state_24377__$1;
(statearr_24385_24471[(2)] = null);

(statearr_24385_24471[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (1))){
var inst_24230 = (state_24377[(13)]);
var inst_24227 = before_jsload.call(null,files);
var inst_24228 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_24229 = (function (){return ((function (inst_24230,inst_24227,inst_24228,state_val_24378,c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23972_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23972_SHARP_);
});
;})(inst_24230,inst_24227,inst_24228,state_val_24378,c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24230__$1 = cljs.core.filter.call(null,inst_24229,files);
var inst_24231 = cljs.core.not_empty.call(null,inst_24230__$1);
var state_24377__$1 = (function (){var statearr_24386 = state_24377;
(statearr_24386[(14)] = inst_24227);

(statearr_24386[(15)] = inst_24228);

(statearr_24386[(13)] = inst_24230__$1);

return statearr_24386;
})();
if(cljs.core.truth_(inst_24231)){
var statearr_24387_24472 = state_24377__$1;
(statearr_24387_24472[(1)] = (2));

} else {
var statearr_24388_24473 = state_24377__$1;
(statearr_24388_24473[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (24))){
var state_24377__$1 = state_24377;
var statearr_24389_24474 = state_24377__$1;
(statearr_24389_24474[(2)] = null);

(statearr_24389_24474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (39))){
var inst_24331 = (state_24377[(16)]);
var state_24377__$1 = state_24377;
var statearr_24390_24475 = state_24377__$1;
(statearr_24390_24475[(2)] = inst_24331);

(statearr_24390_24475[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (46))){
var inst_24372 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
var statearr_24391_24476 = state_24377__$1;
(statearr_24391_24476[(2)] = inst_24372);

(statearr_24391_24476[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (4))){
var inst_24275 = (state_24377[(2)]);
var inst_24276 = cljs.core.List.EMPTY;
var inst_24277 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_24276);
var inst_24278 = (function (){return ((function (inst_24275,inst_24276,inst_24277,state_val_24378,c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23973_SHARP_){
var and__18358__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23973_SHARP_);
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23973_SHARP_));
} else {
return and__18358__auto__;
}
});
;})(inst_24275,inst_24276,inst_24277,state_val_24378,c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24279 = cljs.core.filter.call(null,inst_24278,files);
var inst_24280 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_24281 = cljs.core.concat.call(null,inst_24279,inst_24280);
var state_24377__$1 = (function (){var statearr_24392 = state_24377;
(statearr_24392[(17)] = inst_24275);

(statearr_24392[(18)] = inst_24277);

(statearr_24392[(12)] = inst_24281);

return statearr_24392;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_24393_24477 = state_24377__$1;
(statearr_24393_24477[(1)] = (16));

} else {
var statearr_24394_24478 = state_24377__$1;
(statearr_24394_24478[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (15))){
var inst_24265 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
var statearr_24395_24479 = state_24377__$1;
(statearr_24395_24479[(2)] = inst_24265);

(statearr_24395_24479[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (21))){
var inst_24291 = (state_24377[(19)]);
var inst_24291__$1 = (state_24377[(2)]);
var inst_24292 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_24291__$1);
var state_24377__$1 = (function (){var statearr_24396 = state_24377;
(statearr_24396[(19)] = inst_24291__$1);

return statearr_24396;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24377__$1,(22),inst_24292);
} else {
if((state_val_24378 === (31))){
var inst_24375 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24377__$1,inst_24375);
} else {
if((state_val_24378 === (32))){
var inst_24331 = (state_24377[(16)]);
var inst_24336 = inst_24331.cljs$lang$protocol_mask$partition0$;
var inst_24337 = (inst_24336 & (64));
var inst_24338 = inst_24331.cljs$core$ISeq$;
var inst_24339 = (inst_24337) || (inst_24338);
var state_24377__$1 = state_24377;
if(cljs.core.truth_(inst_24339)){
var statearr_24397_24480 = state_24377__$1;
(statearr_24397_24480[(1)] = (35));

} else {
var statearr_24398_24481 = state_24377__$1;
(statearr_24398_24481[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (40))){
var inst_24352 = (state_24377[(20)]);
var inst_24351 = (state_24377[(2)]);
var inst_24352__$1 = cljs.core.get.call(null,inst_24351,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_24353 = cljs.core.get.call(null,inst_24351,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_24354 = cljs.core.not_empty.call(null,inst_24352__$1);
var state_24377__$1 = (function (){var statearr_24399 = state_24377;
(statearr_24399[(21)] = inst_24353);

(statearr_24399[(20)] = inst_24352__$1);

return statearr_24399;
})();
if(cljs.core.truth_(inst_24354)){
var statearr_24400_24482 = state_24377__$1;
(statearr_24400_24482[(1)] = (41));

} else {
var statearr_24401_24483 = state_24377__$1;
(statearr_24401_24483[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (33))){
var state_24377__$1 = state_24377;
var statearr_24402_24484 = state_24377__$1;
(statearr_24402_24484[(2)] = false);

(statearr_24402_24484[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (13))){
var inst_24251 = (state_24377[(22)]);
var inst_24255 = cljs.core.chunk_first.call(null,inst_24251);
var inst_24256 = cljs.core.chunk_rest.call(null,inst_24251);
var inst_24257 = cljs.core.count.call(null,inst_24255);
var inst_24238 = inst_24256;
var inst_24239 = inst_24255;
var inst_24240 = inst_24257;
var inst_24241 = (0);
var state_24377__$1 = (function (){var statearr_24403 = state_24377;
(statearr_24403[(7)] = inst_24240);

(statearr_24403[(8)] = inst_24238);

(statearr_24403[(9)] = inst_24239);

(statearr_24403[(10)] = inst_24241);

return statearr_24403;
})();
var statearr_24404_24485 = state_24377__$1;
(statearr_24404_24485[(2)] = null);

(statearr_24404_24485[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (22))){
var inst_24295 = (state_24377[(23)]);
var inst_24294 = (state_24377[(24)]);
var inst_24291 = (state_24377[(19)]);
var inst_24299 = (state_24377[(25)]);
var inst_24294__$1 = (state_24377[(2)]);
var inst_24295__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24294__$1);
var inst_24296 = (function (){var all_files = inst_24291;
var res_SINGLEQUOTE_ = inst_24294__$1;
var res = inst_24295__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_24295,inst_24294,inst_24291,inst_24299,inst_24294__$1,inst_24295__$1,state_val_24378,c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23974_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23974_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_24295,inst_24294,inst_24291,inst_24299,inst_24294__$1,inst_24295__$1,state_val_24378,c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24297 = cljs.core.filter.call(null,inst_24296,inst_24294__$1);
var inst_24298 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_24299__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_24298);
var inst_24300 = cljs.core.not_empty.call(null,inst_24299__$1);
var state_24377__$1 = (function (){var statearr_24405 = state_24377;
(statearr_24405[(26)] = inst_24297);

(statearr_24405[(23)] = inst_24295__$1);

(statearr_24405[(24)] = inst_24294__$1);

(statearr_24405[(25)] = inst_24299__$1);

return statearr_24405;
})();
if(cljs.core.truth_(inst_24300)){
var statearr_24406_24486 = state_24377__$1;
(statearr_24406_24486[(1)] = (23));

} else {
var statearr_24407_24487 = state_24377__$1;
(statearr_24407_24487[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (36))){
var state_24377__$1 = state_24377;
var statearr_24408_24488 = state_24377__$1;
(statearr_24408_24488[(2)] = false);

(statearr_24408_24488[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (41))){
var inst_24352 = (state_24377[(20)]);
var inst_24356 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_24357 = cljs.core.map.call(null,inst_24356,inst_24352);
var inst_24358 = cljs.core.pr_str.call(null,inst_24357);
var inst_24359 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_24358)].join('');
var inst_24360 = figwheel.client.utils.log.call(null,inst_24359);
var state_24377__$1 = state_24377;
var statearr_24409_24489 = state_24377__$1;
(statearr_24409_24489[(2)] = inst_24360);

(statearr_24409_24489[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (43))){
var inst_24353 = (state_24377[(21)]);
var inst_24363 = (state_24377[(2)]);
var inst_24364 = cljs.core.not_empty.call(null,inst_24353);
var state_24377__$1 = (function (){var statearr_24410 = state_24377;
(statearr_24410[(27)] = inst_24363);

return statearr_24410;
})();
if(cljs.core.truth_(inst_24364)){
var statearr_24411_24490 = state_24377__$1;
(statearr_24411_24490[(1)] = (44));

} else {
var statearr_24412_24491 = state_24377__$1;
(statearr_24412_24491[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (29))){
var inst_24331 = (state_24377[(16)]);
var inst_24297 = (state_24377[(26)]);
var inst_24295 = (state_24377[(23)]);
var inst_24294 = (state_24377[(24)]);
var inst_24291 = (state_24377[(19)]);
var inst_24299 = (state_24377[(25)]);
var inst_24327 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_24330 = (function (){var all_files = inst_24291;
var res_SINGLEQUOTE_ = inst_24294;
var res = inst_24295;
var files_not_loaded = inst_24297;
var dependencies_that_loaded = inst_24299;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24331,inst_24297,inst_24295,inst_24294,inst_24291,inst_24299,inst_24327,state_val_24378,c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24329){
var map__24413 = p__24329;
var map__24413__$1 = ((((!((map__24413 == null)))?((((map__24413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24413):map__24413);
var namespace = cljs.core.get.call(null,map__24413__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24331,inst_24297,inst_24295,inst_24294,inst_24291,inst_24299,inst_24327,state_val_24378,c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24331__$1 = cljs.core.group_by.call(null,inst_24330,inst_24297);
var inst_24333 = (inst_24331__$1 == null);
var inst_24334 = cljs.core.not.call(null,inst_24333);
var state_24377__$1 = (function (){var statearr_24415 = state_24377;
(statearr_24415[(28)] = inst_24327);

(statearr_24415[(16)] = inst_24331__$1);

return statearr_24415;
})();
if(inst_24334){
var statearr_24416_24492 = state_24377__$1;
(statearr_24416_24492[(1)] = (32));

} else {
var statearr_24417_24493 = state_24377__$1;
(statearr_24417_24493[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (44))){
var inst_24353 = (state_24377[(21)]);
var inst_24366 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24353);
var inst_24367 = cljs.core.pr_str.call(null,inst_24366);
var inst_24368 = [cljs.core.str("not required: "),cljs.core.str(inst_24367)].join('');
var inst_24369 = figwheel.client.utils.log.call(null,inst_24368);
var state_24377__$1 = state_24377;
var statearr_24418_24494 = state_24377__$1;
(statearr_24418_24494[(2)] = inst_24369);

(statearr_24418_24494[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (6))){
var inst_24272 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
var statearr_24419_24495 = state_24377__$1;
(statearr_24419_24495[(2)] = inst_24272);

(statearr_24419_24495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (28))){
var inst_24297 = (state_24377[(26)]);
var inst_24324 = (state_24377[(2)]);
var inst_24325 = cljs.core.not_empty.call(null,inst_24297);
var state_24377__$1 = (function (){var statearr_24420 = state_24377;
(statearr_24420[(29)] = inst_24324);

return statearr_24420;
})();
if(cljs.core.truth_(inst_24325)){
var statearr_24421_24496 = state_24377__$1;
(statearr_24421_24496[(1)] = (29));

} else {
var statearr_24422_24497 = state_24377__$1;
(statearr_24422_24497[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (25))){
var inst_24295 = (state_24377[(23)]);
var inst_24311 = (state_24377[(2)]);
var inst_24312 = cljs.core.not_empty.call(null,inst_24295);
var state_24377__$1 = (function (){var statearr_24423 = state_24377;
(statearr_24423[(30)] = inst_24311);

return statearr_24423;
})();
if(cljs.core.truth_(inst_24312)){
var statearr_24424_24498 = state_24377__$1;
(statearr_24424_24498[(1)] = (26));

} else {
var statearr_24425_24499 = state_24377__$1;
(statearr_24425_24499[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (34))){
var inst_24346 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
if(cljs.core.truth_(inst_24346)){
var statearr_24426_24500 = state_24377__$1;
(statearr_24426_24500[(1)] = (38));

} else {
var statearr_24427_24501 = state_24377__$1;
(statearr_24427_24501[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (17))){
var state_24377__$1 = state_24377;
var statearr_24428_24502 = state_24377__$1;
(statearr_24428_24502[(2)] = recompile_dependents);

(statearr_24428_24502[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (3))){
var state_24377__$1 = state_24377;
var statearr_24429_24503 = state_24377__$1;
(statearr_24429_24503[(2)] = null);

(statearr_24429_24503[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (12))){
var inst_24268 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
var statearr_24430_24504 = state_24377__$1;
(statearr_24430_24504[(2)] = inst_24268);

(statearr_24430_24504[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (2))){
var inst_24230 = (state_24377[(13)]);
var inst_24237 = cljs.core.seq.call(null,inst_24230);
var inst_24238 = inst_24237;
var inst_24239 = null;
var inst_24240 = (0);
var inst_24241 = (0);
var state_24377__$1 = (function (){var statearr_24431 = state_24377;
(statearr_24431[(7)] = inst_24240);

(statearr_24431[(8)] = inst_24238);

(statearr_24431[(9)] = inst_24239);

(statearr_24431[(10)] = inst_24241);

return statearr_24431;
})();
var statearr_24432_24505 = state_24377__$1;
(statearr_24432_24505[(2)] = null);

(statearr_24432_24505[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (23))){
var inst_24297 = (state_24377[(26)]);
var inst_24295 = (state_24377[(23)]);
var inst_24294 = (state_24377[(24)]);
var inst_24291 = (state_24377[(19)]);
var inst_24299 = (state_24377[(25)]);
var inst_24302 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_24304 = (function (){var all_files = inst_24291;
var res_SINGLEQUOTE_ = inst_24294;
var res = inst_24295;
var files_not_loaded = inst_24297;
var dependencies_that_loaded = inst_24299;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24297,inst_24295,inst_24294,inst_24291,inst_24299,inst_24302,state_val_24378,c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24303){
var map__24433 = p__24303;
var map__24433__$1 = ((((!((map__24433 == null)))?((((map__24433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24433):map__24433);
var request_url = cljs.core.get.call(null,map__24433__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24297,inst_24295,inst_24294,inst_24291,inst_24299,inst_24302,state_val_24378,c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24305 = cljs.core.reverse.call(null,inst_24299);
var inst_24306 = cljs.core.map.call(null,inst_24304,inst_24305);
var inst_24307 = cljs.core.pr_str.call(null,inst_24306);
var inst_24308 = figwheel.client.utils.log.call(null,inst_24307);
var state_24377__$1 = (function (){var statearr_24435 = state_24377;
(statearr_24435[(31)] = inst_24302);

return statearr_24435;
})();
var statearr_24436_24506 = state_24377__$1;
(statearr_24436_24506[(2)] = inst_24308);

(statearr_24436_24506[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (35))){
var state_24377__$1 = state_24377;
var statearr_24437_24507 = state_24377__$1;
(statearr_24437_24507[(2)] = true);

(statearr_24437_24507[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (19))){
var inst_24281 = (state_24377[(12)]);
var inst_24287 = figwheel.client.file_reloading.expand_files.call(null,inst_24281);
var state_24377__$1 = state_24377;
var statearr_24438_24508 = state_24377__$1;
(statearr_24438_24508[(2)] = inst_24287);

(statearr_24438_24508[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (11))){
var state_24377__$1 = state_24377;
var statearr_24439_24509 = state_24377__$1;
(statearr_24439_24509[(2)] = null);

(statearr_24439_24509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (9))){
var inst_24270 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
var statearr_24440_24510 = state_24377__$1;
(statearr_24440_24510[(2)] = inst_24270);

(statearr_24440_24510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (5))){
var inst_24240 = (state_24377[(7)]);
var inst_24241 = (state_24377[(10)]);
var inst_24243 = (inst_24241 < inst_24240);
var inst_24244 = inst_24243;
var state_24377__$1 = state_24377;
if(cljs.core.truth_(inst_24244)){
var statearr_24441_24511 = state_24377__$1;
(statearr_24441_24511[(1)] = (7));

} else {
var statearr_24442_24512 = state_24377__$1;
(statearr_24442_24512[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (14))){
var inst_24251 = (state_24377[(22)]);
var inst_24260 = cljs.core.first.call(null,inst_24251);
var inst_24261 = figwheel.client.file_reloading.eval_body.call(null,inst_24260,opts);
var inst_24262 = cljs.core.next.call(null,inst_24251);
var inst_24238 = inst_24262;
var inst_24239 = null;
var inst_24240 = (0);
var inst_24241 = (0);
var state_24377__$1 = (function (){var statearr_24443 = state_24377;
(statearr_24443[(7)] = inst_24240);

(statearr_24443[(8)] = inst_24238);

(statearr_24443[(32)] = inst_24261);

(statearr_24443[(9)] = inst_24239);

(statearr_24443[(10)] = inst_24241);

return statearr_24443;
})();
var statearr_24444_24513 = state_24377__$1;
(statearr_24444_24513[(2)] = null);

(statearr_24444_24513[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (45))){
var state_24377__$1 = state_24377;
var statearr_24445_24514 = state_24377__$1;
(statearr_24445_24514[(2)] = null);

(statearr_24445_24514[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (26))){
var inst_24297 = (state_24377[(26)]);
var inst_24295 = (state_24377[(23)]);
var inst_24294 = (state_24377[(24)]);
var inst_24291 = (state_24377[(19)]);
var inst_24299 = (state_24377[(25)]);
var inst_24314 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_24316 = (function (){var all_files = inst_24291;
var res_SINGLEQUOTE_ = inst_24294;
var res = inst_24295;
var files_not_loaded = inst_24297;
var dependencies_that_loaded = inst_24299;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24297,inst_24295,inst_24294,inst_24291,inst_24299,inst_24314,state_val_24378,c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__24315){
var map__24446 = p__24315;
var map__24446__$1 = ((((!((map__24446 == null)))?((((map__24446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24446):map__24446);
var namespace = cljs.core.get.call(null,map__24446__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24446__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24297,inst_24295,inst_24294,inst_24291,inst_24299,inst_24314,state_val_24378,c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24317 = cljs.core.map.call(null,inst_24316,inst_24295);
var inst_24318 = cljs.core.pr_str.call(null,inst_24317);
var inst_24319 = figwheel.client.utils.log.call(null,inst_24318);
var inst_24320 = (function (){var all_files = inst_24291;
var res_SINGLEQUOTE_ = inst_24294;
var res = inst_24295;
var files_not_loaded = inst_24297;
var dependencies_that_loaded = inst_24299;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24297,inst_24295,inst_24294,inst_24291,inst_24299,inst_24314,inst_24316,inst_24317,inst_24318,inst_24319,state_val_24378,c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_24297,inst_24295,inst_24294,inst_24291,inst_24299,inst_24314,inst_24316,inst_24317,inst_24318,inst_24319,state_val_24378,c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_24321 = setTimeout(inst_24320,(10));
var state_24377__$1 = (function (){var statearr_24448 = state_24377;
(statearr_24448[(33)] = inst_24314);

(statearr_24448[(34)] = inst_24319);

return statearr_24448;
})();
var statearr_24449_24515 = state_24377__$1;
(statearr_24449_24515[(2)] = inst_24321);

(statearr_24449_24515[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (16))){
var state_24377__$1 = state_24377;
var statearr_24450_24516 = state_24377__$1;
(statearr_24450_24516[(2)] = reload_dependents);

(statearr_24450_24516[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (38))){
var inst_24331 = (state_24377[(16)]);
var inst_24348 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24331);
var state_24377__$1 = state_24377;
var statearr_24451_24517 = state_24377__$1;
(statearr_24451_24517[(2)] = inst_24348);

(statearr_24451_24517[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (30))){
var state_24377__$1 = state_24377;
var statearr_24452_24518 = state_24377__$1;
(statearr_24452_24518[(2)] = null);

(statearr_24452_24518[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (10))){
var inst_24251 = (state_24377[(22)]);
var inst_24253 = cljs.core.chunked_seq_QMARK_.call(null,inst_24251);
var state_24377__$1 = state_24377;
if(inst_24253){
var statearr_24453_24519 = state_24377__$1;
(statearr_24453_24519[(1)] = (13));

} else {
var statearr_24454_24520 = state_24377__$1;
(statearr_24454_24520[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (18))){
var inst_24285 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
if(cljs.core.truth_(inst_24285)){
var statearr_24455_24521 = state_24377__$1;
(statearr_24455_24521[(1)] = (19));

} else {
var statearr_24456_24522 = state_24377__$1;
(statearr_24456_24522[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (42))){
var state_24377__$1 = state_24377;
var statearr_24457_24523 = state_24377__$1;
(statearr_24457_24523[(2)] = null);

(statearr_24457_24523[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (37))){
var inst_24343 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
var statearr_24458_24524 = state_24377__$1;
(statearr_24458_24524[(2)] = inst_24343);

(statearr_24458_24524[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (8))){
var inst_24238 = (state_24377[(8)]);
var inst_24251 = (state_24377[(22)]);
var inst_24251__$1 = cljs.core.seq.call(null,inst_24238);
var state_24377__$1 = (function (){var statearr_24459 = state_24377;
(statearr_24459[(22)] = inst_24251__$1);

return statearr_24459;
})();
if(inst_24251__$1){
var statearr_24460_24525 = state_24377__$1;
(statearr_24460_24525[(1)] = (10));

} else {
var statearr_24461_24526 = state_24377__$1;
(statearr_24461_24526[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20528__auto__,c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20529__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20529__auto____0 = (function (){
var statearr_24465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24465[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20529__auto__);

(statearr_24465[(1)] = (1));

return statearr_24465;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20529__auto____1 = (function (state_24377){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_24377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e24466){if((e24466 instanceof Object)){
var ex__20532__auto__ = e24466;
var statearr_24467_24527 = state_24377;
(statearr_24467_24527[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24528 = state_24377;
state_24377 = G__24528;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20529__auto__ = function(state_24377){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20529__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20529__auto____1.call(this,state_24377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20529__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20529__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20642__auto__ = (function (){var statearr_24468 = f__20641__auto__.call(null);
(statearr_24468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto__);

return statearr_24468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto__,map__24223,map__24223__$1,opts,before_jsload,on_jsload,reload_dependents,map__24224,map__24224__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20640__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24531,link){
var map__24534 = p__24531;
var map__24534__$1 = ((((!((map__24534 == null)))?((((map__24534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24534):map__24534);
var file = cljs.core.get.call(null,map__24534__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__24534,map__24534__$1,file){
return (function (p1__24529_SHARP_,p2__24530_SHARP_){
if(cljs.core._EQ_.call(null,p1__24529_SHARP_,p2__24530_SHARP_)){
return p1__24529_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__24534,map__24534__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24540){
var map__24541 = p__24540;
var map__24541__$1 = ((((!((map__24541 == null)))?((((map__24541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24541):map__24541);
var match_length = cljs.core.get.call(null,map__24541__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24541__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24536_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24536_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24543 = [];
var len__19428__auto___24546 = arguments.length;
var i__19429__auto___24547 = (0);
while(true){
if((i__19429__auto___24547 < len__19428__auto___24546)){
args24543.push((arguments[i__19429__auto___24547]));

var G__24548 = (i__19429__auto___24547 + (1));
i__19429__auto___24547 = G__24548;
continue;
} else {
}
break;
}

var G__24545 = args24543.length;
switch (G__24545) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24543.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24550_SHARP_,p2__24551_SHARP_){
return cljs.core.assoc.call(null,p1__24550_SHARP_,cljs.core.get.call(null,p2__24551_SHARP_,key),p2__24551_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24552){
var map__24555 = p__24552;
var map__24555__$1 = ((((!((map__24555 == null)))?((((map__24555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24555):map__24555);
var f_data = map__24555__$1;
var file = cljs.core.get.call(null,map__24555__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24557,files_msg){
var map__24564 = p__24557;
var map__24564__$1 = ((((!((map__24564 == null)))?((((map__24564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24564):map__24564);
var opts = map__24564__$1;
var on_cssload = cljs.core.get.call(null,map__24564__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24566_24570 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24567_24571 = null;
var count__24568_24572 = (0);
var i__24569_24573 = (0);
while(true){
if((i__24569_24573 < count__24568_24572)){
var f_24574 = cljs.core._nth.call(null,chunk__24567_24571,i__24569_24573);
figwheel.client.file_reloading.reload_css_file.call(null,f_24574);

var G__24575 = seq__24566_24570;
var G__24576 = chunk__24567_24571;
var G__24577 = count__24568_24572;
var G__24578 = (i__24569_24573 + (1));
seq__24566_24570 = G__24575;
chunk__24567_24571 = G__24576;
count__24568_24572 = G__24577;
i__24569_24573 = G__24578;
continue;
} else {
var temp__4657__auto___24579 = cljs.core.seq.call(null,seq__24566_24570);
if(temp__4657__auto___24579){
var seq__24566_24580__$1 = temp__4657__auto___24579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24566_24580__$1)){
var c__19173__auto___24581 = cljs.core.chunk_first.call(null,seq__24566_24580__$1);
var G__24582 = cljs.core.chunk_rest.call(null,seq__24566_24580__$1);
var G__24583 = c__19173__auto___24581;
var G__24584 = cljs.core.count.call(null,c__19173__auto___24581);
var G__24585 = (0);
seq__24566_24570 = G__24582;
chunk__24567_24571 = G__24583;
count__24568_24572 = G__24584;
i__24569_24573 = G__24585;
continue;
} else {
var f_24586 = cljs.core.first.call(null,seq__24566_24580__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24586);

var G__24587 = cljs.core.next.call(null,seq__24566_24580__$1);
var G__24588 = null;
var G__24589 = (0);
var G__24590 = (0);
seq__24566_24570 = G__24587;
chunk__24567_24571 = G__24588;
count__24568_24572 = G__24589;
i__24569_24573 = G__24590;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24564,map__24564__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24564,map__24564__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1460649303917