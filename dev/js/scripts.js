import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);
//MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const mainTL = gsap.timeline({id:"mainTL"});

mainTL.set("#bkgd", {alpha:0})


;


GSDevTools.create({animation: mainTL});
