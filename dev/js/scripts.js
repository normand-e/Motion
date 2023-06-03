import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);


const mainTL = gsap.timeline({id:"mainTL"});


mainTL.from("#bursty-thing", {duration: 1, drawSVG:"100%"})


;


//GSDevTools.create();
