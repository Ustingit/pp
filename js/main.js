let tl = new TimelineLite(),
    links = document.querySelectorAll('.menu-item'),
    pIcon = document.querySelectorAll('.plus-icon');
tl.staggerFromTo(links,0.4,{autoAlpha:0},{autoAlpha:1,ease:Sine.easeInOut},0.2)

links[2].addEventListener('mouseenter',function(){
  TweenMax.to(pIcon[0],0.15,{rotation:-45,ease:Power1.easeIn})
  TweenMax.to('#lineGroup_1',0.20,{attr:{'stroke-dashoffset':'8','stroke-dasharray' :'8'},ease:Power1.easeIn})       
})
links[2].addEventListener('mouseleave',function(){
  TweenMax.to(pIcon[0],0.15,{rotation:0,ease:Power1.easeIn})
  TweenMax.to('#lineGroup_1',0.20,{attr:{'stroke-dashoffset':'0','stroke-dasharray' :'0'},ease:Power1.easeIn})
})
links[3].addEventListener('mouseenter',function(){
  TweenMax.to(pIcon[1],0.15,{rotation:-45,ease:Power1.easeIn})
  TweenMax.to('#lineGroup_2',0.20,{attr:{'stroke-dashoffset':'8','stroke-dasharray' :'8'},ease:Power1.easeIn})
})
links[3].addEventListener('mouseleave',function(){
  TweenMax.to(pIcon[1],0.15,{rotation:0,ease:Power1.easeIn})
  TweenMax.to('#lineGroup_2',0.20,{attr:{'stroke-dashoffset':'0','stroke-dasharray' :'0'},ease:Power1.easeIn})
})

const menuToggle = document.querySelector(".menu span");
const menu = document.querySelector('.menu');
menuToggle.addEventListener('click', function(){
  menu.classList.toggle('open')
})


