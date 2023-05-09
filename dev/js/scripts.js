import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



function heroAnimation(){
    let tl = gsap.timeline();
    
    tl.from("#alanis-hero", {duration:2, alpha:0, y:200, ease:"back.out(2)"});
    return tl;
}

function studioAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#studio-list",
            start:"top 70%",
            end:"top 25%",
            scrub:true,
            markers:true
        }});
    //tl.from("#albums", {duration:1.5, scale:.25}, "alb");
   tl.from("#studio-list", {duration:3, alpha:0, x:1000, ease:"power4.out"}, "alb");
    //tl.from("#studio-label", {duration:1.5, alpha:0, y:100, ease:"power3.out"}, "-=1");
    
    return tl;
}



let mainTl = gsap.timeline();
mainTl.add(heroAnimation())
.add(studioAnimation())
;