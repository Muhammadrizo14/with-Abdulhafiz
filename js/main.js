// swiper 


"use strict";



var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



// burger menu


function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu_button', '.burger-menu_lines');
  let links = menu.find('.burger-menu_link');
  let overlay = menu.find('.burger-menu_overlay');
  
  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  
  function toggleMenu(){
    menu.toggleClass('burger-menu_active');
    
    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');




window.addEventListener('DOMContentLoaded', ()=>{
  const child = document.querySelectorAll('.child-div')


  child.forEach( (item) => {
      let size = item.querySelector('.size')
      item.addEventListener('mouseover', () => {
          size.style.display = 'block';
          size.style.transition = "all 2s";
      })
  })
  
  
  child.forEach( (item) => {
      let size = item.querySelector('.size')
      item.addEventListener('mouseout', () => {
          size.style.display = 'none';
          size.style.transition = "all 2s";
          const inputNumber = size.querySelectorAll('input')
          inputNumber.forEach((item) => {
              let val = item.value
              if(val > 0) {
                  size.style.display = 'block';
              } else {
                  size.style.display = 'none';
              }
          })
      })
  })
  
  
  
  
  
})



const like = document.querySelectorAll('.i-class')
 

like.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('press')
    })
});