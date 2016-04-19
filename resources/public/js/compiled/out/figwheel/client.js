// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__24911 = cljs.core._EQ_;
var expr__24912 = (function (){var or__18370__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e24915){if((e24915 instanceof Error)){
var e = e24915;
return false;
} else {
throw e24915;

}
}})();
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24911.call(null,"true",expr__24912))){
return true;
} else {
if(cljs.core.truth_(pred__24911.call(null,"false",expr__24912))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24912)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e24917){if((e24917 instanceof Error)){
var e = e24917;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e24917;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19435__auto__ = [];
var len__19428__auto___24919 = arguments.length;
var i__19429__auto___24920 = (0);
while(true){
if((i__19429__auto___24920 < len__19428__auto___24919)){
args__19435__auto__.push((arguments[i__19429__auto___24920]));

var G__24921 = (i__19429__auto___24920 + (1));
i__19429__auto___24920 = G__24921;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((0) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19436__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq24918){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24918));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24922){
var map__24925 = p__24922;
var map__24925__$1 = ((((!((map__24925 == null)))?((((map__24925.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24925.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24925):map__24925);
var message = cljs.core.get.call(null,map__24925__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24925__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18370__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18358__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18358__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18358__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20640__auto___25087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto___25087,ch){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto___25087,ch){
return (function (state_25056){
var state_val_25057 = (state_25056[(1)]);
if((state_val_25057 === (7))){
var inst_25052 = (state_25056[(2)]);
var state_25056__$1 = state_25056;
var statearr_25058_25088 = state_25056__$1;
(statearr_25058_25088[(2)] = inst_25052);

(statearr_25058_25088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (1))){
var state_25056__$1 = state_25056;
var statearr_25059_25089 = state_25056__$1;
(statearr_25059_25089[(2)] = null);

(statearr_25059_25089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (4))){
var inst_25009 = (state_25056[(7)]);
var inst_25009__$1 = (state_25056[(2)]);
var state_25056__$1 = (function (){var statearr_25060 = state_25056;
(statearr_25060[(7)] = inst_25009__$1);

return statearr_25060;
})();
if(cljs.core.truth_(inst_25009__$1)){
var statearr_25061_25090 = state_25056__$1;
(statearr_25061_25090[(1)] = (5));

} else {
var statearr_25062_25091 = state_25056__$1;
(statearr_25062_25091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (15))){
var inst_25016 = (state_25056[(8)]);
var inst_25031 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25016);
var inst_25032 = cljs.core.first.call(null,inst_25031);
var inst_25033 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25032);
var inst_25034 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25033)].join('');
var inst_25035 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25034);
var state_25056__$1 = state_25056;
var statearr_25063_25092 = state_25056__$1;
(statearr_25063_25092[(2)] = inst_25035);

(statearr_25063_25092[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (13))){
var inst_25040 = (state_25056[(2)]);
var state_25056__$1 = state_25056;
var statearr_25064_25093 = state_25056__$1;
(statearr_25064_25093[(2)] = inst_25040);

(statearr_25064_25093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (6))){
var state_25056__$1 = state_25056;
var statearr_25065_25094 = state_25056__$1;
(statearr_25065_25094[(2)] = null);

(statearr_25065_25094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (17))){
var inst_25038 = (state_25056[(2)]);
var state_25056__$1 = state_25056;
var statearr_25066_25095 = state_25056__$1;
(statearr_25066_25095[(2)] = inst_25038);

(statearr_25066_25095[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (3))){
var inst_25054 = (state_25056[(2)]);
var state_25056__$1 = state_25056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25056__$1,inst_25054);
} else {
if((state_val_25057 === (12))){
var inst_25015 = (state_25056[(9)]);
var inst_25029 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25015,opts);
var state_25056__$1 = state_25056;
if(cljs.core.truth_(inst_25029)){
var statearr_25067_25096 = state_25056__$1;
(statearr_25067_25096[(1)] = (15));

} else {
var statearr_25068_25097 = state_25056__$1;
(statearr_25068_25097[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (2))){
var state_25056__$1 = state_25056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25056__$1,(4),ch);
} else {
if((state_val_25057 === (11))){
var inst_25016 = (state_25056[(8)]);
var inst_25021 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25022 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25016);
var inst_25023 = cljs.core.async.timeout.call(null,(1000));
var inst_25024 = [inst_25022,inst_25023];
var inst_25025 = (new cljs.core.PersistentVector(null,2,(5),inst_25021,inst_25024,null));
var state_25056__$1 = state_25056;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25056__$1,(14),inst_25025);
} else {
if((state_val_25057 === (9))){
var inst_25016 = (state_25056[(8)]);
var inst_25042 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25043 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25016);
var inst_25044 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25043);
var inst_25045 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25044)].join('');
var inst_25046 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25045);
var state_25056__$1 = (function (){var statearr_25069 = state_25056;
(statearr_25069[(10)] = inst_25042);

return statearr_25069;
})();
var statearr_25070_25098 = state_25056__$1;
(statearr_25070_25098[(2)] = inst_25046);

(statearr_25070_25098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (5))){
var inst_25009 = (state_25056[(7)]);
var inst_25011 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25012 = (new cljs.core.PersistentArrayMap(null,2,inst_25011,null));
var inst_25013 = (new cljs.core.PersistentHashSet(null,inst_25012,null));
var inst_25014 = figwheel.client.focus_msgs.call(null,inst_25013,inst_25009);
var inst_25015 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25014);
var inst_25016 = cljs.core.first.call(null,inst_25014);
var inst_25017 = figwheel.client.autoload_QMARK_.call(null);
var state_25056__$1 = (function (){var statearr_25071 = state_25056;
(statearr_25071[(8)] = inst_25016);

(statearr_25071[(9)] = inst_25015);

return statearr_25071;
})();
if(cljs.core.truth_(inst_25017)){
var statearr_25072_25099 = state_25056__$1;
(statearr_25072_25099[(1)] = (8));

} else {
var statearr_25073_25100 = state_25056__$1;
(statearr_25073_25100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (14))){
var inst_25027 = (state_25056[(2)]);
var state_25056__$1 = state_25056;
var statearr_25074_25101 = state_25056__$1;
(statearr_25074_25101[(2)] = inst_25027);

(statearr_25074_25101[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (16))){
var state_25056__$1 = state_25056;
var statearr_25075_25102 = state_25056__$1;
(statearr_25075_25102[(2)] = null);

(statearr_25075_25102[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (10))){
var inst_25048 = (state_25056[(2)]);
var state_25056__$1 = (function (){var statearr_25076 = state_25056;
(statearr_25076[(11)] = inst_25048);

return statearr_25076;
})();
var statearr_25077_25103 = state_25056__$1;
(statearr_25077_25103[(2)] = null);

(statearr_25077_25103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25057 === (8))){
var inst_25015 = (state_25056[(9)]);
var inst_25019 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25015,opts);
var state_25056__$1 = state_25056;
if(cljs.core.truth_(inst_25019)){
var statearr_25078_25104 = state_25056__$1;
(statearr_25078_25104[(1)] = (11));

} else {
var statearr_25079_25105 = state_25056__$1;
(statearr_25079_25105[(1)] = (12));

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
});})(c__20640__auto___25087,ch))
;
return ((function (switch__20528__auto__,c__20640__auto___25087,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20529__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20529__auto____0 = (function (){
var statearr_25083 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25083[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20529__auto__);

(statearr_25083[(1)] = (1));

return statearr_25083;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20529__auto____1 = (function (state_25056){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_25056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e25084){if((e25084 instanceof Object)){
var ex__20532__auto__ = e25084;
var statearr_25085_25106 = state_25056;
(statearr_25085_25106[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25107 = state_25056;
state_25056 = G__25107;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20529__auto__ = function(state_25056){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20529__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20529__auto____1.call(this,state_25056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20529__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20529__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto___25087,ch))
})();
var state__20642__auto__ = (function (){var statearr_25086 = f__20641__auto__.call(null);
(statearr_25086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___25087);

return statearr_25086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto___25087,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25108_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25108_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25115 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25115){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25113 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25114 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25114;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25113;
}}catch (e25112){if((e25112 instanceof Error)){
var e = e25112;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25115], null));
} else {
var e = e25112;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25115))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25116){
var map__25123 = p__25116;
var map__25123__$1 = ((((!((map__25123 == null)))?((((map__25123.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25123.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25123):map__25123);
var opts = map__25123__$1;
var build_id = cljs.core.get.call(null,map__25123__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25123,map__25123__$1,opts,build_id){
return (function (p__25125){
var vec__25126 = p__25125;
var map__25127 = cljs.core.nth.call(null,vec__25126,(0),null);
var map__25127__$1 = ((((!((map__25127 == null)))?((((map__25127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25127):map__25127);
var msg = map__25127__$1;
var msg_name = cljs.core.get.call(null,map__25127__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25126,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25126,map__25127,map__25127__$1,msg,msg_name,_,map__25123,map__25123__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25126,map__25127,map__25127__$1,msg,msg_name,_,map__25123,map__25123__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25123,map__25123__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25133){
var vec__25134 = p__25133;
var map__25135 = cljs.core.nth.call(null,vec__25134,(0),null);
var map__25135__$1 = ((((!((map__25135 == null)))?((((map__25135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25135):map__25135);
var msg = map__25135__$1;
var msg_name = cljs.core.get.call(null,map__25135__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25134,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25137){
var map__25147 = p__25137;
var map__25147__$1 = ((((!((map__25147 == null)))?((((map__25147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25147):map__25147);
var on_compile_warning = cljs.core.get.call(null,map__25147__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25147__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25147,map__25147__$1,on_compile_warning,on_compile_fail){
return (function (p__25149){
var vec__25150 = p__25149;
var map__25151 = cljs.core.nth.call(null,vec__25150,(0),null);
var map__25151__$1 = ((((!((map__25151 == null)))?((((map__25151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25151):map__25151);
var msg = map__25151__$1;
var msg_name = cljs.core.get.call(null,map__25151__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25150,(1));
var pred__25153 = cljs.core._EQ_;
var expr__25154 = msg_name;
if(cljs.core.truth_(pred__25153.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25154))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25153.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25154))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25147,map__25147__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto__,msg_hist,msg_names,msg){
return (function (state_25370){
var state_val_25371 = (state_25370[(1)]);
if((state_val_25371 === (7))){
var inst_25294 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
if(cljs.core.truth_(inst_25294)){
var statearr_25372_25418 = state_25370__$1;
(statearr_25372_25418[(1)] = (8));

} else {
var statearr_25373_25419 = state_25370__$1;
(statearr_25373_25419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (20))){
var inst_25364 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25374_25420 = state_25370__$1;
(statearr_25374_25420[(2)] = inst_25364);

(statearr_25374_25420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (27))){
var inst_25360 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25375_25421 = state_25370__$1;
(statearr_25375_25421[(2)] = inst_25360);

(statearr_25375_25421[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (1))){
var inst_25287 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25370__$1 = state_25370;
if(cljs.core.truth_(inst_25287)){
var statearr_25376_25422 = state_25370__$1;
(statearr_25376_25422[(1)] = (2));

} else {
var statearr_25377_25423 = state_25370__$1;
(statearr_25377_25423[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (24))){
var inst_25362 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25378_25424 = state_25370__$1;
(statearr_25378_25424[(2)] = inst_25362);

(statearr_25378_25424[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (4))){
var inst_25368 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25370__$1,inst_25368);
} else {
if((state_val_25371 === (15))){
var inst_25366 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25379_25425 = state_25370__$1;
(statearr_25379_25425[(2)] = inst_25366);

(statearr_25379_25425[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (21))){
var inst_25325 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25380_25426 = state_25370__$1;
(statearr_25380_25426[(2)] = inst_25325);

(statearr_25380_25426[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (31))){
var inst_25349 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25370__$1 = state_25370;
if(cljs.core.truth_(inst_25349)){
var statearr_25381_25427 = state_25370__$1;
(statearr_25381_25427[(1)] = (34));

} else {
var statearr_25382_25428 = state_25370__$1;
(statearr_25382_25428[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (32))){
var inst_25358 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25383_25429 = state_25370__$1;
(statearr_25383_25429[(2)] = inst_25358);

(statearr_25383_25429[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (33))){
var inst_25347 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25384_25430 = state_25370__$1;
(statearr_25384_25430[(2)] = inst_25347);

(statearr_25384_25430[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (13))){
var inst_25308 = figwheel.client.heads_up.clear.call(null);
var state_25370__$1 = state_25370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25370__$1,(16),inst_25308);
} else {
if((state_val_25371 === (22))){
var inst_25329 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25330 = figwheel.client.heads_up.append_message.call(null,inst_25329);
var state_25370__$1 = state_25370;
var statearr_25385_25431 = state_25370__$1;
(statearr_25385_25431[(2)] = inst_25330);

(statearr_25385_25431[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (36))){
var inst_25356 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25386_25432 = state_25370__$1;
(statearr_25386_25432[(2)] = inst_25356);

(statearr_25386_25432[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (29))){
var inst_25340 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25387_25433 = state_25370__$1;
(statearr_25387_25433[(2)] = inst_25340);

(statearr_25387_25433[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (6))){
var inst_25289 = (state_25370[(7)]);
var state_25370__$1 = state_25370;
var statearr_25388_25434 = state_25370__$1;
(statearr_25388_25434[(2)] = inst_25289);

(statearr_25388_25434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (28))){
var inst_25336 = (state_25370[(2)]);
var inst_25337 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25338 = figwheel.client.heads_up.display_warning.call(null,inst_25337);
var state_25370__$1 = (function (){var statearr_25389 = state_25370;
(statearr_25389[(8)] = inst_25336);

return statearr_25389;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25370__$1,(29),inst_25338);
} else {
if((state_val_25371 === (25))){
var inst_25334 = figwheel.client.heads_up.clear.call(null);
var state_25370__$1 = state_25370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25370__$1,(28),inst_25334);
} else {
if((state_val_25371 === (34))){
var inst_25351 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25370__$1 = state_25370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25370__$1,(37),inst_25351);
} else {
if((state_val_25371 === (17))){
var inst_25316 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25390_25435 = state_25370__$1;
(statearr_25390_25435[(2)] = inst_25316);

(statearr_25390_25435[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (3))){
var inst_25306 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25370__$1 = state_25370;
if(cljs.core.truth_(inst_25306)){
var statearr_25391_25436 = state_25370__$1;
(statearr_25391_25436[(1)] = (13));

} else {
var statearr_25392_25437 = state_25370__$1;
(statearr_25392_25437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (12))){
var inst_25302 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25393_25438 = state_25370__$1;
(statearr_25393_25438[(2)] = inst_25302);

(statearr_25393_25438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (2))){
var inst_25289 = (state_25370[(7)]);
var inst_25289__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25370__$1 = (function (){var statearr_25394 = state_25370;
(statearr_25394[(7)] = inst_25289__$1);

return statearr_25394;
})();
if(cljs.core.truth_(inst_25289__$1)){
var statearr_25395_25439 = state_25370__$1;
(statearr_25395_25439[(1)] = (5));

} else {
var statearr_25396_25440 = state_25370__$1;
(statearr_25396_25440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (23))){
var inst_25332 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25370__$1 = state_25370;
if(cljs.core.truth_(inst_25332)){
var statearr_25397_25441 = state_25370__$1;
(statearr_25397_25441[(1)] = (25));

} else {
var statearr_25398_25442 = state_25370__$1;
(statearr_25398_25442[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (35))){
var state_25370__$1 = state_25370;
var statearr_25399_25443 = state_25370__$1;
(statearr_25399_25443[(2)] = null);

(statearr_25399_25443[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (19))){
var inst_25327 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25370__$1 = state_25370;
if(cljs.core.truth_(inst_25327)){
var statearr_25400_25444 = state_25370__$1;
(statearr_25400_25444[(1)] = (22));

} else {
var statearr_25401_25445 = state_25370__$1;
(statearr_25401_25445[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (11))){
var inst_25298 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25402_25446 = state_25370__$1;
(statearr_25402_25446[(2)] = inst_25298);

(statearr_25402_25446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (9))){
var inst_25300 = figwheel.client.heads_up.clear.call(null);
var state_25370__$1 = state_25370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25370__$1,(12),inst_25300);
} else {
if((state_val_25371 === (5))){
var inst_25291 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25370__$1 = state_25370;
var statearr_25403_25447 = state_25370__$1;
(statearr_25403_25447[(2)] = inst_25291);

(statearr_25403_25447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (14))){
var inst_25318 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25370__$1 = state_25370;
if(cljs.core.truth_(inst_25318)){
var statearr_25404_25448 = state_25370__$1;
(statearr_25404_25448[(1)] = (18));

} else {
var statearr_25405_25449 = state_25370__$1;
(statearr_25405_25449[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (26))){
var inst_25342 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25370__$1 = state_25370;
if(cljs.core.truth_(inst_25342)){
var statearr_25406_25450 = state_25370__$1;
(statearr_25406_25450[(1)] = (30));

} else {
var statearr_25407_25451 = state_25370__$1;
(statearr_25407_25451[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (16))){
var inst_25310 = (state_25370[(2)]);
var inst_25311 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25312 = figwheel.client.format_messages.call(null,inst_25311);
var inst_25313 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25314 = figwheel.client.heads_up.display_error.call(null,inst_25312,inst_25313);
var state_25370__$1 = (function (){var statearr_25408 = state_25370;
(statearr_25408[(9)] = inst_25310);

return statearr_25408;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25370__$1,(17),inst_25314);
} else {
if((state_val_25371 === (30))){
var inst_25344 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25345 = figwheel.client.heads_up.display_warning.call(null,inst_25344);
var state_25370__$1 = state_25370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25370__$1,(33),inst_25345);
} else {
if((state_val_25371 === (10))){
var inst_25304 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25409_25452 = state_25370__$1;
(statearr_25409_25452[(2)] = inst_25304);

(statearr_25409_25452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (18))){
var inst_25320 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25321 = figwheel.client.format_messages.call(null,inst_25320);
var inst_25322 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25323 = figwheel.client.heads_up.display_error.call(null,inst_25321,inst_25322);
var state_25370__$1 = state_25370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25370__$1,(21),inst_25323);
} else {
if((state_val_25371 === (37))){
var inst_25353 = (state_25370[(2)]);
var state_25370__$1 = state_25370;
var statearr_25410_25453 = state_25370__$1;
(statearr_25410_25453[(2)] = inst_25353);

(statearr_25410_25453[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25371 === (8))){
var inst_25296 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25370__$1 = state_25370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25370__$1,(11),inst_25296);
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
});})(c__20640__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20528__auto__,c__20640__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20529__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20529__auto____0 = (function (){
var statearr_25414 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25414[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20529__auto__);

(statearr_25414[(1)] = (1));

return statearr_25414;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20529__auto____1 = (function (state_25370){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_25370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e25415){if((e25415 instanceof Object)){
var ex__20532__auto__ = e25415;
var statearr_25416_25454 = state_25370;
(statearr_25416_25454[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25455 = state_25370;
state_25370 = G__25455;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20529__auto__ = function(state_25370){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20529__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20529__auto____1.call(this,state_25370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20529__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20529__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto__,msg_hist,msg_names,msg))
})();
var state__20642__auto__ = (function (){var statearr_25417 = f__20641__auto__.call(null);
(statearr_25417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto__);

return statearr_25417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto__,msg_hist,msg_names,msg))
);

return c__20640__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20640__auto___25518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto___25518,ch){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto___25518,ch){
return (function (state_25501){
var state_val_25502 = (state_25501[(1)]);
if((state_val_25502 === (1))){
var state_25501__$1 = state_25501;
var statearr_25503_25519 = state_25501__$1;
(statearr_25503_25519[(2)] = null);

(statearr_25503_25519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (2))){
var state_25501__$1 = state_25501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25501__$1,(4),ch);
} else {
if((state_val_25502 === (3))){
var inst_25499 = (state_25501[(2)]);
var state_25501__$1 = state_25501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25501__$1,inst_25499);
} else {
if((state_val_25502 === (4))){
var inst_25489 = (state_25501[(7)]);
var inst_25489__$1 = (state_25501[(2)]);
var state_25501__$1 = (function (){var statearr_25504 = state_25501;
(statearr_25504[(7)] = inst_25489__$1);

return statearr_25504;
})();
if(cljs.core.truth_(inst_25489__$1)){
var statearr_25505_25520 = state_25501__$1;
(statearr_25505_25520[(1)] = (5));

} else {
var statearr_25506_25521 = state_25501__$1;
(statearr_25506_25521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (5))){
var inst_25489 = (state_25501[(7)]);
var inst_25491 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25489);
var state_25501__$1 = state_25501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25501__$1,(8),inst_25491);
} else {
if((state_val_25502 === (6))){
var state_25501__$1 = state_25501;
var statearr_25507_25522 = state_25501__$1;
(statearr_25507_25522[(2)] = null);

(statearr_25507_25522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (7))){
var inst_25497 = (state_25501[(2)]);
var state_25501__$1 = state_25501;
var statearr_25508_25523 = state_25501__$1;
(statearr_25508_25523[(2)] = inst_25497);

(statearr_25508_25523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25502 === (8))){
var inst_25493 = (state_25501[(2)]);
var state_25501__$1 = (function (){var statearr_25509 = state_25501;
(statearr_25509[(8)] = inst_25493);

return statearr_25509;
})();
var statearr_25510_25524 = state_25501__$1;
(statearr_25510_25524[(2)] = null);

(statearr_25510_25524[(1)] = (2));


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
});})(c__20640__auto___25518,ch))
;
return ((function (switch__20528__auto__,c__20640__auto___25518,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20529__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20529__auto____0 = (function (){
var statearr_25514 = [null,null,null,null,null,null,null,null,null];
(statearr_25514[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20529__auto__);

(statearr_25514[(1)] = (1));

return statearr_25514;
});
var figwheel$client$heads_up_plugin_$_state_machine__20529__auto____1 = (function (state_25501){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_25501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e25515){if((e25515 instanceof Object)){
var ex__20532__auto__ = e25515;
var statearr_25516_25525 = state_25501;
(statearr_25516_25525[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25526 = state_25501;
state_25501 = G__25526;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20529__auto__ = function(state_25501){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20529__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20529__auto____1.call(this,state_25501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20529__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20529__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto___25518,ch))
})();
var state__20642__auto__ = (function (){var statearr_25517 = f__20641__auto__.call(null);
(statearr_25517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___25518);

return statearr_25517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto___25518,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto__){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto__){
return (function (state_25547){
var state_val_25548 = (state_25547[(1)]);
if((state_val_25548 === (1))){
var inst_25542 = cljs.core.async.timeout.call(null,(3000));
var state_25547__$1 = state_25547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25547__$1,(2),inst_25542);
} else {
if((state_val_25548 === (2))){
var inst_25544 = (state_25547[(2)]);
var inst_25545 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25547__$1 = (function (){var statearr_25549 = state_25547;
(statearr_25549[(7)] = inst_25544);

return statearr_25549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25547__$1,inst_25545);
} else {
return null;
}
}
});})(c__20640__auto__))
;
return ((function (switch__20528__auto__,c__20640__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20529__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20529__auto____0 = (function (){
var statearr_25553 = [null,null,null,null,null,null,null,null];
(statearr_25553[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20529__auto__);

(statearr_25553[(1)] = (1));

return statearr_25553;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20529__auto____1 = (function (state_25547){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_25547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e25554){if((e25554 instanceof Object)){
var ex__20532__auto__ = e25554;
var statearr_25555_25557 = state_25547;
(statearr_25555_25557[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25558 = state_25547;
state_25547 = G__25558;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20529__auto__ = function(state_25547){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20529__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20529__auto____1.call(this,state_25547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20529__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20529__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto__))
})();
var state__20642__auto__ = (function (){var statearr_25556 = f__20641__auto__.call(null);
(statearr_25556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto__);

return statearr_25556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto__))
);

return c__20640__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25559){
var map__25566 = p__25559;
var map__25566__$1 = ((((!((map__25566 == null)))?((((map__25566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25566):map__25566);
var ed = map__25566__$1;
var formatted_exception = cljs.core.get.call(null,map__25566__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25566__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25566__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25568_25572 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25569_25573 = null;
var count__25570_25574 = (0);
var i__25571_25575 = (0);
while(true){
if((i__25571_25575 < count__25570_25574)){
var msg_25576 = cljs.core._nth.call(null,chunk__25569_25573,i__25571_25575);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25576);

var G__25577 = seq__25568_25572;
var G__25578 = chunk__25569_25573;
var G__25579 = count__25570_25574;
var G__25580 = (i__25571_25575 + (1));
seq__25568_25572 = G__25577;
chunk__25569_25573 = G__25578;
count__25570_25574 = G__25579;
i__25571_25575 = G__25580;
continue;
} else {
var temp__4657__auto___25581 = cljs.core.seq.call(null,seq__25568_25572);
if(temp__4657__auto___25581){
var seq__25568_25582__$1 = temp__4657__auto___25581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25568_25582__$1)){
var c__19173__auto___25583 = cljs.core.chunk_first.call(null,seq__25568_25582__$1);
var G__25584 = cljs.core.chunk_rest.call(null,seq__25568_25582__$1);
var G__25585 = c__19173__auto___25583;
var G__25586 = cljs.core.count.call(null,c__19173__auto___25583);
var G__25587 = (0);
seq__25568_25572 = G__25584;
chunk__25569_25573 = G__25585;
count__25570_25574 = G__25586;
i__25571_25575 = G__25587;
continue;
} else {
var msg_25588 = cljs.core.first.call(null,seq__25568_25582__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25588);

var G__25589 = cljs.core.next.call(null,seq__25568_25582__$1);
var G__25590 = null;
var G__25591 = (0);
var G__25592 = (0);
seq__25568_25572 = G__25589;
chunk__25569_25573 = G__25590;
count__25570_25574 = G__25591;
i__25571_25575 = G__25592;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25593){
var map__25596 = p__25593;
var map__25596__$1 = ((((!((map__25596 == null)))?((((map__25596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25596):map__25596);
var w = map__25596__$1;
var message = cljs.core.get.call(null,map__25596__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18358__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18358__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18358__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25604 = cljs.core.seq.call(null,plugins);
var chunk__25605 = null;
var count__25606 = (0);
var i__25607 = (0);
while(true){
if((i__25607 < count__25606)){
var vec__25608 = cljs.core._nth.call(null,chunk__25605,i__25607);
var k = cljs.core.nth.call(null,vec__25608,(0),null);
var plugin = cljs.core.nth.call(null,vec__25608,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25610 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25604,chunk__25605,count__25606,i__25607,pl_25610,vec__25608,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25610.call(null,msg_hist);
});})(seq__25604,chunk__25605,count__25606,i__25607,pl_25610,vec__25608,k,plugin))
);
} else {
}

var G__25611 = seq__25604;
var G__25612 = chunk__25605;
var G__25613 = count__25606;
var G__25614 = (i__25607 + (1));
seq__25604 = G__25611;
chunk__25605 = G__25612;
count__25606 = G__25613;
i__25607 = G__25614;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25604);
if(temp__4657__auto__){
var seq__25604__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25604__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__25604__$1);
var G__25615 = cljs.core.chunk_rest.call(null,seq__25604__$1);
var G__25616 = c__19173__auto__;
var G__25617 = cljs.core.count.call(null,c__19173__auto__);
var G__25618 = (0);
seq__25604 = G__25615;
chunk__25605 = G__25616;
count__25606 = G__25617;
i__25607 = G__25618;
continue;
} else {
var vec__25609 = cljs.core.first.call(null,seq__25604__$1);
var k = cljs.core.nth.call(null,vec__25609,(0),null);
var plugin = cljs.core.nth.call(null,vec__25609,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25619 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25604,chunk__25605,count__25606,i__25607,pl_25619,vec__25609,k,plugin,seq__25604__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25619.call(null,msg_hist);
});})(seq__25604,chunk__25605,count__25606,i__25607,pl_25619,vec__25609,k,plugin,seq__25604__$1,temp__4657__auto__))
);
} else {
}

var G__25620 = cljs.core.next.call(null,seq__25604__$1);
var G__25621 = null;
var G__25622 = (0);
var G__25623 = (0);
seq__25604 = G__25620;
chunk__25605 = G__25621;
count__25606 = G__25622;
i__25607 = G__25623;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25624 = [];
var len__19428__auto___25627 = arguments.length;
var i__19429__auto___25628 = (0);
while(true){
if((i__19429__auto___25628 < len__19428__auto___25627)){
args25624.push((arguments[i__19429__auto___25628]));

var G__25629 = (i__19429__auto___25628 + (1));
i__19429__auto___25628 = G__25629;
continue;
} else {
}
break;
}

var G__25626 = args25624.length;
switch (G__25626) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25624.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19435__auto__ = [];
var len__19428__auto___25635 = arguments.length;
var i__19429__auto___25636 = (0);
while(true){
if((i__19429__auto___25636 < len__19428__auto___25635)){
args__19435__auto__.push((arguments[i__19429__auto___25636]));

var G__25637 = (i__19429__auto___25636 + (1));
i__19429__auto___25636 = G__25637;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((0) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19436__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25632){
var map__25633 = p__25632;
var map__25633__$1 = ((((!((map__25633 == null)))?((((map__25633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25633):map__25633);
var opts = map__25633__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25631){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25631));
});

//# sourceMappingURL=client.js.map?rel=1460649304580