import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);


const mainTL = gsap.timeline({id:"mainTL"});
//drawSVG:"100%" == drawSVG:"true" == drawSVG:"0% 100%"
mainTL.from("#rect", {duration:1, drawSVG:"50% 50%"})
.from("#rect", {duration:1, fill:"#fff"},"-=0.75")
.to("#rect", {duration:1, morphSVG:"#star", fill:"#ff0000" })
.to("#rect", {duration:1, morphSVG:"#circ", fill:"#0060ef" })
.from(["#l1","#l2"], {duration:1, drawSVG:"0%", ease:"back.out"},0)


;




//GSDevTools.create();
