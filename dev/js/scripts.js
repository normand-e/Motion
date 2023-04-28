import { gsap } from "gsap";

//QUIZ



let tl = gsap.timeline();
gsap.set(".green", {transformOrigin: "0% 0%"}); //Part3
//Part 1

tl.from(".graph", {duration:2, alpha:0}) //part2
.from(".red", {duration:1, x:0, ease: "bounce.out"}) //part3, bounce out ease
.from(".blue", {duration:1, x:"+=150", ease: "bounce.out"}, "<") //part3, bounce out ease
.to(".red", {duration:2, y:0, ease: "power2.out"}, "+=1")
.to(".blue", {duration:2, y:300, ease: "power2.out"}, "<")
.from(".red, .blue", {duration:1, ease: "back.out(1.7)", rotate:360}, "-=1")
.from(".green", {duration:5, scaleX:0}, 0) //part2






;