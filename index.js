let tl = gsap.timeline();

tl.from("main", {
  backgroundColor: "#white",
  color: "#1a1919",
});
tl.from("#nav h3", {
  y: -50,
  opacity: 0,
  delay: 0.4,
  duration: 0.6,
  stagger: 0.2,
});
tl.from("#main h1", {
  x: -1200,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
});
tl.to("#main", {
  backgroundColor: "#1a1919",
  color: "white",
});
tl.to(".name", {
  color: "white",
});
tl.from("img", {
  x: 100,
  rotate: 60,
  opacity: 0,
  duration: 0.6,
  stagger: 0.2,
});
tl.from(".name", {
  color: "yellow",
});

