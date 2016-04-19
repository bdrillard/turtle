// Compiled by ClojureScript 1.7.228 {}
goog.provide('monet.canvas');
goog.require('cljs.core');
goog.require('monet.core');
monet.canvas.get_context = (function monet$canvas$get_context(canvas,type){
return canvas.getContext(cljs.core.name.call(null,type));
});
/**
 * Starts a new path by resetting the list of sub-paths.
 * Call this method when you want to create a new path.
 */
monet.canvas.begin_path = (function monet$canvas$begin_path(ctx){
ctx.beginPath();

return ctx;
});
/**
 * Tries to draw a straight line from the current point to the start.
 * If the shape has already been closed or has only one point, this
 * function does nothing.
 */
monet.canvas.close_path = (function monet$canvas$close_path(ctx){
ctx.closePath();

return ctx;
});
/**
 * Saves the current drawing style state using a stack so you can revert
 * any change you make to it using restore.
 */
monet.canvas.save = (function monet$canvas$save(ctx){
ctx.save();

return ctx;
});
/**
 * Restores the drawing style state to the last element on the 'state stack'
 * saved by save.
 */
monet.canvas.restore = (function monet$canvas$restore(ctx){
ctx.restore();

return ctx;
});
/**
 * Rotate the context 
 */
monet.canvas.rotate = (function monet$canvas$rotate(ctx,angle){
ctx.rotate(angle);

return ctx;
});
/**
 * Scales the context by a floating-point factor in each direction
 */
monet.canvas.scale = (function monet$canvas$scale(ctx,x,y){
ctx.scale(x,y);

return ctx;
});
/**
 * Moves the origin point of the context to (x, y).
 */
monet.canvas.translate = (function monet$canvas$translate(ctx,x,y){
ctx.translate(x,y);

return ctx;
});
/**
 * Multiplies a custom transformation matrix to the existing
 * HTML5 canvas transformation according to the follow convention:
 * 
 * [ x']   [ m11 m21 dx ] [ x ]
 * [ y'] = [ m12 m22 dy ] [ y ]
 * [ 1 ]   [ 0   0   1  ] [ 1 ]
 */
monet.canvas.transform = (function monet$canvas$transform(var_args){
var args19482 = [];
var len__19428__auto___19488 = arguments.length;
var i__19429__auto___19489 = (0);
while(true){
if((i__19429__auto___19489 < len__19428__auto___19488)){
args19482.push((arguments[i__19429__auto___19489]));

var G__19490 = (i__19429__auto___19489 + (1));
i__19429__auto___19489 = G__19490;
continue;
} else {
}
break;
}

var G__19484 = args19482.length;
switch (G__19484) {
case 7:
return monet.canvas.transform.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 2:
return monet.canvas.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19482.length)].join('')));

}
});

monet.canvas.transform.cljs$core$IFn$_invoke$arity$7 = (function (ctx,m11,m12,m21,m22,dx,dy){
ctx.transform(m11,m12,m21,m22,dx,dy);

return ctx;
});

monet.canvas.transform.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__19485){
var map__19486 = p__19485;
var map__19486__$1 = ((((!((map__19486 == null)))?((((map__19486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19486):map__19486);
var m11 = cljs.core.get.call(null,map__19486__$1,new cljs.core.Keyword(null,"m11","m11",-1747137747));
var m12 = cljs.core.get.call(null,map__19486__$1,new cljs.core.Keyword(null,"m12","m12",-1234809182));
var m21 = cljs.core.get.call(null,map__19486__$1,new cljs.core.Keyword(null,"m21","m21",1822226849));
var m22 = cljs.core.get.call(null,map__19486__$1,new cljs.core.Keyword(null,"m22","m22",1714612893));
var dx = cljs.core.get.call(null,map__19486__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var dy = cljs.core.get.call(null,map__19486__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
ctx.transform(m11,m12,m21,m22,dx,dy);

return ctx;
});

monet.canvas.transform.cljs$lang$maxFixedArity = 7;
/**
 * Fills the subpaths with the current fill style.
 */
monet.canvas.fill = (function monet$canvas$fill(ctx){
ctx.fill();

return ctx;
});
/**
 * Strokes the subpaths with the current stroke style.
 */
monet.canvas.stroke = (function monet$canvas$stroke(ctx){
ctx.stroke();

return ctx;
});
/**
 * Further constrains the clipping region to the current path.
 */
monet.canvas.clip = (function monet$canvas$clip(ctx){
ctx.clip();

return ctx;
});
/**
 * Sets all pixels in the rectangle defined by starting point (x, y)
 * and size (w, h) to transparent black.
 */
monet.canvas.clear_rect = (function monet$canvas$clear_rect(ctx,p__19492){
var map__19495 = p__19492;
var map__19495__$1 = ((((!((map__19495 == null)))?((((map__19495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19495):map__19495);
var x = cljs.core.get.call(null,map__19495__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19495__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__19495__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__19495__$1,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.clearRect(x,y,w,h);

return ctx;
});
/**
 * Paints a rectangle which has a starting point at (x, y) and has a
 * w width and an h height onto the canvas, using the current stroke
 * style.
 */
monet.canvas.stroke_rect = (function monet$canvas$stroke_rect(ctx,p__19497){
var map__19500 = p__19497;
var map__19500__$1 = ((((!((map__19500 == null)))?((((map__19500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19500):map__19500);
var x = cljs.core.get.call(null,map__19500__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19500__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__19500__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__19500__$1,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.strokeRect(x,y,w,h);

return ctx;
});
/**
 * Draws a filled rectangle at (x, y) position whose size is determined
 * by width w and height h.
 */
monet.canvas.fill_rect = (function monet$canvas$fill_rect(ctx,p__19502){
var map__19505 = p__19502;
var map__19505__$1 = ((((!((map__19505 == null)))?((((map__19505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19505):map__19505);
var x = cljs.core.get.call(null,map__19505__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19505__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__19505__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__19505__$1,new cljs.core.Keyword(null,"h","h",1109658740));
ctx.fillRect(x,y,w,h);

return ctx;
});
/**
 * Draws an arc at position (x, y) with radius r, beginning at start-angle,
 * finishing at end-angle, in the direction specified.
 */
monet.canvas.arc = (function monet$canvas$arc(ctx,p__19507){
var map__19510 = p__19507;
var map__19510__$1 = ((((!((map__19510 == null)))?((((map__19510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19510):map__19510);
var x = cljs.core.get.call(null,map__19510__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19510__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.call(null,map__19510__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var start_angle = cljs.core.get.call(null,map__19510__$1,new cljs.core.Keyword(null,"start-angle","start-angle",-1763140493));
var end_angle = cljs.core.get.call(null,map__19510__$1,new cljs.core.Keyword(null,"end-angle","end-angle",1398887581));
var counter_clockwise_QMARK_ = cljs.core.get.call(null,map__19510__$1,new cljs.core.Keyword(null,"counter-clockwise?","counter-clockwise?",488698965));
ctx.arc(x,y,r,start_angle,end_angle,counter_clockwise_QMARK_);

return ctx;
});
monet.canvas.two_pi = ((2) * Math.PI);
/**
 * Draws an ellipse at position (x, y) with radius (rw, rh)
 */
monet.canvas.ellipse = (function monet$canvas$ellipse(ctx,p__19512){
var map__19515 = p__19512;
var map__19515__$1 = ((((!((map__19515 == null)))?((((map__19515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19515):map__19515);
var x = cljs.core.get.call(null,map__19515__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19515__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var rw = cljs.core.get.call(null,map__19515__$1,new cljs.core.Keyword(null,"rw","rw",1113242370));
var rh = cljs.core.get.call(null,map__19515__$1,new cljs.core.Keyword(null,"rh","rh",1692287680));
return monet.canvas.restore.call(null,monet.canvas.close_path.call(null,monet.canvas.arc.call(null,monet.canvas.begin_path.call(null,monet.canvas.scale.call(null,monet.canvas.save.call(null,ctx),(1),(rh / rw))),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"r","r",-471384190),rw,new cljs.core.Keyword(null,"start-angle","start-angle",-1763140493),(0),new cljs.core.Keyword(null,"end-angle","end-angle",1398887581),monet.canvas.two_pi,new cljs.core.Keyword(null,"counter-clockwise?","counter-clockwise?",488698965),false], null))));
});
/**
 * Draws a circle at position (x, y) with radius r
 */
monet.canvas.circle = (function monet$canvas$circle(ctx,p__19517){
var map__19520 = p__19517;
var map__19520__$1 = ((((!((map__19520 == null)))?((((map__19520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19520):map__19520);
var x = cljs.core.get.call(null,map__19520__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19520__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var r = cljs.core.get.call(null,map__19520__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return monet.canvas.close_path.call(null,monet.canvas.arc.call(null,monet.canvas.begin_path.call(null,ctx),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"start-angle","start-angle",-1763140493),(0),new cljs.core.Keyword(null,"end-angle","end-angle",1398887581),monet.canvas.two_pi,new cljs.core.Keyword(null,"counter-clockwise?","counter-clockwise?",488698965),true], null)));
});
/**
 * Paints the given text at a starting point at (x, y), using the
 * current fill style.
 */
monet.canvas.text = (function monet$canvas$text(ctx,p__19522){
var map__19525 = p__19522;
var map__19525__$1 = ((((!((map__19525 == null)))?((((map__19525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19525):map__19525);
var text__$1 = cljs.core.get.call(null,map__19525__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var x = cljs.core.get.call(null,map__19525__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19525__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
ctx.fillText(text__$1,x,y);

return ctx;
});
/**
 * Sets the font. Default value 10px sans-serif.
 */
monet.canvas.font_style = (function monet$canvas$font_style(ctx,font){
ctx.font = font;

return ctx;
});
/**
 * Color or style to use inside shapes. Default #000 (black).
 */
monet.canvas.fill_style = (function monet$canvas$fill_style(ctx,color){
ctx.fillStyle = cljs.core.name.call(null,color);

return ctx;
});
/**
 * Color or style to use for the lines around shapes. Default #000 (black).
 */
monet.canvas.stroke_style = (function monet$canvas$stroke_style(ctx,color){
ctx.strokeStyle = cljs.core.name.call(null,color);

return ctx;
});
/**
 * Sets the line width. Default 1.0
 */
monet.canvas.stroke_width = (function monet$canvas$stroke_width(ctx,w){
ctx.lineWidth = w;

return ctx;
});
/**
 * Sets the line cap. Possible values (as string or keyword):
 * butt (default), round, square
 */
monet.canvas.stroke_cap = (function monet$canvas$stroke_cap(ctx,cap){
ctx.lineCap = cljs.core.name.call(null,cap);

return ctx;
});
/**
 * Can be set, to change the line join style. Possible values (as string
 * or keyword): bevel, round, and miter. Other values are ignored.
 */
monet.canvas.stroke_join = (function monet$canvas$stroke_join(ctx,join){
ctx.lineJoin = cljs.core.name.call(null,join);

return ctx;
});
/**
 * Moves the starting point of a new subpath to the (x, y) coordinates.
 */
monet.canvas.move_to = (function monet$canvas$move_to(ctx,x,y){
ctx.moveTo(x,y);

return ctx;
});
/**
 * Connects the last point in the subpath to the x, y coordinates with a
 * straight line.
 */
monet.canvas.line_to = (function monet$canvas$line_to(ctx,x,y){
ctx.lineTo(x,y);

return ctx;
});
/**
 * Global Alpha value that is applied to shapes and images before they are
 * composited onto the canvas. Default 1.0 (opaque).
 */
monet.canvas.alpha = (function monet$canvas$alpha(ctx,a){
ctx.globalAlpha = a;

return ctx;
});
/**
 * With Global Alpha applied this sets how shapes and images are drawn
 * onto the existing bitmap. Possible values (as string or keyword):
 * source-atop, source-in, source-out, source-over (default),
 * destination-atop, destination-in, destination-out, destination-over,
 * lighter, darker, copy, xor
 */
monet.canvas.composition_operation = (function monet$canvas$composition_operation(ctx,operation){
ctx.globalCompositionOperation = cljs.core.name.call(null,operation);

return ctx;
});
/**
 * Sets the text alignment attribute. Possible values (specified
 * as a string or keyword): start (default), end, left, right or
 * center.
 */
monet.canvas.text_align = (function monet$canvas$text_align(ctx,alignment){
ctx.textAlign = cljs.core.name.call(null,alignment);

return ctx;
});
/**
 * Sets the text baseline attribute. Possible values (specified
 * as a string or keyword): top, hanging, middle, alphabetic (default),
 * ideographic, bottom
 */
monet.canvas.text_baseline = (function monet$canvas$text_baseline(ctx,alignment){
ctx.textBaseline = cljs.core.name.call(null,alignment);

return ctx;
});
/**
 * Gets the pixel value as a hash map of RGBA values
 */
monet.canvas.get_pixel = (function monet$canvas$get_pixel(ctx,x,y){
var imgd = ctx.getImageData(x,y,(1),(1)).data;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"red","red",-969428204),(imgd[(0)]),new cljs.core.Keyword(null,"green","green",-945526839),(imgd[(1)]),new cljs.core.Keyword(null,"blue","blue",-622100620),(imgd[(2)]),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(imgd[(3)])], null);
});
/**
 * Draws the image onto the canvas at the given position.
 * If a map of params is given, the number of entries is used to
 * determine the underlying call to make.
 */
monet.canvas.draw_image = (function monet$canvas$draw_image(var_args){
var args19527 = [];
var len__19428__auto___19536 = arguments.length;
var i__19429__auto___19537 = (0);
while(true){
if((i__19429__auto___19537 < len__19428__auto___19536)){
args19527.push((arguments[i__19429__auto___19537]));

var G__19538 = (i__19429__auto___19537 + (1));
i__19429__auto___19537 = G__19538;
continue;
} else {
}
break;
}

var G__19529 = args19527.length;
switch (G__19529) {
case 4:
return monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19527.length)].join('')));

}
});

monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$4 = (function (ctx,img,x,y){
ctx.drawImage(img,x,y);

return ctx;
});

monet.canvas.draw_image.cljs$core$IFn$_invoke$arity$3 = (function (ctx,img,p__19530){
var map__19531 = p__19530;
var map__19531__$1 = ((((!((map__19531 == null)))?((((map__19531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19531):map__19531);
var params = map__19531__$1;
var sh = cljs.core.get.call(null,map__19531__$1,new cljs.core.Keyword(null,"sh","sh",-682444007));
var sw = cljs.core.get.call(null,map__19531__$1,new cljs.core.Keyword(null,"sw","sw",833113913));
var x = cljs.core.get.call(null,map__19531__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19531__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var dh = cljs.core.get.call(null,map__19531__$1,new cljs.core.Keyword(null,"dh","dh",528137731));
var dx = cljs.core.get.call(null,map__19531__$1,new cljs.core.Keyword(null,"dx","dx",-381796732));
var w = cljs.core.get.call(null,map__19531__$1,new cljs.core.Keyword(null,"w","w",354169001));
var sy = cljs.core.get.call(null,map__19531__$1,new cljs.core.Keyword(null,"sy","sy",227523849));
var dy = cljs.core.get.call(null,map__19531__$1,new cljs.core.Keyword(null,"dy","dy",1719547243));
var h = cljs.core.get.call(null,map__19531__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var dw = cljs.core.get.call(null,map__19531__$1,new cljs.core.Keyword(null,"dw","dw",-821060841));
var sx = cljs.core.get.call(null,map__19531__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));
var pred__19533_19540 = cljs.core._EQ_;
var expr__19534_19541 = cljs.core.count.call(null,params);
if(cljs.core.truth_(pred__19533_19540.call(null,(2),expr__19534_19541))){
ctx.drawImage(img,x,y);
} else {
if(cljs.core.truth_(pred__19533_19540.call(null,(4),expr__19534_19541))){
ctx.drawImage(img,x,y,w,h);
} else {
if(cljs.core.truth_(pred__19533_19540.call(null,(8),expr__19534_19541))){
ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__19534_19541)].join('')));
}
}
}

return ctx;
});

monet.canvas.draw_image.cljs$lang$maxFixedArity = 4;
monet.canvas.quadratic_curve_to = (function monet$canvas$quadratic_curve_to(var_args){
var args19542 = [];
var len__19428__auto___19548 = arguments.length;
var i__19429__auto___19549 = (0);
while(true){
if((i__19429__auto___19549 < len__19428__auto___19548)){
args19542.push((arguments[i__19429__auto___19549]));

var G__19550 = (i__19429__auto___19549 + (1));
i__19429__auto___19549 = G__19550;
continue;
} else {
}
break;
}

var G__19544 = args19542.length;
switch (G__19544) {
case 5:
return monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 2:
return monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19542.length)].join('')));

}
});

monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$5 = (function (ctx,cpx,cpy,x,y){
ctx.quadraticCurveTo(cpx,cpy,x,y);

return ctx;
});

monet.canvas.quadratic_curve_to.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__19545){
var map__19546 = p__19545;
var map__19546__$1 = ((((!((map__19546 == null)))?((((map__19546.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19546.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19546):map__19546);
var cpx = cljs.core.get.call(null,map__19546__$1,new cljs.core.Keyword(null,"cpx","cpx",296463436));
var cpy = cljs.core.get.call(null,map__19546__$1,new cljs.core.Keyword(null,"cpy","cpy",-1203422450));
var x = cljs.core.get.call(null,map__19546__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19546__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
ctx.quadraticCurveTo(cpx,cpy,x,y);

return ctx;
});

monet.canvas.quadratic_curve_to.cljs$lang$maxFixedArity = 5;
monet.canvas.bezier_curve_to = (function monet$canvas$bezier_curve_to(var_args){
var args19552 = [];
var len__19428__auto___19558 = arguments.length;
var i__19429__auto___19559 = (0);
while(true){
if((i__19429__auto___19559 < len__19428__auto___19558)){
args19552.push((arguments[i__19429__auto___19559]));

var G__19560 = (i__19429__auto___19559 + (1));
i__19429__auto___19559 = G__19560;
continue;
} else {
}
break;
}

var G__19554 = args19552.length;
switch (G__19554) {
case 7:
return monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 2:
return monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19552.length)].join('')));

}
});

monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$7 = (function (ctx,cp1x,cp1y,cp2x,cp2y,x,y){
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);

return ctx;
});

monet.canvas.bezier_curve_to.cljs$core$IFn$_invoke$arity$2 = (function (ctx,p__19555){
var map__19556 = p__19555;
var map__19556__$1 = ((((!((map__19556 == null)))?((((map__19556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19556):map__19556);
var cp1x = cljs.core.get.call(null,map__19556__$1,new cljs.core.Keyword(null,"cp1x","cp1x",465245137));
var cp1y = cljs.core.get.call(null,map__19556__$1,new cljs.core.Keyword(null,"cp1y","cp1y",628283543));
var cp2x = cljs.core.get.call(null,map__19556__$1,new cljs.core.Keyword(null,"cp2x","cp2x",-1682644749));
var cp2y = cljs.core.get.call(null,map__19556__$1,new cljs.core.Keyword(null,"cp2y","cp2y",903335801));
var x = cljs.core.get.call(null,map__19556__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19556__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
ctx.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);

return ctx;
});

monet.canvas.bezier_curve_to.cljs$lang$maxFixedArity = 7;
monet.canvas.rounded_rect = (function monet$canvas$rounded_rect(ctx,p__19562){
var map__19565 = p__19562;
var map__19565__$1 = ((((!((map__19565 == null)))?((((map__19565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19565):map__19565);
var x = cljs.core.get.call(null,map__19565__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__19565__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var w = cljs.core.get.call(null,map__19565__$1,new cljs.core.Keyword(null,"w","w",354169001));
var h = cljs.core.get.call(null,map__19565__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var r = cljs.core.get.call(null,map__19565__$1,new cljs.core.Keyword(null,"r","r",-471384190));

monet.canvas.stroke.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.quadratic_curve_to.call(null,monet.canvas.line_to.call(null,monet.canvas.move_to.call(null,monet.canvas.begin_path.call(null,ctx),x,(y + r)),x,((y + h) - r)),x,(y + h),(x + r),(y + h)),((x + w) - r),(y + h)),(x + w),(y + h),(x + w),((y + h) - r)),(x + w),(y + r)),(x + w),y,((x + w) - r),y),(x + r),y),x,y,x,(y + r)));

return ctx;
});
monet.canvas.add_entity = (function monet$canvas$add_entity(mc,k,ent){
return (new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k] = ent);
});
monet.canvas.remove_entity = (function monet$canvas$remove_entity(mc,k){
return delete new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k];
});
monet.canvas.get_entity = (function monet$canvas$get_entity(mc,k){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k]));
});
monet.canvas.update_entity = (function monet$canvas$update_entity(var_args){
var args__19435__auto__ = [];
var len__19428__auto___19571 = arguments.length;
var i__19429__auto___19572 = (0);
while(true){
if((i__19429__auto___19572 < len__19428__auto___19571)){
args__19435__auto__.push((arguments[i__19429__auto___19572]));

var G__19573 = (i__19429__auto___19572 + (1));
i__19429__auto___19572 = G__19573;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((3) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((3)),(0))):null);
return monet.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19436__auto__);
});

monet.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic = (function (mc,k,func,extra){
var cur = (new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k]);
var res = cljs.core.apply.call(null,func,cur,extra);
return (new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc)[k] = res);
});

monet.canvas.update_entity.cljs$lang$maxFixedArity = (3);

monet.canvas.update_entity.cljs$lang$applyTo = (function (seq19567){
var G__19568 = cljs.core.first.call(null,seq19567);
var seq19567__$1 = cljs.core.next.call(null,seq19567);
var G__19569 = cljs.core.first.call(null,seq19567__$1);
var seq19567__$2 = cljs.core.next.call(null,seq19567__$1);
var G__19570 = cljs.core.first.call(null,seq19567__$2);
var seq19567__$3 = cljs.core.next.call(null,seq19567__$2);
return monet.canvas.update_entity.cljs$core$IFn$_invoke$arity$variadic(G__19568,G__19569,G__19570,seq19567__$3);
});
monet.canvas.clear_BANG_ = (function monet$canvas$clear_BANG_(mc){
var ks = cljs.core.js_keys.call(null,new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(mc));
var seq__19578 = cljs.core.seq.call(null,ks);
var chunk__19579 = null;
var count__19580 = (0);
var i__19581 = (0);
while(true){
if((i__19581 < count__19580)){
var k = cljs.core._nth.call(null,chunk__19579,i__19581);
monet.canvas.remove_entity.call(null,mc,k);

var G__19582 = seq__19578;
var G__19583 = chunk__19579;
var G__19584 = count__19580;
var G__19585 = (i__19581 + (1));
seq__19578 = G__19582;
chunk__19579 = G__19583;
count__19580 = G__19584;
i__19581 = G__19585;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19578);
if(temp__4657__auto__){
var seq__19578__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19578__$1)){
var c__19173__auto__ = cljs.core.chunk_first.call(null,seq__19578__$1);
var G__19586 = cljs.core.chunk_rest.call(null,seq__19578__$1);
var G__19587 = c__19173__auto__;
var G__19588 = cljs.core.count.call(null,c__19173__auto__);
var G__19589 = (0);
seq__19578 = G__19586;
chunk__19579 = G__19587;
count__19580 = G__19588;
i__19581 = G__19589;
continue;
} else {
var k = cljs.core.first.call(null,seq__19578__$1);
monet.canvas.remove_entity.call(null,mc,k);

var G__19590 = cljs.core.next.call(null,seq__19578__$1);
var G__19591 = null;
var G__19592 = (0);
var G__19593 = (0);
seq__19578 = G__19590;
chunk__19579 = G__19591;
count__19580 = G__19592;
i__19581 = G__19593;
continue;
}
} else {
return null;
}
}
break;
}
});
monet.canvas.entity = (function monet$canvas$entity(v,update,draw){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"draw","draw",1358331674),draw,new cljs.core.Keyword(null,"update","update",1045576396),update], null);
});
monet.canvas.attr = (function monet$canvas$attr(e,a){
return e.getAttribute(a);
});
monet.canvas.draw_loop = (function monet$canvas$draw_loop(p__19594){
var map__19602 = p__19594;
var map__19602__$1 = ((((!((map__19602 == null)))?((((map__19602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19602):map__19602);
var mc = map__19602__$1;
var canvas = cljs.core.get.call(null,map__19602__$1,new cljs.core.Keyword(null,"canvas","canvas",-1798817489));
var updating_QMARK_ = cljs.core.get.call(null,map__19602__$1,new cljs.core.Keyword(null,"updating?","updating?",1586585646));
var ctx = cljs.core.get.call(null,map__19602__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var active = cljs.core.get.call(null,map__19602__$1,new cljs.core.Keyword(null,"active","active",1895962068));
var entities = cljs.core.get.call(null,map__19602__$1,new cljs.core.Keyword(null,"entities","entities",1940967403));
var last_frame_time = cljs.core.get.call(null,map__19602__$1,new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617));
monet.canvas.clear_rect.call(null,ctx,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"w","w",354169001),monet.canvas.attr.call(null,canvas,"width"),new cljs.core.Keyword(null,"h","h",1109658740),monet.canvas.attr.call(null,canvas,"height")], null));

if(cljs.core.truth_(cljs.core.deref.call(null,active))){
var ks_19609 = cljs.core.js_keys.call(null,entities);
var cnt_19610 = ks_19609.length;
var now_19611 = Date.now();
var dt_19612 = (now_19611 - cljs.core.deref.call(null,last_frame_time));
cljs.core.reset_BANG_.call(null,last_frame_time,now_19611);

var i_19613 = (0);
while(true){
if((i_19613 < cnt_19610)){
var k_19614 = (ks_19609[i_19613]);
var map__19604_19615 = (entities[k_19614]);
var map__19604_19616__$1 = ((((!((map__19604_19615 == null)))?((((map__19604_19615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19604_19615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19604_19615):map__19604_19615);
var ent_19617 = map__19604_19616__$1;
var draw_19618 = cljs.core.get.call(null,map__19604_19616__$1,new cljs.core.Keyword(null,"draw","draw",1358331674));
var update_19619 = cljs.core.get.call(null,map__19604_19616__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var value_19620 = cljs.core.get.call(null,map__19604_19616__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__18358__auto__ = update_19619;
if(cljs.core.truth_(and__18358__auto__)){
return cljs.core.deref.call(null,updating_QMARK_);
} else {
return and__18358__auto__;
}
})())){
var updated_19621 = (function (){var or__18370__auto__ = (function (){try{return update_19619.call(null,value_19620,dt_19612);
}catch (e19607){if((e19607 instanceof Error)){
var e = e19607;
console.log(e);

return value_19620;
} else {
throw e19607;

}
}})();
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return value_19620;
}
})();
if(cljs.core.truth_((entities[k_19614]))){
(entities[k_19614] = cljs.core.assoc.call(null,ent_19617,new cljs.core.Keyword(null,"value","value",305978217),updated_19621));
} else {
}
} else {
}

if(cljs.core.truth_(draw_19618)){
try{draw_19618.call(null,ctx,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1((entities[k_19614])));
}catch (e19608){if((e19608 instanceof Error)){
var e_19622 = e19608;
console.log(e_19622);
} else {
throw e19608;

}
}} else {
}

var G__19623 = (i_19613 + (1));
i_19613 = G__19623;
continue;
} else {
}
break;
}

return monet.core.animation_frame.call(null,((function (map__19602,map__19602__$1,mc,canvas,updating_QMARK_,ctx,active,entities,last_frame_time){
return (function (){
return monet$canvas$draw_loop.call(null,mc);
});})(map__19602,map__19602__$1,mc,canvas,updating_QMARK_,ctx,active,entities,last_frame_time))
);
} else {
return null;
}
});
monet.canvas.monet_canvas = (function monet$canvas$monet_canvas(elem,context_type){
var ct = (function (){var or__18370__auto__ = context_type;
if(cljs.core.truth_(or__18370__auto__)){
return or__18370__auto__;
} else {
return "2d";
}
})();
var ctx = monet.canvas.get_context.call(null,elem,ct);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),elem,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617),cljs.core.atom.call(null,Date.now()),new cljs.core.Keyword(null,"entities","entities",1940967403),{},new cljs.core.Keyword(null,"updating?","updating?",1586585646),cljs.core.atom.call(null,true),new cljs.core.Keyword(null,"active","active",1895962068),cljs.core.atom.call(null,true)], null);
});
monet.canvas.init = (function monet$canvas$init(var_args){
var args__19435__auto__ = [];
var len__19428__auto___19632 = arguments.length;
var i__19429__auto___19633 = (0);
while(true){
if((i__19429__auto___19633 < len__19428__auto___19632)){
args__19435__auto__.push((arguments[i__19429__auto___19633]));

var G__19634 = (i__19429__auto___19633 + (1));
i__19429__auto___19633 = G__19634;
continue;
} else {
}
break;
}

var argseq__19436__auto__ = ((((1) < args__19435__auto__.length))?(new cljs.core.IndexedSeq(args__19435__auto__.slice((1)),(0))):null);
return monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19436__auto__);
});

monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic = (function (canvas,p__19630){
var vec__19631 = p__19630;
var context_type = cljs.core.nth.call(null,vec__19631,(0),null);
var mc = monet.canvas.monet_canvas.call(null,canvas,context_type);
monet.canvas.draw_loop.call(null,mc);

return mc;
});

monet.canvas.init.cljs$lang$maxFixedArity = (1);

monet.canvas.init.cljs$lang$applyTo = (function (seq19628){
var G__19629 = cljs.core.first.call(null,seq19628);
var seq19628__$1 = cljs.core.next.call(null,seq19628);
return monet.canvas.init.cljs$core$IFn$_invoke$arity$variadic(G__19629,seq19628__$1);
});
monet.canvas.stop = (function monet$canvas$stop(mc){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.stop_updating = (function monet$canvas$stop_updating(mc){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"updating?","updating?",1586585646).cljs$core$IFn$_invoke$arity$1(mc),false);
});
monet.canvas.start_updating = (function monet$canvas$start_updating(mc){
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"updating?","updating?",1586585646).cljs$core$IFn$_invoke$arity$1(mc),true);
});
monet.canvas.restart = (function monet$canvas$restart(mc){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"active","active",1895962068).cljs$core$IFn$_invoke$arity$1(mc),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"last-frame-time","last-frame-time",974078617).cljs$core$IFn$_invoke$arity$1(mc),Date.now());

return monet.canvas.draw_loop.call(null,mc);
});

//# sourceMappingURL=canvas.js.map?rel=1460649961430