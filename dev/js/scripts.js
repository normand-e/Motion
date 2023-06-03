import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);
MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const mainTL = gsap.timeline({id:"mainTL"});


mainTL.to("#bursty-thing", {duration: 3, drawSVG:"100%", transformOrigin:"50% 50%", rotate:360, x:280, y:190}, "start")
mainTL.to("#heart", {duration: 2.5, drawSVG:"100%", transformOrigin:"50% 100%", x:-165, y:-210}, "start")
mainTL.to("#heart", {duration:2.5, scale:.75}, "start")
mainTL.to("#flower", {duration: 2.5, drawSVG:"100%", transformOrigin:"50% 50%", rotate:360, scale:.2, y:190}, "start")
mainTL.to("#mountains", {duration: 2.5, drawSVG:"100%", transformOrigin:"100% 50%", scale:.4, x:200}, "start")
mainTL.to("#slide-right", {duration: 1, morphSVG:"#slide-middle"}, "start");
mainTL.to("#heart", {duration:.25, scale:.9})
mainTL.to("#heart", {duration:.25, scale:.75})


;


GSDevTools.create({animation: mainTL});
