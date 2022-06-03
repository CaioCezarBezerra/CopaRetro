class MobileNavbar{
    constructor(mobilemenu,navlist,navlinks){
        this.mobilemenu = document.querySelector(mobilemenu);
        this.navlist = document.querySelector(navlist);
        this.navlinks = document.querySelectorAll(navlinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }
    animatelinks(){
        this.navlinks.forEach((link )=>{
            link.style.animation
            ?(link.style.animation = "")
            :(link.style.animation = 'navlinkfade 0.5s ease forwards 0.3s');

        });
    }
    handleClick(){
        this.navlist.classList.toggle(this.activeClass);
        this.mobilemenu.classList.toggle(this.activeClass);
        this.animatelinks();  
    }
    addClickEvent(){
        this.mobilemenu.addEventListener("click",this.handleClick);
        
     }
     
     init(){
         if (this.mobilemenu){
             this.addClickEvent();
         }
         return this;
     }
}
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nanv-list li",
);
mobileNavbar.init();




