const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

/* esconder o menu quando clicar em um item */
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', () =>  {
    nav.classList.remove('show')
  })
}



/* scroll functions */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeader() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}


const buttonBack = document.querySelector('.back-to-top')

function backToTop() {
  if(window.scrollY >= 560){
    buttonBack.classList.add('show')
  } else {
    buttonBack.classList.remove('show')

  }
}

/* When scroll */ 
window.addEventListener('scroll', () => {
  changeHeader(), backToTop()
})

/* Testimonials carousel slider swiper */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,



});

/* ScrollReveal */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true

})


scrollReveal.reveal(
  `#home .text, #home .image,
  #about .text, #home .image,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links
  footer .brand, footer .social
  `, { interval: 100 }
  
  )
