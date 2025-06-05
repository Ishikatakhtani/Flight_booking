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






      var swiper = new Swiper(".mySwiper2", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      



      var typed = new Typed('#fc1', {
        strings: [' ^1000\n <b>Enjoy Your Dream  ^500\n ` <br>Vacation </b>`'],
      });
      

      var typed = new Typed('#fc2', {
        // Waits 1000ms after typing "First"
        strings: [' ^2500 Book flight Tickets at lowest price'],
      });






      var swiper = new Swiper(".mySwiper4", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        },
      });


      var typed = new Typed('#World1', {
        // Waits 1000ms after typing "First"
        strings: ['^1000','VISIT WORLD'],
      });




let logout=()=>{
  localStorage.clear()
  location.href="index.html"
}
const tl = gsap.timeline({
  scrollTrigger: {
    scrub: 1,
    pin: true,
    trigger: "#World",
    start: "50% 50%",
    endTrigger: "#World",
    end: "bottom 50%",
  },
});

tl.to("#World", {
  rotateZ: 360,
});

// change from here 

function searchFlights() {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let resultsDiv = document.getElementById("results");
  
  if (from && to) {
      resultsDiv.innerHTML = `<h2>Available Flights</h2>
                             <p>Flight from ${from} to ${to}</p>
                             <button onclick="bookFlight()">Book Now</button>`;
  } else {
      resultsDiv.innerHTML = "<p>Please enter both cities.</p>";
  }
}

function bookFlight() {
  alert("Flight booked successfully!");
}