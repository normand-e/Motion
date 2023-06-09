import { gsap } from "gsap";

import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin( GSDevTools);






const tl = gsap.timeline({id:"mainTL"});

//------------setting up------------
tl.set("#bkgd", {alpha:0})
tl.set("#asterisk", {alpha:0})
tl.set("#mark", {alpha:0, transformOrigin:"center center", scale:.6, x:"-=15", y:"-=20"})
tl.set("#justMark", {alpha:0, transformOrigin:"center center",  x:295, y:192, scale:1.1}) //x:245, y:90 end position
tl.set("#EASTERN", {alpha:0, transformOrigin:"0% center", x:"+=565", y:"-=35"})
tl.set("#STATE", {alpha:0, transformOrigin:"0% center", x:"+=565", y:"-=35"})
tl.set("#PEN", {alpha:0, transformOrigin:"0% center", x:"+=565", y:"-=35"})
tl.set("#rightBar", {transformOrigin:"center 100%", y:"+=765"})
tl.set("#leftBar", {transformOrigin:"center 100%", y:"+=765"})
tl.set("#centerBar", {transformOrigin:"center 100%", y:"-=765"})
tl.set("#horizontalBar", {transformOrigin:"0% center", x:"-719"})


//doing -- putting bars on canvas --
tl.to("#rightBar", {duration:1, ease: "power4.out", y:"-=880"}, "first")
tl.to("#centerBar", {duration:1, ease: "power4.out", y:"+=650"}, "first+=.25")
tl.to("#leftBar", {duration:1, ease: "power4.out", y:"-=880"}, "first+=.50")
tl.to("#horizontalBar", {duration:1, ease: "power4.out", x:"+=700"}, "first+=.75")

//rotating
tl.to("#rightBar", {duration:1.5, transformOrigin:"center center", rotate:450,scale:.05, ease:"back.out:(1.7)", x:"-=160", y:"+=50"}, "second")//rotate:495,
tl.to("#centerBar", {duration:1.5, transformOrigin:"center center",  rotate:585,scale:.05, ease:"back.out:(1.7)", y:"+=50"}, "second")//rotate:540,
tl.to("#leftBar", {duration:1.5, transformOrigin:"center center", rotate:630, scale:.05, ease:"back.out:(1.7)", x:"+=160", y:"+=50"}, "second")//rotate:585,
tl.to("#horizontalBar", {duration:1.5, transformOrigin:"center center", rotate:495, scale:.05, ease:"back.out:(1.7)", x:"+=10", y:"-=85"}, "second")

//cutting bars out, sending cutout of logo mark in
tl.to("#Bars", {duration:.01, alpha:0}, "third-=.2")
tl.fromTo("#justMark", {duration:.8, alpha:1, rotate:0, scale:.05}, { scale:.75, rotate:"+=360"}, "third-=.5")


//words come in while cutout rotates
tl.to(".words", {duration:.75, stagger:.15, ease:"back.out:(3)", x:"-=620", alpha:1}, "third-=.15")
tl.to("#justMark", {duration:.4, ease:"back.out:(1.7)", rotate:"-=360", x:"-=30", y:"-=30", alpha:0}, "third+=.45")
tl.to(".words", {duration:.25, stagger:.15, ease:"back.out:(3)", x:"+=30"}, "forth-=.1")
tl.fromTo("#mark", {duration:.5, alpha:1, scale:.75}, {alpha:1, scale:1, ease:"back.out(3)"}, "forth-=.1")


;


GSDevTools.create({animation: tl});
