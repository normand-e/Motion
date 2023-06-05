import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);
//MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const tl = gsap.timeline({id:"mainTL"});

//arranging
tl.set("#bkgd", {alpha:0})
tl.set("#secOrange", {alpha:0, x:"+=105", y:"-=26"})
tl.set("#gray", {alpha:0, x:"+=199", y:"-=118"})
tl.set("#mainOrange", {alpha:0, x:"+=199", y:"-=26"})
tl.set("#MARK-W-TYPE", {alpha:0})
tl.set("#black", {x:"+=105", y:"-=118"})


//start
tl.from("#black", {duration:1.25, drawSVG:"100%", transformOrigin:"center center", scale:20, ease:"back.out(.5)"}, "one")
tl.to("#mainOrange", {duration:.1, drawSVG:"100%", alpha:1}, "two")
tl.to("#black", {duration:.75, drawSVG:"100%", scaleX: 0, scaleY:1.35,transformOrigin: "100% center", ease: "sine.inOut", yoyo:true}, "two" )
tl.to("#gray", {duration:.1, drawSVG:"100%", alpha:1}, "three")
tl.to("#mainOrange", {duration:.75, drawSVG:"100%", scaleX: 0, scaleY:1.35, transformOrigin: "100% center", ease: "sine.inOut", yoyo:true}, "three" )


;


GSDevTools.create({animation: tl});
