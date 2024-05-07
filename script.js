let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    
    loginForm.classList.remove('active');
    
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    
    searchForm.classList.remove('active');
}

let helpButton = document.querySelector('#help-btn');
let helpContent = document.querySelector('.help-content');

helpButton.onclick = () => {
    helpContent.classList.toggle('active');
}


window.onscroll = () =>
{
    searchForm.classList.remove('active');
    helpContent.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// Media query for screens with a maximum width of 768px
if (window.matchMedia("(max-width: 768px)").matches) {
    var swiperMobile = new Swiper(".mySwiper", {
      slidesPerView: 1, // Adjusted slidesPerView for mobile
      spaceBetween: 20, // Adjusted spaceBetween for mobile
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }


