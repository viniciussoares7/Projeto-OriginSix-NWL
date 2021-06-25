/* ABRE/FECHA do menu ao clicar no icone: hamburger ou x*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Esconder menu ao clicar em um item do menu */
const links = document.querySelectorAll(
  'nav ul li a, footer .logo, .back-to-top'
)

for (const link of links) {
  link.addEventListener('click', function (event) {
    event.preventDefault()

    nav.classList.remove('show')
    scrollSmooth(link)
  })
}
/* Smooth Scroll */

function scrollSmooth(link) {
  const sectionId = link.getAttribute('href')
  document.querySelector(sectionId).scrollIntoView({
    behavior: 'smooth'
  })
}

/* mudar o header da pagina (scroll) */
const header = document.querySelector('header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* Testimonial carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScrollReveal: Mostrar elementos quando der scroll na página */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 500,
  reset: true
})

scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#testimonials header, #testimonials .testimonials
#contact .text, #contact .links, footer .brand, footer .social
`,
  { interval: 50 }
)

/* back to top button */
const backToTopButton = document.querySelector('.back-to-top')
function backtoTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* menu visivel conforme a seção visivel na pagina */
const sections = document.querySelectorAll('section[id]')
function menuEffect() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backtoTop()
  menuEffect()
})
