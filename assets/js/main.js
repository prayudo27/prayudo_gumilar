/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
      
/*=============== MENU SHOW ===============*/
/* Validate of constant exist */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/
/* Validate of contant exist */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove teh show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
// const scrollHeader = () => {
//     const header = document.getElementById('header')
//     //When the scroll os greater than 50 viewport height, add the scroll-header class to the header tag
//     this.scrollY >= 50 ? header.classList.add('scroll-header')
//                        : header.classList.remove('scroll-header')
// }

/*=============== ADD BLUR TO HEADER ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
