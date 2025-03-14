var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// Swiper-2

// var swiper = new Swiper(".mySwiper", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });



// Swiper-3

var menuButton = document.querySelector('.menu-button');
var openMenu = function () {
  swiper.slidePrev();
};
var swiper = new Swiper('.swiper1', {
  slidesPerView: 'auto',
  initialSlide: 1,
  resistanceRatio: 0,
  slideToClickedSlide: true,
  on: {
    slideChangeTransitionStart: function () {
      var slider = this;
      if (slider.activeIndex === 0) {
        menuButton.classList.add('cross');
        // required because of slideToClickedSlide
        menuButton.removeEventListener('click', openMenu, true);
      } else {
        menuButton.classList.remove('cross');
      }
    },
    slideChangeTransitionEnd: function () {
      var slider = this;
      if (slider.activeIndex === 1) {
        menuButton.addEventListener('click', openMenu, true);
      }
    },
  },
});


let logout=()=>{
  localStorage.clear()
  location.href="index.html"
}

let words = gsap.utils.toArray("svg text"),
    tl = gsap.timeline({delay: 0.5}),
    timePerCharacter = 0.2;

words.forEach(el => {
  tl.from(el, {text: "", duration: el.innerHTML.length * timePerCharacter, ease: "none"});
});



gsap.registerPlugin(Flip);

const group = document.querySelector(".group");

document.querySelector(".button").addEventListener("click", () => {
  // Get the initial state
  const state = Flip.getState(".group, .box");
  
  console.log(state);
  
  // toggle the flex direction
  group.classList.toggle("reorder");
  
  Flip.from(state, {
    absolute: true, // uses position: absolute during the flip to work around flexbox challenges
    duration: 0.5, 
    stagger: 0.1,
    ease: "power1.inOut"
    // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc. 
  });
});
