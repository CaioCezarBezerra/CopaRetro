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

const json4 = 
[
    {
        "rodada": "quartas de final",
        "quartas": 2,
        "diaSemana": "SEX",
        "data": "09/12/2022",
        "hora": "12:00",
        "estadio": "CIDADE DA EDUCAÇÃO",
        "partida": "Venc. O3 x Venc. O4",
        "mandante": "bandeira_padrao.svg",
        "visitante": "bandeira_padrao.svg"
    },
    {
        "rodada": "quartas de final",
        "quartas": 3,
        "diaSemana": "SÁB",
        "data": "10/12/2022",
        "hora": "16:00",
        "estadio": "AL KHOR",
        "partida": "Venc. O5 x Venc. O6",
        "mandante": "bandeira_padrao.svg",
        "visitante": "bandeira_padrao.svg"
    },
    {
        "rodada": "quartas de final",
        "quartas": 4,
        "diaSemana": "SÁB",
        "data": "10/12/2022",
        "hora": "12:00",
        "estadio": "AL THUMAMA",
        "partida": "Venc. O7 x Venc. O8",
        "mandante": "bandeira_padrao.svg",
        "visitante": "bandeira_padrao.svg"
    }
]
console.log(json4);
json4.map((grupo,index) =>{


    let listaDeJogos = document.querySelector('.listaDeJogos').cloneNode(true)
    console.log(listaDeJogos);
    document.querySelector('.tabela-de-jogos').append(listaDeJogos)
   

    lista = document.querySelector('.grupo').innerHTML = `Grupo ${grupo.grupo}`
    lista = document.querySelector('.data').innerHTML = `${grupo.diaSemana} ${grupo.data} às ${grupo.hora}`
    lista = document.querySelector('.partida').innerHTML = `<img class="bandeirap" src="./images/bandeiras/${grupo.mandante}" alt="" />
    ${grupo.partida}
    <img class="bandeirap" src="./images/bandeiras/${grupo.visitante}" alt="" />`
    lista = document.querySelector('.estadio').innerHTML = `${grupo.estadio}`
})

