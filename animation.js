var tl = gsap.timeline({defaults: {duration: 1}});

tl.fromTo('.logo', {opacity: 0, scale: 0}, {opacity: 1, scale: 1})
  .fromTo('#social__proof', {opacity: 0, scale: 0}, {opacity: 1, scale: 1})
  .fromTo('#main__image', {opacity: 0}, {opacity: 1, background: "none"})
  .fromTo('#main__image', {background: "none"}, {background: "rgb(200, 200, 200)"})
  .fromTo('.fa-phone', {rotateY: "360deg"}, {rotateY: "0deg"})
  .to('.fa-phone', {scale: 1.5})
  .to('.fa-phone', {scale: 1})
  
  