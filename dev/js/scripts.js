import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);
//MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const mainTL = gsap.timeline({id:"mainTL"});

mainTL.set("#slide-middle", {autoAlpha:0})
mainTL.set("#slide-left", {autoAlpha:0})
mainTL.set("#trulia-text", {x:-25, y:-300, autoAlpha:0})
mainTL.set("#apartment-dark", {y:-285, x:2})
mainTL.set("#long-road", {alpha:0})


mainTL.to("#bursty-thing", {duration: 3.5, drawSVG:"100%", transformOrigin:"50% 50%", rotate:360, x:280, y:190, ease: "power3.out"}, "start")
mainTL.to("#heart", {duration: 2.5, drawSVG:"100%", transformOrigin:"50% 100%", x:-165, y:-210, ease: "power1.out"}, "start")
mainTL.to("#heart", {duration:2.5, scale:.75, ease: "power3.out"}, "start")
mainTL.to("#flower", {duration: 2.5, drawSVG:"100%", transformOrigin:"50% 50%", rotate:360, scale:.2, y:190,  ease: "power1.out"}, "start")
mainTL.to("#mountains", {duration: 2.5, drawSVG:"100%", transformOrigin:"100% 50%", scale:.4, x:200,  ease: "power1.out"}, "start")
mainTL.to("#apartment", {duration:1, drawSVG:"100%", scaleX: 0,transformOrigin: "100% center", ease: "sine.inOut", yoyo:true}, "start")
mainTL.to("#apts", {duration: 2, x:280, y:-120, scale:.25,  ease: "power1.out"}, "start")
mainTL.to("#Union_2", {duration: 2.75, drawSVG:"100%",transformOrigin:"50% 100%", x:-210, scale:.1,  ease: "power1.out"}, "start") //outer tree
mainTL.to("#Union", {duration: 2.2, drawSVG:"100%",transformOrigin:"50% 100%", x:-210, scale:.1,  ease: "power1.out"}, "start+=.85") //inner tree
//mainTL.to("#slide-right", {duration:2.5, x:-205, y:260, scale:.25, ease: "power1.out"}, "start")
mainTL.to("#slide", {duration:2, skewX:60, x:"-=200", y:"+=210", scale:.25}, "start")
mainTL.to("#ladder", {duration:2, x:"-=270", y:"+=240", scale:.25}, "start")
//mainTL.to("#slide", {duration:.5, scaleX: 0,transformOrigin: "100% center", ease: "sine.inOut"}, "start")
//mainTL.to("#slide", {duration:.5, x:-50, scaleX:-1,transformOrigin: "top right", ease: "sine.inOut"}, "start+=.5")
//mainTL.to("#slide-right", {duration: .5, drawSVG:"100%", morphSVG:"#bursty-thing"}, "start")


//mainTL.to("#apartment-dark", {delay: 1, duration:.5, drawSVG:"100%", morphSVG: "#bursty-thing"}, "first")
mainTL.to("#bursty-thing", {duration: .25, drawSVG:"100%", transformOrigin:"50% 50%", rotate:10}, "second")
mainTL.to("#heart", {duration:.25, drawSVG:"100%", scale:.9}, "second")
mainTL.to("#heart", {duration:.25, drawSVG:"100%", scale:.75}, "second")
mainTL.to("#trulia-text", {duration:.5, drawSVG:"100%",y:-400, autoAlpha:1,  ease: "power1.out"}, "second")


;


GSDevTools.create({animation: mainTL});
