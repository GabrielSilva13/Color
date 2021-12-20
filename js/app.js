const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Ativa o Menu Mobile
const mobileMenu = ()=>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Mostra no menu em qual sessão estamos
const hightlightMenu = ()=>{
    const element = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#sobre-page');
    const servicesMenu= document.querySelector('#servicos-page');
    let scrollPos = window.scrollY;

    // Adiciona a classe highlight nos items do menu
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return
    }else if(window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return
    }else if(window.innerWidth > 960 && scrollPos < 2345){
        servicesMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        return
    }

    if((element && window.innerWidth < 960 && scrollPos < 600) || element){
        element.classList.remove('highlight');
    }

}
window.addEventListener('scroll', hightlightMenu);
window.addEventListener('click', hightlightMenu);
// Fecha o menu mobile após clicar na sessão
const hideMobileMenu = () =>{
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 960 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}
menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);