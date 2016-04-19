// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('turtle.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__27710__delegate = function (x){
if(cljs.core.truth_(turtle.core.on_js_reload)){
return cljs.core.apply.call(null,turtle.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'turtle.core/on-js-reload' is missing");
}
};
var G__27710 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__27711__i = 0, G__27711__a = new Array(arguments.length -  0);
while (G__27711__i < G__27711__a.length) {G__27711__a[G__27711__i] = arguments[G__27711__i + 0]; ++G__27711__i;}
  x = new cljs.core.IndexedSeq(G__27711__a,0);
} 
return G__27710__delegate.call(this,x);};
G__27710.cljs$lang$maxFixedArity = 0;
G__27710.cljs$lang$applyTo = (function (arglist__27712){
var x = cljs.core.seq(arglist__27712);
return G__27710__delegate(x);
});
G__27710.cljs$core$IFn$_invoke$arity$variadic = G__27710__delegate;
return G__27710;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1460996618555