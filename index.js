gsap.registerPlugin(ScrollTrigger);

gsap.from('.child-container', {
    y: 100,
    duration: 2.5,
    ease: "power4.out",
    stagger: 0.5,
    scrollTrigger: {
        trigger:'.child-container',
    } 
});

gsap.from('.hero-image', {
    xPercent: -100,
    duration: 2.5,
    ease: "power4.out",
    scrollTrigger: {
        trigger:'.hero-image',
    } 
});
