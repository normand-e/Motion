import {gsap} from "gsap";

gsap.from("#logo", {duration:3, alpha:0, delay:1});
gsap.from("nav li", {duraton:2, stagger:0.2, y:"-=25", delay:1});