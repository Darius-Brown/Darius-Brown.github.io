// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// MENU SHOW
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
if(navClose){
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')
    })
}


// ================= Remove Menu Mobile ================
const navLink = document.document.getElementById('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //when we click each nav link we remove the show menu click
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



// ================= Shadow Header ================
const shadowHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)




// ================= Email JS ================




// ================= Show Scroll Up ================

// ================= Scroll Sections Active Link ================

// ================= Dark Light theme ================

// =================  ================
