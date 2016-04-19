// Compiled by ClojureScript 1.7.228 {}
goog.provide('turtle.core');
goog.require('cljs.core');
goog.require('monet.canvas');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Edits to this text should show up in your developer console.");
turtle.core.turtle_img = (function (){var img = (new Image((48),(48)));
var src = "file:///home/aleksander/Programming/workshops/turtle/resources/public/img/turtle.jpg";
img.src = src;

return img;
})();
turtle.core.rock_img = (function (){var img = (new Image((48),(48)));
var src = "file:///home/aleksander/Programming/workshops/turtle/resources/public/img/rock.png";
img.src = src;

return img;
})();
turtle.core.lettuce_img = (function (){var img = (new Image((48),(48)));
var src = "file:///home/aleksander/Programming/workshops/turtle/resources/public/img/lettuce.png";
img.src = src;

return img;
})();
turtle.core.canvas_width = (800);
turtle.core.canvas_height = (600);
turtle.core.canvas_dom = document.getElementById("canvas");
turtle.core.monet_canvas = monet.canvas.init.call(null,turtle.core.canvas_dom,"2d");
turtle.core.ctx = monet.canvas.get_context.call(null,turtle.core.canvas_dom,"2d");
turtle.core.draw_grid_BANG_ = (function turtle$core$draw_grid_BANG_(){
return monet.canvas.add_entity.call(null,turtle.core.monet_canvas,new cljs.core.Keyword(null,"grid","grid",402978600),monet.canvas.entity.call(null,null,null,(function (ctx,value){
var seq__27644_27652 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),turtle.core.canvas_height,(50)));
var chunk__27645_27653 = null;
var count__27646_27654 = (0);
var i__27647_27655 = (0);
while(true){
if((i__27647_27655 < count__27646_27654)){
var i_27656 = cljs.core._nth.call(null,chunk__27645_27653,i__27647_27655);
monet.canvas.stroke.call(null,monet.canvas.line_to.call(null,monet.canvas.move_to.call(null,monet.canvas.begin_path.call(null,ctx),(0),i_27656),turtle.core.canvas_width,i_27656));

var G__27657 = seq__27644_27652;
var G__27658 = chunk__27645_27653;
var G__27659 = count__27646_27654;
var G__27660 = (i__27647_27655 + (1));
seq__27644_27652 = G__27657;
chunk__27645_27653 = G__27658;
count__27646_27654 = G__27659;
i__27647_27655 = G__27660;
continue;
} else {
var temp__4657__auto___27661 = cljs.core.seq.call(null,seq__27644_27652);
if(temp__4657__auto___27661){
var seq__27644_27662__$1 = temp__4657__auto___27661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27644_27662__$1)){
var c__19173__auto___27663 = cljs.core.chunk_first.call(null,seq__27644_27662__$1);
var G__27664 = cljs.core.chunk_rest.call(null,seq__27644_27662__$1);
var G__27665 = c__19173__auto___27663;
var G__27666 = cljs.core.count.call(null,c__19173__auto___27663);
var G__27667 = (0);
seq__27644_27652 = G__27664;
chunk__27645_27653 = G__27665;
count__27646_27654 = G__27666;
i__27647_27655 = G__27667;
continue;
} else {
var i_27668 = cljs.core.first.call(null,seq__27644_27662__$1);
monet.canvas.stroke.call(null,monet.canvas.line_to.call(null,monet.canvas.move_to.call(null,monet.canvas.begin_path.call(null,ctx),(0),i_27668),turtle.core.canvas_width,i_27668));

var G__27669 = cljs.core.next.call(null,seq__27644_27662__$1);
var G__27670 = null;
var G__27671 = (0);
var G__27672 = (0);
seq__27644_27652 = G__27669;
chunk__27645_27653 = G__27670;
count__27646_27654 = G__27671;
i__27647_27655 = G__27672;
continue;
}
} else {
}
}
break;
}

var seq__27648 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),turtle.core.canvas_width,(50)));
var chunk__27649 = null;
var count__27650 = (0);
var i__27651 = (0);
while(true){
if((i__27651 < count__27650)){
var j = cljs.core._nth.call(null,chunk__27649,i__27651);
monet.canvas.stroke.call(null,monet.canvas.line_to.call(null,monet.canvas.move_to.call(null,monet.canvas.begin_path.call(null,ctx),j,(0)),j,turtle.core.canvas_height));

var G__27673 = seq__27648;
var G__27674 = chunk__27649;
var G__27675 = count__27650;
var G__27676 = (i__27651 + (1));
seq__27648 = G__27673;
chunk__27649 = G__27674;
count__27650 = G__27675;
i__27651 = G__27676;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27648);
if(temp__4657__auto__){
var seq__27648__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27648__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__27648__$1);
var G__27677 = cljs.core.chunk_rest.call(null,seq__27648__$1);
var G__27678 = c__19173__auto__;
var G__27679 = cljs.core.count.call(null,c__19173__auto__);
var G__27680 = (0);
seq__27648 = G__27677;
chunk__27649 = G__27678;
count__27650 = G__27679;
i__27651 = G__27680;
continue;
} else {
var j = cljs.core.first.call(null,seq__27648__$1);
monet.canvas.stroke.call(null,monet.canvas.line_to.call(null,monet.canvas.move_to.call(null,monet.canvas.begin_path.call(null,ctx),j,(0)),j,turtle.core.canvas_height));

var G__27681 = cljs.core.next.call(null,seq__27648__$1);
var G__27682 = null;
var G__27683 = (0);
var G__27684 = (0);
seq__27648 = G__27681;
chunk__27649 = G__27682;
count__27650 = G__27683;
i__27651 = G__27684;
continue;
}
} else {
return null;
}
}
break;
}
})));
});
turtle.core.level = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lettuce","lettuce",-1312865248),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(50),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null),new cljs.core.Keyword(null,"rocks","rocks",-1226816616),null], null);
turtle.core.draw_items_BANG_ = (function turtle$core$draw_items_BANG_(){
monet.canvas.add_entity.call(null,turtle.core.monet_canvas,new cljs.core.Keyword(null,"rocks","rocks",-1226816616),monet.canvas.entity.call(null,null,null,(function (ctx,value){
var seq__27689 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"rocks","rocks",-1226816616).cljs$core$IFn$_invoke$arity$1(turtle.core.level));
var chunk__27690 = null;
var count__27691 = (0);
var i__27692 = (0);
while(true){
if((i__27692 < count__27691)){
var rock = cljs.core._nth.call(null,chunk__27690,i__27692);
monet.canvas.restore.call(null,monet.canvas.draw_image.call(null,monet.canvas.save.call(null,ctx),turtle.core.rock_img,cljs.core.assoc.call(null,rock,new cljs.core.Keyword(null,"w","w",354169001),(48),new cljs.core.Keyword(null,"h","h",1109658740),(48))));

var G__27693 = seq__27689;
var G__27694 = chunk__27690;
var G__27695 = count__27691;
var G__27696 = (i__27692 + (1));
seq__27689 = G__27693;
chunk__27690 = G__27694;
count__27691 = G__27695;
i__27692 = G__27696;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27689);
if(temp__4657__auto__){
var seq__27689__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27689__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__27689__$1);
var G__27697 = cljs.core.chunk_rest.call(null,seq__27689__$1);
var G__27698 = c__19173__auto__;
var G__27699 = cljs.core.count.call(null,c__19173__auto__);
var G__27700 = (0);
seq__27689 = G__27697;
chunk__27690 = G__27698;
count__27691 = G__27699;
i__27692 = G__27700;
continue;
} else {
var rock = cljs.core.first.call(null,seq__27689__$1);
monet.canvas.restore.call(null,monet.canvas.draw_image.call(null,monet.canvas.save.call(null,ctx),turtle.core.rock_img,cljs.core.assoc.call(null,rock,new cljs.core.Keyword(null,"w","w",354169001),(48),new cljs.core.Keyword(null,"h","h",1109658740),(48))));

var G__27701 = cljs.core.next.call(null,seq__27689__$1);
var G__27702 = null;
var G__27703 = (0);
var G__27704 = (0);
seq__27689 = G__27701;
chunk__27690 = G__27702;
count__27691 = G__27703;
i__27692 = G__27704;
continue;
}
} else {
return null;
}
}
break;
}
})));

return monet.canvas.add_entity.call(null,turtle.core.monet_canvas,new cljs.core.Keyword(null,"lettuce","lettuce",-1312865248),monet.canvas.entity.call(null,null,null,(function (ctx,value){
return monet.canvas.restore.call(null,monet.canvas.draw_image.call(null,monet.canvas.save.call(null,ctx),turtle.core.lettuce_img,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"lettuce","lettuce",-1312865248).cljs$core$IFn$_invoke$arity$1(turtle.core.level),new cljs.core.Keyword(null,"w","w",354169001),(48),new cljs.core.Keyword(null,"h","h",1109658740),(48))));
})));
});
turtle.core.turtle_attr = (function turtle$core$turtle_attr(turtle__$1,attr){
return attr.call(null,cljs.core.deref.call(null,turtle__$1));
});
turtle.core.update_turtle = (function turtle$core$update_turtle(turtle__$1,value){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,value,new cljs.core.Keyword(null,"x","x",2099068185),turtle.core.turtle_attr.call(null,turtle__$1,new cljs.core.Keyword(null,"x","x",2099068185))),new cljs.core.Keyword(null,"y","y",-1757859776),turtle.core.turtle_attr.call(null,turtle__$1,new cljs.core.Keyword(null,"y","y",-1757859776)));
});
turtle.core.turtle_entity = (function turtle$core$turtle_entity(turtle__$1){
return monet.canvas.entity.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),turtle.core.turtle_attr.call(null,turtle__$1,new cljs.core.Keyword(null,"x","x",2099068185)),new cljs.core.Keyword(null,"y","y",-1757859776),turtle.core.turtle_attr.call(null,turtle__$1,new cljs.core.Keyword(null,"y","y",-1757859776))], null),(function (value){
return turtle.core.update_turtle.call(null,turtle__$1,value);
}),(function (ctx,value){
return monet.canvas.restore.call(null,monet.canvas.draw_image.call(null,monet.canvas.save.call(null,ctx),turtle.core.turtle_img,cljs.core.assoc.call(null,value,new cljs.core.Keyword(null,"w","w",354169001),(48),new cljs.core.Keyword(null,"h","h",1109658740),(48))));
}));
});
if(typeof turtle.core.turtle !== 'undefined'){
} else {
turtle.core.turtle = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null));
}
turtle.core.isLettuceNear = (function turtle$core$isLettuceNear(){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lettuce","lettuce",-1312865248).cljs$core$IFn$_invoke$arity$1(turtle.core.level),cljs.core.assoc.call(null,cljs.core.deref.call(null,turtle.core.turtle),new cljs.core.Keyword(null,"x","x",2099068185),((50) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,turtle.core.turtle)))))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lettuce","lettuce",-1312865248).cljs$core$IFn$_invoke$arity$1(turtle.core.level),cljs.core.assoc.call(null,cljs.core.deref.call(null,turtle.core.turtle),new cljs.core.Keyword(null,"x","x",2099068185),((50) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,turtle.core.turtle)))))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lettuce","lettuce",-1312865248).cljs$core$IFn$_invoke$arity$1(turtle.core.level),cljs.core.assoc.call(null,cljs.core.deref.call(null,turtle.core.turtle),new cljs.core.Keyword(null,"y","y",-1757859776),((50) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,turtle.core.turtle)))))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lettuce","lettuce",-1312865248).cljs$core$IFn$_invoke$arity$1(turtle.core.level),cljs.core.assoc.call(null,cljs.core.deref.call(null,turtle.core.turtle),new cljs.core.Keyword(null,"y","y",-1757859776),((50) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,turtle.core.turtle))))));
});
goog.exportSymbol('turtle.core.isLettuceNear', turtle.core.isLettuceNear);
turtle.core.move = (function turtle$core$move(dir){
var G__27706 = dir;
switch (G__27706) {
case "up":
return cljs.core.swap_BANG_.call(null,turtle.core.turtle,cljs.core.assoc,new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,turtle.core.turtle)) - (50)));

break;
case "down":
return cljs.core.swap_BANG_.call(null,turtle.core.turtle,cljs.core.assoc,new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,turtle.core.turtle)) + (50)));

break;
case "left":
return cljs.core.swap_BANG_.call(null,turtle.core.turtle,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,turtle.core.turtle)) - (50)));

break;
case "right":
return cljs.core.swap_BANG_.call(null,turtle.core.turtle,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,turtle.core.turtle)) + (50)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(dir)].join('')));

}
});
goog.exportSymbol('turtle.core.move', turtle.core.move);
turtle.core.eat = (function turtle$core$eat(){
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lettuce","lettuce",-1312865248).cljs$core$IFn$_invoke$arity$1(turtle.core.level),cljs.core.assoc.call(null,cljs.core.deref.call(null,turtle.core.turtle),new cljs.core.Keyword(null,"x","x",2099068185),((50) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,turtle.core.turtle)))))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lettuce","lettuce",-1312865248).cljs$core$IFn$_invoke$arity$1(turtle.core.level),cljs.core.assoc.call(null,cljs.core.deref.call(null,turtle.core.turtle),new cljs.core.Keyword(null,"x","x",2099068185),((50) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,turtle.core.turtle)))))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lettuce","lettuce",-1312865248).cljs$core$IFn$_invoke$arity$1(turtle.core.level),cljs.core.assoc.call(null,cljs.core.deref.call(null,turtle.core.turtle),new cljs.core.Keyword(null,"y","y",-1757859776),((50) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,turtle.core.turtle)))))) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"lettuce","lettuce",-1312865248).cljs$core$IFn$_invoke$arity$1(turtle.core.level),cljs.core.assoc.call(null,cljs.core.deref.call(null,turtle.core.turtle),new cljs.core.Keyword(null,"y","y",-1757859776),((50) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,turtle.core.turtle))))))){
cljs.core.println.call(null,"Ate the lettuce!");

return monet.canvas.remove_entity.call(null,turtle.core.monet_canvas,new cljs.core.Keyword(null,"lettuce","lettuce",-1312865248));
} else {
return cljs.core.println.call(null,"There's no lettuce there :(");
}
});
goog.exportSymbol('turtle.core.eat', turtle.core.eat);
turtle.core.on_js_reload = (function turtle$core$on_js_reload(){
turtle.core.draw_grid_BANG_.call(null);

turtle.core.draw_items_BANG_.call(null);

monet.canvas.add_entity.call(null,turtle.core.monet_canvas,new cljs.core.Keyword(null,"turtle-entity","turtle-entity",780055618),turtle.core.turtle_entity.call(null,turtle.core.turtle));

return monet.canvas.draw_loop.call(null,turtle.core.monet_canvas);
});

//# sourceMappingURL=core.js.map?rel=1460996618515