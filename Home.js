// var menuButton = document.querySelector('.menu-button');
//     var openMenu = function () {
//       swiper.slidePrev();
//     };
//     var swiper = new Swiper('.swiper', {
//       slidesPerView: 'auto',
//       initialSlide: 1,
//       resistanceRatio: 0,
//       slideToClickedSlide: true,
//       on: {
//         slideChangeTransitionStart: function () {
//           var slider = this;
//           if (slider.activeIndex === 0) {
//             menuButton.classList.add('cross');
//             // required because of slideToClickedSlide
//             menuButton.removeEventListener('click', openMenu, true);
//           } else {
//             menuButton.classList.remove('cross');
//           }
//         },
//         slideChangeTransitionEnd: function () {
//           var slider = this;
//           if (slider.activeIndex === 1) {
//             menuButton.addEventListener('click', openMenu, true);
//           }
//         },
//       },
//     });





    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay :{
          delay:3000,
        }
      });





      const progressCircle = document.querySelector(".autoplay-progress svg");
      const progressContent = document.querySelector(".autoplay-progress span");
      var swiper = new Swiper(".mySwiper1", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
          }
        }
      });