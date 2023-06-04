import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);
//MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const tl = gsap.timeline({id:"mainTL"});

tl.set("#bkgd", {alpha:0})
tl.from("#black", {duration:1, scale:20}, "one")


;


GSDevTools.create({animation: tl});
