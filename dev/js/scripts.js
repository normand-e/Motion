import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);
MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const mainTL = gsap.timeline({id:"mainTL"});

mainTL.set("#slide-middle", {autoAlpha:0})
mainTL.set("#slide-left", {autoAlpha:0})
mainTL.set("#trulia-text", {autoAlpha:0})
mainTL.set("#apartment-dark", {autoAlpha:0})
mainTL.to("#bursty-thing", {duration: 3.5, drawSVG:"100%", transformOrigin:"50% 50%", rotate:360, x:280, y:190}, "start")
mainTL.to("#heart", {duration: 2.5, drawSVG:"100%", transformOrigin:"50% 100%", x:-165, y:-210}, "start")
mainTL.to("#heart", {duration:2.5, scale:.75}, "start")
mainTL.to("#flower", {duration: 2.5, drawSVG:"100%", transformOrigin:"50% 50%", rotate:360, scale:.2, y:190}, "start")
mainTL.to("#mountains", {duration: 2.5, drawSVG:"100%", transformOrigin:"100% 50%", scale:.4, x:200}, "start")
mainTL.to("#apartments", {duration:1, ease:'linear', rotationY:180}, "start")
//mainTL.to("#slide-right", {drawSVG:"100%", morphSVG: "#slide-middle", duration: 1}, "start")
//mainTL.to("#trees", {duration: 2.5, drawSVG:"100%", transformOrigin:"0% 50%", x:-200}, "start")
mainTL.to("#Union_2", {duration: 2.75, drawSVG:"100%",transformOrigin:"50% 100%", x:-210, scale:.1}, "start")
mainTL.to("#Union", {duration: 2.2, drawSVG:"100%",transformOrigin:"50% 100%", x:-210, scale:.1}, "start+=.85")
//mainTL.to("#bursty-thing", {duration: .25, drawSVG:"100%", transformOrigin:"50% 50%", rotate:50})
mainTL.to("#heart", {duration:.25, drawSVG:"100%", scale:.9})
mainTL.to("#heart", {duration:.25, drawSVG:"100%", scale:.75})


;


GSDevTools.create({animation: mainTL});
