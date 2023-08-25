// nav toggle trigger
const navToggle=document.querySelector('.nav__toggle'),
      navMenu=document.querySelector('.nav__menu'),
      navLink=document.querySelectorAll('.nav__item'),
      remixIcon=document.querySelector('#remixicon'),
      sidebarToggle=document.querySelector('.sidebar__toggle'),
      sidebar=document.querySelector('.sidebar');

navToggle.addEventListener('click',()=>{
    navMenu.classList.toggle('open');
    navToggle.classList.toggle('open');
    if(sidebar.classList.contains('open')){
        sidebar.classList.toggle('open');
    }
})
navLink.forEach((element)=>{
    element.addEventListener('click',()=>{
        if(navMenu.classList.contains('open')){
            navMenu.classList.toggle('open');
            navToggle.classList.toggle('open');
        }
    });
});
sidebarToggle.addEventListener('click',()=>{
    sidebar.classList.toggle('open');
    sidebar.classList.contains('open')
     ? remixIcon.classList.replace('ri-side-bar-line','ri-side-bar-fill')
     : remixIcon.classList.replace('ri-side-bar-fill','ri-side-bar-line');    
    if(navMenu.classList.contains('open')){
        navMenu.classList.toggle('open');
        navToggle.classList.toggle('open');
    }
    
})

// filter menu choice
let mixMenu=mixitup('.menu__wrapper',{
    load:{
        filter:'.breakfast',
    },
    selectors:{
        target:'.menu__card',
    },
    animation:{
        duration:500,
    },
});
const menuItems=document.querySelectorAll('.menu__item');
function activeMenuItem(){
    menuItems.forEach((item)=>item.classList.remove('menu__item--active'));
    this.classList.add('menu__item--active');
}
menuItems.forEach((item)=>item.addEventListener('click',activeMenuItem));

const sr=ScrollReveal({
    distance:'100px',
    duration:2000,
    delay:400,
});
sr.reveal('.home__content');
sr.reveal('.home__img',{origin:'top'});
sr.reveal('.feature__card',{interval:200});
sr.reveal('.about__img',{origin:'left'});
sr.reveal('.about__content',{origin:'right'});
sr.reveal('.testimonial__card,.blog__post,.footer__content',{
    interval:200,
})
