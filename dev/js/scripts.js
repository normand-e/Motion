import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);
//MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const tl = gsap.timeline({id:"mainTL"});

//setting up
tl.set("#bkgd", {alpha:0})
tl.set("#asterisk", {alpha:0})
tl.set("#mark", {alpha:0})
tl.set("#EASTERN", {alpha:0})
tl.set("#STATE", {alpha:0})
tl.set("#PEN", {alpha:0})
tl.set("#rightBar", {transformOrigin:"center 100%", y:"+=765"})
tl.set("#leftBar", {transformOrigin:"center 100%", y:"+=765"})
tl.set("#centerBar", {transformOrigin:"center 100%", y:"-=765"})
tl.set("#horizontalBar", {transformOrigin:"0% center", x:"-719"})



//tl.to(".vertBars", {stagger:.5, ease: "power4.out", y:"-=900"}, "first") //tried stagger didn't work

//doing -- putting bars on canvas --
tl.to("#rightBar", {duration:1, ease: "power4.out", y:"-=880"}, "first")
tl.to("#centerBar", {duration:1, ease: "power4.out", y:"+=650"}, "first+=.25")
tl.to("#leftBar", {duration:1, ease: "power4.out", y:"-=880"}, "first+=.50")
tl.to("#horizontalBar", {duration:1, ease: "power4.out", x:"+=700"}, "first+=.75")

//rotating
tl.to("#rightBar", {duration:1, transformOrigin:"center center", rotate:495, scale:.2, ease:"back.out:(1.7)", x:"-=160"}, "second")
tl.to("#centerBar", {duration:1, transformOrigin:"center center", rotate:540, scale:.2, ease:"back.out:(1.7)"}, "second")
tl.to("#leftBar", {duration:1, transformOrigin:"center center", rotate:585, scale:.2, ease:"back.out:(1.7)", x:"+=160"}, "second")
tl.to("#horizontalBar", {duration:1, transformOrigin:"center center", rotate:450, scale:.2, ease:"back.out:(1.7)", x:"+=10", y:"-=135"}, "second")




;


GSDevTools.create({animation: tl});
