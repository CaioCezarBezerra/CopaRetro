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


const jogos1json =
[
     {
        "id": 2,
        "grupo": "B",
        "rodada": 1,
        "diaSemana": "SEG",
        "data": "21/11/2022",
        "hora": "10:00",
        "estadio": "INTERNACIONAL KHALIFA",
        "partida": "ING x IRA",
        "mandante": "inglaterra.svg",
        "visitante": "ira.svg"
    },
    {
        "id": 3,
        "grupo": "B",
        "rodada": 1,
        "diaSemana": "SEG",
        "data": "21/11/2022",
        "hora": "16:00",
        "estadio": "AL RAYYAN",
        "partida": "EUA x GEU",
        "mandante": "estados_unidos.svg",
        "visitante": "bandeira_padrao.svg"
    },
    {
        "id": 4,
        "grupo": "C",
        "rodada": 1,
        "diaSemana": "TER",
        "data": "22/11/2022",
        "hora": "07:00",
        "estadio": "NACIONAL DE LUSAIL",
        "partida": "ARG x ARA",
        "mandante": "argentina.svg",
        "visitante": "arabia_saudita.svg"
    },   
    {
        "id": 5,
        "grupo": "C",
        "rodada": 1,
        "diaSemana": "TER",
        "data": "22/11/2022",
        "hora": "13:00",
        "estadio": "PORTO DE DOHA",
        "partida": "MEX x POL",
        "mandante": "mexico.svg",
        "visitante": "polonia.svg"
    },
    {
        "id": 6,
        "grupo": "D",
        "rodada": 1,
        "diaSemana": "TER",
        "data": "22/11/2022",
        "hora": "07:00",
        "estadio": "CIDADE DA EDUCAÇÃO",
        "partida": "DIN x TUN",
        "mandante": "dinamarca.svg",
        "visitante": "tunisia.svg"
    },    
    {
        "id": 7,
        "grupo": "D",
        "rodada": 1,
        "diaSemana": "TER",
        "data": "22/11/2022",
        "hora": "16:00",
        "estadio": "AL WAKRAH",
        "partida": "FRA x PL1",
        "mandante": "franca.svg",
        "visitante": "bandeira_padrao.svg"
    },
    {
        "id": 8,
        "grupo": "E",
        "rodada": 1,
        "diaSemana": "QUA",
        "data": "23/11/2022",
        "hora": "10:00",
        "estadio": "INTERNACIONAL KHALIFA",
        "partida": "ALE x JAP",
        "mandante": "alemanha.svg",
        "visitante": "japao.svg"
    },
    {
        "id": 9,
        "grupo": "E",
        "rodada": 1,
        "diaSemana": "QUA",
        "data": "23/11/2022",
        "hora": "13:00",
        "estadio": "AL THUMAMA",
        "partida": "ESP x PL2",
        "mandante": "espanha.svg",
        "visitante": "bandeira_padrao.svg"
    },
    {
        "id": 10,
        "grupo": "F",
        "rodada": 1,
        "diaSemana": "QUA",
        "data": "23/11/2022",
        "hora": "07:00",
        "estadio": "AL KHOR",
        "partida": "MAR x CRO",
        "mandante": "marrocos.svg",
        "visitante": "croacia.svg"
    },
    {
        "id": 11,
        "grupo": "F",
        "rodada": 1,
        "diaSemana": "QUA",
        "data": "23/11/2022",
        "hora": "16:00",
        "estadio": "AL RAYYAN",
        "partida": "BEL x CAN",
        "mandante": "belgica.svg",
        "visitante": "canada.svg"
    },
    {
        "id": 12,
        "grupo": "G",
        "rodada": 1,
        "diaSemana": "QUI",
        "data": "24/11/2022",
        "hora": "07:00",
        "estadio": "AL WAKRAH",
        "partida": "SUI x CAM",
        "mandante": "suica.svg",
        "visitante": "camaroes.svg"
    },
    {
        "id": 13,
        "grupo": "G",
        "rodada": 1,
        "diaSemana": "QUI",
        "data": "24/11/2022",
        "hora": "16:00",
        "estadio": "NACIONAL DE LUSAIL",
        "partida": "BRA x SER",
        "mandante": "brasil.svg",
        "visitante": "servia.svg"
    },
    {
        "id": 14,
        "grupo": "H",
        "rodada": 1,
        "diaSemana": "QUI",
        "data": "24/11/2022",
        "hora": "10:00",
        "estadio": "CIDADE DA EDUCAÇÃO",
        "partida": "URU x COR",
        "mandante": "uruguai.svg",
        "visitante": "coreia_do_sul.svg"
    },
    {
        "id": 15,
        "grupo": "H",
        "rodada": 1,
        "diaSemana": "QUI",
        "data": "24/11/2022",
        "hora": "13:00",
        "estadio": "PORTO DE DOHA",
        "partida": "POR x GAN",
        "mandante": "portugal.svg",
        "visitante": "gana.svg"
    },
    {
        "id": 16,
        "grupo": "A",
        "rodada": 1,
        "diaSemana": "SEG",
        "data": "21/11/2022",
        "hora": "07:00",
        "estadio": "AL THUMAMA",
        "partida": "SEN x HOL",
        "mandante": "senegal.svg",
        "visitante": "holanda.svg"
    }

]
console.log(jogos1json);
jogos1json.map((grupo,index) =>{


    let listaDeJogos = document.querySelector('.listaDeJogos').cloneNode(true);
    console.log(listaDeJogos);
    document.querySelector('.tabela-de-jogos').append(listaDeJogos)
    


    lista = document.querySelector('.grupo').innerHTML = `Grupo ${grupo.grupo}`
    lista = document.querySelector('.data').innerHTML = `${grupo.diaSemana} ${grupo.data} às ${grupo.hora}`
    lista = document.querySelector('.partida').innerHTML = `<img class="bandeirap" src="./IMG/Calendario/bandeiras/${grupo.mandante}" alt="" />
    ${grupo.partida}
    <img class="bandeirap" src="./IMG/Calendario/bandeiras/${grupo.visitante}" alt="" />`
    lista = document.querySelector('.estadio').innerHTML = `${grupo.estadio}`
})
