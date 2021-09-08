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
function changeHeaderWhenScroll(){

  if (window.scrollY >= navHeight) {
    //scroll maior que a altura do header para
    header.classList.add('scroll')
  } else {
    //scroll menor que a altura do header
    header.classList.remove('scroll')
  }
}

/*Testimonials carousel slider swiper*/

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination:{
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767:{
      slidesPerView:2,
      setWrapperSize: true
    }
  }
})

/*SCROLLREVEAL - MOSTRAR ELEMENTOS QUANDO DER SCROLL NA PAG*/

const scrollReveal = ScrollReveal({
  origin:'top',
  distance:'25px',
  duration:700,
  reset: true
})

scrollReveal.reveal(`#home .image, #home .text,
#about .image, #about .text,
#services header, #services card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social`, { interval:100 })



/*BOTÃO VOLTAR PARA O TOPO*/
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if(window.scrollY >= 560){
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a seção visível na página */

const  sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset +(window.innerHeight / 8) * 4

  for ( const section of sections){
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if(checkpointStart && checkpointEnd){
      document
          .querySelector('nav ul li a[href*=' + sectionId + ']')
          .classList.add('active')
    }else{
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }
  }

}

window.addEventListener('scroll', function () {
 changeHeaderWhenScroll()
 backToTop()
 activateMenuAtCurrentSection()
})


