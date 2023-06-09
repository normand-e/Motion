import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";


gsap.registerPlugin( GSDevTools);


const mainTL = gsap.timeline({id:"mainTL"});


mainTL.set("#trulia-text", {alpha:0, x:-25, y:-300})
mainTL.set("#MASK", {x:660, y:610})


mainTL.to("#bursty-thing", {duration: 3.2, transformOrigin:"50% 50%", rotate:360, x:280, y:190, ease: "power1.out)"}, "start")
mainTL.to("#heart", {duration: 2, transformOrigin:"50% 100%", x:-165, y:-210, ease: "power1.out", scale:.75}, "start")
mainTL.to("#flower", {duration: 2.5,transformOrigin:"50% 50%", rotate:360, scale:.2, y:190,  ease: "power1.out"}, "start")
mainTL.to("#mountains", {duration: 2.5, transformOrigin:"100% 100%", scale:.5, x:200, ease: "power1.out"}, "start")
mainTL.to("#apartment", {duration:.45, scaleX:0,transformOrigin: "100% center", ease: "sine.inOut", yoyo:true}, "start")
mainTL.to("#aptDark", {duration: 2, x:"+=260", y:"-=100", ease:"power1.out", scale:.2, delay:.45}, "start")
mainTL.to("#apts", {duration: 2, x:240, y:-80, scale:.25, ease: "power1.out" }, "start")
mainTL.to("#Union_2", {duration: 2.75, transformOrigin:"50% 100%", x:-210, y:"-=30", scale:0,  ease: "power1.out"}, "start") //outer tree
mainTL.to("#Union", {duration: 2.2, transformOrigin:"50% 100%", x:-210, y:"-=30", scale:0,  ease: "power1.out"}, "start+=.85") //inner tree
mainTL.to("#long-road", {duration:2, x:"-=405"}, "start")
mainTL.to("#allRoad", {duration:2, transformOrigin:"100% 100%", x:"-=145", y:"-=210", scale:.7}, "start")

mainTL.to("#slide", {duration:2, skewX:60, x:"-=200", y:"+=210", scale:.25}, "start")
mainTL.to("#ladder", {duration:2, x:"-=270", y:"+=240", scale:.25}, "start")

mainTL.to("#trulia-text", {duration:1, y:-400, autoAlpha:1,  ease: "power1.out"}, "second-=1.25")
mainTL.to("#heart", {duration:.5, scale:.65, ease:"power1.out", repeat:1}, "second-=.35")
;



GSDevTools.create({animation: mainTL});
