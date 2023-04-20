import {gsap} from "gsap";

gsap.from("#logo", {duration:1, alpha:0, delay:.25, x:1000});
gsap.from("nav li", {duraton:2, stagger:0.2, y:"-=25", delay:1});
gsap.from("#heroHead", {duration:1, delay:.5, y:1000, rotation:720});
gsap.from("#heroSub", {duration:1, delay:1, y:1000, rotation:-720});
gsap.from(".cta", {duration:1, alpha:0, y:1000, rotation:360});