/*============== Menu SHow Y HIDDEN ================= */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
    
/*-========== MENU Show--------=================== */
/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*-========== MENU Hidden --------=================== */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*-========== Remove menu Mobile --------=================== */
const navLink = document.querySelectorAll('.nav__link')
 function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link we remove the show-menu class
    navMenu.classList.remove('show-menu')
 }
 navLink.forEach (n =>n.addEventListener('click',linkAction))

 /*-========== Accordion SKILLS --------=================== */

 const skillsContent = document.getElementsByClassName('skills__content'),
       skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
        let itemClass = this.parentNode.className

        for (i = 0; i < skillsContent.length; i++ ){
            skillsContent[i].className = 'skills__content skills__close'            
        }

        if(itemClass === 'skills__content skills__open'){
            this.parentNode.className='skills__content skills__close'
        }
        else{
            this.parentNode.className='skills__content skills__open'
        }
}
skillsHeader.forEach((el) => {
    el.addEventListener('click',toggleSkills)
})
/*-========== Qualification Tabs--------=================== */

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContents =>{
            tabContents.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*-========== Services Modal--------=================== */

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modaClick){
    modalViews[modaClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

 /* ------============== Portfolio Swiper===============------------ */
 let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

/* ------============== Testimonial Swiper===============------------ */
let swiperTestmonial = new Swiper('.testimonial__container', {
    loop: true,
    grapCursor: true,
    spaceBetween:48,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true,

    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});

/* ------============== Scroll Section Active Link ===============------------ */

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.oofsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop+sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active-link')

        }
    })
}

window.addEventListener('scroll', scrollActive)

/* ------============== Change Background Header ===============------------ */

function scrollHeader(){
    const nav = document.getElementById('header')

    if(this,scrollY >= 80) nav.classList.add('scroll-Header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* ------============== show scroll up ===============------------ */

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/* ------ ============== Dark Light Theme =============== ------------ */

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Priviously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//
const getCurrentTheme = () => document.body.classList.contains('darkTheme') ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains('iconTheme') ? 'uil-moon' : 'uil-sun'


// we validate if the user previously chose a topic 
if(selectedTheme){

    // if the validation is fulfilled, we ask what the issue was to know if we activated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}
//Activate / Deactivate the Theme Manually with the button

themeButton.addEventListener('click', () => {
    //add or remove the dark / icon theme

    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // we save the theme and the current icon that the user chose

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})