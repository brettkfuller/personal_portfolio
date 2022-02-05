//======================= DARK THEME =====================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// PREVIOUSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtain the current theme that the interface has by validating the dark theme class

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

//Need to validate if the user has previously chosen a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate/ deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  //ADD or remove the dark/light icon -- icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  //We have the theme and the current icon that the user has chosen
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
console.log("THEME SETTING IS WORKING!")

//======================== MENU TO SHOW HIDDEN OPTIONS ===========================
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// =============== MENU SHOW ==============
/* Validate if the constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

// =============== MENU HIDE ==============
/* Validate if the constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

console.log("MENU Y SETTING WORKING")
//======================== REMOVE MENU PROFILE =======================
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // when we click on nav__links, we remove the show menu 
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
console.log("Remove menu profile is working")



//======================== Typewriter Effect =======================


new Typewriter('#typewriter', {
  strings: ['Brett Fuller', 'Computer Science Student', 'Web developer', "Tutor"],
  autoStart: true,
  loop: true,
  cursor: "|"
});
console.log("Typewriter effect is working")


//======================== :Portfolio Swiper Effect =======================

var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  pagination: {
    el: "blog-slider__pagination",
    clickable: true,
  },
  // mousewheel: true,
  keyboard: true,
});
console.log("Portfolio swiper is working!")
