import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function headText(){
    let tl = gsap.timeline();
    tl.from("#alanis-hero", {duration:2, alpha:0, y:200, ease:"back.out(2)"});

    return tl;
}

function heroAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#section-1",
            start:"bottom bottom",
            scrub:true,
            markers:true,
            toggleActions: "play none none none"
        }});
    
    tl.to("#section-1", {duration:5, alpha:.75});
    
    return tl;
}

function studioAnimation(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger:"#section-2",
            start:"top 70%",
            end:"80% 80%",
            scrub:true,
            markers:false
        }});
    tl.from("#albums", { scale:.25}, "alb");
    tl.from("#studio-list", { alpha:0, x:1000, ease:"power4.out"});
    //tl.from("#studio-label", {duration:1.5, alpha:0, y:100, ease:"power3.out"}, "-=1");
    
    return tl;
}



let mainTl = gsap.timeline();
mainTl.add(headText())
.add(heroAnimation())
.add(studioAnimation())
;