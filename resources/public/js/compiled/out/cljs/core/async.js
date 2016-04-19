// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20685 = [];
var len__19428__auto___20691 = arguments.length;
var i__19429__auto___20692 = (0);
while(true){
if((i__19429__auto___20692 < len__19428__auto___20691)){
args20685.push((arguments[i__19429__auto___20692]));

var G__20693 = (i__19429__auto___20692 + (1));
i__19429__auto___20692 = G__20693;
continue;
} else {
}
break;
}

var G__20687 = args20685.length;
switch (G__20687) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20685.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20688 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20688 = (function (f,blockable,meta20689){
this.f = f;
this.blockable = blockable;
this.meta20689 = meta20689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20690,meta20689__$1){
var self__ = this;
var _20690__$1 = this;
return (new cljs.core.async.t_cljs$core$async20688(self__.f,self__.blockable,meta20689__$1));
});

cljs.core.async.t_cljs$core$async20688.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20690){
var self__ = this;
var _20690__$1 = this;
return self__.meta20689;
});

cljs.core.async.t_cljs$core$async20688.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20688.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20688.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20688.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20688.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20689","meta20689",-1463846262,null)], null);
});

cljs.core.async.t_cljs$core$async20688.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20688";

cljs.core.async.t_cljs$core$async20688.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async20688");
});

cljs.core.async.__GT_t_cljs$core$async20688 = (function cljs$core$async$__GT_t_cljs$core$async20688(f__$1,blockable__$1,meta20689){
return (new cljs.core.async.t_cljs$core$async20688(f__$1,blockable__$1,meta20689));
});

}

return (new cljs.core.async.t_cljs$core$async20688(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args20697 = [];
var len__19428__auto___20700 = arguments.length;
var i__19429__auto___20701 = (0);
while(true){
if((i__19429__auto___20701 < len__19428__auto___20700)){
args20697.push((arguments[i__19429__auto___20701]));

var G__20702 = (i__19429__auto___20701 + (1));
i__19429__auto___20701 = G__20702;
continue;
} else {
}
break;
}

var G__20699 = args20697.length;
switch (G__20699) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20697.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args20704 = [];
var len__19428__auto___20707 = arguments.length;
var i__19429__auto___20708 = (0);
while(true){
if((i__19429__auto___20708 < len__19428__auto___20707)){
args20704.push((arguments[i__19429__auto___20708]));

var G__20709 = (i__19429__auto___20708 + (1));
i__19429__auto___20708 = G__20709;
continue;
} else {
}
break;
}

var G__20706 = args20704.length;
switch (G__20706) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20704.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args20711 = [];
var len__19428__auto___20714 = arguments.length;
var i__19429__auto___20715 = (0);
while(true){
if((i__19429__auto___20715 < len__19428__auto___20714)){
args20711.push((arguments[i__19429__auto___20715]));

var G__20716 = (i__19429__auto___20715 + (1));
i__19429__auto___20715 = G__20716;
continue;
} else {
}
break;
}

var G__20713 = args20711.length;
switch (G__20713) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20711.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20718 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20718);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20718,ret){
return (function (){
return fn1.call(null,val_20718);
});})(val_20718,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args20719 = [];
var len__19428__auto___20722 = arguments.length;
var i__19429__auto___20723 = (0);
while(true){
if((i__19429__auto___20723 < len__19428__auto___20722)){
args20719.push((arguments[i__19429__auto___20723]));

var G__20724 = (i__19429__auto___20723 + (1));
i__19429__auto___20723 = G__20724;
continue;
} else {
}
break;
}

var G__20721 = args20719.length;
switch (G__20721) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20719.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19273__auto___20726 = n;
var x_20727 = (0);
while(true){
if((x_20727 < n__19273__auto___20726)){
(a[x_20727] = (0));

var G__20728 = (x_20727 + (1));
x_20727 = G__20728;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__20729 = (i + (1));
i = G__20729;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20733 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20733 = (function (alt_flag,flag,meta20734){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20734 = meta20734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20735,meta20734__$1){
var self__ = this;
var _20735__$1 = this;
return (new cljs.core.async.t_cljs$core$async20733(self__.alt_flag,self__.flag,meta20734__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20733.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20735){
var self__ = this;
var _20735__$1 = this;
return self__.meta20734;
});})(flag))
;

cljs.core.async.t_cljs$core$async20733.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20733.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20733.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20733.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20733.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20734","meta20734",2121670563,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20733.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20733";

cljs.core.async.t_cljs$core$async20733.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async20733");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20733 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20733(alt_flag__$1,flag__$1,meta20734){
return (new cljs.core.async.t_cljs$core$async20733(alt_flag__$1,flag__$1,meta20734));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20733(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20739 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20739 = (function (alt_handler,flag,cb,meta20740){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20740 = meta20740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20741,meta20740__$1){
var self__ = this;
var _20741__$1 = this;
return (new cljs.core.async.t_cljs$core$async20739(self__.alt_handler,self__.flag,self__.cb,meta20740__$1));
});

cljs.core.async.t_cljs$core$async20739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20741){
var self__ = this;
var _20741__$1 = this;
return self__.meta20740;
});

cljs.core.async.t_cljs$core$async20739.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20739.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20739.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20739.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20740","meta20740",-2137429866,null)], null);
});

cljs.core.async.t_cljs$core$async20739.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20739";

cljs.core.async.t_cljs$core$async20739.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async20739");
});

cljs.core.async.__GT_t_cljs$core$async20739 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20739(alt_handler__$1,flag__$1,cb__$1,meta20740){
return (new cljs.core.async.t_cljs$core$async20739(alt_handler__$1,flag__$1,cb__$1,meta20740));
});

}

return (new cljs.core.async.t_cljs$core$async20739(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20742_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20742_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20743_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20743_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18370__auto__ = wport;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20744 = (i + (1));
i = G__20744;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18370__auto__ = ret;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18358__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18358__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19435__auto__ = [];
var len__19428__auto___20750 = arguments.length;
var i__19429__auto___20751 = (0);
while(true){
if((i__19429__auto___20751 < len__19428__auto___20750)){
args__19435__auto__.push((arguments[i__19429__auto___20751]));

var G__20752 = (i__19429__auto___20751 + (1));
i__19429__auto___20751 = G__20752;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((1) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19436__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20747){
var map__20748 = p__20747;
var map__20748__$1 = ((((!((map__20748 == null)))?((((map__20748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20748):map__20748);
var opts = map__20748__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20745){
var G__20746 = cljs.core.first.call(null,seq20745);
var seq20745__$1 = cljs.core.next.call(null,seq20745);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20746,seq20745__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args20753 = [];
var len__19428__auto___20803 = arguments.length;
var i__19429__auto___20804 = (0);
while(true){
if((i__19429__auto___20804 < len__19428__auto___20803)){
args20753.push((arguments[i__19429__auto___20804]));

var G__20805 = (i__19429__auto___20804 + (1));
i__19429__auto___20804 = G__20805;
continue;
} else {
}
break;
}

var G__20755 = args20753.length;
switch (G__20755) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20753.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20640__auto___20807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto___20807){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto___20807){
return (function (state_20779){
var state_val_20780 = (state_20779[(1)]);
if((state_val_20780 === (7))){
var inst_20775 = (state_20779[(2)]);
var state_20779__$1 = state_20779;
var statearr_20781_20808 = state_20779__$1;
(statearr_20781_20808[(2)] = inst_20775);

(statearr_20781_20808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20780 === (1))){
var state_20779__$1 = state_20779;
var statearr_20782_20809 = state_20779__$1;
(statearr_20782_20809[(2)] = null);

(statearr_20782_20809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20780 === (4))){
var inst_20758 = (state_20779[(7)]);
var inst_20758__$1 = (state_20779[(2)]);
var inst_20759 = (inst_20758__$1 == null);
var state_20779__$1 = (function (){var statearr_20783 = state_20779;
(statearr_20783[(7)] = inst_20758__$1);

return statearr_20783;
})();
if(cljs.core.truth_(inst_20759)){
var statearr_20784_20810 = state_20779__$1;
(statearr_20784_20810[(1)] = (5));

} else {
var statearr_20785_20811 = state_20779__$1;
(statearr_20785_20811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20780 === (13))){
var state_20779__$1 = state_20779;
var statearr_20786_20812 = state_20779__$1;
(statearr_20786_20812[(2)] = null);

(statearr_20786_20812[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20780 === (6))){
var inst_20758 = (state_20779[(7)]);
var state_20779__$1 = state_20779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20779__$1,(11),to,inst_20758);
} else {
if((state_val_20780 === (3))){
var inst_20777 = (state_20779[(2)]);
var state_20779__$1 = state_20779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20779__$1,inst_20777);
} else {
if((state_val_20780 === (12))){
var state_20779__$1 = state_20779;
var statearr_20787_20813 = state_20779__$1;
(statearr_20787_20813[(2)] = null);

(statearr_20787_20813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20780 === (2))){
var state_20779__$1 = state_20779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20779__$1,(4),from);
} else {
if((state_val_20780 === (11))){
var inst_20768 = (state_20779[(2)]);
var state_20779__$1 = state_20779;
if(cljs.core.truth_(inst_20768)){
var statearr_20788_20814 = state_20779__$1;
(statearr_20788_20814[(1)] = (12));

} else {
var statearr_20789_20815 = state_20779__$1;
(statearr_20789_20815[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20780 === (9))){
var state_20779__$1 = state_20779;
var statearr_20790_20816 = state_20779__$1;
(statearr_20790_20816[(2)] = null);

(statearr_20790_20816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20780 === (5))){
var state_20779__$1 = state_20779;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20791_20817 = state_20779__$1;
(statearr_20791_20817[(1)] = (8));

} else {
var statearr_20792_20818 = state_20779__$1;
(statearr_20792_20818[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20780 === (14))){
var inst_20773 = (state_20779[(2)]);
var state_20779__$1 = state_20779;
var statearr_20793_20819 = state_20779__$1;
(statearr_20793_20819[(2)] = inst_20773);

(statearr_20793_20819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20780 === (10))){
var inst_20765 = (state_20779[(2)]);
var state_20779__$1 = state_20779;
var statearr_20794_20820 = state_20779__$1;
(statearr_20794_20820[(2)] = inst_20765);

(statearr_20794_20820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20780 === (8))){
var inst_20762 = cljs.core.async.close_BANG_.call(null,to);
var state_20779__$1 = state_20779;
var statearr_20795_20821 = state_20779__$1;
(statearr_20795_20821[(2)] = inst_20762);

(statearr_20795_20821[(1)] = (10));


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
});})(c__20640__auto___20807))
;
return ((function (switch__20528__auto__,c__20640__auto___20807){
return (function() {
var cljs$core$async$state_machine__20529__auto__ = null;
var cljs$core$async$state_machine__20529__auto____0 = (function (){
var statearr_20799 = [null,null,null,null,null,null,null,null];
(statearr_20799[(0)] = cljs$core$async$state_machine__20529__auto__);

(statearr_20799[(1)] = (1));

return statearr_20799;
});
var cljs$core$async$state_machine__20529__auto____1 = (function (state_20779){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_20779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e20800){if((e20800 instanceof Object)){
var ex__20532__auto__ = e20800;
var statearr_20801_20822 = state_20779;
(statearr_20801_20822[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20823 = state_20779;
state_20779 = G__20823;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$state_machine__20529__auto__ = function(state_20779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20529__auto____1.call(this,state_20779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20529__auto____0;
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20529__auto____1;
return cljs$core$async$state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto___20807))
})();
var state__20642__auto__ = (function (){var statearr_20802 = f__20641__auto__.call(null);
(statearr_20802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___20807);

return statearr_20802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto___20807))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21007){
var vec__21008 = p__21007;
var v = cljs.core.nth.call(null,vec__21008,(0),null);
var p = cljs.core.nth.call(null,vec__21008,(1),null);
var job = vec__21008;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20640__auto___21190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto___21190,res,vec__21008,v,p,job,jobs,results){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto___21190,res,vec__21008,v,p,job,jobs,results){
return (function (state_21013){
var state_val_21014 = (state_21013[(1)]);
if((state_val_21014 === (1))){
var state_21013__$1 = state_21013;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21013__$1,(2),res,v);
} else {
if((state_val_21014 === (2))){
var inst_21010 = (state_21013[(2)]);
var inst_21011 = cljs.core.async.close_BANG_.call(null,res);
var state_21013__$1 = (function (){var statearr_21015 = state_21013;
(statearr_21015[(7)] = inst_21010);

return statearr_21015;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21013__$1,inst_21011);
} else {
return null;
}
}
});})(c__20640__auto___21190,res,vec__21008,v,p,job,jobs,results))
;
return ((function (switch__20528__auto__,c__20640__auto___21190,res,vec__21008,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____0 = (function (){
var statearr_21019 = [null,null,null,null,null,null,null,null];
(statearr_21019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__);

(statearr_21019[(1)] = (1));

return statearr_21019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____1 = (function (state_21013){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_21013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e21020){if((e21020 instanceof Object)){
var ex__20532__auto__ = e21020;
var statearr_21021_21191 = state_21013;
(statearr_21021_21191[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21192 = state_21013;
state_21013 = G__21192;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__ = function(state_21013){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____1.call(this,state_21013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto___21190,res,vec__21008,v,p,job,jobs,results))
})();
var state__20642__auto__ = (function (){var statearr_21022 = f__20641__auto__.call(null);
(statearr_21022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___21190);

return statearr_21022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto___21190,res,vec__21008,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21023){
var vec__21024 = p__21023;
var v = cljs.core.nth.call(null,vec__21024,(0),null);
var p = cljs.core.nth.call(null,vec__21024,(1),null);
var job = vec__21024;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19273__auto___21193 = n;
var __21194 = (0);
while(true){
if((__21194 < n__19273__auto___21193)){
var G__21025_21195 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21025_21195) {
case "compute":
var c__20640__auto___21197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21194,c__20640__auto___21197,G__21025_21195,n__19273__auto___21193,jobs,results,process,async){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (__21194,c__20640__auto___21197,G__21025_21195,n__19273__auto___21193,jobs,results,process,async){
return (function (state_21038){
var state_val_21039 = (state_21038[(1)]);
if((state_val_21039 === (1))){
var state_21038__$1 = state_21038;
var statearr_21040_21198 = state_21038__$1;
(statearr_21040_21198[(2)] = null);

(statearr_21040_21198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21039 === (2))){
var state_21038__$1 = state_21038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21038__$1,(4),jobs);
} else {
if((state_val_21039 === (3))){
var inst_21036 = (state_21038[(2)]);
var state_21038__$1 = state_21038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21038__$1,inst_21036);
} else {
if((state_val_21039 === (4))){
var inst_21028 = (state_21038[(2)]);
var inst_21029 = process.call(null,inst_21028);
var state_21038__$1 = state_21038;
if(cljs.core.truth_(inst_21029)){
var statearr_21041_21199 = state_21038__$1;
(statearr_21041_21199[(1)] = (5));

} else {
var statearr_21042_21200 = state_21038__$1;
(statearr_21042_21200[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21039 === (5))){
var state_21038__$1 = state_21038;
var statearr_21043_21201 = state_21038__$1;
(statearr_21043_21201[(2)] = null);

(statearr_21043_21201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21039 === (6))){
var state_21038__$1 = state_21038;
var statearr_21044_21202 = state_21038__$1;
(statearr_21044_21202[(2)] = null);

(statearr_21044_21202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21039 === (7))){
var inst_21034 = (state_21038[(2)]);
var state_21038__$1 = state_21038;
var statearr_21045_21203 = state_21038__$1;
(statearr_21045_21203[(2)] = inst_21034);

(statearr_21045_21203[(1)] = (3));


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
});})(__21194,c__20640__auto___21197,G__21025_21195,n__19273__auto___21193,jobs,results,process,async))
;
return ((function (__21194,switch__20528__auto__,c__20640__auto___21197,G__21025_21195,n__19273__auto___21193,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____0 = (function (){
var statearr_21049 = [null,null,null,null,null,null,null];
(statearr_21049[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__);

(statearr_21049[(1)] = (1));

return statearr_21049;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____1 = (function (state_21038){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_21038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e21050){if((e21050 instanceof Object)){
var ex__20532__auto__ = e21050;
var statearr_21051_21204 = state_21038;
(statearr_21051_21204[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21205 = state_21038;
state_21038 = G__21205;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__ = function(state_21038){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____1.call(this,state_21038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__;
})()
;})(__21194,switch__20528__auto__,c__20640__auto___21197,G__21025_21195,n__19273__auto___21193,jobs,results,process,async))
})();
var state__20642__auto__ = (function (){var statearr_21052 = f__20641__auto__.call(null);
(statearr_21052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___21197);

return statearr_21052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(__21194,c__20640__auto___21197,G__21025_21195,n__19273__auto___21193,jobs,results,process,async))
);


break;
case "async":
var c__20640__auto___21206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21194,c__20640__auto___21206,G__21025_21195,n__19273__auto___21193,jobs,results,process,async){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (__21194,c__20640__auto___21206,G__21025_21195,n__19273__auto___21193,jobs,results,process,async){
return (function (state_21065){
var state_val_21066 = (state_21065[(1)]);
if((state_val_21066 === (1))){
var state_21065__$1 = state_21065;
var statearr_21067_21207 = state_21065__$1;
(statearr_21067_21207[(2)] = null);

(statearr_21067_21207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (2))){
var state_21065__$1 = state_21065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21065__$1,(4),jobs);
} else {
if((state_val_21066 === (3))){
var inst_21063 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21065__$1,inst_21063);
} else {
if((state_val_21066 === (4))){
var inst_21055 = (state_21065[(2)]);
var inst_21056 = async.call(null,inst_21055);
var state_21065__$1 = state_21065;
if(cljs.core.truth_(inst_21056)){
var statearr_21068_21208 = state_21065__$1;
(statearr_21068_21208[(1)] = (5));

} else {
var statearr_21069_21209 = state_21065__$1;
(statearr_21069_21209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (5))){
var state_21065__$1 = state_21065;
var statearr_21070_21210 = state_21065__$1;
(statearr_21070_21210[(2)] = null);

(statearr_21070_21210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (6))){
var state_21065__$1 = state_21065;
var statearr_21071_21211 = state_21065__$1;
(statearr_21071_21211[(2)] = null);

(statearr_21071_21211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21066 === (7))){
var inst_21061 = (state_21065[(2)]);
var state_21065__$1 = state_21065;
var statearr_21072_21212 = state_21065__$1;
(statearr_21072_21212[(2)] = inst_21061);

(statearr_21072_21212[(1)] = (3));


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
});})(__21194,c__20640__auto___21206,G__21025_21195,n__19273__auto___21193,jobs,results,process,async))
;
return ((function (__21194,switch__20528__auto__,c__20640__auto___21206,G__21025_21195,n__19273__auto___21193,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____0 = (function (){
var statearr_21076 = [null,null,null,null,null,null,null];
(statearr_21076[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__);

(statearr_21076[(1)] = (1));

return statearr_21076;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____1 = (function (state_21065){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_21065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e21077){if((e21077 instanceof Object)){
var ex__20532__auto__ = e21077;
var statearr_21078_21213 = state_21065;
(statearr_21078_21213[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21214 = state_21065;
state_21065 = G__21214;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__ = function(state_21065){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____1.call(this,state_21065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__;
})()
;})(__21194,switch__20528__auto__,c__20640__auto___21206,G__21025_21195,n__19273__auto___21193,jobs,results,process,async))
})();
var state__20642__auto__ = (function (){var statearr_21079 = f__20641__auto__.call(null);
(statearr_21079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___21206);

return statearr_21079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(__21194,c__20640__auto___21206,G__21025_21195,n__19273__auto___21193,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21215 = (__21194 + (1));
__21194 = G__21215;
continue;
} else {
}
break;
}

var c__20640__auto___21216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto___21216,jobs,results,process,async){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto___21216,jobs,results,process,async){
return (function (state_21101){
var state_val_21102 = (state_21101[(1)]);
if((state_val_21102 === (1))){
var state_21101__$1 = state_21101;
var statearr_21103_21217 = state_21101__$1;
(statearr_21103_21217[(2)] = null);

(statearr_21103_21217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21102 === (2))){
var state_21101__$1 = state_21101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21101__$1,(4),from);
} else {
if((state_val_21102 === (3))){
var inst_21099 = (state_21101[(2)]);
var state_21101__$1 = state_21101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21101__$1,inst_21099);
} else {
if((state_val_21102 === (4))){
var inst_21082 = (state_21101[(7)]);
var inst_21082__$1 = (state_21101[(2)]);
var inst_21083 = (inst_21082__$1 == null);
var state_21101__$1 = (function (){var statearr_21104 = state_21101;
(statearr_21104[(7)] = inst_21082__$1);

return statearr_21104;
})();
if(cljs.core.truth_(inst_21083)){
var statearr_21105_21218 = state_21101__$1;
(statearr_21105_21218[(1)] = (5));

} else {
var statearr_21106_21219 = state_21101__$1;
(statearr_21106_21219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21102 === (5))){
var inst_21085 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21101__$1 = state_21101;
var statearr_21107_21220 = state_21101__$1;
(statearr_21107_21220[(2)] = inst_21085);

(statearr_21107_21220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21102 === (6))){
var inst_21082 = (state_21101[(7)]);
var inst_21087 = (state_21101[(8)]);
var inst_21087__$1 = cljs.core.async.chan.call(null,(1));
var inst_21088 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21089 = [inst_21082,inst_21087__$1];
var inst_21090 = (new cljs.core.PersistentVector(null,2,(5),inst_21088,inst_21089,null));
var state_21101__$1 = (function (){var statearr_21108 = state_21101;
(statearr_21108[(8)] = inst_21087__$1);

return statearr_21108;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21101__$1,(8),jobs,inst_21090);
} else {
if((state_val_21102 === (7))){
var inst_21097 = (state_21101[(2)]);
var state_21101__$1 = state_21101;
var statearr_21109_21221 = state_21101__$1;
(statearr_21109_21221[(2)] = inst_21097);

(statearr_21109_21221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21102 === (8))){
var inst_21087 = (state_21101[(8)]);
var inst_21092 = (state_21101[(2)]);
var state_21101__$1 = (function (){var statearr_21110 = state_21101;
(statearr_21110[(9)] = inst_21092);

return statearr_21110;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21101__$1,(9),results,inst_21087);
} else {
if((state_val_21102 === (9))){
var inst_21094 = (state_21101[(2)]);
var state_21101__$1 = (function (){var statearr_21111 = state_21101;
(statearr_21111[(10)] = inst_21094);

return statearr_21111;
})();
var statearr_21112_21222 = state_21101__$1;
(statearr_21112_21222[(2)] = null);

(statearr_21112_21222[(1)] = (2));


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
});})(c__20640__auto___21216,jobs,results,process,async))
;
return ((function (switch__20528__auto__,c__20640__auto___21216,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____0 = (function (){
var statearr_21116 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21116[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__);

(statearr_21116[(1)] = (1));

return statearr_21116;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____1 = (function (state_21101){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_21101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e21117){if((e21117 instanceof Object)){
var ex__20532__auto__ = e21117;
var statearr_21118_21223 = state_21101;
(statearr_21118_21223[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21224 = state_21101;
state_21101 = G__21224;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__ = function(state_21101){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____1.call(this,state_21101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto___21216,jobs,results,process,async))
})();
var state__20642__auto__ = (function (){var statearr_21119 = f__20641__auto__.call(null);
(statearr_21119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___21216);

return statearr_21119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto___21216,jobs,results,process,async))
);


var c__20640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto__,jobs,results,process,async){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto__,jobs,results,process,async){
return (function (state_21157){
var state_val_21158 = (state_21157[(1)]);
if((state_val_21158 === (7))){
var inst_21153 = (state_21157[(2)]);
var state_21157__$1 = state_21157;
var statearr_21159_21225 = state_21157__$1;
(statearr_21159_21225[(2)] = inst_21153);

(statearr_21159_21225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (20))){
var state_21157__$1 = state_21157;
var statearr_21160_21226 = state_21157__$1;
(statearr_21160_21226[(2)] = null);

(statearr_21160_21226[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (1))){
var state_21157__$1 = state_21157;
var statearr_21161_21227 = state_21157__$1;
(statearr_21161_21227[(2)] = null);

(statearr_21161_21227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (4))){
var inst_21122 = (state_21157[(7)]);
var inst_21122__$1 = (state_21157[(2)]);
var inst_21123 = (inst_21122__$1 == null);
var state_21157__$1 = (function (){var statearr_21162 = state_21157;
(statearr_21162[(7)] = inst_21122__$1);

return statearr_21162;
})();
if(cljs.core.truth_(inst_21123)){
var statearr_21163_21228 = state_21157__$1;
(statearr_21163_21228[(1)] = (5));

} else {
var statearr_21164_21229 = state_21157__$1;
(statearr_21164_21229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (15))){
var inst_21135 = (state_21157[(8)]);
var state_21157__$1 = state_21157;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21157__$1,(18),to,inst_21135);
} else {
if((state_val_21158 === (21))){
var inst_21148 = (state_21157[(2)]);
var state_21157__$1 = state_21157;
var statearr_21165_21230 = state_21157__$1;
(statearr_21165_21230[(2)] = inst_21148);

(statearr_21165_21230[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (13))){
var inst_21150 = (state_21157[(2)]);
var state_21157__$1 = (function (){var statearr_21166 = state_21157;
(statearr_21166[(9)] = inst_21150);

return statearr_21166;
})();
var statearr_21167_21231 = state_21157__$1;
(statearr_21167_21231[(2)] = null);

(statearr_21167_21231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (6))){
var inst_21122 = (state_21157[(7)]);
var state_21157__$1 = state_21157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21157__$1,(11),inst_21122);
} else {
if((state_val_21158 === (17))){
var inst_21143 = (state_21157[(2)]);
var state_21157__$1 = state_21157;
if(cljs.core.truth_(inst_21143)){
var statearr_21168_21232 = state_21157__$1;
(statearr_21168_21232[(1)] = (19));

} else {
var statearr_21169_21233 = state_21157__$1;
(statearr_21169_21233[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (3))){
var inst_21155 = (state_21157[(2)]);
var state_21157__$1 = state_21157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21157__$1,inst_21155);
} else {
if((state_val_21158 === (12))){
var inst_21132 = (state_21157[(10)]);
var state_21157__$1 = state_21157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21157__$1,(14),inst_21132);
} else {
if((state_val_21158 === (2))){
var state_21157__$1 = state_21157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21157__$1,(4),results);
} else {
if((state_val_21158 === (19))){
var state_21157__$1 = state_21157;
var statearr_21170_21234 = state_21157__$1;
(statearr_21170_21234[(2)] = null);

(statearr_21170_21234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (11))){
var inst_21132 = (state_21157[(2)]);
var state_21157__$1 = (function (){var statearr_21171 = state_21157;
(statearr_21171[(10)] = inst_21132);

return statearr_21171;
})();
var statearr_21172_21235 = state_21157__$1;
(statearr_21172_21235[(2)] = null);

(statearr_21172_21235[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (9))){
var state_21157__$1 = state_21157;
var statearr_21173_21236 = state_21157__$1;
(statearr_21173_21236[(2)] = null);

(statearr_21173_21236[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (5))){
var state_21157__$1 = state_21157;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21174_21237 = state_21157__$1;
(statearr_21174_21237[(1)] = (8));

} else {
var statearr_21175_21238 = state_21157__$1;
(statearr_21175_21238[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (14))){
var inst_21137 = (state_21157[(11)]);
var inst_21135 = (state_21157[(8)]);
var inst_21135__$1 = (state_21157[(2)]);
var inst_21136 = (inst_21135__$1 == null);
var inst_21137__$1 = cljs.core.not.call(null,inst_21136);
var state_21157__$1 = (function (){var statearr_21176 = state_21157;
(statearr_21176[(11)] = inst_21137__$1);

(statearr_21176[(8)] = inst_21135__$1);

return statearr_21176;
})();
if(inst_21137__$1){
var statearr_21177_21239 = state_21157__$1;
(statearr_21177_21239[(1)] = (15));

} else {
var statearr_21178_21240 = state_21157__$1;
(statearr_21178_21240[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (16))){
var inst_21137 = (state_21157[(11)]);
var state_21157__$1 = state_21157;
var statearr_21179_21241 = state_21157__$1;
(statearr_21179_21241[(2)] = inst_21137);

(statearr_21179_21241[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (10))){
var inst_21129 = (state_21157[(2)]);
var state_21157__$1 = state_21157;
var statearr_21180_21242 = state_21157__$1;
(statearr_21180_21242[(2)] = inst_21129);

(statearr_21180_21242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (18))){
var inst_21140 = (state_21157[(2)]);
var state_21157__$1 = state_21157;
var statearr_21181_21243 = state_21157__$1;
(statearr_21181_21243[(2)] = inst_21140);

(statearr_21181_21243[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21158 === (8))){
var inst_21126 = cljs.core.async.close_BANG_.call(null,to);
var state_21157__$1 = state_21157;
var statearr_21182_21244 = state_21157__$1;
(statearr_21182_21244[(2)] = inst_21126);

(statearr_21182_21244[(1)] = (10));


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
});})(c__20640__auto__,jobs,results,process,async))
;
return ((function (switch__20528__auto__,c__20640__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____0 = (function (){
var statearr_21186 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21186[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__);

(statearr_21186[(1)] = (1));

return statearr_21186;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____1 = (function (state_21157){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_21157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e21187){if((e21187 instanceof Object)){
var ex__20532__auto__ = e21187;
var statearr_21188_21245 = state_21157;
(statearr_21188_21245[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21246 = state_21157;
state_21157 = G__21246;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__ = function(state_21157){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____1.call(this,state_21157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20529__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto__,jobs,results,process,async))
})();
var state__20642__auto__ = (function (){var statearr_21189 = f__20641__auto__.call(null);
(statearr_21189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto__);

return statearr_21189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto__,jobs,results,process,async))
);

return c__20640__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21247 = [];
var len__19428__auto___21250 = arguments.length;
var i__19429__auto___21251 = (0);
while(true){
if((i__19429__auto___21251 < len__19428__auto___21250)){
args21247.push((arguments[i__19429__auto___21251]));

var G__21252 = (i__19429__auto___21251 + (1));
i__19429__auto___21251 = G__21252;
continue;
} else {
}
break;
}

var G__21249 = args21247.length;
switch (G__21249) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21247.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21254 = [];
var len__19428__auto___21257 = arguments.length;
var i__19429__auto___21258 = (0);
while(true){
if((i__19429__auto___21258 < len__19428__auto___21257)){
args21254.push((arguments[i__19429__auto___21258]));

var G__21259 = (i__19429__auto___21258 + (1));
i__19429__auto___21258 = G__21259;
continue;
} else {
}
break;
}

var G__21256 = args21254.length;
switch (G__21256) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21254.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21261 = [];
var len__19428__auto___21314 = arguments.length;
var i__19429__auto___21315 = (0);
while(true){
if((i__19429__auto___21315 < len__19428__auto___21314)){
args21261.push((arguments[i__19429__auto___21315]));

var G__21316 = (i__19429__auto___21315 + (1));
i__19429__auto___21315 = G__21316;
continue;
} else {
}
break;
}

var G__21263 = args21261.length;
switch (G__21263) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21261.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20640__auto___21318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto___21318,tc,fc){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto___21318,tc,fc){
return (function (state_21289){
var state_val_21290 = (state_21289[(1)]);
if((state_val_21290 === (7))){
var inst_21285 = (state_21289[(2)]);
var state_21289__$1 = state_21289;
var statearr_21291_21319 = state_21289__$1;
(statearr_21291_21319[(2)] = inst_21285);

(statearr_21291_21319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (1))){
var state_21289__$1 = state_21289;
var statearr_21292_21320 = state_21289__$1;
(statearr_21292_21320[(2)] = null);

(statearr_21292_21320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (4))){
var inst_21266 = (state_21289[(7)]);
var inst_21266__$1 = (state_21289[(2)]);
var inst_21267 = (inst_21266__$1 == null);
var state_21289__$1 = (function (){var statearr_21293 = state_21289;
(statearr_21293[(7)] = inst_21266__$1);

return statearr_21293;
})();
if(cljs.core.truth_(inst_21267)){
var statearr_21294_21321 = state_21289__$1;
(statearr_21294_21321[(1)] = (5));

} else {
var statearr_21295_21322 = state_21289__$1;
(statearr_21295_21322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (13))){
var state_21289__$1 = state_21289;
var statearr_21296_21323 = state_21289__$1;
(statearr_21296_21323[(2)] = null);

(statearr_21296_21323[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (6))){
var inst_21266 = (state_21289[(7)]);
var inst_21272 = p.call(null,inst_21266);
var state_21289__$1 = state_21289;
if(cljs.core.truth_(inst_21272)){
var statearr_21297_21324 = state_21289__$1;
(statearr_21297_21324[(1)] = (9));

} else {
var statearr_21298_21325 = state_21289__$1;
(statearr_21298_21325[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (3))){
var inst_21287 = (state_21289[(2)]);
var state_21289__$1 = state_21289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21289__$1,inst_21287);
} else {
if((state_val_21290 === (12))){
var state_21289__$1 = state_21289;
var statearr_21299_21326 = state_21289__$1;
(statearr_21299_21326[(2)] = null);

(statearr_21299_21326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (2))){
var state_21289__$1 = state_21289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21289__$1,(4),ch);
} else {
if((state_val_21290 === (11))){
var inst_21266 = (state_21289[(7)]);
var inst_21276 = (state_21289[(2)]);
var state_21289__$1 = state_21289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21289__$1,(8),inst_21276,inst_21266);
} else {
if((state_val_21290 === (9))){
var state_21289__$1 = state_21289;
var statearr_21300_21327 = state_21289__$1;
(statearr_21300_21327[(2)] = tc);

(statearr_21300_21327[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (5))){
var inst_21269 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21270 = cljs.core.async.close_BANG_.call(null,fc);
var state_21289__$1 = (function (){var statearr_21301 = state_21289;
(statearr_21301[(8)] = inst_21269);

return statearr_21301;
})();
var statearr_21302_21328 = state_21289__$1;
(statearr_21302_21328[(2)] = inst_21270);

(statearr_21302_21328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (14))){
var inst_21283 = (state_21289[(2)]);
var state_21289__$1 = state_21289;
var statearr_21303_21329 = state_21289__$1;
(statearr_21303_21329[(2)] = inst_21283);

(statearr_21303_21329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (10))){
var state_21289__$1 = state_21289;
var statearr_21304_21330 = state_21289__$1;
(statearr_21304_21330[(2)] = fc);

(statearr_21304_21330[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21290 === (8))){
var inst_21278 = (state_21289[(2)]);
var state_21289__$1 = state_21289;
if(cljs.core.truth_(inst_21278)){
var statearr_21305_21331 = state_21289__$1;
(statearr_21305_21331[(1)] = (12));

} else {
var statearr_21306_21332 = state_21289__$1;
(statearr_21306_21332[(1)] = (13));

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
});})(c__20640__auto___21318,tc,fc))
;
return ((function (switch__20528__auto__,c__20640__auto___21318,tc,fc){
return (function() {
var cljs$core$async$state_machine__20529__auto__ = null;
var cljs$core$async$state_machine__20529__auto____0 = (function (){
var statearr_21310 = [null,null,null,null,null,null,null,null,null];
(statearr_21310[(0)] = cljs$core$async$state_machine__20529__auto__);

(statearr_21310[(1)] = (1));

return statearr_21310;
});
var cljs$core$async$state_machine__20529__auto____1 = (function (state_21289){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_21289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e21311){if((e21311 instanceof Object)){
var ex__20532__auto__ = e21311;
var statearr_21312_21333 = state_21289;
(statearr_21312_21333[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21334 = state_21289;
state_21289 = G__21334;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$state_machine__20529__auto__ = function(state_21289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20529__auto____1.call(this,state_21289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20529__auto____0;
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20529__auto____1;
return cljs$core$async$state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto___21318,tc,fc))
})();
var state__20642__auto__ = (function (){var statearr_21313 = f__20641__auto__.call(null);
(statearr_21313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___21318);

return statearr_21313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto___21318,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto__){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto__){
return (function (state_21398){
var state_val_21399 = (state_21398[(1)]);
if((state_val_21399 === (7))){
var inst_21394 = (state_21398[(2)]);
var state_21398__$1 = state_21398;
var statearr_21400_21421 = state_21398__$1;
(statearr_21400_21421[(2)] = inst_21394);

(statearr_21400_21421[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21399 === (1))){
var inst_21378 = init;
var state_21398__$1 = (function (){var statearr_21401 = state_21398;
(statearr_21401[(7)] = inst_21378);

return statearr_21401;
})();
var statearr_21402_21422 = state_21398__$1;
(statearr_21402_21422[(2)] = null);

(statearr_21402_21422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21399 === (4))){
var inst_21381 = (state_21398[(8)]);
var inst_21381__$1 = (state_21398[(2)]);
var inst_21382 = (inst_21381__$1 == null);
var state_21398__$1 = (function (){var statearr_21403 = state_21398;
(statearr_21403[(8)] = inst_21381__$1);

return statearr_21403;
})();
if(cljs.core.truth_(inst_21382)){
var statearr_21404_21423 = state_21398__$1;
(statearr_21404_21423[(1)] = (5));

} else {
var statearr_21405_21424 = state_21398__$1;
(statearr_21405_21424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21399 === (6))){
var inst_21385 = (state_21398[(9)]);
var inst_21381 = (state_21398[(8)]);
var inst_21378 = (state_21398[(7)]);
var inst_21385__$1 = f.call(null,inst_21378,inst_21381);
var inst_21386 = cljs.core.reduced_QMARK_.call(null,inst_21385__$1);
var state_21398__$1 = (function (){var statearr_21406 = state_21398;
(statearr_21406[(9)] = inst_21385__$1);

return statearr_21406;
})();
if(inst_21386){
var statearr_21407_21425 = state_21398__$1;
(statearr_21407_21425[(1)] = (8));

} else {
var statearr_21408_21426 = state_21398__$1;
(statearr_21408_21426[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21399 === (3))){
var inst_21396 = (state_21398[(2)]);
var state_21398__$1 = state_21398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21398__$1,inst_21396);
} else {
if((state_val_21399 === (2))){
var state_21398__$1 = state_21398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21398__$1,(4),ch);
} else {
if((state_val_21399 === (9))){
var inst_21385 = (state_21398[(9)]);
var inst_21378 = inst_21385;
var state_21398__$1 = (function (){var statearr_21409 = state_21398;
(statearr_21409[(7)] = inst_21378);

return statearr_21409;
})();
var statearr_21410_21427 = state_21398__$1;
(statearr_21410_21427[(2)] = null);

(statearr_21410_21427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21399 === (5))){
var inst_21378 = (state_21398[(7)]);
var state_21398__$1 = state_21398;
var statearr_21411_21428 = state_21398__$1;
(statearr_21411_21428[(2)] = inst_21378);

(statearr_21411_21428[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21399 === (10))){
var inst_21392 = (state_21398[(2)]);
var state_21398__$1 = state_21398;
var statearr_21412_21429 = state_21398__$1;
(statearr_21412_21429[(2)] = inst_21392);

(statearr_21412_21429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21399 === (8))){
var inst_21385 = (state_21398[(9)]);
var inst_21388 = cljs.core.deref.call(null,inst_21385);
var state_21398__$1 = state_21398;
var statearr_21413_21430 = state_21398__$1;
(statearr_21413_21430[(2)] = inst_21388);

(statearr_21413_21430[(1)] = (10));


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
});})(c__20640__auto__))
;
return ((function (switch__20528__auto__,c__20640__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20529__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20529__auto____0 = (function (){
var statearr_21417 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21417[(0)] = cljs$core$async$reduce_$_state_machine__20529__auto__);

(statearr_21417[(1)] = (1));

return statearr_21417;
});
var cljs$core$async$reduce_$_state_machine__20529__auto____1 = (function (state_21398){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_21398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e21418){if((e21418 instanceof Object)){
var ex__20532__auto__ = e21418;
var statearr_21419_21431 = state_21398;
(statearr_21419_21431[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21432 = state_21398;
state_21398 = G__21432;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20529__auto__ = function(state_21398){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20529__auto____1.call(this,state_21398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20529__auto____0;
cljs$core$async$reduce_$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20529__auto____1;
return cljs$core$async$reduce_$_state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto__))
})();
var state__20642__auto__ = (function (){var statearr_21420 = f__20641__auto__.call(null);
(statearr_21420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto__);

return statearr_21420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto__))
);

return c__20640__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21433 = [];
var len__19428__auto___21485 = arguments.length;
var i__19429__auto___21486 = (0);
while(true){
if((i__19429__auto___21486 < len__19428__auto___21485)){
args21433.push((arguments[i__19429__auto___21486]));

var G__21487 = (i__19429__auto___21486 + (1));
i__19429__auto___21486 = G__21487;
continue;
} else {
}
break;
}

var G__21435 = args21433.length;
switch (G__21435) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21433.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto__){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto__){
return (function (state_21460){
var state_val_21461 = (state_21460[(1)]);
if((state_val_21461 === (7))){
var inst_21442 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
var statearr_21462_21489 = state_21460__$1;
(statearr_21462_21489[(2)] = inst_21442);

(statearr_21462_21489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (1))){
var inst_21436 = cljs.core.seq.call(null,coll);
var inst_21437 = inst_21436;
var state_21460__$1 = (function (){var statearr_21463 = state_21460;
(statearr_21463[(7)] = inst_21437);

return statearr_21463;
})();
var statearr_21464_21490 = state_21460__$1;
(statearr_21464_21490[(2)] = null);

(statearr_21464_21490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (4))){
var inst_21437 = (state_21460[(7)]);
var inst_21440 = cljs.core.first.call(null,inst_21437);
var state_21460__$1 = state_21460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21460__$1,(7),ch,inst_21440);
} else {
if((state_val_21461 === (13))){
var inst_21454 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
var statearr_21465_21491 = state_21460__$1;
(statearr_21465_21491[(2)] = inst_21454);

(statearr_21465_21491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (6))){
var inst_21445 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
if(cljs.core.truth_(inst_21445)){
var statearr_21466_21492 = state_21460__$1;
(statearr_21466_21492[(1)] = (8));

} else {
var statearr_21467_21493 = state_21460__$1;
(statearr_21467_21493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (3))){
var inst_21458 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21460__$1,inst_21458);
} else {
if((state_val_21461 === (12))){
var state_21460__$1 = state_21460;
var statearr_21468_21494 = state_21460__$1;
(statearr_21468_21494[(2)] = null);

(statearr_21468_21494[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (2))){
var inst_21437 = (state_21460[(7)]);
var state_21460__$1 = state_21460;
if(cljs.core.truth_(inst_21437)){
var statearr_21469_21495 = state_21460__$1;
(statearr_21469_21495[(1)] = (4));

} else {
var statearr_21470_21496 = state_21460__$1;
(statearr_21470_21496[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (11))){
var inst_21451 = cljs.core.async.close_BANG_.call(null,ch);
var state_21460__$1 = state_21460;
var statearr_21471_21497 = state_21460__$1;
(statearr_21471_21497[(2)] = inst_21451);

(statearr_21471_21497[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (9))){
var state_21460__$1 = state_21460;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21472_21498 = state_21460__$1;
(statearr_21472_21498[(1)] = (11));

} else {
var statearr_21473_21499 = state_21460__$1;
(statearr_21473_21499[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (5))){
var inst_21437 = (state_21460[(7)]);
var state_21460__$1 = state_21460;
var statearr_21474_21500 = state_21460__$1;
(statearr_21474_21500[(2)] = inst_21437);

(statearr_21474_21500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (10))){
var inst_21456 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
var statearr_21475_21501 = state_21460__$1;
(statearr_21475_21501[(2)] = inst_21456);

(statearr_21475_21501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (8))){
var inst_21437 = (state_21460[(7)]);
var inst_21447 = cljs.core.next.call(null,inst_21437);
var inst_21437__$1 = inst_21447;
var state_21460__$1 = (function (){var statearr_21476 = state_21460;
(statearr_21476[(7)] = inst_21437__$1);

return statearr_21476;
})();
var statearr_21477_21502 = state_21460__$1;
(statearr_21477_21502[(2)] = null);

(statearr_21477_21502[(1)] = (2));


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
});})(c__20640__auto__))
;
return ((function (switch__20528__auto__,c__20640__auto__){
return (function() {
var cljs$core$async$state_machine__20529__auto__ = null;
var cljs$core$async$state_machine__20529__auto____0 = (function (){
var statearr_21481 = [null,null,null,null,null,null,null,null];
(statearr_21481[(0)] = cljs$core$async$state_machine__20529__auto__);

(statearr_21481[(1)] = (1));

return statearr_21481;
});
var cljs$core$async$state_machine__20529__auto____1 = (function (state_21460){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_21460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e21482){if((e21482 instanceof Object)){
var ex__20532__auto__ = e21482;
var statearr_21483_21503 = state_21460;
(statearr_21483_21503[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21504 = state_21460;
state_21460 = G__21504;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$state_machine__20529__auto__ = function(state_21460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20529__auto____1.call(this,state_21460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20529__auto____0;
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20529__auto____1;
return cljs$core$async$state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto__))
})();
var state__20642__auto__ = (function (){var statearr_21484 = f__20641__auto__.call(null);
(statearr_21484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto__);

return statearr_21484;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto__))
);

return c__20640__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19025__auto__ = (((_ == null))?null:_);
var m__19026__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,_);
} else {
var m__19026__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19026__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m);
} else {
var m__19026__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21726 = (function (mult,ch,cs,meta21727){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21727 = meta21727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21728,meta21727__$1){
var self__ = this;
var _21728__$1 = this;
return (new cljs.core.async.t_cljs$core$async21726(self__.mult,self__.ch,self__.cs,meta21727__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21728){
var self__ = this;
var _21728__$1 = this;
return self__.meta21727;
});})(cs))
;

cljs.core.async.t_cljs$core$async21726.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21726.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21726.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21726.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21726.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21726.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21726.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21727","meta21727",-1517447573,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21726.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21726";

cljs.core.async.t_cljs$core$async21726.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async21726");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21726 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21726(mult__$1,ch__$1,cs__$1,meta21727){
return (new cljs.core.async.t_cljs$core$async21726(mult__$1,ch__$1,cs__$1,meta21727));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21726(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20640__auto___21947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto___21947,cs,m,dchan,dctr,done){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto___21947,cs,m,dchan,dctr,done){
return (function (state_21859){
var state_val_21860 = (state_21859[(1)]);
if((state_val_21860 === (7))){
var inst_21855 = (state_21859[(2)]);
var state_21859__$1 = state_21859;
var statearr_21861_21948 = state_21859__$1;
(statearr_21861_21948[(2)] = inst_21855);

(statearr_21861_21948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (20))){
var inst_21760 = (state_21859[(7)]);
var inst_21770 = cljs.core.first.call(null,inst_21760);
var inst_21771 = cljs.core.nth.call(null,inst_21770,(0),null);
var inst_21772 = cljs.core.nth.call(null,inst_21770,(1),null);
var state_21859__$1 = (function (){var statearr_21862 = state_21859;
(statearr_21862[(8)] = inst_21771);

return statearr_21862;
})();
if(cljs.core.truth_(inst_21772)){
var statearr_21863_21949 = state_21859__$1;
(statearr_21863_21949[(1)] = (22));

} else {
var statearr_21864_21950 = state_21859__$1;
(statearr_21864_21950[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (27))){
var inst_21807 = (state_21859[(9)]);
var inst_21800 = (state_21859[(10)]);
var inst_21731 = (state_21859[(11)]);
var inst_21802 = (state_21859[(12)]);
var inst_21807__$1 = cljs.core._nth.call(null,inst_21800,inst_21802);
var inst_21808 = cljs.core.async.put_BANG_.call(null,inst_21807__$1,inst_21731,done);
var state_21859__$1 = (function (){var statearr_21865 = state_21859;
(statearr_21865[(9)] = inst_21807__$1);

return statearr_21865;
})();
if(cljs.core.truth_(inst_21808)){
var statearr_21866_21951 = state_21859__$1;
(statearr_21866_21951[(1)] = (30));

} else {
var statearr_21867_21952 = state_21859__$1;
(statearr_21867_21952[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (1))){
var state_21859__$1 = state_21859;
var statearr_21868_21953 = state_21859__$1;
(statearr_21868_21953[(2)] = null);

(statearr_21868_21953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (24))){
var inst_21760 = (state_21859[(7)]);
var inst_21777 = (state_21859[(2)]);
var inst_21778 = cljs.core.next.call(null,inst_21760);
var inst_21740 = inst_21778;
var inst_21741 = null;
var inst_21742 = (0);
var inst_21743 = (0);
var state_21859__$1 = (function (){var statearr_21869 = state_21859;
(statearr_21869[(13)] = inst_21777);

(statearr_21869[(14)] = inst_21742);

(statearr_21869[(15)] = inst_21743);

(statearr_21869[(16)] = inst_21741);

(statearr_21869[(17)] = inst_21740);

return statearr_21869;
})();
var statearr_21870_21954 = state_21859__$1;
(statearr_21870_21954[(2)] = null);

(statearr_21870_21954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (39))){
var state_21859__$1 = state_21859;
var statearr_21874_21955 = state_21859__$1;
(statearr_21874_21955[(2)] = null);

(statearr_21874_21955[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (4))){
var inst_21731 = (state_21859[(11)]);
var inst_21731__$1 = (state_21859[(2)]);
var inst_21732 = (inst_21731__$1 == null);
var state_21859__$1 = (function (){var statearr_21875 = state_21859;
(statearr_21875[(11)] = inst_21731__$1);

return statearr_21875;
})();
if(cljs.core.truth_(inst_21732)){
var statearr_21876_21956 = state_21859__$1;
(statearr_21876_21956[(1)] = (5));

} else {
var statearr_21877_21957 = state_21859__$1;
(statearr_21877_21957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (15))){
var inst_21742 = (state_21859[(14)]);
var inst_21743 = (state_21859[(15)]);
var inst_21741 = (state_21859[(16)]);
var inst_21740 = (state_21859[(17)]);
var inst_21756 = (state_21859[(2)]);
var inst_21757 = (inst_21743 + (1));
var tmp21871 = inst_21742;
var tmp21872 = inst_21741;
var tmp21873 = inst_21740;
var inst_21740__$1 = tmp21873;
var inst_21741__$1 = tmp21872;
var inst_21742__$1 = tmp21871;
var inst_21743__$1 = inst_21757;
var state_21859__$1 = (function (){var statearr_21878 = state_21859;
(statearr_21878[(14)] = inst_21742__$1);

(statearr_21878[(18)] = inst_21756);

(statearr_21878[(15)] = inst_21743__$1);

(statearr_21878[(16)] = inst_21741__$1);

(statearr_21878[(17)] = inst_21740__$1);

return statearr_21878;
})();
var statearr_21879_21958 = state_21859__$1;
(statearr_21879_21958[(2)] = null);

(statearr_21879_21958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (21))){
var inst_21781 = (state_21859[(2)]);
var state_21859__$1 = state_21859;
var statearr_21883_21959 = state_21859__$1;
(statearr_21883_21959[(2)] = inst_21781);

(statearr_21883_21959[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (31))){
var inst_21807 = (state_21859[(9)]);
var inst_21811 = done.call(null,null);
var inst_21812 = cljs.core.async.untap_STAR_.call(null,m,inst_21807);
var state_21859__$1 = (function (){var statearr_21884 = state_21859;
(statearr_21884[(19)] = inst_21811);

return statearr_21884;
})();
var statearr_21885_21960 = state_21859__$1;
(statearr_21885_21960[(2)] = inst_21812);

(statearr_21885_21960[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (32))){
var inst_21799 = (state_21859[(20)]);
var inst_21800 = (state_21859[(10)]);
var inst_21802 = (state_21859[(12)]);
var inst_21801 = (state_21859[(21)]);
var inst_21814 = (state_21859[(2)]);
var inst_21815 = (inst_21802 + (1));
var tmp21880 = inst_21799;
var tmp21881 = inst_21800;
var tmp21882 = inst_21801;
var inst_21799__$1 = tmp21880;
var inst_21800__$1 = tmp21881;
var inst_21801__$1 = tmp21882;
var inst_21802__$1 = inst_21815;
var state_21859__$1 = (function (){var statearr_21886 = state_21859;
(statearr_21886[(20)] = inst_21799__$1);

(statearr_21886[(10)] = inst_21800__$1);

(statearr_21886[(12)] = inst_21802__$1);

(statearr_21886[(22)] = inst_21814);

(statearr_21886[(21)] = inst_21801__$1);

return statearr_21886;
})();
var statearr_21887_21961 = state_21859__$1;
(statearr_21887_21961[(2)] = null);

(statearr_21887_21961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (40))){
var inst_21827 = (state_21859[(23)]);
var inst_21831 = done.call(null,null);
var inst_21832 = cljs.core.async.untap_STAR_.call(null,m,inst_21827);
var state_21859__$1 = (function (){var statearr_21888 = state_21859;
(statearr_21888[(24)] = inst_21831);

return statearr_21888;
})();
var statearr_21889_21962 = state_21859__$1;
(statearr_21889_21962[(2)] = inst_21832);

(statearr_21889_21962[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (33))){
var inst_21818 = (state_21859[(25)]);
var inst_21820 = cljs.core.chunked_seq_QMARK_.call(null,inst_21818);
var state_21859__$1 = state_21859;
if(inst_21820){
var statearr_21890_21963 = state_21859__$1;
(statearr_21890_21963[(1)] = (36));

} else {
var statearr_21891_21964 = state_21859__$1;
(statearr_21891_21964[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (13))){
var inst_21750 = (state_21859[(26)]);
var inst_21753 = cljs.core.async.close_BANG_.call(null,inst_21750);
var state_21859__$1 = state_21859;
var statearr_21892_21965 = state_21859__$1;
(statearr_21892_21965[(2)] = inst_21753);

(statearr_21892_21965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (22))){
var inst_21771 = (state_21859[(8)]);
var inst_21774 = cljs.core.async.close_BANG_.call(null,inst_21771);
var state_21859__$1 = state_21859;
var statearr_21893_21966 = state_21859__$1;
(statearr_21893_21966[(2)] = inst_21774);

(statearr_21893_21966[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (36))){
var inst_21818 = (state_21859[(25)]);
var inst_21822 = cljs.core.chunk_first.call(null,inst_21818);
var inst_21823 = cljs.core.chunk_rest.call(null,inst_21818);
var inst_21824 = cljs.core.count.call(null,inst_21822);
var inst_21799 = inst_21823;
var inst_21800 = inst_21822;
var inst_21801 = inst_21824;
var inst_21802 = (0);
var state_21859__$1 = (function (){var statearr_21894 = state_21859;
(statearr_21894[(20)] = inst_21799);

(statearr_21894[(10)] = inst_21800);

(statearr_21894[(12)] = inst_21802);

(statearr_21894[(21)] = inst_21801);

return statearr_21894;
})();
var statearr_21895_21967 = state_21859__$1;
(statearr_21895_21967[(2)] = null);

(statearr_21895_21967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (41))){
var inst_21818 = (state_21859[(25)]);
var inst_21834 = (state_21859[(2)]);
var inst_21835 = cljs.core.next.call(null,inst_21818);
var inst_21799 = inst_21835;
var inst_21800 = null;
var inst_21801 = (0);
var inst_21802 = (0);
var state_21859__$1 = (function (){var statearr_21896 = state_21859;
(statearr_21896[(20)] = inst_21799);

(statearr_21896[(10)] = inst_21800);

(statearr_21896[(12)] = inst_21802);

(statearr_21896[(21)] = inst_21801);

(statearr_21896[(27)] = inst_21834);

return statearr_21896;
})();
var statearr_21897_21968 = state_21859__$1;
(statearr_21897_21968[(2)] = null);

(statearr_21897_21968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (43))){
var state_21859__$1 = state_21859;
var statearr_21898_21969 = state_21859__$1;
(statearr_21898_21969[(2)] = null);

(statearr_21898_21969[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (29))){
var inst_21843 = (state_21859[(2)]);
var state_21859__$1 = state_21859;
var statearr_21899_21970 = state_21859__$1;
(statearr_21899_21970[(2)] = inst_21843);

(statearr_21899_21970[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (44))){
var inst_21852 = (state_21859[(2)]);
var state_21859__$1 = (function (){var statearr_21900 = state_21859;
(statearr_21900[(28)] = inst_21852);

return statearr_21900;
})();
var statearr_21901_21971 = state_21859__$1;
(statearr_21901_21971[(2)] = null);

(statearr_21901_21971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (6))){
var inst_21791 = (state_21859[(29)]);
var inst_21790 = cljs.core.deref.call(null,cs);
var inst_21791__$1 = cljs.core.keys.call(null,inst_21790);
var inst_21792 = cljs.core.count.call(null,inst_21791__$1);
var inst_21793 = cljs.core.reset_BANG_.call(null,dctr,inst_21792);
var inst_21798 = cljs.core.seq.call(null,inst_21791__$1);
var inst_21799 = inst_21798;
var inst_21800 = null;
var inst_21801 = (0);
var inst_21802 = (0);
var state_21859__$1 = (function (){var statearr_21902 = state_21859;
(statearr_21902[(30)] = inst_21793);

(statearr_21902[(20)] = inst_21799);

(statearr_21902[(10)] = inst_21800);

(statearr_21902[(12)] = inst_21802);

(statearr_21902[(29)] = inst_21791__$1);

(statearr_21902[(21)] = inst_21801);

return statearr_21902;
})();
var statearr_21903_21972 = state_21859__$1;
(statearr_21903_21972[(2)] = null);

(statearr_21903_21972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (28))){
var inst_21799 = (state_21859[(20)]);
var inst_21818 = (state_21859[(25)]);
var inst_21818__$1 = cljs.core.seq.call(null,inst_21799);
var state_21859__$1 = (function (){var statearr_21904 = state_21859;
(statearr_21904[(25)] = inst_21818__$1);

return statearr_21904;
})();
if(inst_21818__$1){
var statearr_21905_21973 = state_21859__$1;
(statearr_21905_21973[(1)] = (33));

} else {
var statearr_21906_21974 = state_21859__$1;
(statearr_21906_21974[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (25))){
var inst_21802 = (state_21859[(12)]);
var inst_21801 = (state_21859[(21)]);
var inst_21804 = (inst_21802 < inst_21801);
var inst_21805 = inst_21804;
var state_21859__$1 = state_21859;
if(cljs.core.truth_(inst_21805)){
var statearr_21907_21975 = state_21859__$1;
(statearr_21907_21975[(1)] = (27));

} else {
var statearr_21908_21976 = state_21859__$1;
(statearr_21908_21976[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (34))){
var state_21859__$1 = state_21859;
var statearr_21909_21977 = state_21859__$1;
(statearr_21909_21977[(2)] = null);

(statearr_21909_21977[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (17))){
var state_21859__$1 = state_21859;
var statearr_21910_21978 = state_21859__$1;
(statearr_21910_21978[(2)] = null);

(statearr_21910_21978[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (3))){
var inst_21857 = (state_21859[(2)]);
var state_21859__$1 = state_21859;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21859__$1,inst_21857);
} else {
if((state_val_21860 === (12))){
var inst_21786 = (state_21859[(2)]);
var state_21859__$1 = state_21859;
var statearr_21911_21979 = state_21859__$1;
(statearr_21911_21979[(2)] = inst_21786);

(statearr_21911_21979[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (2))){
var state_21859__$1 = state_21859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21859__$1,(4),ch);
} else {
if((state_val_21860 === (23))){
var state_21859__$1 = state_21859;
var statearr_21912_21980 = state_21859__$1;
(statearr_21912_21980[(2)] = null);

(statearr_21912_21980[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (35))){
var inst_21841 = (state_21859[(2)]);
var state_21859__$1 = state_21859;
var statearr_21913_21981 = state_21859__$1;
(statearr_21913_21981[(2)] = inst_21841);

(statearr_21913_21981[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (19))){
var inst_21760 = (state_21859[(7)]);
var inst_21764 = cljs.core.chunk_first.call(null,inst_21760);
var inst_21765 = cljs.core.chunk_rest.call(null,inst_21760);
var inst_21766 = cljs.core.count.call(null,inst_21764);
var inst_21740 = inst_21765;
var inst_21741 = inst_21764;
var inst_21742 = inst_21766;
var inst_21743 = (0);
var state_21859__$1 = (function (){var statearr_21914 = state_21859;
(statearr_21914[(14)] = inst_21742);

(statearr_21914[(15)] = inst_21743);

(statearr_21914[(16)] = inst_21741);

(statearr_21914[(17)] = inst_21740);

return statearr_21914;
})();
var statearr_21915_21982 = state_21859__$1;
(statearr_21915_21982[(2)] = null);

(statearr_21915_21982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (11))){
var inst_21760 = (state_21859[(7)]);
var inst_21740 = (state_21859[(17)]);
var inst_21760__$1 = cljs.core.seq.call(null,inst_21740);
var state_21859__$1 = (function (){var statearr_21916 = state_21859;
(statearr_21916[(7)] = inst_21760__$1);

return statearr_21916;
})();
if(inst_21760__$1){
var statearr_21917_21983 = state_21859__$1;
(statearr_21917_21983[(1)] = (16));

} else {
var statearr_21918_21984 = state_21859__$1;
(statearr_21918_21984[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (9))){
var inst_21788 = (state_21859[(2)]);
var state_21859__$1 = state_21859;
var statearr_21919_21985 = state_21859__$1;
(statearr_21919_21985[(2)] = inst_21788);

(statearr_21919_21985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (5))){
var inst_21738 = cljs.core.deref.call(null,cs);
var inst_21739 = cljs.core.seq.call(null,inst_21738);
var inst_21740 = inst_21739;
var inst_21741 = null;
var inst_21742 = (0);
var inst_21743 = (0);
var state_21859__$1 = (function (){var statearr_21920 = state_21859;
(statearr_21920[(14)] = inst_21742);

(statearr_21920[(15)] = inst_21743);

(statearr_21920[(16)] = inst_21741);

(statearr_21920[(17)] = inst_21740);

return statearr_21920;
})();
var statearr_21921_21986 = state_21859__$1;
(statearr_21921_21986[(2)] = null);

(statearr_21921_21986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (14))){
var state_21859__$1 = state_21859;
var statearr_21922_21987 = state_21859__$1;
(statearr_21922_21987[(2)] = null);

(statearr_21922_21987[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (45))){
var inst_21849 = (state_21859[(2)]);
var state_21859__$1 = state_21859;
var statearr_21923_21988 = state_21859__$1;
(statearr_21923_21988[(2)] = inst_21849);

(statearr_21923_21988[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (26))){
var inst_21791 = (state_21859[(29)]);
var inst_21845 = (state_21859[(2)]);
var inst_21846 = cljs.core.seq.call(null,inst_21791);
var state_21859__$1 = (function (){var statearr_21924 = state_21859;
(statearr_21924[(31)] = inst_21845);

return statearr_21924;
})();
if(inst_21846){
var statearr_21925_21989 = state_21859__$1;
(statearr_21925_21989[(1)] = (42));

} else {
var statearr_21926_21990 = state_21859__$1;
(statearr_21926_21990[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (16))){
var inst_21760 = (state_21859[(7)]);
var inst_21762 = cljs.core.chunked_seq_QMARK_.call(null,inst_21760);
var state_21859__$1 = state_21859;
if(inst_21762){
var statearr_21927_21991 = state_21859__$1;
(statearr_21927_21991[(1)] = (19));

} else {
var statearr_21928_21992 = state_21859__$1;
(statearr_21928_21992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (38))){
var inst_21838 = (state_21859[(2)]);
var state_21859__$1 = state_21859;
var statearr_21929_21993 = state_21859__$1;
(statearr_21929_21993[(2)] = inst_21838);

(statearr_21929_21993[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (30))){
var state_21859__$1 = state_21859;
var statearr_21930_21994 = state_21859__$1;
(statearr_21930_21994[(2)] = null);

(statearr_21930_21994[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (10))){
var inst_21743 = (state_21859[(15)]);
var inst_21741 = (state_21859[(16)]);
var inst_21749 = cljs.core._nth.call(null,inst_21741,inst_21743);
var inst_21750 = cljs.core.nth.call(null,inst_21749,(0),null);
var inst_21751 = cljs.core.nth.call(null,inst_21749,(1),null);
var state_21859__$1 = (function (){var statearr_21931 = state_21859;
(statearr_21931[(26)] = inst_21750);

return statearr_21931;
})();
if(cljs.core.truth_(inst_21751)){
var statearr_21932_21995 = state_21859__$1;
(statearr_21932_21995[(1)] = (13));

} else {
var statearr_21933_21996 = state_21859__$1;
(statearr_21933_21996[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (18))){
var inst_21784 = (state_21859[(2)]);
var state_21859__$1 = state_21859;
var statearr_21934_21997 = state_21859__$1;
(statearr_21934_21997[(2)] = inst_21784);

(statearr_21934_21997[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (42))){
var state_21859__$1 = state_21859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21859__$1,(45),dchan);
} else {
if((state_val_21860 === (37))){
var inst_21827 = (state_21859[(23)]);
var inst_21731 = (state_21859[(11)]);
var inst_21818 = (state_21859[(25)]);
var inst_21827__$1 = cljs.core.first.call(null,inst_21818);
var inst_21828 = cljs.core.async.put_BANG_.call(null,inst_21827__$1,inst_21731,done);
var state_21859__$1 = (function (){var statearr_21935 = state_21859;
(statearr_21935[(23)] = inst_21827__$1);

return statearr_21935;
})();
if(cljs.core.truth_(inst_21828)){
var statearr_21936_21998 = state_21859__$1;
(statearr_21936_21998[(1)] = (39));

} else {
var statearr_21937_21999 = state_21859__$1;
(statearr_21937_21999[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21860 === (8))){
var inst_21742 = (state_21859[(14)]);
var inst_21743 = (state_21859[(15)]);
var inst_21745 = (inst_21743 < inst_21742);
var inst_21746 = inst_21745;
var state_21859__$1 = state_21859;
if(cljs.core.truth_(inst_21746)){
var statearr_21938_22000 = state_21859__$1;
(statearr_21938_22000[(1)] = (10));

} else {
var statearr_21939_22001 = state_21859__$1;
(statearr_21939_22001[(1)] = (11));

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
});})(c__20640__auto___21947,cs,m,dchan,dctr,done))
;
return ((function (switch__20528__auto__,c__20640__auto___21947,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20529__auto__ = null;
var cljs$core$async$mult_$_state_machine__20529__auto____0 = (function (){
var statearr_21943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21943[(0)] = cljs$core$async$mult_$_state_machine__20529__auto__);

(statearr_21943[(1)] = (1));

return statearr_21943;
});
var cljs$core$async$mult_$_state_machine__20529__auto____1 = (function (state_21859){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_21859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e21944){if((e21944 instanceof Object)){
var ex__20532__auto__ = e21944;
var statearr_21945_22002 = state_21859;
(statearr_21945_22002[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22003 = state_21859;
state_21859 = G__22003;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20529__auto__ = function(state_21859){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20529__auto____1.call(this,state_21859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20529__auto____0;
cljs$core$async$mult_$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20529__auto____1;
return cljs$core$async$mult_$_state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto___21947,cs,m,dchan,dctr,done))
})();
var state__20642__auto__ = (function (){var statearr_21946 = f__20641__auto__.call(null);
(statearr_21946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___21947);

return statearr_21946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto___21947,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22004 = [];
var len__19428__auto___22007 = arguments.length;
var i__19429__auto___22008 = (0);
while(true){
if((i__19429__auto___22008 < len__19428__auto___22007)){
args22004.push((arguments[i__19429__auto___22008]));

var G__22009 = (i__19429__auto___22008 + (1));
i__19429__auto___22008 = G__22009;
continue;
} else {
}
break;
}

var G__22006 = args22004.length;
switch (G__22006) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22004.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m);
} else {
var m__19026__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,state_map);
} else {
var m__19026__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19025__auto__ = (((m == null))?null:m);
var m__19026__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,m,mode);
} else {
var m__19026__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19435__auto__ = [];
var len__19428__auto___22021 = arguments.length;
var i__19429__auto___22022 = (0);
while(true){
if((i__19429__auto___22022 < len__19428__auto___22021)){
args__19435__auto__.push((arguments[i__19429__auto___22022]));

var G__22023 = (i__19429__auto___22022 + (1));
i__19429__auto___22022 = G__22023;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((3) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19436__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22015){
var map__22016 = p__22015;
var map__22016__$1 = ((((!((map__22016 == null)))?((((map__22016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22016):map__22016);
var opts = map__22016__$1;
var statearr_22018_22024 = state;
(statearr_22018_22024[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22016,map__22016__$1,opts){
return (function (val){
var statearr_22019_22025 = state;
(statearr_22019_22025[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22016,map__22016__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22020_22026 = state;
(statearr_22020_22026[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22011){
var G__22012 = cljs.core.first.call(null,seq22011);
var seq22011__$1 = cljs.core.next.call(null,seq22011);
var G__22013 = cljs.core.first.call(null,seq22011__$1);
var seq22011__$2 = cljs.core.next.call(null,seq22011__$1);
var G__22014 = cljs.core.first.call(null,seq22011__$2);
var seq22011__$3 = cljs.core.next.call(null,seq22011__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22012,G__22013,G__22014,seq22011__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22190 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22190 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22191){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22191 = meta22191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22192,meta22191__$1){
var self__ = this;
var _22192__$1 = this;
return (new cljs.core.async.t_cljs$core$async22190(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22191__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22192){
var self__ = this;
var _22192__$1 = this;
return self__.meta22191;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22190.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22190.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22191","meta22191",-736591241,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22190";

cljs.core.async.t_cljs$core$async22190.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22190");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22190 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22190(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22191){
return (new cljs.core.async.t_cljs$core$async22190(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22191));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22190(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20640__auto___22353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto___22353,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto___22353,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22290){
var state_val_22291 = (state_22290[(1)]);
if((state_val_22291 === (7))){
var inst_22208 = (state_22290[(2)]);
var state_22290__$1 = state_22290;
var statearr_22292_22354 = state_22290__$1;
(statearr_22292_22354[(2)] = inst_22208);

(statearr_22292_22354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (20))){
var inst_22220 = (state_22290[(7)]);
var state_22290__$1 = state_22290;
var statearr_22293_22355 = state_22290__$1;
(statearr_22293_22355[(2)] = inst_22220);

(statearr_22293_22355[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (27))){
var state_22290__$1 = state_22290;
var statearr_22294_22356 = state_22290__$1;
(statearr_22294_22356[(2)] = null);

(statearr_22294_22356[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (1))){
var inst_22196 = (state_22290[(8)]);
var inst_22196__$1 = calc_state.call(null);
var inst_22198 = (inst_22196__$1 == null);
var inst_22199 = cljs.core.not.call(null,inst_22198);
var state_22290__$1 = (function (){var statearr_22295 = state_22290;
(statearr_22295[(8)] = inst_22196__$1);

return statearr_22295;
})();
if(inst_22199){
var statearr_22296_22357 = state_22290__$1;
(statearr_22296_22357[(1)] = (2));

} else {
var statearr_22297_22358 = state_22290__$1;
(statearr_22297_22358[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (24))){
var inst_22250 = (state_22290[(9)]);
var inst_22264 = (state_22290[(10)]);
var inst_22243 = (state_22290[(11)]);
var inst_22264__$1 = inst_22243.call(null,inst_22250);
var state_22290__$1 = (function (){var statearr_22298 = state_22290;
(statearr_22298[(10)] = inst_22264__$1);

return statearr_22298;
})();
if(cljs.core.truth_(inst_22264__$1)){
var statearr_22299_22359 = state_22290__$1;
(statearr_22299_22359[(1)] = (29));

} else {
var statearr_22300_22360 = state_22290__$1;
(statearr_22300_22360[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (4))){
var inst_22211 = (state_22290[(2)]);
var state_22290__$1 = state_22290;
if(cljs.core.truth_(inst_22211)){
var statearr_22301_22361 = state_22290__$1;
(statearr_22301_22361[(1)] = (8));

} else {
var statearr_22302_22362 = state_22290__$1;
(statearr_22302_22362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (15))){
var inst_22237 = (state_22290[(2)]);
var state_22290__$1 = state_22290;
if(cljs.core.truth_(inst_22237)){
var statearr_22303_22363 = state_22290__$1;
(statearr_22303_22363[(1)] = (19));

} else {
var statearr_22304_22364 = state_22290__$1;
(statearr_22304_22364[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (21))){
var inst_22242 = (state_22290[(12)]);
var inst_22242__$1 = (state_22290[(2)]);
var inst_22243 = cljs.core.get.call(null,inst_22242__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22244 = cljs.core.get.call(null,inst_22242__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22245 = cljs.core.get.call(null,inst_22242__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22290__$1 = (function (){var statearr_22305 = state_22290;
(statearr_22305[(13)] = inst_22244);

(statearr_22305[(11)] = inst_22243);

(statearr_22305[(12)] = inst_22242__$1);

return statearr_22305;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22290__$1,(22),inst_22245);
} else {
if((state_val_22291 === (31))){
var inst_22272 = (state_22290[(2)]);
var state_22290__$1 = state_22290;
if(cljs.core.truth_(inst_22272)){
var statearr_22306_22365 = state_22290__$1;
(statearr_22306_22365[(1)] = (32));

} else {
var statearr_22307_22366 = state_22290__$1;
(statearr_22307_22366[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (32))){
var inst_22249 = (state_22290[(14)]);
var state_22290__$1 = state_22290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22290__$1,(35),out,inst_22249);
} else {
if((state_val_22291 === (33))){
var inst_22242 = (state_22290[(12)]);
var inst_22220 = inst_22242;
var state_22290__$1 = (function (){var statearr_22308 = state_22290;
(statearr_22308[(7)] = inst_22220);

return statearr_22308;
})();
var statearr_22309_22367 = state_22290__$1;
(statearr_22309_22367[(2)] = null);

(statearr_22309_22367[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (13))){
var inst_22220 = (state_22290[(7)]);
var inst_22227 = inst_22220.cljs$lang$protocol_mask$partition0$;
var inst_22228 = (inst_22227 & (64));
var inst_22229 = inst_22220.cljs$core$ISeq$;
var inst_22230 = (inst_22228) || (inst_22229);
var state_22290__$1 = state_22290;
if(cljs.core.truth_(inst_22230)){
var statearr_22310_22368 = state_22290__$1;
(statearr_22310_22368[(1)] = (16));

} else {
var statearr_22311_22369 = state_22290__$1;
(statearr_22311_22369[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (22))){
var inst_22250 = (state_22290[(9)]);
var inst_22249 = (state_22290[(14)]);
var inst_22248 = (state_22290[(2)]);
var inst_22249__$1 = cljs.core.nth.call(null,inst_22248,(0),null);
var inst_22250__$1 = cljs.core.nth.call(null,inst_22248,(1),null);
var inst_22251 = (inst_22249__$1 == null);
var inst_22252 = cljs.core._EQ_.call(null,inst_22250__$1,change);
var inst_22253 = (inst_22251) || (inst_22252);
var state_22290__$1 = (function (){var statearr_22312 = state_22290;
(statearr_22312[(9)] = inst_22250__$1);

(statearr_22312[(14)] = inst_22249__$1);

return statearr_22312;
})();
if(cljs.core.truth_(inst_22253)){
var statearr_22313_22370 = state_22290__$1;
(statearr_22313_22370[(1)] = (23));

} else {
var statearr_22314_22371 = state_22290__$1;
(statearr_22314_22371[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (36))){
var inst_22242 = (state_22290[(12)]);
var inst_22220 = inst_22242;
var state_22290__$1 = (function (){var statearr_22315 = state_22290;
(statearr_22315[(7)] = inst_22220);

return statearr_22315;
})();
var statearr_22316_22372 = state_22290__$1;
(statearr_22316_22372[(2)] = null);

(statearr_22316_22372[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (29))){
var inst_22264 = (state_22290[(10)]);
var state_22290__$1 = state_22290;
var statearr_22317_22373 = state_22290__$1;
(statearr_22317_22373[(2)] = inst_22264);

(statearr_22317_22373[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (6))){
var state_22290__$1 = state_22290;
var statearr_22318_22374 = state_22290__$1;
(statearr_22318_22374[(2)] = false);

(statearr_22318_22374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (28))){
var inst_22260 = (state_22290[(2)]);
var inst_22261 = calc_state.call(null);
var inst_22220 = inst_22261;
var state_22290__$1 = (function (){var statearr_22319 = state_22290;
(statearr_22319[(15)] = inst_22260);

(statearr_22319[(7)] = inst_22220);

return statearr_22319;
})();
var statearr_22320_22375 = state_22290__$1;
(statearr_22320_22375[(2)] = null);

(statearr_22320_22375[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (25))){
var inst_22286 = (state_22290[(2)]);
var state_22290__$1 = state_22290;
var statearr_22321_22376 = state_22290__$1;
(statearr_22321_22376[(2)] = inst_22286);

(statearr_22321_22376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (34))){
var inst_22284 = (state_22290[(2)]);
var state_22290__$1 = state_22290;
var statearr_22322_22377 = state_22290__$1;
(statearr_22322_22377[(2)] = inst_22284);

(statearr_22322_22377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (17))){
var state_22290__$1 = state_22290;
var statearr_22323_22378 = state_22290__$1;
(statearr_22323_22378[(2)] = false);

(statearr_22323_22378[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (3))){
var state_22290__$1 = state_22290;
var statearr_22324_22379 = state_22290__$1;
(statearr_22324_22379[(2)] = false);

(statearr_22324_22379[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (12))){
var inst_22288 = (state_22290[(2)]);
var state_22290__$1 = state_22290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22290__$1,inst_22288);
} else {
if((state_val_22291 === (2))){
var inst_22196 = (state_22290[(8)]);
var inst_22201 = inst_22196.cljs$lang$protocol_mask$partition0$;
var inst_22202 = (inst_22201 & (64));
var inst_22203 = inst_22196.cljs$core$ISeq$;
var inst_22204 = (inst_22202) || (inst_22203);
var state_22290__$1 = state_22290;
if(cljs.core.truth_(inst_22204)){
var statearr_22325_22380 = state_22290__$1;
(statearr_22325_22380[(1)] = (5));

} else {
var statearr_22326_22381 = state_22290__$1;
(statearr_22326_22381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (23))){
var inst_22249 = (state_22290[(14)]);
var inst_22255 = (inst_22249 == null);
var state_22290__$1 = state_22290;
if(cljs.core.truth_(inst_22255)){
var statearr_22327_22382 = state_22290__$1;
(statearr_22327_22382[(1)] = (26));

} else {
var statearr_22328_22383 = state_22290__$1;
(statearr_22328_22383[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (35))){
var inst_22275 = (state_22290[(2)]);
var state_22290__$1 = state_22290;
if(cljs.core.truth_(inst_22275)){
var statearr_22329_22384 = state_22290__$1;
(statearr_22329_22384[(1)] = (36));

} else {
var statearr_22330_22385 = state_22290__$1;
(statearr_22330_22385[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (19))){
var inst_22220 = (state_22290[(7)]);
var inst_22239 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22220);
var state_22290__$1 = state_22290;
var statearr_22331_22386 = state_22290__$1;
(statearr_22331_22386[(2)] = inst_22239);

(statearr_22331_22386[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (11))){
var inst_22220 = (state_22290[(7)]);
var inst_22224 = (inst_22220 == null);
var inst_22225 = cljs.core.not.call(null,inst_22224);
var state_22290__$1 = state_22290;
if(inst_22225){
var statearr_22332_22387 = state_22290__$1;
(statearr_22332_22387[(1)] = (13));

} else {
var statearr_22333_22388 = state_22290__$1;
(statearr_22333_22388[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (9))){
var inst_22196 = (state_22290[(8)]);
var state_22290__$1 = state_22290;
var statearr_22334_22389 = state_22290__$1;
(statearr_22334_22389[(2)] = inst_22196);

(statearr_22334_22389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (5))){
var state_22290__$1 = state_22290;
var statearr_22335_22390 = state_22290__$1;
(statearr_22335_22390[(2)] = true);

(statearr_22335_22390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (14))){
var state_22290__$1 = state_22290;
var statearr_22336_22391 = state_22290__$1;
(statearr_22336_22391[(2)] = false);

(statearr_22336_22391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (26))){
var inst_22250 = (state_22290[(9)]);
var inst_22257 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22250);
var state_22290__$1 = state_22290;
var statearr_22337_22392 = state_22290__$1;
(statearr_22337_22392[(2)] = inst_22257);

(statearr_22337_22392[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (16))){
var state_22290__$1 = state_22290;
var statearr_22338_22393 = state_22290__$1;
(statearr_22338_22393[(2)] = true);

(statearr_22338_22393[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (38))){
var inst_22280 = (state_22290[(2)]);
var state_22290__$1 = state_22290;
var statearr_22339_22394 = state_22290__$1;
(statearr_22339_22394[(2)] = inst_22280);

(statearr_22339_22394[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (30))){
var inst_22250 = (state_22290[(9)]);
var inst_22244 = (state_22290[(13)]);
var inst_22243 = (state_22290[(11)]);
var inst_22267 = cljs.core.empty_QMARK_.call(null,inst_22243);
var inst_22268 = inst_22244.call(null,inst_22250);
var inst_22269 = cljs.core.not.call(null,inst_22268);
var inst_22270 = (inst_22267) && (inst_22269);
var state_22290__$1 = state_22290;
var statearr_22340_22395 = state_22290__$1;
(statearr_22340_22395[(2)] = inst_22270);

(statearr_22340_22395[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (10))){
var inst_22196 = (state_22290[(8)]);
var inst_22216 = (state_22290[(2)]);
var inst_22217 = cljs.core.get.call(null,inst_22216,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22218 = cljs.core.get.call(null,inst_22216,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22219 = cljs.core.get.call(null,inst_22216,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22220 = inst_22196;
var state_22290__$1 = (function (){var statearr_22341 = state_22290;
(statearr_22341[(16)] = inst_22219);

(statearr_22341[(17)] = inst_22218);

(statearr_22341[(18)] = inst_22217);

(statearr_22341[(7)] = inst_22220);

return statearr_22341;
})();
var statearr_22342_22396 = state_22290__$1;
(statearr_22342_22396[(2)] = null);

(statearr_22342_22396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (18))){
var inst_22234 = (state_22290[(2)]);
var state_22290__$1 = state_22290;
var statearr_22343_22397 = state_22290__$1;
(statearr_22343_22397[(2)] = inst_22234);

(statearr_22343_22397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (37))){
var state_22290__$1 = state_22290;
var statearr_22344_22398 = state_22290__$1;
(statearr_22344_22398[(2)] = null);

(statearr_22344_22398[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22291 === (8))){
var inst_22196 = (state_22290[(8)]);
var inst_22213 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22196);
var state_22290__$1 = state_22290;
var statearr_22345_22399 = state_22290__$1;
(statearr_22345_22399[(2)] = inst_22213);

(statearr_22345_22399[(1)] = (10));


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
});})(c__20640__auto___22353,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20528__auto__,c__20640__auto___22353,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20529__auto__ = null;
var cljs$core$async$mix_$_state_machine__20529__auto____0 = (function (){
var statearr_22349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22349[(0)] = cljs$core$async$mix_$_state_machine__20529__auto__);

(statearr_22349[(1)] = (1));

return statearr_22349;
});
var cljs$core$async$mix_$_state_machine__20529__auto____1 = (function (state_22290){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_22290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e22350){if((e22350 instanceof Object)){
var ex__20532__auto__ = e22350;
var statearr_22351_22400 = state_22290;
(statearr_22351_22400[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22401 = state_22290;
state_22290 = G__22401;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20529__auto__ = function(state_22290){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20529__auto____1.call(this,state_22290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20529__auto____0;
cljs$core$async$mix_$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20529__auto____1;
return cljs$core$async$mix_$_state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto___22353,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20642__auto__ = (function (){var statearr_22352 = f__20641__auto__.call(null);
(statearr_22352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___22353);

return statearr_22352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto___22353,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19026__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p,v,ch);
} else {
var m__19026__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22402 = [];
var len__19428__auto___22405 = arguments.length;
var i__19429__auto___22406 = (0);
while(true){
if((i__19429__auto___22406 < len__19428__auto___22405)){
args22402.push((arguments[i__19429__auto___22406]));

var G__22407 = (i__19429__auto___22406 + (1));
i__19429__auto___22406 = G__22407;
continue;
} else {
}
break;
}

var G__22404 = args22402.length;
switch (G__22404) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22402.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p);
} else {
var m__19026__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19025__auto__ = (((p == null))?null:p);
var m__19026__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19025__auto__)]);
if(!((m__19026__auto__ == null))){
return m__19026__auto__.call(null,p,v);
} else {
var m__19026__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19026__auto____$1 == null))){
return m__19026__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22410 = [];
var len__19428__auto___22535 = arguments.length;
var i__19429__auto___22536 = (0);
while(true){
if((i__19429__auto___22536 < len__19428__auto___22535)){
args22410.push((arguments[i__19429__auto___22536]));

var G__22537 = (i__19429__auto___22536 + (1));
i__19429__auto___22536 = G__22537;
continue;
} else {
}
break;
}

var G__22412 = args22410.length;
switch (G__22412) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22410.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18370__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18370__auto__,mults){
return (function (p1__22409_SHARP_){
if(cljs.core.truth_(p1__22409_SHARP_.call(null,topic))){
return p1__22409_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22409_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18370__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22413 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22413 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22414){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22414 = meta22414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22415,meta22414__$1){
var self__ = this;
var _22415__$1 = this;
return (new cljs.core.async.t_cljs$core$async22413(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22414__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22413.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22415){
var self__ = this;
var _22415__$1 = this;
return self__.meta22414;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22413.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22413.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22413.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22413.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22413.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22413.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22413.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22413.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22414","meta22414",1789336719,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22413.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22413.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22413";

cljs.core.async.t_cljs$core$async22413.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22413");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22413 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22413(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22414){
return (new cljs.core.async.t_cljs$core$async22413(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22414));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22413(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20640__auto___22539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto___22539,mults,ensure_mult,p){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto___22539,mults,ensure_mult,p){
return (function (state_22487){
var state_val_22488 = (state_22487[(1)]);
if((state_val_22488 === (7))){
var inst_22483 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
var statearr_22489_22540 = state_22487__$1;
(statearr_22489_22540[(2)] = inst_22483);

(statearr_22489_22540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (20))){
var state_22487__$1 = state_22487;
var statearr_22490_22541 = state_22487__$1;
(statearr_22490_22541[(2)] = null);

(statearr_22490_22541[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (1))){
var state_22487__$1 = state_22487;
var statearr_22491_22542 = state_22487__$1;
(statearr_22491_22542[(2)] = null);

(statearr_22491_22542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (24))){
var inst_22466 = (state_22487[(7)]);
var inst_22475 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22466);
var state_22487__$1 = state_22487;
var statearr_22492_22543 = state_22487__$1;
(statearr_22492_22543[(2)] = inst_22475);

(statearr_22492_22543[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (4))){
var inst_22418 = (state_22487[(8)]);
var inst_22418__$1 = (state_22487[(2)]);
var inst_22419 = (inst_22418__$1 == null);
var state_22487__$1 = (function (){var statearr_22493 = state_22487;
(statearr_22493[(8)] = inst_22418__$1);

return statearr_22493;
})();
if(cljs.core.truth_(inst_22419)){
var statearr_22494_22544 = state_22487__$1;
(statearr_22494_22544[(1)] = (5));

} else {
var statearr_22495_22545 = state_22487__$1;
(statearr_22495_22545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (15))){
var inst_22460 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
var statearr_22496_22546 = state_22487__$1;
(statearr_22496_22546[(2)] = inst_22460);

(statearr_22496_22546[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (21))){
var inst_22480 = (state_22487[(2)]);
var state_22487__$1 = (function (){var statearr_22497 = state_22487;
(statearr_22497[(9)] = inst_22480);

return statearr_22497;
})();
var statearr_22498_22547 = state_22487__$1;
(statearr_22498_22547[(2)] = null);

(statearr_22498_22547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (13))){
var inst_22442 = (state_22487[(10)]);
var inst_22444 = cljs.core.chunked_seq_QMARK_.call(null,inst_22442);
var state_22487__$1 = state_22487;
if(inst_22444){
var statearr_22499_22548 = state_22487__$1;
(statearr_22499_22548[(1)] = (16));

} else {
var statearr_22500_22549 = state_22487__$1;
(statearr_22500_22549[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (22))){
var inst_22472 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
if(cljs.core.truth_(inst_22472)){
var statearr_22501_22550 = state_22487__$1;
(statearr_22501_22550[(1)] = (23));

} else {
var statearr_22502_22551 = state_22487__$1;
(statearr_22502_22551[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (6))){
var inst_22466 = (state_22487[(7)]);
var inst_22418 = (state_22487[(8)]);
var inst_22468 = (state_22487[(11)]);
var inst_22466__$1 = topic_fn.call(null,inst_22418);
var inst_22467 = cljs.core.deref.call(null,mults);
var inst_22468__$1 = cljs.core.get.call(null,inst_22467,inst_22466__$1);
var state_22487__$1 = (function (){var statearr_22503 = state_22487;
(statearr_22503[(7)] = inst_22466__$1);

(statearr_22503[(11)] = inst_22468__$1);

return statearr_22503;
})();
if(cljs.core.truth_(inst_22468__$1)){
var statearr_22504_22552 = state_22487__$1;
(statearr_22504_22552[(1)] = (19));

} else {
var statearr_22505_22553 = state_22487__$1;
(statearr_22505_22553[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (25))){
var inst_22477 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
var statearr_22506_22554 = state_22487__$1;
(statearr_22506_22554[(2)] = inst_22477);

(statearr_22506_22554[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (17))){
var inst_22442 = (state_22487[(10)]);
var inst_22451 = cljs.core.first.call(null,inst_22442);
var inst_22452 = cljs.core.async.muxch_STAR_.call(null,inst_22451);
var inst_22453 = cljs.core.async.close_BANG_.call(null,inst_22452);
var inst_22454 = cljs.core.next.call(null,inst_22442);
var inst_22428 = inst_22454;
var inst_22429 = null;
var inst_22430 = (0);
var inst_22431 = (0);
var state_22487__$1 = (function (){var statearr_22507 = state_22487;
(statearr_22507[(12)] = inst_22453);

(statearr_22507[(13)] = inst_22430);

(statearr_22507[(14)] = inst_22429);

(statearr_22507[(15)] = inst_22431);

(statearr_22507[(16)] = inst_22428);

return statearr_22507;
})();
var statearr_22508_22555 = state_22487__$1;
(statearr_22508_22555[(2)] = null);

(statearr_22508_22555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (3))){
var inst_22485 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22487__$1,inst_22485);
} else {
if((state_val_22488 === (12))){
var inst_22462 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
var statearr_22509_22556 = state_22487__$1;
(statearr_22509_22556[(2)] = inst_22462);

(statearr_22509_22556[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (2))){
var state_22487__$1 = state_22487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22487__$1,(4),ch);
} else {
if((state_val_22488 === (23))){
var state_22487__$1 = state_22487;
var statearr_22510_22557 = state_22487__$1;
(statearr_22510_22557[(2)] = null);

(statearr_22510_22557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (19))){
var inst_22418 = (state_22487[(8)]);
var inst_22468 = (state_22487[(11)]);
var inst_22470 = cljs.core.async.muxch_STAR_.call(null,inst_22468);
var state_22487__$1 = state_22487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22487__$1,(22),inst_22470,inst_22418);
} else {
if((state_val_22488 === (11))){
var inst_22428 = (state_22487[(16)]);
var inst_22442 = (state_22487[(10)]);
var inst_22442__$1 = cljs.core.seq.call(null,inst_22428);
var state_22487__$1 = (function (){var statearr_22511 = state_22487;
(statearr_22511[(10)] = inst_22442__$1);

return statearr_22511;
})();
if(inst_22442__$1){
var statearr_22512_22558 = state_22487__$1;
(statearr_22512_22558[(1)] = (13));

} else {
var statearr_22513_22559 = state_22487__$1;
(statearr_22513_22559[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (9))){
var inst_22464 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
var statearr_22514_22560 = state_22487__$1;
(statearr_22514_22560[(2)] = inst_22464);

(statearr_22514_22560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (5))){
var inst_22425 = cljs.core.deref.call(null,mults);
var inst_22426 = cljs.core.vals.call(null,inst_22425);
var inst_22427 = cljs.core.seq.call(null,inst_22426);
var inst_22428 = inst_22427;
var inst_22429 = null;
var inst_22430 = (0);
var inst_22431 = (0);
var state_22487__$1 = (function (){var statearr_22515 = state_22487;
(statearr_22515[(13)] = inst_22430);

(statearr_22515[(14)] = inst_22429);

(statearr_22515[(15)] = inst_22431);

(statearr_22515[(16)] = inst_22428);

return statearr_22515;
})();
var statearr_22516_22561 = state_22487__$1;
(statearr_22516_22561[(2)] = null);

(statearr_22516_22561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (14))){
var state_22487__$1 = state_22487;
var statearr_22520_22562 = state_22487__$1;
(statearr_22520_22562[(2)] = null);

(statearr_22520_22562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (16))){
var inst_22442 = (state_22487[(10)]);
var inst_22446 = cljs.core.chunk_first.call(null,inst_22442);
var inst_22447 = cljs.core.chunk_rest.call(null,inst_22442);
var inst_22448 = cljs.core.count.call(null,inst_22446);
var inst_22428 = inst_22447;
var inst_22429 = inst_22446;
var inst_22430 = inst_22448;
var inst_22431 = (0);
var state_22487__$1 = (function (){var statearr_22521 = state_22487;
(statearr_22521[(13)] = inst_22430);

(statearr_22521[(14)] = inst_22429);

(statearr_22521[(15)] = inst_22431);

(statearr_22521[(16)] = inst_22428);

return statearr_22521;
})();
var statearr_22522_22563 = state_22487__$1;
(statearr_22522_22563[(2)] = null);

(statearr_22522_22563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (10))){
var inst_22430 = (state_22487[(13)]);
var inst_22429 = (state_22487[(14)]);
var inst_22431 = (state_22487[(15)]);
var inst_22428 = (state_22487[(16)]);
var inst_22436 = cljs.core._nth.call(null,inst_22429,inst_22431);
var inst_22437 = cljs.core.async.muxch_STAR_.call(null,inst_22436);
var inst_22438 = cljs.core.async.close_BANG_.call(null,inst_22437);
var inst_22439 = (inst_22431 + (1));
var tmp22517 = inst_22430;
var tmp22518 = inst_22429;
var tmp22519 = inst_22428;
var inst_22428__$1 = tmp22519;
var inst_22429__$1 = tmp22518;
var inst_22430__$1 = tmp22517;
var inst_22431__$1 = inst_22439;
var state_22487__$1 = (function (){var statearr_22523 = state_22487;
(statearr_22523[(13)] = inst_22430__$1);

(statearr_22523[(14)] = inst_22429__$1);

(statearr_22523[(17)] = inst_22438);

(statearr_22523[(15)] = inst_22431__$1);

(statearr_22523[(16)] = inst_22428__$1);

return statearr_22523;
})();
var statearr_22524_22564 = state_22487__$1;
(statearr_22524_22564[(2)] = null);

(statearr_22524_22564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (18))){
var inst_22457 = (state_22487[(2)]);
var state_22487__$1 = state_22487;
var statearr_22525_22565 = state_22487__$1;
(statearr_22525_22565[(2)] = inst_22457);

(statearr_22525_22565[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22488 === (8))){
var inst_22430 = (state_22487[(13)]);
var inst_22431 = (state_22487[(15)]);
var inst_22433 = (inst_22431 < inst_22430);
var inst_22434 = inst_22433;
var state_22487__$1 = state_22487;
if(cljs.core.truth_(inst_22434)){
var statearr_22526_22566 = state_22487__$1;
(statearr_22526_22566[(1)] = (10));

} else {
var statearr_22527_22567 = state_22487__$1;
(statearr_22527_22567[(1)] = (11));

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
});})(c__20640__auto___22539,mults,ensure_mult,p))
;
return ((function (switch__20528__auto__,c__20640__auto___22539,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20529__auto__ = null;
var cljs$core$async$state_machine__20529__auto____0 = (function (){
var statearr_22531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22531[(0)] = cljs$core$async$state_machine__20529__auto__);

(statearr_22531[(1)] = (1));

return statearr_22531;
});
var cljs$core$async$state_machine__20529__auto____1 = (function (state_22487){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_22487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e22532){if((e22532 instanceof Object)){
var ex__20532__auto__ = e22532;
var statearr_22533_22568 = state_22487;
(statearr_22533_22568[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22569 = state_22487;
state_22487 = G__22569;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$state_machine__20529__auto__ = function(state_22487){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20529__auto____1.call(this,state_22487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20529__auto____0;
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20529__auto____1;
return cljs$core$async$state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto___22539,mults,ensure_mult,p))
})();
var state__20642__auto__ = (function (){var statearr_22534 = f__20641__auto__.call(null);
(statearr_22534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___22539);

return statearr_22534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto___22539,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22570 = [];
var len__19428__auto___22573 = arguments.length;
var i__19429__auto___22574 = (0);
while(true){
if((i__19429__auto___22574 < len__19428__auto___22573)){
args22570.push((arguments[i__19429__auto___22574]));

var G__22575 = (i__19429__auto___22574 + (1));
i__19429__auto___22574 = G__22575;
continue;
} else {
}
break;
}

var G__22572 = args22570.length;
switch (G__22572) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22570.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22577 = [];
var len__19428__auto___22580 = arguments.length;
var i__19429__auto___22581 = (0);
while(true){
if((i__19429__auto___22581 < len__19428__auto___22580)){
args22577.push((arguments[i__19429__auto___22581]));

var G__22582 = (i__19429__auto___22581 + (1));
i__19429__auto___22581 = G__22582;
continue;
} else {
}
break;
}

var G__22579 = args22577.length;
switch (G__22579) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22577.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22584 = [];
var len__19428__auto___22655 = arguments.length;
var i__19429__auto___22656 = (0);
while(true){
if((i__19429__auto___22656 < len__19428__auto___22655)){
args22584.push((arguments[i__19429__auto___22656]));

var G__22657 = (i__19429__auto___22656 + (1));
i__19429__auto___22656 = G__22657;
continue;
} else {
}
break;
}

var G__22586 = args22584.length;
switch (G__22586) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22584.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20640__auto___22659 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto___22659,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto___22659,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22625){
var state_val_22626 = (state_22625[(1)]);
if((state_val_22626 === (7))){
var state_22625__$1 = state_22625;
var statearr_22627_22660 = state_22625__$1;
(statearr_22627_22660[(2)] = null);

(statearr_22627_22660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22626 === (1))){
var state_22625__$1 = state_22625;
var statearr_22628_22661 = state_22625__$1;
(statearr_22628_22661[(2)] = null);

(statearr_22628_22661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22626 === (4))){
var inst_22589 = (state_22625[(7)]);
var inst_22591 = (inst_22589 < cnt);
var state_22625__$1 = state_22625;
if(cljs.core.truth_(inst_22591)){
var statearr_22629_22662 = state_22625__$1;
(statearr_22629_22662[(1)] = (6));

} else {
var statearr_22630_22663 = state_22625__$1;
(statearr_22630_22663[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22626 === (15))){
var inst_22621 = (state_22625[(2)]);
var state_22625__$1 = state_22625;
var statearr_22631_22664 = state_22625__$1;
(statearr_22631_22664[(2)] = inst_22621);

(statearr_22631_22664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22626 === (13))){
var inst_22614 = cljs.core.async.close_BANG_.call(null,out);
var state_22625__$1 = state_22625;
var statearr_22632_22665 = state_22625__$1;
(statearr_22632_22665[(2)] = inst_22614);

(statearr_22632_22665[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22626 === (6))){
var state_22625__$1 = state_22625;
var statearr_22633_22666 = state_22625__$1;
(statearr_22633_22666[(2)] = null);

(statearr_22633_22666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22626 === (3))){
var inst_22623 = (state_22625[(2)]);
var state_22625__$1 = state_22625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22625__$1,inst_22623);
} else {
if((state_val_22626 === (12))){
var inst_22611 = (state_22625[(8)]);
var inst_22611__$1 = (state_22625[(2)]);
var inst_22612 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22611__$1);
var state_22625__$1 = (function (){var statearr_22634 = state_22625;
(statearr_22634[(8)] = inst_22611__$1);

return statearr_22634;
})();
if(cljs.core.truth_(inst_22612)){
var statearr_22635_22667 = state_22625__$1;
(statearr_22635_22667[(1)] = (13));

} else {
var statearr_22636_22668 = state_22625__$1;
(statearr_22636_22668[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22626 === (2))){
var inst_22588 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22589 = (0);
var state_22625__$1 = (function (){var statearr_22637 = state_22625;
(statearr_22637[(9)] = inst_22588);

(statearr_22637[(7)] = inst_22589);

return statearr_22637;
})();
var statearr_22638_22669 = state_22625__$1;
(statearr_22638_22669[(2)] = null);

(statearr_22638_22669[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22626 === (11))){
var inst_22589 = (state_22625[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22625,(10),Object,null,(9));
var inst_22598 = chs__$1.call(null,inst_22589);
var inst_22599 = done.call(null,inst_22589);
var inst_22600 = cljs.core.async.take_BANG_.call(null,inst_22598,inst_22599);
var state_22625__$1 = state_22625;
var statearr_22639_22670 = state_22625__$1;
(statearr_22639_22670[(2)] = inst_22600);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22625__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22626 === (9))){
var inst_22589 = (state_22625[(7)]);
var inst_22602 = (state_22625[(2)]);
var inst_22603 = (inst_22589 + (1));
var inst_22589__$1 = inst_22603;
var state_22625__$1 = (function (){var statearr_22640 = state_22625;
(statearr_22640[(10)] = inst_22602);

(statearr_22640[(7)] = inst_22589__$1);

return statearr_22640;
})();
var statearr_22641_22671 = state_22625__$1;
(statearr_22641_22671[(2)] = null);

(statearr_22641_22671[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22626 === (5))){
var inst_22609 = (state_22625[(2)]);
var state_22625__$1 = (function (){var statearr_22642 = state_22625;
(statearr_22642[(11)] = inst_22609);

return statearr_22642;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22625__$1,(12),dchan);
} else {
if((state_val_22626 === (14))){
var inst_22611 = (state_22625[(8)]);
var inst_22616 = cljs.core.apply.call(null,f,inst_22611);
var state_22625__$1 = state_22625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22625__$1,(16),out,inst_22616);
} else {
if((state_val_22626 === (16))){
var inst_22618 = (state_22625[(2)]);
var state_22625__$1 = (function (){var statearr_22643 = state_22625;
(statearr_22643[(12)] = inst_22618);

return statearr_22643;
})();
var statearr_22644_22672 = state_22625__$1;
(statearr_22644_22672[(2)] = null);

(statearr_22644_22672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22626 === (10))){
var inst_22593 = (state_22625[(2)]);
var inst_22594 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22625__$1 = (function (){var statearr_22645 = state_22625;
(statearr_22645[(13)] = inst_22593);

return statearr_22645;
})();
var statearr_22646_22673 = state_22625__$1;
(statearr_22646_22673[(2)] = inst_22594);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22625__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22626 === (8))){
var inst_22607 = (state_22625[(2)]);
var state_22625__$1 = state_22625;
var statearr_22647_22674 = state_22625__$1;
(statearr_22647_22674[(2)] = inst_22607);

(statearr_22647_22674[(1)] = (5));


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
});})(c__20640__auto___22659,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20528__auto__,c__20640__auto___22659,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20529__auto__ = null;
var cljs$core$async$state_machine__20529__auto____0 = (function (){
var statearr_22651 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22651[(0)] = cljs$core$async$state_machine__20529__auto__);

(statearr_22651[(1)] = (1));

return statearr_22651;
});
var cljs$core$async$state_machine__20529__auto____1 = (function (state_22625){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_22625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e22652){if((e22652 instanceof Object)){
var ex__20532__auto__ = e22652;
var statearr_22653_22675 = state_22625;
(statearr_22653_22675[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22676 = state_22625;
state_22625 = G__22676;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$state_machine__20529__auto__ = function(state_22625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20529__auto____1.call(this,state_22625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20529__auto____0;
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20529__auto____1;
return cljs$core$async$state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto___22659,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20642__auto__ = (function (){var statearr_22654 = f__20641__auto__.call(null);
(statearr_22654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___22659);

return statearr_22654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto___22659,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22678 = [];
var len__19428__auto___22734 = arguments.length;
var i__19429__auto___22735 = (0);
while(true){
if((i__19429__auto___22735 < len__19428__auto___22734)){
args22678.push((arguments[i__19429__auto___22735]));

var G__22736 = (i__19429__auto___22735 + (1));
i__19429__auto___22735 = G__22736;
continue;
} else {
}
break;
}

var G__22680 = args22678.length;
switch (G__22680) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22678.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20640__auto___22738 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto___22738,out){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto___22738,out){
return (function (state_22710){
var state_val_22711 = (state_22710[(1)]);
if((state_val_22711 === (7))){
var inst_22689 = (state_22710[(7)]);
var inst_22690 = (state_22710[(8)]);
var inst_22689__$1 = (state_22710[(2)]);
var inst_22690__$1 = cljs.core.nth.call(null,inst_22689__$1,(0),null);
var inst_22691 = cljs.core.nth.call(null,inst_22689__$1,(1),null);
var inst_22692 = (inst_22690__$1 == null);
var state_22710__$1 = (function (){var statearr_22712 = state_22710;
(statearr_22712[(7)] = inst_22689__$1);

(statearr_22712[(9)] = inst_22691);

(statearr_22712[(8)] = inst_22690__$1);

return statearr_22712;
})();
if(cljs.core.truth_(inst_22692)){
var statearr_22713_22739 = state_22710__$1;
(statearr_22713_22739[(1)] = (8));

} else {
var statearr_22714_22740 = state_22710__$1;
(statearr_22714_22740[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22711 === (1))){
var inst_22681 = cljs.core.vec.call(null,chs);
var inst_22682 = inst_22681;
var state_22710__$1 = (function (){var statearr_22715 = state_22710;
(statearr_22715[(10)] = inst_22682);

return statearr_22715;
})();
var statearr_22716_22741 = state_22710__$1;
(statearr_22716_22741[(2)] = null);

(statearr_22716_22741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22711 === (4))){
var inst_22682 = (state_22710[(10)]);
var state_22710__$1 = state_22710;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22710__$1,(7),inst_22682);
} else {
if((state_val_22711 === (6))){
var inst_22706 = (state_22710[(2)]);
var state_22710__$1 = state_22710;
var statearr_22717_22742 = state_22710__$1;
(statearr_22717_22742[(2)] = inst_22706);

(statearr_22717_22742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22711 === (3))){
var inst_22708 = (state_22710[(2)]);
var state_22710__$1 = state_22710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22710__$1,inst_22708);
} else {
if((state_val_22711 === (2))){
var inst_22682 = (state_22710[(10)]);
var inst_22684 = cljs.core.count.call(null,inst_22682);
var inst_22685 = (inst_22684 > (0));
var state_22710__$1 = state_22710;
if(cljs.core.truth_(inst_22685)){
var statearr_22719_22743 = state_22710__$1;
(statearr_22719_22743[(1)] = (4));

} else {
var statearr_22720_22744 = state_22710__$1;
(statearr_22720_22744[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22711 === (11))){
var inst_22682 = (state_22710[(10)]);
var inst_22699 = (state_22710[(2)]);
var tmp22718 = inst_22682;
var inst_22682__$1 = tmp22718;
var state_22710__$1 = (function (){var statearr_22721 = state_22710;
(statearr_22721[(11)] = inst_22699);

(statearr_22721[(10)] = inst_22682__$1);

return statearr_22721;
})();
var statearr_22722_22745 = state_22710__$1;
(statearr_22722_22745[(2)] = null);

(statearr_22722_22745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22711 === (9))){
var inst_22690 = (state_22710[(8)]);
var state_22710__$1 = state_22710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22710__$1,(11),out,inst_22690);
} else {
if((state_val_22711 === (5))){
var inst_22704 = cljs.core.async.close_BANG_.call(null,out);
var state_22710__$1 = state_22710;
var statearr_22723_22746 = state_22710__$1;
(statearr_22723_22746[(2)] = inst_22704);

(statearr_22723_22746[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22711 === (10))){
var inst_22702 = (state_22710[(2)]);
var state_22710__$1 = state_22710;
var statearr_22724_22747 = state_22710__$1;
(statearr_22724_22747[(2)] = inst_22702);

(statearr_22724_22747[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22711 === (8))){
var inst_22689 = (state_22710[(7)]);
var inst_22691 = (state_22710[(9)]);
var inst_22690 = (state_22710[(8)]);
var inst_22682 = (state_22710[(10)]);
var inst_22694 = (function (){var cs = inst_22682;
var vec__22687 = inst_22689;
var v = inst_22690;
var c = inst_22691;
return ((function (cs,vec__22687,v,c,inst_22689,inst_22691,inst_22690,inst_22682,state_val_22711,c__20640__auto___22738,out){
return (function (p1__22677_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22677_SHARP_);
});
;})(cs,vec__22687,v,c,inst_22689,inst_22691,inst_22690,inst_22682,state_val_22711,c__20640__auto___22738,out))
})();
var inst_22695 = cljs.core.filterv.call(null,inst_22694,inst_22682);
var inst_22682__$1 = inst_22695;
var state_22710__$1 = (function (){var statearr_22725 = state_22710;
(statearr_22725[(10)] = inst_22682__$1);

return statearr_22725;
})();
var statearr_22726_22748 = state_22710__$1;
(statearr_22726_22748[(2)] = null);

(statearr_22726_22748[(1)] = (2));


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
});})(c__20640__auto___22738,out))
;
return ((function (switch__20528__auto__,c__20640__auto___22738,out){
return (function() {
var cljs$core$async$state_machine__20529__auto__ = null;
var cljs$core$async$state_machine__20529__auto____0 = (function (){
var statearr_22730 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22730[(0)] = cljs$core$async$state_machine__20529__auto__);

(statearr_22730[(1)] = (1));

return statearr_22730;
});
var cljs$core$async$state_machine__20529__auto____1 = (function (state_22710){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_22710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e22731){if((e22731 instanceof Object)){
var ex__20532__auto__ = e22731;
var statearr_22732_22749 = state_22710;
(statearr_22732_22749[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22750 = state_22710;
state_22710 = G__22750;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$state_machine__20529__auto__ = function(state_22710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20529__auto____1.call(this,state_22710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20529__auto____0;
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20529__auto____1;
return cljs$core$async$state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto___22738,out))
})();
var state__20642__auto__ = (function (){var statearr_22733 = f__20641__auto__.call(null);
(statearr_22733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___22738);

return statearr_22733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto___22738,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args22751 = [];
var len__19428__auto___22800 = arguments.length;
var i__19429__auto___22801 = (0);
while(true){
if((i__19429__auto___22801 < len__19428__auto___22800)){
args22751.push((arguments[i__19429__auto___22801]));

var G__22802 = (i__19429__auto___22801 + (1));
i__19429__auto___22801 = G__22802;
continue;
} else {
}
break;
}

var G__22753 = args22751.length;
switch (G__22753) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22751.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20640__auto___22804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto___22804,out){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto___22804,out){
return (function (state_22777){
var state_val_22778 = (state_22777[(1)]);
if((state_val_22778 === (7))){
var inst_22759 = (state_22777[(7)]);
var inst_22759__$1 = (state_22777[(2)]);
var inst_22760 = (inst_22759__$1 == null);
var inst_22761 = cljs.core.not.call(null,inst_22760);
var state_22777__$1 = (function (){var statearr_22779 = state_22777;
(statearr_22779[(7)] = inst_22759__$1);

return statearr_22779;
})();
if(inst_22761){
var statearr_22780_22805 = state_22777__$1;
(statearr_22780_22805[(1)] = (8));

} else {
var statearr_22781_22806 = state_22777__$1;
(statearr_22781_22806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22778 === (1))){
var inst_22754 = (0);
var state_22777__$1 = (function (){var statearr_22782 = state_22777;
(statearr_22782[(8)] = inst_22754);

return statearr_22782;
})();
var statearr_22783_22807 = state_22777__$1;
(statearr_22783_22807[(2)] = null);

(statearr_22783_22807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22778 === (4))){
var state_22777__$1 = state_22777;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22777__$1,(7),ch);
} else {
if((state_val_22778 === (6))){
var inst_22772 = (state_22777[(2)]);
var state_22777__$1 = state_22777;
var statearr_22784_22808 = state_22777__$1;
(statearr_22784_22808[(2)] = inst_22772);

(statearr_22784_22808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22778 === (3))){
var inst_22774 = (state_22777[(2)]);
var inst_22775 = cljs.core.async.close_BANG_.call(null,out);
var state_22777__$1 = (function (){var statearr_22785 = state_22777;
(statearr_22785[(9)] = inst_22774);

return statearr_22785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22777__$1,inst_22775);
} else {
if((state_val_22778 === (2))){
var inst_22754 = (state_22777[(8)]);
var inst_22756 = (inst_22754 < n);
var state_22777__$1 = state_22777;
if(cljs.core.truth_(inst_22756)){
var statearr_22786_22809 = state_22777__$1;
(statearr_22786_22809[(1)] = (4));

} else {
var statearr_22787_22810 = state_22777__$1;
(statearr_22787_22810[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22778 === (11))){
var inst_22754 = (state_22777[(8)]);
var inst_22764 = (state_22777[(2)]);
var inst_22765 = (inst_22754 + (1));
var inst_22754__$1 = inst_22765;
var state_22777__$1 = (function (){var statearr_22788 = state_22777;
(statearr_22788[(8)] = inst_22754__$1);

(statearr_22788[(10)] = inst_22764);

return statearr_22788;
})();
var statearr_22789_22811 = state_22777__$1;
(statearr_22789_22811[(2)] = null);

(statearr_22789_22811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22778 === (9))){
var state_22777__$1 = state_22777;
var statearr_22790_22812 = state_22777__$1;
(statearr_22790_22812[(2)] = null);

(statearr_22790_22812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22778 === (5))){
var state_22777__$1 = state_22777;
var statearr_22791_22813 = state_22777__$1;
(statearr_22791_22813[(2)] = null);

(statearr_22791_22813[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22778 === (10))){
var inst_22769 = (state_22777[(2)]);
var state_22777__$1 = state_22777;
var statearr_22792_22814 = state_22777__$1;
(statearr_22792_22814[(2)] = inst_22769);

(statearr_22792_22814[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22778 === (8))){
var inst_22759 = (state_22777[(7)]);
var state_22777__$1 = state_22777;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22777__$1,(11),out,inst_22759);
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
});})(c__20640__auto___22804,out))
;
return ((function (switch__20528__auto__,c__20640__auto___22804,out){
return (function() {
var cljs$core$async$state_machine__20529__auto__ = null;
var cljs$core$async$state_machine__20529__auto____0 = (function (){
var statearr_22796 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22796[(0)] = cljs$core$async$state_machine__20529__auto__);

(statearr_22796[(1)] = (1));

return statearr_22796;
});
var cljs$core$async$state_machine__20529__auto____1 = (function (state_22777){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_22777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e22797){if((e22797 instanceof Object)){
var ex__20532__auto__ = e22797;
var statearr_22798_22815 = state_22777;
(statearr_22798_22815[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22816 = state_22777;
state_22777 = G__22816;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$state_machine__20529__auto__ = function(state_22777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20529__auto____1.call(this,state_22777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20529__auto____0;
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20529__auto____1;
return cljs$core$async$state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto___22804,out))
})();
var state__20642__auto__ = (function (){var statearr_22799 = f__20641__auto__.call(null);
(statearr_22799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___22804);

return statearr_22799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto___22804,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22824 = (function (map_LT_,f,ch,meta22825){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22825 = meta22825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22826,meta22825__$1){
var self__ = this;
var _22826__$1 = this;
return (new cljs.core.async.t_cljs$core$async22824(self__.map_LT_,self__.f,self__.ch,meta22825__$1));
});

cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22826){
var self__ = this;
var _22826__$1 = this;
return self__.meta22825;
});

cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22827 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22827 = (function (map_LT_,f,ch,meta22825,_,fn1,meta22828){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22825 = meta22825;
this._ = _;
this.fn1 = fn1;
this.meta22828 = meta22828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22829,meta22828__$1){
var self__ = this;
var _22829__$1 = this;
return (new cljs.core.async.t_cljs$core$async22827(self__.map_LT_,self__.f,self__.ch,self__.meta22825,self__._,self__.fn1,meta22828__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22829){
var self__ = this;
var _22829__$1 = this;
return self__.meta22828;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22827.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22827.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22827.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22827.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22817_SHARP_){
return f1.call(null,(((p1__22817_SHARP_ == null))?null:self__.f.call(null,p1__22817_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22827.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22825","meta22825",950995877,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22824","cljs.core.async/t_cljs$core$async22824",-2056192762,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22828","meta22828",-138473566,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22827.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22827.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22827";

cljs.core.async.t_cljs$core$async22827.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22827");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22827 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22827(map_LT___$1,f__$1,ch__$1,meta22825__$1,___$2,fn1__$1,meta22828){
return (new cljs.core.async.t_cljs$core$async22827(map_LT___$1,f__$1,ch__$1,meta22825__$1,___$2,fn1__$1,meta22828));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22827(self__.map_LT_,self__.f,self__.ch,self__.meta22825,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18358__auto__ = ret;
if(cljs.core.truth_(and__18358__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18358__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22824.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22825","meta22825",950995877,null)], null);
});

cljs.core.async.t_cljs$core$async22824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22824";

cljs.core.async.t_cljs$core$async22824.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22824");
});

cljs.core.async.__GT_t_cljs$core$async22824 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22824(map_LT___$1,f__$1,ch__$1,meta22825){
return (new cljs.core.async.t_cljs$core$async22824(map_LT___$1,f__$1,ch__$1,meta22825));
});

}

return (new cljs.core.async.t_cljs$core$async22824(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22833 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22833 = (function (map_GT_,f,ch,meta22834){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22834 = meta22834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22835,meta22834__$1){
var self__ = this;
var _22835__$1 = this;
return (new cljs.core.async.t_cljs$core$async22833(self__.map_GT_,self__.f,self__.ch,meta22834__$1));
});

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22835){
var self__ = this;
var _22835__$1 = this;
return self__.meta22834;
});

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22833.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22834","meta22834",-2075351354,null)], null);
});

cljs.core.async.t_cljs$core$async22833.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22833";

cljs.core.async.t_cljs$core$async22833.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22833");
});

cljs.core.async.__GT_t_cljs$core$async22833 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22833(map_GT___$1,f__$1,ch__$1,meta22834){
return (new cljs.core.async.t_cljs$core$async22833(map_GT___$1,f__$1,ch__$1,meta22834));
});

}

return (new cljs.core.async.t_cljs$core$async22833(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22839 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22839 = (function (filter_GT_,p,ch,meta22840){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22840 = meta22840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22841,meta22840__$1){
var self__ = this;
var _22841__$1 = this;
return (new cljs.core.async.t_cljs$core$async22839(self__.filter_GT_,self__.p,self__.ch,meta22840__$1));
});

cljs.core.async.t_cljs$core$async22839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22841){
var self__ = this;
var _22841__$1 = this;
return self__.meta22840;
});

cljs.core.async.t_cljs$core$async22839.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22839.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22839.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22839.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22839.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22839.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22839.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22840","meta22840",-1491173163,null)], null);
});

cljs.core.async.t_cljs$core$async22839.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22839";

cljs.core.async.t_cljs$core$async22839.cljs$lang$ctorPrWriter = (function (this__18968__auto__,writer__18969__auto__,opt__18970__auto__){
return cljs.core._write.call(null,writer__18969__auto__,"cljs.core.async/t_cljs$core$async22839");
});

cljs.core.async.__GT_t_cljs$core$async22839 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22839(filter_GT___$1,p__$1,ch__$1,meta22840){
return (new cljs.core.async.t_cljs$core$async22839(filter_GT___$1,p__$1,ch__$1,meta22840));
});

}

return (new cljs.core.async.t_cljs$core$async22839(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args22842 = [];
var len__19428__auto___22886 = arguments.length;
var i__19429__auto___22887 = (0);
while(true){
if((i__19429__auto___22887 < len__19428__auto___22886)){
args22842.push((arguments[i__19429__auto___22887]));

var G__22888 = (i__19429__auto___22887 + (1));
i__19429__auto___22887 = G__22888;
continue;
} else {
}
break;
}

var G__22844 = args22842.length;
switch (G__22844) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22842.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20640__auto___22890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto___22890,out){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto___22890,out){
return (function (state_22865){
var state_val_22866 = (state_22865[(1)]);
if((state_val_22866 === (7))){
var inst_22861 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
var statearr_22867_22891 = state_22865__$1;
(statearr_22867_22891[(2)] = inst_22861);

(statearr_22867_22891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (1))){
var state_22865__$1 = state_22865;
var statearr_22868_22892 = state_22865__$1;
(statearr_22868_22892[(2)] = null);

(statearr_22868_22892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (4))){
var inst_22847 = (state_22865[(7)]);
var inst_22847__$1 = (state_22865[(2)]);
var inst_22848 = (inst_22847__$1 == null);
var state_22865__$1 = (function (){var statearr_22869 = state_22865;
(statearr_22869[(7)] = inst_22847__$1);

return statearr_22869;
})();
if(cljs.core.truth_(inst_22848)){
var statearr_22870_22893 = state_22865__$1;
(statearr_22870_22893[(1)] = (5));

} else {
var statearr_22871_22894 = state_22865__$1;
(statearr_22871_22894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (6))){
var inst_22847 = (state_22865[(7)]);
var inst_22852 = p.call(null,inst_22847);
var state_22865__$1 = state_22865;
if(cljs.core.truth_(inst_22852)){
var statearr_22872_22895 = state_22865__$1;
(statearr_22872_22895[(1)] = (8));

} else {
var statearr_22873_22896 = state_22865__$1;
(statearr_22873_22896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (3))){
var inst_22863 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22865__$1,inst_22863);
} else {
if((state_val_22866 === (2))){
var state_22865__$1 = state_22865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22865__$1,(4),ch);
} else {
if((state_val_22866 === (11))){
var inst_22855 = (state_22865[(2)]);
var state_22865__$1 = state_22865;
var statearr_22874_22897 = state_22865__$1;
(statearr_22874_22897[(2)] = inst_22855);

(statearr_22874_22897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (9))){
var state_22865__$1 = state_22865;
var statearr_22875_22898 = state_22865__$1;
(statearr_22875_22898[(2)] = null);

(statearr_22875_22898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (5))){
var inst_22850 = cljs.core.async.close_BANG_.call(null,out);
var state_22865__$1 = state_22865;
var statearr_22876_22899 = state_22865__$1;
(statearr_22876_22899[(2)] = inst_22850);

(statearr_22876_22899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (10))){
var inst_22858 = (state_22865[(2)]);
var state_22865__$1 = (function (){var statearr_22877 = state_22865;
(statearr_22877[(8)] = inst_22858);

return statearr_22877;
})();
var statearr_22878_22900 = state_22865__$1;
(statearr_22878_22900[(2)] = null);

(statearr_22878_22900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22866 === (8))){
var inst_22847 = (state_22865[(7)]);
var state_22865__$1 = state_22865;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22865__$1,(11),out,inst_22847);
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
});})(c__20640__auto___22890,out))
;
return ((function (switch__20528__auto__,c__20640__auto___22890,out){
return (function() {
var cljs$core$async$state_machine__20529__auto__ = null;
var cljs$core$async$state_machine__20529__auto____0 = (function (){
var statearr_22882 = [null,null,null,null,null,null,null,null,null];
(statearr_22882[(0)] = cljs$core$async$state_machine__20529__auto__);

(statearr_22882[(1)] = (1));

return statearr_22882;
});
var cljs$core$async$state_machine__20529__auto____1 = (function (state_22865){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_22865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e22883){if((e22883 instanceof Object)){
var ex__20532__auto__ = e22883;
var statearr_22884_22901 = state_22865;
(statearr_22884_22901[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22902 = state_22865;
state_22865 = G__22902;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$state_machine__20529__auto__ = function(state_22865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20529__auto____1.call(this,state_22865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20529__auto____0;
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20529__auto____1;
return cljs$core$async$state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto___22890,out))
})();
var state__20642__auto__ = (function (){var statearr_22885 = f__20641__auto__.call(null);
(statearr_22885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___22890);

return statearr_22885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto___22890,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22903 = [];
var len__19428__auto___22906 = arguments.length;
var i__19429__auto___22907 = (0);
while(true){
if((i__19429__auto___22907 < len__19428__auto___22906)){
args22903.push((arguments[i__19429__auto___22907]));

var G__22908 = (i__19429__auto___22907 + (1));
i__19429__auto___22907 = G__22908;
continue;
} else {
}
break;
}

var G__22905 = args22903.length;
switch (G__22905) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22903.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto__){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto__){
return (function (state_23075){
var state_val_23076 = (state_23075[(1)]);
if((state_val_23076 === (7))){
var inst_23071 = (state_23075[(2)]);
var state_23075__$1 = state_23075;
var statearr_23077_23118 = state_23075__$1;
(statearr_23077_23118[(2)] = inst_23071);

(statearr_23077_23118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (20))){
var inst_23041 = (state_23075[(7)]);
var inst_23052 = (state_23075[(2)]);
var inst_23053 = cljs.core.next.call(null,inst_23041);
var inst_23027 = inst_23053;
var inst_23028 = null;
var inst_23029 = (0);
var inst_23030 = (0);
var state_23075__$1 = (function (){var statearr_23078 = state_23075;
(statearr_23078[(8)] = inst_23029);

(statearr_23078[(9)] = inst_23027);

(statearr_23078[(10)] = inst_23030);

(statearr_23078[(11)] = inst_23052);

(statearr_23078[(12)] = inst_23028);

return statearr_23078;
})();
var statearr_23079_23119 = state_23075__$1;
(statearr_23079_23119[(2)] = null);

(statearr_23079_23119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (1))){
var state_23075__$1 = state_23075;
var statearr_23080_23120 = state_23075__$1;
(statearr_23080_23120[(2)] = null);

(statearr_23080_23120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (4))){
var inst_23016 = (state_23075[(13)]);
var inst_23016__$1 = (state_23075[(2)]);
var inst_23017 = (inst_23016__$1 == null);
var state_23075__$1 = (function (){var statearr_23081 = state_23075;
(statearr_23081[(13)] = inst_23016__$1);

return statearr_23081;
})();
if(cljs.core.truth_(inst_23017)){
var statearr_23082_23121 = state_23075__$1;
(statearr_23082_23121[(1)] = (5));

} else {
var statearr_23083_23122 = state_23075__$1;
(statearr_23083_23122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (15))){
var state_23075__$1 = state_23075;
var statearr_23087_23123 = state_23075__$1;
(statearr_23087_23123[(2)] = null);

(statearr_23087_23123[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (21))){
var state_23075__$1 = state_23075;
var statearr_23088_23124 = state_23075__$1;
(statearr_23088_23124[(2)] = null);

(statearr_23088_23124[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (13))){
var inst_23029 = (state_23075[(8)]);
var inst_23027 = (state_23075[(9)]);
var inst_23030 = (state_23075[(10)]);
var inst_23028 = (state_23075[(12)]);
var inst_23037 = (state_23075[(2)]);
var inst_23038 = (inst_23030 + (1));
var tmp23084 = inst_23029;
var tmp23085 = inst_23027;
var tmp23086 = inst_23028;
var inst_23027__$1 = tmp23085;
var inst_23028__$1 = tmp23086;
var inst_23029__$1 = tmp23084;
var inst_23030__$1 = inst_23038;
var state_23075__$1 = (function (){var statearr_23089 = state_23075;
(statearr_23089[(8)] = inst_23029__$1);

(statearr_23089[(9)] = inst_23027__$1);

(statearr_23089[(10)] = inst_23030__$1);

(statearr_23089[(14)] = inst_23037);

(statearr_23089[(12)] = inst_23028__$1);

return statearr_23089;
})();
var statearr_23090_23125 = state_23075__$1;
(statearr_23090_23125[(2)] = null);

(statearr_23090_23125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (22))){
var state_23075__$1 = state_23075;
var statearr_23091_23126 = state_23075__$1;
(statearr_23091_23126[(2)] = null);

(statearr_23091_23126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (6))){
var inst_23016 = (state_23075[(13)]);
var inst_23025 = f.call(null,inst_23016);
var inst_23026 = cljs.core.seq.call(null,inst_23025);
var inst_23027 = inst_23026;
var inst_23028 = null;
var inst_23029 = (0);
var inst_23030 = (0);
var state_23075__$1 = (function (){var statearr_23092 = state_23075;
(statearr_23092[(8)] = inst_23029);

(statearr_23092[(9)] = inst_23027);

(statearr_23092[(10)] = inst_23030);

(statearr_23092[(12)] = inst_23028);

return statearr_23092;
})();
var statearr_23093_23127 = state_23075__$1;
(statearr_23093_23127[(2)] = null);

(statearr_23093_23127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (17))){
var inst_23041 = (state_23075[(7)]);
var inst_23045 = cljs.core.chunk_first.call(null,inst_23041);
var inst_23046 = cljs.core.chunk_rest.call(null,inst_23041);
var inst_23047 = cljs.core.count.call(null,inst_23045);
var inst_23027 = inst_23046;
var inst_23028 = inst_23045;
var inst_23029 = inst_23047;
var inst_23030 = (0);
var state_23075__$1 = (function (){var statearr_23094 = state_23075;
(statearr_23094[(8)] = inst_23029);

(statearr_23094[(9)] = inst_23027);

(statearr_23094[(10)] = inst_23030);

(statearr_23094[(12)] = inst_23028);

return statearr_23094;
})();
var statearr_23095_23128 = state_23075__$1;
(statearr_23095_23128[(2)] = null);

(statearr_23095_23128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (3))){
var inst_23073 = (state_23075[(2)]);
var state_23075__$1 = state_23075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23075__$1,inst_23073);
} else {
if((state_val_23076 === (12))){
var inst_23061 = (state_23075[(2)]);
var state_23075__$1 = state_23075;
var statearr_23096_23129 = state_23075__$1;
(statearr_23096_23129[(2)] = inst_23061);

(statearr_23096_23129[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (2))){
var state_23075__$1 = state_23075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23075__$1,(4),in$);
} else {
if((state_val_23076 === (23))){
var inst_23069 = (state_23075[(2)]);
var state_23075__$1 = state_23075;
var statearr_23097_23130 = state_23075__$1;
(statearr_23097_23130[(2)] = inst_23069);

(statearr_23097_23130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (19))){
var inst_23056 = (state_23075[(2)]);
var state_23075__$1 = state_23075;
var statearr_23098_23131 = state_23075__$1;
(statearr_23098_23131[(2)] = inst_23056);

(statearr_23098_23131[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (11))){
var inst_23027 = (state_23075[(9)]);
var inst_23041 = (state_23075[(7)]);
var inst_23041__$1 = cljs.core.seq.call(null,inst_23027);
var state_23075__$1 = (function (){var statearr_23099 = state_23075;
(statearr_23099[(7)] = inst_23041__$1);

return statearr_23099;
})();
if(inst_23041__$1){
var statearr_23100_23132 = state_23075__$1;
(statearr_23100_23132[(1)] = (14));

} else {
var statearr_23101_23133 = state_23075__$1;
(statearr_23101_23133[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (9))){
var inst_23063 = (state_23075[(2)]);
var inst_23064 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23075__$1 = (function (){var statearr_23102 = state_23075;
(statearr_23102[(15)] = inst_23063);

return statearr_23102;
})();
if(cljs.core.truth_(inst_23064)){
var statearr_23103_23134 = state_23075__$1;
(statearr_23103_23134[(1)] = (21));

} else {
var statearr_23104_23135 = state_23075__$1;
(statearr_23104_23135[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (5))){
var inst_23019 = cljs.core.async.close_BANG_.call(null,out);
var state_23075__$1 = state_23075;
var statearr_23105_23136 = state_23075__$1;
(statearr_23105_23136[(2)] = inst_23019);

(statearr_23105_23136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (14))){
var inst_23041 = (state_23075[(7)]);
var inst_23043 = cljs.core.chunked_seq_QMARK_.call(null,inst_23041);
var state_23075__$1 = state_23075;
if(inst_23043){
var statearr_23106_23137 = state_23075__$1;
(statearr_23106_23137[(1)] = (17));

} else {
var statearr_23107_23138 = state_23075__$1;
(statearr_23107_23138[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (16))){
var inst_23059 = (state_23075[(2)]);
var state_23075__$1 = state_23075;
var statearr_23108_23139 = state_23075__$1;
(statearr_23108_23139[(2)] = inst_23059);

(statearr_23108_23139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23076 === (10))){
var inst_23030 = (state_23075[(10)]);
var inst_23028 = (state_23075[(12)]);
var inst_23035 = cljs.core._nth.call(null,inst_23028,inst_23030);
var state_23075__$1 = state_23075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23075__$1,(13),out,inst_23035);
} else {
if((state_val_23076 === (18))){
var inst_23041 = (state_23075[(7)]);
var inst_23050 = cljs.core.first.call(null,inst_23041);
var state_23075__$1 = state_23075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23075__$1,(20),out,inst_23050);
} else {
if((state_val_23076 === (8))){
var inst_23029 = (state_23075[(8)]);
var inst_23030 = (state_23075[(10)]);
var inst_23032 = (inst_23030 < inst_23029);
var inst_23033 = inst_23032;
var state_23075__$1 = state_23075;
if(cljs.core.truth_(inst_23033)){
var statearr_23109_23140 = state_23075__$1;
(statearr_23109_23140[(1)] = (10));

} else {
var statearr_23110_23141 = state_23075__$1;
(statearr_23110_23141[(1)] = (11));

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
});})(c__20640__auto__))
;
return ((function (switch__20528__auto__,c__20640__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20529__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20529__auto____0 = (function (){
var statearr_23114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23114[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20529__auto__);

(statearr_23114[(1)] = (1));

return statearr_23114;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20529__auto____1 = (function (state_23075){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_23075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e23115){if((e23115 instanceof Object)){
var ex__20532__auto__ = e23115;
var statearr_23116_23142 = state_23075;
(statearr_23116_23142[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23143 = state_23075;
state_23075 = G__23143;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20529__auto__ = function(state_23075){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20529__auto____1.call(this,state_23075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20529__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20529__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto__))
})();
var state__20642__auto__ = (function (){var statearr_23117 = f__20641__auto__.call(null);
(statearr_23117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto__);

return statearr_23117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto__))
);

return c__20640__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23144 = [];
var len__19428__auto___23147 = arguments.length;
var i__19429__auto___23148 = (0);
while(true){
if((i__19429__auto___23148 < len__19428__auto___23147)){
args23144.push((arguments[i__19429__auto___23148]));

var G__23149 = (i__19429__auto___23148 + (1));
i__19429__auto___23148 = G__23149;
continue;
} else {
}
break;
}

var G__23146 = args23144.length;
switch (G__23146) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23144.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23151 = [];
var len__19428__auto___23154 = arguments.length;
var i__19429__auto___23155 = (0);
while(true){
if((i__19429__auto___23155 < len__19428__auto___23154)){
args23151.push((arguments[i__19429__auto___23155]));

var G__23156 = (i__19429__auto___23155 + (1));
i__19429__auto___23155 = G__23156;
continue;
} else {
}
break;
}

var G__23153 = args23151.length;
switch (G__23153) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23151.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23158 = [];
var len__19428__auto___23209 = arguments.length;
var i__19429__auto___23210 = (0);
while(true){
if((i__19429__auto___23210 < len__19428__auto___23209)){
args23158.push((arguments[i__19429__auto___23210]));

var G__23211 = (i__19429__auto___23210 + (1));
i__19429__auto___23210 = G__23211;
continue;
} else {
}
break;
}

var G__23160 = args23158.length;
switch (G__23160) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23158.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20640__auto___23213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto___23213,out){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto___23213,out){
return (function (state_23184){
var state_val_23185 = (state_23184[(1)]);
if((state_val_23185 === (7))){
var inst_23179 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
var statearr_23186_23214 = state_23184__$1;
(statearr_23186_23214[(2)] = inst_23179);

(statearr_23186_23214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (1))){
var inst_23161 = null;
var state_23184__$1 = (function (){var statearr_23187 = state_23184;
(statearr_23187[(7)] = inst_23161);

return statearr_23187;
})();
var statearr_23188_23215 = state_23184__$1;
(statearr_23188_23215[(2)] = null);

(statearr_23188_23215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (4))){
var inst_23164 = (state_23184[(8)]);
var inst_23164__$1 = (state_23184[(2)]);
var inst_23165 = (inst_23164__$1 == null);
var inst_23166 = cljs.core.not.call(null,inst_23165);
var state_23184__$1 = (function (){var statearr_23189 = state_23184;
(statearr_23189[(8)] = inst_23164__$1);

return statearr_23189;
})();
if(inst_23166){
var statearr_23190_23216 = state_23184__$1;
(statearr_23190_23216[(1)] = (5));

} else {
var statearr_23191_23217 = state_23184__$1;
(statearr_23191_23217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (6))){
var state_23184__$1 = state_23184;
var statearr_23192_23218 = state_23184__$1;
(statearr_23192_23218[(2)] = null);

(statearr_23192_23218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (3))){
var inst_23181 = (state_23184[(2)]);
var inst_23182 = cljs.core.async.close_BANG_.call(null,out);
var state_23184__$1 = (function (){var statearr_23193 = state_23184;
(statearr_23193[(9)] = inst_23181);

return statearr_23193;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23184__$1,inst_23182);
} else {
if((state_val_23185 === (2))){
var state_23184__$1 = state_23184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23184__$1,(4),ch);
} else {
if((state_val_23185 === (11))){
var inst_23164 = (state_23184[(8)]);
var inst_23173 = (state_23184[(2)]);
var inst_23161 = inst_23164;
var state_23184__$1 = (function (){var statearr_23194 = state_23184;
(statearr_23194[(7)] = inst_23161);

(statearr_23194[(10)] = inst_23173);

return statearr_23194;
})();
var statearr_23195_23219 = state_23184__$1;
(statearr_23195_23219[(2)] = null);

(statearr_23195_23219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (9))){
var inst_23164 = (state_23184[(8)]);
var state_23184__$1 = state_23184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23184__$1,(11),out,inst_23164);
} else {
if((state_val_23185 === (5))){
var inst_23161 = (state_23184[(7)]);
var inst_23164 = (state_23184[(8)]);
var inst_23168 = cljs.core._EQ_.call(null,inst_23164,inst_23161);
var state_23184__$1 = state_23184;
if(inst_23168){
var statearr_23197_23220 = state_23184__$1;
(statearr_23197_23220[(1)] = (8));

} else {
var statearr_23198_23221 = state_23184__$1;
(statearr_23198_23221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (10))){
var inst_23176 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
var statearr_23199_23222 = state_23184__$1;
(statearr_23199_23222[(2)] = inst_23176);

(statearr_23199_23222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (8))){
var inst_23161 = (state_23184[(7)]);
var tmp23196 = inst_23161;
var inst_23161__$1 = tmp23196;
var state_23184__$1 = (function (){var statearr_23200 = state_23184;
(statearr_23200[(7)] = inst_23161__$1);

return statearr_23200;
})();
var statearr_23201_23223 = state_23184__$1;
(statearr_23201_23223[(2)] = null);

(statearr_23201_23223[(1)] = (2));


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
});})(c__20640__auto___23213,out))
;
return ((function (switch__20528__auto__,c__20640__auto___23213,out){
return (function() {
var cljs$core$async$state_machine__20529__auto__ = null;
var cljs$core$async$state_machine__20529__auto____0 = (function (){
var statearr_23205 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23205[(0)] = cljs$core$async$state_machine__20529__auto__);

(statearr_23205[(1)] = (1));

return statearr_23205;
});
var cljs$core$async$state_machine__20529__auto____1 = (function (state_23184){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_23184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e23206){if((e23206 instanceof Object)){
var ex__20532__auto__ = e23206;
var statearr_23207_23224 = state_23184;
(statearr_23207_23224[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23225 = state_23184;
state_23184 = G__23225;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$state_machine__20529__auto__ = function(state_23184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20529__auto____1.call(this,state_23184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20529__auto____0;
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20529__auto____1;
return cljs$core$async$state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto___23213,out))
})();
var state__20642__auto__ = (function (){var statearr_23208 = f__20641__auto__.call(null);
(statearr_23208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___23213);

return statearr_23208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto___23213,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23226 = [];
var len__19428__auto___23296 = arguments.length;
var i__19429__auto___23297 = (0);
while(true){
if((i__19429__auto___23297 < len__19428__auto___23296)){
args23226.push((arguments[i__19429__auto___23297]));

var G__23298 = (i__19429__auto___23297 + (1));
i__19429__auto___23297 = G__23298;
continue;
} else {
}
break;
}

var G__23228 = args23226.length;
switch (G__23228) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23226.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20640__auto___23300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto___23300,out){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto___23300,out){
return (function (state_23266){
var state_val_23267 = (state_23266[(1)]);
if((state_val_23267 === (7))){
var inst_23262 = (state_23266[(2)]);
var state_23266__$1 = state_23266;
var statearr_23268_23301 = state_23266__$1;
(statearr_23268_23301[(2)] = inst_23262);

(statearr_23268_23301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23267 === (1))){
var inst_23229 = (new Array(n));
var inst_23230 = inst_23229;
var inst_23231 = (0);
var state_23266__$1 = (function (){var statearr_23269 = state_23266;
(statearr_23269[(7)] = inst_23230);

(statearr_23269[(8)] = inst_23231);

return statearr_23269;
})();
var statearr_23270_23302 = state_23266__$1;
(statearr_23270_23302[(2)] = null);

(statearr_23270_23302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23267 === (4))){
var inst_23234 = (state_23266[(9)]);
var inst_23234__$1 = (state_23266[(2)]);
var inst_23235 = (inst_23234__$1 == null);
var inst_23236 = cljs.core.not.call(null,inst_23235);
var state_23266__$1 = (function (){var statearr_23271 = state_23266;
(statearr_23271[(9)] = inst_23234__$1);

return statearr_23271;
})();
if(inst_23236){
var statearr_23272_23303 = state_23266__$1;
(statearr_23272_23303[(1)] = (5));

} else {
var statearr_23273_23304 = state_23266__$1;
(statearr_23273_23304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23267 === (15))){
var inst_23256 = (state_23266[(2)]);
var state_23266__$1 = state_23266;
var statearr_23274_23305 = state_23266__$1;
(statearr_23274_23305[(2)] = inst_23256);

(statearr_23274_23305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23267 === (13))){
var state_23266__$1 = state_23266;
var statearr_23275_23306 = state_23266__$1;
(statearr_23275_23306[(2)] = null);

(statearr_23275_23306[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23267 === (6))){
var inst_23231 = (state_23266[(8)]);
var inst_23252 = (inst_23231 > (0));
var state_23266__$1 = state_23266;
if(cljs.core.truth_(inst_23252)){
var statearr_23276_23307 = state_23266__$1;
(statearr_23276_23307[(1)] = (12));

} else {
var statearr_23277_23308 = state_23266__$1;
(statearr_23277_23308[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23267 === (3))){
var inst_23264 = (state_23266[(2)]);
var state_23266__$1 = state_23266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23266__$1,inst_23264);
} else {
if((state_val_23267 === (12))){
var inst_23230 = (state_23266[(7)]);
var inst_23254 = cljs.core.vec.call(null,inst_23230);
var state_23266__$1 = state_23266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23266__$1,(15),out,inst_23254);
} else {
if((state_val_23267 === (2))){
var state_23266__$1 = state_23266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23266__$1,(4),ch);
} else {
if((state_val_23267 === (11))){
var inst_23246 = (state_23266[(2)]);
var inst_23247 = (new Array(n));
var inst_23230 = inst_23247;
var inst_23231 = (0);
var state_23266__$1 = (function (){var statearr_23278 = state_23266;
(statearr_23278[(7)] = inst_23230);

(statearr_23278[(8)] = inst_23231);

(statearr_23278[(10)] = inst_23246);

return statearr_23278;
})();
var statearr_23279_23309 = state_23266__$1;
(statearr_23279_23309[(2)] = null);

(statearr_23279_23309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23267 === (9))){
var inst_23230 = (state_23266[(7)]);
var inst_23244 = cljs.core.vec.call(null,inst_23230);
var state_23266__$1 = state_23266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23266__$1,(11),out,inst_23244);
} else {
if((state_val_23267 === (5))){
var inst_23230 = (state_23266[(7)]);
var inst_23231 = (state_23266[(8)]);
var inst_23234 = (state_23266[(9)]);
var inst_23239 = (state_23266[(11)]);
var inst_23238 = (inst_23230[inst_23231] = inst_23234);
var inst_23239__$1 = (inst_23231 + (1));
var inst_23240 = (inst_23239__$1 < n);
var state_23266__$1 = (function (){var statearr_23280 = state_23266;
(statearr_23280[(12)] = inst_23238);

(statearr_23280[(11)] = inst_23239__$1);

return statearr_23280;
})();
if(cljs.core.truth_(inst_23240)){
var statearr_23281_23310 = state_23266__$1;
(statearr_23281_23310[(1)] = (8));

} else {
var statearr_23282_23311 = state_23266__$1;
(statearr_23282_23311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23267 === (14))){
var inst_23259 = (state_23266[(2)]);
var inst_23260 = cljs.core.async.close_BANG_.call(null,out);
var state_23266__$1 = (function (){var statearr_23284 = state_23266;
(statearr_23284[(13)] = inst_23259);

return statearr_23284;
})();
var statearr_23285_23312 = state_23266__$1;
(statearr_23285_23312[(2)] = inst_23260);

(statearr_23285_23312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23267 === (10))){
var inst_23250 = (state_23266[(2)]);
var state_23266__$1 = state_23266;
var statearr_23286_23313 = state_23266__$1;
(statearr_23286_23313[(2)] = inst_23250);

(statearr_23286_23313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23267 === (8))){
var inst_23230 = (state_23266[(7)]);
var inst_23239 = (state_23266[(11)]);
var tmp23283 = inst_23230;
var inst_23230__$1 = tmp23283;
var inst_23231 = inst_23239;
var state_23266__$1 = (function (){var statearr_23287 = state_23266;
(statearr_23287[(7)] = inst_23230__$1);

(statearr_23287[(8)] = inst_23231);

return statearr_23287;
})();
var statearr_23288_23314 = state_23266__$1;
(statearr_23288_23314[(2)] = null);

(statearr_23288_23314[(1)] = (2));


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
});})(c__20640__auto___23300,out))
;
return ((function (switch__20528__auto__,c__20640__auto___23300,out){
return (function() {
var cljs$core$async$state_machine__20529__auto__ = null;
var cljs$core$async$state_machine__20529__auto____0 = (function (){
var statearr_23292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23292[(0)] = cljs$core$async$state_machine__20529__auto__);

(statearr_23292[(1)] = (1));

return statearr_23292;
});
var cljs$core$async$state_machine__20529__auto____1 = (function (state_23266){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_23266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e23293){if((e23293 instanceof Object)){
var ex__20532__auto__ = e23293;
var statearr_23294_23315 = state_23266;
(statearr_23294_23315[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23316 = state_23266;
state_23266 = G__23316;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$state_machine__20529__auto__ = function(state_23266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20529__auto____1.call(this,state_23266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20529__auto____0;
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20529__auto____1;
return cljs$core$async$state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto___23300,out))
})();
var state__20642__auto__ = (function (){var statearr_23295 = f__20641__auto__.call(null);
(statearr_23295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___23300);

return statearr_23295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto___23300,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23317 = [];
var len__19428__auto___23391 = arguments.length;
var i__19429__auto___23392 = (0);
while(true){
if((i__19429__auto___23392 < len__19428__auto___23391)){
args23317.push((arguments[i__19429__auto___23392]));

var G__23393 = (i__19429__auto___23392 + (1));
i__19429__auto___23392 = G__23393;
continue;
} else {
}
break;
}

var G__23319 = args23317.length;
switch (G__23319) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23317.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20640__auto___23395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20640__auto___23395,out){
return (function (){
var f__20641__auto__ = (function (){var switch__20528__auto__ = ((function (c__20640__auto___23395,out){
return (function (state_23361){
var state_val_23362 = (state_23361[(1)]);
if((state_val_23362 === (7))){
var inst_23357 = (state_23361[(2)]);
var state_23361__$1 = state_23361;
var statearr_23363_23396 = state_23361__$1;
(statearr_23363_23396[(2)] = inst_23357);

(statearr_23363_23396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (1))){
var inst_23320 = [];
var inst_23321 = inst_23320;
var inst_23322 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23361__$1 = (function (){var statearr_23364 = state_23361;
(statearr_23364[(7)] = inst_23322);

(statearr_23364[(8)] = inst_23321);

return statearr_23364;
})();
var statearr_23365_23397 = state_23361__$1;
(statearr_23365_23397[(2)] = null);

(statearr_23365_23397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (4))){
var inst_23325 = (state_23361[(9)]);
var inst_23325__$1 = (state_23361[(2)]);
var inst_23326 = (inst_23325__$1 == null);
var inst_23327 = cljs.core.not.call(null,inst_23326);
var state_23361__$1 = (function (){var statearr_23366 = state_23361;
(statearr_23366[(9)] = inst_23325__$1);

return statearr_23366;
})();
if(inst_23327){
var statearr_23367_23398 = state_23361__$1;
(statearr_23367_23398[(1)] = (5));

} else {
var statearr_23368_23399 = state_23361__$1;
(statearr_23368_23399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (15))){
var inst_23351 = (state_23361[(2)]);
var state_23361__$1 = state_23361;
var statearr_23369_23400 = state_23361__$1;
(statearr_23369_23400[(2)] = inst_23351);

(statearr_23369_23400[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (13))){
var state_23361__$1 = state_23361;
var statearr_23370_23401 = state_23361__$1;
(statearr_23370_23401[(2)] = null);

(statearr_23370_23401[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (6))){
var inst_23321 = (state_23361[(8)]);
var inst_23346 = inst_23321.length;
var inst_23347 = (inst_23346 > (0));
var state_23361__$1 = state_23361;
if(cljs.core.truth_(inst_23347)){
var statearr_23371_23402 = state_23361__$1;
(statearr_23371_23402[(1)] = (12));

} else {
var statearr_23372_23403 = state_23361__$1;
(statearr_23372_23403[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (3))){
var inst_23359 = (state_23361[(2)]);
var state_23361__$1 = state_23361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23361__$1,inst_23359);
} else {
if((state_val_23362 === (12))){
var inst_23321 = (state_23361[(8)]);
var inst_23349 = cljs.core.vec.call(null,inst_23321);
var state_23361__$1 = state_23361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23361__$1,(15),out,inst_23349);
} else {
if((state_val_23362 === (2))){
var state_23361__$1 = state_23361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23361__$1,(4),ch);
} else {
if((state_val_23362 === (11))){
var inst_23329 = (state_23361[(10)]);
var inst_23325 = (state_23361[(9)]);
var inst_23339 = (state_23361[(2)]);
var inst_23340 = [];
var inst_23341 = inst_23340.push(inst_23325);
var inst_23321 = inst_23340;
var inst_23322 = inst_23329;
var state_23361__$1 = (function (){var statearr_23373 = state_23361;
(statearr_23373[(11)] = inst_23339);

(statearr_23373[(7)] = inst_23322);

(statearr_23373[(8)] = inst_23321);

(statearr_23373[(12)] = inst_23341);

return statearr_23373;
})();
var statearr_23374_23404 = state_23361__$1;
(statearr_23374_23404[(2)] = null);

(statearr_23374_23404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (9))){
var inst_23321 = (state_23361[(8)]);
var inst_23337 = cljs.core.vec.call(null,inst_23321);
var state_23361__$1 = state_23361;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23361__$1,(11),out,inst_23337);
} else {
if((state_val_23362 === (5))){
var inst_23322 = (state_23361[(7)]);
var inst_23329 = (state_23361[(10)]);
var inst_23325 = (state_23361[(9)]);
var inst_23329__$1 = f.call(null,inst_23325);
var inst_23330 = cljs.core._EQ_.call(null,inst_23329__$1,inst_23322);
var inst_23331 = cljs.core.keyword_identical_QMARK_.call(null,inst_23322,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23332 = (inst_23330) || (inst_23331);
var state_23361__$1 = (function (){var statearr_23375 = state_23361;
(statearr_23375[(10)] = inst_23329__$1);

return statearr_23375;
})();
if(cljs.core.truth_(inst_23332)){
var statearr_23376_23405 = state_23361__$1;
(statearr_23376_23405[(1)] = (8));

} else {
var statearr_23377_23406 = state_23361__$1;
(statearr_23377_23406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (14))){
var inst_23354 = (state_23361[(2)]);
var inst_23355 = cljs.core.async.close_BANG_.call(null,out);
var state_23361__$1 = (function (){var statearr_23379 = state_23361;
(statearr_23379[(13)] = inst_23354);

return statearr_23379;
})();
var statearr_23380_23407 = state_23361__$1;
(statearr_23380_23407[(2)] = inst_23355);

(statearr_23380_23407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (10))){
var inst_23344 = (state_23361[(2)]);
var state_23361__$1 = state_23361;
var statearr_23381_23408 = state_23361__$1;
(statearr_23381_23408[(2)] = inst_23344);

(statearr_23381_23408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23362 === (8))){
var inst_23321 = (state_23361[(8)]);
var inst_23329 = (state_23361[(10)]);
var inst_23325 = (state_23361[(9)]);
var inst_23334 = inst_23321.push(inst_23325);
var tmp23378 = inst_23321;
var inst_23321__$1 = tmp23378;
var inst_23322 = inst_23329;
var state_23361__$1 = (function (){var statearr_23382 = state_23361;
(statearr_23382[(7)] = inst_23322);

(statearr_23382[(8)] = inst_23321__$1);

(statearr_23382[(14)] = inst_23334);

return statearr_23382;
})();
var statearr_23383_23409 = state_23361__$1;
(statearr_23383_23409[(2)] = null);

(statearr_23383_23409[(1)] = (2));


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
});})(c__20640__auto___23395,out))
;
return ((function (switch__20528__auto__,c__20640__auto___23395,out){
return (function() {
var cljs$core$async$state_machine__20529__auto__ = null;
var cljs$core$async$state_machine__20529__auto____0 = (function (){
var statearr_23387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23387[(0)] = cljs$core$async$state_machine__20529__auto__);

(statearr_23387[(1)] = (1));

return statearr_23387;
});
var cljs$core$async$state_machine__20529__auto____1 = (function (state_23361){
while(true){
var ret_value__20530__auto__ = (function (){try{while(true){
var result__20531__auto__ = switch__20528__auto__.call(null,state_23361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20531__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20531__auto__;
}
break;
}
}catch (e23388){if((e23388 instanceof Object)){
var ex__20532__auto__ = e23388;
var statearr_23389_23410 = state_23361;
(statearr_23389_23410[(5)] = ex__20532__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23388;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20530__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23411 = state_23361;
state_23361 = G__23411;
continue;
} else {
return ret_value__20530__auto__;
}
break;
}
});
cljs$core$async$state_machine__20529__auto__ = function(state_23361){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20529__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20529__auto____1.call(this,state_23361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20529__auto____0;
cljs$core$async$state_machine__20529__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20529__auto____1;
return cljs$core$async$state_machine__20529__auto__;
})()
;})(switch__20528__auto__,c__20640__auto___23395,out))
})();
var state__20642__auto__ = (function (){var statearr_23390 = f__20641__auto__.call(null);
(statearr_23390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20640__auto___23395);

return statearr_23390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20642__auto__);
});})(c__20640__auto___23395,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1460649302976