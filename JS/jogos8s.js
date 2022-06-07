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


const json = 
[
    {
        "rodada": "oitavas de final",
        "oitavas": 2,
        "diaSemana": "SÁB",
        "data": "03/12/2022",
        "hora": "16:00",
        "estadio": "AL RAYYAN",
        "partida": "1C x 2D",
        "mandante": "bandeira_padrao.svg",
        "visitante": "bandeira_padrao.svg"
    },
    {
        "rodada": "oitavas de final",
        "oitavas": 3,
        "diaSemana": "SEG",
        "data": "05/12/2022",
        "hora": "12:00",
        "estadio": "AL WAKRAH",
        "partida": "1E x 2F",
        "mandante": "bandeira_padrao.svg",
        "visitante": "bandeira_padrao.svg"
    },
    {
        "rodada": "oitavas de final",
        "oitavas": 4,
        "diaSemana": "SEG",
        "data": "05/12/2022",
        "hora": "16:00",
        "estadio": "PORTO DE DOHA",
        "partida": "1G x 2H",
        "mandante": "bandeira_padrao.svg",
        "visitante": "bandeira_padrao.svg"
    },
    {
        "rodada": "oitavas de final",
        "oitavas": 5,
        "diaSemana": "DOM",
        "data": "04/12/2022",
        "hora": "16:00",
        "estadio": "AL KHOR",
        "partida": "1B x 2A",
        "mandante": "bandeira_padrao.svg",
        "visitante": "bandeira_padrao.svg"
    },
    {
        "rodada": "oitavas de final",
        "oitavas": 6,
        "diaSemana": "DOM",
        "data": "04/12/2022",
        "hora": "12:00",
        "estadio": "AL THUMAMA",
        "partida": "1D x 2C",
        "mandante": "bandeira_padrao.svg",
        "visitante": "bandeira_padrao.svg"
    },
    {
        "rodada": "oitavas de final",
        "oitavas": 7,
        "diaSemana": "TER",
        "data": "06/12/2022",
        "hora": "12:00",
        "estadio": "CIDADE DA EDUCAÇÃO",
        "partida": "1F x 2E",
        "mandante": "bandeira_padrao.svg",
        "visitante": "bandeira_padrao.svg"
    },
    {
        "rodada": "oitavas de final",
        "oitavas": 8,
        "diaSemana": "TER",
        "data": "06/12/2022",
        "hora": "16:00",
        "estadio": "NACIONAL DE LUSAIL",
        "partida": "1H x 2G",
        "mandante": "bandeira_padrao.svg",
        "visitante": "bandeira_padrao.svg"
    }
]
console.log(json);
json.map((grupo,index) =>{


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