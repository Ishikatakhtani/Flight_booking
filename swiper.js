// let swiper=new swiper(".swiper" ,{
// navigation:{
//     nextEl:"swiper-button-next",
//     preEl:"swiper-button-prev"
// },


var swiper = new swiper(".mySwiper", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
autoplay:{
    delay:2000
}
})

