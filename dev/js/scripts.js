import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);


const mainTL = gsap.timeline({id:"mainTL"});


mainTL.to("#bursty-thing", {duration: 3, drawSVG:"100%", transformOrigin:"50% 50%", rotate:400, x:280, y:190}, "start")
mainTL.to("#heart", {duration: 2.5, drawSVG:"100%", transformOrigin:"50% 100%", x:-165, y:-210}, "start")
mainTL.to("#heart", {duration:2.5, scale:.75}, "start")
mainTL.to("#heart", {duration:.25, scale:.9})
mainTL.to("#heart", {duration:.25, scale:.75})


;


GSDevTools.create({animation: mainTL});
