import {gsap} from "gsap";


let mainTL = gsap.timeline({delay:1});


mainTL.from("#logo", {duration:.5, alpha:0, delay:.5, x:"+=1000"})
.from("nav li", {duraton:.5, stagger:0.2, y:"-=100", ease:"slow(0.7, 0.7, false)"},0)
.from("#heroHead", {duration:.75, y:1000, x:"-=1000", rotation:720, scale:15})
.from("#heroSub", {duration:.75, y:1000, x:2000, rotation:-720, ease: "elastic.inOut(1, 0.3)"}, "-=.25")
//.from("article", {duration:.5, alpha:.5}, "<")
.from(".cta", {duration:.5, alpha:0, y:1000, rotation:1800})
.from("#contentH1", {duration:1, x:1000, ease:"bounce.inOut"})
.from("p", {duration:1, x:-1000, ease:"bounce.out"})


;

function(navAni){
    let tl = gsap.timeline();
    tl.
}