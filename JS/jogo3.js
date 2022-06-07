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

const jogos3json = 
[
    {
        "id": 35,
        "grupo": "B",
        "rodada": 3,
        "diaSemana": "TER",
        "data": "29/11/2022",
        "hora": "16:00",
        "estadio": "AL RAYYAN",
        "partida": "EUR x ING",
        "mandante": "bandeira_padrao.svg",
        "visitante": "inglaterra.svg"
    },
    {
        "id": 36,
        "grupo": "B",
        "rodada": 3,
        "diaSemana": "TER",
        "data": "29/11/2022",
        "hora": "16:00",
        "estadio": "AL THUMAMA",
        "partida": "IRA x EUA",
        "mandante": "ira.svg",
        "visitante": "estados_unidos.svg"
    },
    {
        "id": 37,
        "grupo": "C",
        "rodada": 3,
        "diaSemana": "QUA",
        "data": "30/11/2022",
        "hora": "16:00",
        "estadio": "PORTO DE DOHA",
        "partida": "POL x ARG",
        "mandante": "polonia.svg",
        "visitante": "argentina.svg"
    },  
    {
        "id": 38,
        "grupo": "C",
        "rodada": 3,
        "diaSemana": "QUA",
        "data": "30/11/2022",
        "hora": "16:00",
        "estadio": "NACIONAL DE LUSAIL",
        "partida": "ARA x MEX",
        "mandante": "arabia_saudita.svg",
        "visitante": "mexico.svg"
    },
    {
        "id": 39,
        "grupo": "D",
        "rodada": 3,
        "diaSemana": "QUA",
        "data": "30/11/2022",
        "hora": "12:00",
        "estadio": "CIDADE DA EDUCAÇÃO",
        "partida": "TUN x FRA",
        "mandante": "tunisia.svg",
        "visitante": "franca.svg"
    },   
    {
        "id": 40,
        "grupo": "D",
        "rodada": 3,
        "diaSemana": "QUA",
        "data": "30/11/2022",
        "hora": "12:00",
        "estadio": "AL WAKRAH",
        "partida": "PL1 x DIN",
        "mandante": "bandeira_padrao.svg",
        "visitante": "dinamarca.svg"
    },
    {
        "id": 41,
        "grupo": "E",
        "rodada": 3,
        "diaSemana": "QUI",
        "data": "01/12/2022",
        "hora": "16:00",
        "estadio": "INTERNACIONAL KHALIFA",
        "partida": "JAP x ESP",
        "mandante": "japao.svg",
        "visitante": "espanha.svg"
    },
    {
        "id": 42,
        "grupo": "E",
        "rodada": 3,
        "diaSemana": "QUI",
        "data": "01/12/2022",
        "hora": "16:00",
        "estadio": "AL KHOR",
        "partida": "PL2 x ALE",
        "mandante": "bandeira_padrao.svg",
        "visitante": "alemanha.svg"
    },
    {
        "id": 43,
        "grupo": "F",
        "rodada": 3,
        "diaSemana": "QUI",
        "data": "01/12/2022",
        "hora": "12:00",
        "estadio": "AL RAYYAN",
        "partida": "CRO x BEL",
        "mandante": "croacia.svg",
        "visitante": "belgica.svg"
    },
    {
        "id": 44,
        "grupo": "F",
        "rodada": 3,
        "diaSemana": "QUI",
        "data": "01/12/2022",
        "hora": "12:00",
        "estadio": "AL THUMAMA",
        "partida": "CAN x MAR",
        "mandante": "canada.svg",
        "visitante": "marrocos.svg"
    },
    {
        "id": 45,
        "grupo": "G",
        "rodada": 3,
        "diaSemana": "SEX",
        "data": "02/12/2022",
        "hora": "16:00",
        "estadio": "NACIONAL LUSAIL",
        "partida": "CAM x BRA",
        "mandante": "camaroes.svg",
        "visitante": "brasil.svg"
    },
    {
        "id": 46,
        "grupo": "G",
        "rodada": 3,
        "diaSemana": "SEX",
        "data": "02/12/2022",
        "hora": "16:00",
        "estadio": "PORTO DE DOHA",
        "partida": "SER x SUI",
        "mandante": "servia.svg",
        "visitante": "suica.svg"
    },
    {
        "id": 47,
        "grupo": "H",
        "rodada": 3,
        "diaSemana": "SEX",
        "data": "02/12/2022",
        "hora": "12:00",
        "estadio": "CIDADE DA EDUCAÇÃO",
        "partida": "COR x POR",
        "mandante": "coreia_do_sul.svg",
        "visitante": "portugal.svg"
    },
    {
        "id": 48,
        "grupo": "H",
        "rodada": 3,
        "diaSemana": "SEX",
        "data": "02/12/2022",
        "hora": "12:00",
        "estadio": "AL WAKRAH",
        "partida": "GAN x URU",
        "mandante": "gana.svg",
        "visitante": "uruguai.svg"
    },
    {
        "id": 48,
        "grupo": "A",
        "rodada": 3,
        "diaSemana": "TER",
        "data": "29/11/2022",
        "hora": "12:00",
        "estadio": "AL KHOR",
        "partida": "HOL x CAT",
        "mandante": "holanda.svg",
        "visitante": "catar.svg"
    }
]
console.log(jogos3json);
jogos3json.map((grupo,index) =>{


    let listaDeJogos = document.querySelector('.listaDeJogos').cloneNode(true)
    console.log(listaDeJogos);
    document.querySelector('.tabela-de-jogos').append(listaDeJogos)
   

    lista = document.querySelector('.grupo').innerHTML = `Grupo ${grupo.grupo}`
    lista = document.querySelector('.data').innerHTML = `${grupo.diaSemana} ${grupo.data} às ${grupo.hora}`
    lista = document.querySelector('.partida').innerHTML = `<img class="bandeirap" src="./IMG/jogos3/bandeiras/${grupo.mandante}" alt="" />
    ${grupo.partida}
    <img class="bandeirap" src="./IMG/jogos3/bandeiras/${grupo.visitante}" alt="" />`
    lista = document.querySelector('.estadio').innerHTML = `${grupo.estadio}`
})