import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);
//MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const mainTL = gsap.timeline({id:"mainTL"});


mainTL.set("#trulia-text", {x:-25, y:-300, autoAlpha:0})
mainTL.set("#apartment-dark", {y:-285, x:2})
//mainTL.set("#myClip", {x:407, y:750, fill:"#hf4ff9"})
//mainTL.set(".roadClip", {clipPath:"#myClip"})
mainTL.set("#long-road", {alpha:1, x:407, y:780, clipPath:"#myClip"})


mainTL.to("#bursty-thing", {duration: 2.75, transformOrigin:"50% 50%", rotate:360, x:280, y:190, ease: "power1.out)"}, "start")
mainTL.to("#heart", {duration: 2, transformOrigin:"50% 100%", x:-165, y:-210, ease: "power1.out", scale:.75}, "start")
mainTL.to("#flower", {duration: 2.5,transformOrigin:"50% 50%", rotate:360, scale:.2, y:190,  ease: "power1.out"}, "start")
mainTL.to("#mountains", {duration: 2.5, transformOrigin:"100% 50%", scale:.4, x:200,  ease: "power1.out"}, "start")
mainTL.to("#apartment", {duration:1, scaleX: 0,transformOrigin: "100% center", ease: "sine.inOut", yoyo:true}, "start")
mainTL.to("#apts", {duration: 2, x:280, y:-120, scale:.25, ease: "power1.out"}, "start")
mainTL.to("#Union_2", {duration: 2.75, transformOrigin:"50% 100%", x:-210, y:"-=30", scale:0,  ease: "power1.out"}, "start") //outer tree
mainTL.to("#Union", {duration: 2.2, transformOrigin:"50% 100%", x:-210, y:"-=30", scale:0,  ease: "power1.out"}, "start+=.85") //inner tree
mainTL.to("#road", {duration:2, y:"-=150", x:"+=30", scale:.3}, "start")
//mainTL.to("long-road", {duration:2, clipPath:"url(#myClip)"}, "start")
//mainTL.to("#slide-right", {duration:2.5, x:-205, y:260, scale:.25, ease: "power1.out"}, "start")
mainTL.to("#slide", {duration:2, skewX:60, x:"-=200", y:"+=210", scale:.25}, "start")
mainTL.to("#ladder", {duration:2, x:"-=270", y:"+=240", scale:.25}, "start")
//mainTL.to("#slide", {duration:.5, scaleX: 0,transformOrigin: "100% center", ease: "sine.inOut"}, "start")
//mainTL.to("#slide", {duration:.5, x:-50, scaleX:-1,transformOrigin: "top right", ease: "sine.inOut"}, "start+=.5")
//mainTL.to("#slide-right", {duration: .5, drawSVG:"100%", morphSVG:"#bursty-thing"}, "start")


//mainTL.to("#apartment-dark", {delay: 1, duration:.5, drawSVG:"100%", morphSVG: "#bursty-thing"}, "first")
//mainTL.to("#bursty-thing", {duration: .5, transformOrigin:"50% 50%", rotate:"+=30", ease: "power1.out"}, "second")

mainTL.to("#trulia-text", {duration:.5, y:-400, autoAlpha:1,  ease: "power1.out"}, "first-=2.25")
mainTL.to("#heart", {duration:.5, scale:.75, repeat:2, ease:"power3.out"}, "second")


;


GSDevTools.create({animation: mainTL});
