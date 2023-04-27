import {gsap} from "gsap";


 let mainTL = gsap.timeline({delay:1});




function navAni(){
    let tl = gsap.timeline();
    tl.from("#logo", {duration:.5, alpha:0, delay:.5, x:"+=1000"})
    .from("nav li", {duraton:.5, stagger:0.2, y:"-=100", ease:"slow(0.7, 0.7, false)"},0)
    ;
    return tl;
}
function heroAni(){
    let tl = gsap.timeline({delay:.5});
    let mm = gsap.matchMedia();

    mm.add("(min-width:767px)", () => {
        tl.from("#heroHead", {duration:.75, y:1000, x:"-=1000", rotation:360, scale:8})
        .from("#heroSub", {duration:2, y:1000, x:1000, rotation:-360, ease:"elastic.inOut(1, 0.3)"}, "-=.25")
        .from(".cta", {duration:.5, alpha:0, y:1000, rotation:540}, "-=.75")
        ;
    });
    mm.add("(max-width:768px)", () => {
        tl.from("#heroHead", {duration:.75, y:1000, x:"-=1000", rotation:720, scale:15})
        .from("#heroSub", {duration:2, y:1000, x:2000, rotation:-720, ease: "elastic.inOut(1, 0.3)"}, "-=.25")
        .from(".cta", {duration:.5, alpha:0, y:1000, rotation:1800}, "-=.75")
        ;
    });
    return tl;
}

function contentAni(){
    let tl = gsap.timeline({delay:.5});
    tl.from("#contentH1", {duration:1, x:1000, ease:"bounce.inOut"})
    .from("p", {duration:1, x:-1000, ease:"bounce.out"})
    ;
    return tl;
}




mainTL.add(navAni())
.add(heroAni())
.add(contentAni())
;
