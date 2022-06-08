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
const json2s = 
[
    {
        "rodada": "semi final",
        "semi": 2,
        "diaSemana": "QUA",
        "data": "14/12/2022",
        "hora": "16:00",
        "estadio": "AL KHOR",
        "partida": "Venc. Q3 x Venc. Q4",
        "mandante": "bandeira_padrao.svg",
        "visitante": "bandeira_padrao.svg"
    }
]
console.log(json2s);
json2s.map((grupo,index) =>{


    let listaDeJogos = document.querySelector('.listaDeJogos').cloneNode(true)
    console.log(listaDeJogos);
    document.querySelector('.tabela-de-jogos').append(listaDeJogos)
   

    lista = document.querySelector('.grupo').innerHTML = `Grupo ${grupo.grupo}`
    lista = document.querySelector('.data').innerHTML = `${grupo.diaSemana} ${grupo.data} às ${grupo.hora}`
    lista = document.querySelector('.partida').innerHTML = `<img class="bandeirap" src="../IMG/Calendario/bandeiras/${grupo.mandante}" alt="" />
    ${grupo.partida}
    <img class="bandeirap" src="../IMG/Calendario/bandeiras/${grupo.visitante}" alt="" />`
    lista = document.querySelector('.estadio').innerHTML = `${grupo.estadio}`
})
