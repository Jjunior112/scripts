'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');

    var classname = document.body.className;
    if(classname=='light-theme'){
        this.textContent = "\uD83C\uDF19";}
    else{
        this.textContent = "\u2600\uFE0F"
    }
    console.log(`Current class name ${classname}`);
});

class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }
    animateLinks(){
        this.navLinks.forEach((link, index)=>
            link.style.animation
                ?(link.style.animation = "")
                :(link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`)
        )
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if(this.mobileMenu){
        this.addClickEvent();
        }
        return this;
    }
}    
const mobileNavbar = new MobileNavbar(
".mobile-menu",".nav-list",".nav-list li",
);
mobileNavbar.init();

