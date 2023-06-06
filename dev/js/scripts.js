import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, GSDevTools, MorphSVGPlugin);
MorphSVGPlugin.convertToPath("circle, rect, ellipse, line, polygon, polyline");

const tl = gsap.timeline({id:"mainTL"});

//setting up
tl.set("#bkgd", {alpha:0})
tl.set("#asterisk", {alpha:0})
tl.set("#mark", {alpha:0, transformOrigin:"center center", scale:.8, x:"-=15", y:"-=70"})
//tl.set("#EASTERN", {alpha:0})
//tl.set("#STATE", {alpha:0})
//tl.set("#PEN", {alpha:0})
tl.set("#rightBar", {transformOrigin:"center 100%", y:"+=765"})
tl.set("#leftBar", {transformOrigin:"center 100%", y:"+=765"})
tl.set("#centerBar", {transformOrigin:"center 100%", y:"-=765"})
tl.set("#horizontalBar", {transformOrigin:"0% center", x:"-719"})
tl.set("#EASTERN", {transformOrigin:"0% center", x:"+=565", y:"-=60"})
tl.set("#STATE", {transformOrigin:"0% center", x:"+=565", y:"-=60"})
tl.set("#PEN", {transformOrigin:"0% center", x:"+=565", y:"-=60"})



//tl.to(".vertBars", {stagger:.5, ease: "power4.out", y:"-=900"}, "first") //tried stagger didn't work

//doing -- putting bars on canvas --
tl.to("#rightBar", {duration:1, ease: "power4.out", y:"-=880"}, "first")
tl.to("#centerBar", {duration:1, ease: "power4.out", y:"+=650"}, "first+=.25")
tl.to("#leftBar", {duration:1, ease: "power4.out", y:"-=880"}, "first+=.50")
tl.to("#horizontalBar", {duration:1, ease: "power4.out", x:"+=700"}, "first+=.75")

//rotating
tl.to("#rightBar", {duration:1.5, transformOrigin:"center center", rotate:495, scale:.2, ease:"back.out:(1.7)", x:"-=160"}, "second")
tl.to("#centerBar", {duration:1.5, transformOrigin:"center center", rotate:540, scale:.2, ease:"back.out:(1.7)"}, "second")
tl.to("#leftBar", {duration:1.5, transformOrigin:"center center", rotate:585, scale:.2, ease:"back.out:(1.7)", x:"+=160"}, "second")
tl.to("#horizontalBar", {duration:1.5, transformOrigin:"center center", rotate:450, scale:.2, ease:"back.out:(1.7)", x:"+=10", y:"-=135"}, "second")


tl.to("#EASTERN", {duration:1, ease:"back.out:(1.7)", x:"-=580"}, "third")
tl.to("#STATE", {duration:1, ease:"back.out:(1.7)", x:"-=580"}, "third")
tl.to("#PEN", {duration:1, ease:"back.out:(1.7)", x:"-=580"}, "third")
tl.to("#rightBar", {duration:1, ease:"back.out:(1.7)", rotate:325, x:"-=15", y:"-=15"}, "forth")
tl.to("#centerBar", {duration:1, ease:"back.out:(1.7)", rotate:360, x:"-=15", y:"-=15"}, "forth")
tl.to("#leftBar", {duration:1, ease:"back.out:(1.7)", rotate:405, x:"-=15", y:"-=15"}, "forth")
tl.to("#horizontalBar", {duration:1, ease:"back.out:(1.7)", rotate:90, x:"-=15", y:"-=15"}, "forth")

tl.to("#mark", {duration:.25, scale:1, alpha:1, ease:"back.out:(1.7)"}, "fifth")
tl.to("#rightBar", {duration:.1, alpha:0}, "fifth")
tl.to("#centerBar", {duration:.1, alpha:0}, "fifth")
tl.to("#leftBar", {duration:.1, alpha:0}, "fifth")
tl.to("#horizontalBar", {duration:.1, alpha:0}, "fifth")




//tl.to("#rightBar", {duration: 1, morphSVG:"#mark", scale:2, transformOrigin:"center center"}, "fifth")


/* tl.to("#rightBar", {duration:1, ease:"back.out:(1.7)", rotate:-360}, "third-=.25")
tl.to("#centerBar", {duration:1, ease:"back.out:(1.7)", rotate:-360}, "third-=.25")
tl.to("#leftBar", {duration:1, ease:"back.out:(1.7)", rotate:-360}, "third-=.25")
tl.to("#horizontalBar", {duration:1, ease:"back.out:(1.7)", rotate:-360}, "third-=.25") */




;


GSDevTools.create({animation: tl});
