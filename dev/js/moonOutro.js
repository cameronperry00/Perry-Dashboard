import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

// gsap.set(".moon-things",{display: "block"});

export let moonOutroTL = gsap.timeline();

moonOutroTL.to("#moon", {duration: 1, x: 500, y: 500, ease: "circ.out"})
        .to("#moon", {duration: 1, rotation: -360}, "+=.5")
        .to("#moon", {duration: 2, scale: 3}, "-=.75")
        .from(".moon-things", {duration: .5, alpha: 0}, "-=.75")
        .to("#moon", {duration: .8, ease: "elastic.out(1, 0.3)"})
        .to("#moon", {duration: 3, motionPath: {path: "#js-path", align:"#js-path", alignOrigin: [.2, .4], autoRotate: 0}, ease: "none", scale: 3}, "+=1")
        .to("#moon", {duration: .3, scale: 3, x: 400, y: 780}, "+=.25")
        .to("#moon", {duration: 1, scale: 8})
        .to("#moon", {duration: .08, scale: 2.5})