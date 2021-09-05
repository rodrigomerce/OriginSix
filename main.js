/* ABRE E FECHA O MENU QUANDO CLICAR NO ICONE */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* QUANDO CLICAR EM UM ITEM DO MENU, ESCONDE O MENU */
const links = document.querySelectorAll('nav ul li a')

for (const element of links) {
  element.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* mudar o header da pagina quando der scroll */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    //scroll maior que a altura do header para
    header.classList.add('scroll')
  } else {
    //scroll menor que a altura do header
    header.classList.remove('scroll')
  }
})


/*Testimonials carousel slider swiper*/

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination:{
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/*SCROLLREVEAL - MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PAG*/

const scrollReveal = ScrollReveal({
  origin:'top',
  distance:'30px',
  duration:700,
  reset: true
})

scrollReveal.reveal(`#home .image, #home .text,
#about .image, #about .text,
#services header, #services card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links`, { interval:100 })