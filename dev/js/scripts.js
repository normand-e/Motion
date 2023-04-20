import {gsap} from "gsap";

gsap.from("#logo", {duration:1, alpha:0, delay:.25, x:"+=1000"});
gsap.from("nav li", {duraton:3, stagger:0.2, y:"-=100", delay:.5, ease:"slow(0.7, 0.7, false)"});
gsap.from("#heroHead", {duration:1, delay:.5, y:1000, x:"-=1000", rotation:720, scale:15});
gsap.from("#heroSub", {duration:3, y:1000, x:2000, rotation:-720, ease: "elastic.inOut(1, 0.3)"});
gsap.from(".cta", {duration:1, alpha:0, y:1000, rotation:1800, delay:1.5});
gsap.from("#contentH1", {duration:2, x:1000, ease:"bounce.inOut"});
gsap.from("p", {duration:2, x:-1000, ease:"bounce.out"});
gsap.from("article", {duration:1, alpha:.5});