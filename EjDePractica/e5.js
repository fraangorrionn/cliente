window.addEventListener("load", inicializar, false);

function inicializar() {
    creararbol();

}

function deplegar(e){
    var padre = e.currentTarget;
    padre.parentNode.lastChild.setAttribute("style","display:block");
    
    // setInterval(()=>{
    //     padre.parentNode.lastChild.setAttribute("style","display:none");       
    // },3000)

    setTimeout(()=>{
        padre.parentNode.lastChild.setAttribute("style","display:none"); 
    },3000); 
    }

function aumentar(e){
    elemento=e.currentTarget;
    elemento.setAttribute("style","font-size:200%")
}
function reducir(e){
    elemento=e.currentTarget;
    elemento.setAttribute("style","font-size:100%")
}

function creararbol(){
    var partidos = document.createElement("div");
    partidos.setAttribute("id","partidosAjax");
    var contenedor = document.getElementById("contenedor");
    contenedor.appendChild(partidos);

    var equipos;
    var descudo;
    var escudo;
    var equipo;
    var resultado;
    var desordenada;
    var ordenada;
    var enlace;

    MYJSON.forEach(elemento=>{

        equipos=document.createElement("div");
        equipos.className="equipos";
        equipos.setAttribute("style","display: inline-grid")
        partidos.appendChild(equipos);

        descudo = document.createElement("div");
        descudo.className="escudo";
        descudo.addEventListener("mouseover", deplegar, false)
        equipos.appendChild(descudo);

        escudo= document.createElement("img");
        escudo.src=elemento.url_escudo_eq1;
        escudo.alt=elemento.nombre_eq1
        escudo.setAttribute("style","width: 50px")
        descudo.appendChild(escudo)

        equipo=document.createElement("div")
        equipo.className="equipo"
        equipo.textContent=elemento.nombre_eq1
        equipos.appendChild(equipo)

        resultado=document.createElement("div")
        resultado.className="resultado"
        resultado.textContent=elemento.resultado_eq1
        resultado.addEventListener("mouseenter", aumentar, false)
        resultado.addEventListener("mouseleave", reducir, false)
        equipos.appendChild(resultado)

        resultado=document.createElement("div")
        resultado.className="resultado"
        resultado.textContent=elemento.resultado_eq2
        resultado.addEventListener("mouseenter", aumentar, false)
        resultado.addEventListener("mouseleave", reducir, false)
        equipos.appendChild(resultado)

        equipo=document.createElement("div")
        equipo.className="equipo"
        equipo.textContent=elemento.nombre_eq2
        equipos.appendChild(equipo)

        descudo = document.createElement("div");
        descudo.className="escudo";
        descudo.addEventListener("mouseover", deplegar, false)
        equipos.appendChild(descudo);

        escudo= document.createElement("img");
        escudo.src=elemento.url_escudo_eq2;
        escudo.alt=elemento.nombre_eq2
        escudo.setAttribute("style","width: 50px")
        descudo.appendChild(escudo)

        desordenada = document.createElement("ul");
        desordenada.setAttribute("style","display:none")
        equipos.appendChild(desordenada);

        ordenada = document.createElement("li");
        desordenada.appendChild(ordenada);
        enlace = document.createElement("a")
        enlace.href="/"+elemento.nombre_eq1+elemento.nombre_eq2+"/"
        enlace.textContent="Cŕonica";
        desordenada.appendChild(enlace);

        ordenada = document.createElement("li");
        desordenada.appendChild(ordenada);
        enlace = document.createElement("a")
        enlace.href="/"+elemento.nombre_eq1+elemento.nombre_eq2+"/asilovivimos.html"
        enlace.textContent="Así lo vivimos";
        desordenada.appendChild(enlace);

    
        
    })

}
const MYJSON = 
[
    {
        url_escudo_eq1: "https://cdn-icons-png.flaticon.com/256/2875/2875404.png",
        nombre_eq1: "Real Madrid",
        resultado_eq1: "3",
        url_escudo_eq2: "https://cdn-icons-png.flaticon.com/256/2875/2875404.png",
        nombre_eq2: "Barcelona",
        resultado_eq2: "1"
    },
    {
        url_escudo_eq1: "https://cdn-icons-png.flaticon.com/256/2875/2875404.png",
        nombre_eq1: "Atlético de Madrid",
        resultado_eq1: "2",
        url_escudo_eq2: "https://cdn-icons-png.flaticon.com/256/2875/2875404.png",
        nombre_eq2: "Sevilla FC",
        resultado_eq2: "2"
    },
    {
        url_escudo_eq1: "https://cdn-icons-png.flaticon.com/256/2875/2875404.png",
        nombre_eq1: "Valencia CF",
        resultado_eq1: "1",
        url_escudo_eq2: "https://cdn-icons-png.flaticon.com/256/2875/2875404.png",
        nombre_eq2: "Real Betis",
        resultado_eq2: "0"
    },
    {
        url_escudo_eq1: "https://cdn-icons-png.flaticon.com/256/2875/2875404.png",
        nombre_eq1: "Villarreal CF",
        resultado_eq1: "4",
        url_escudo_eq2: "https://cdn-icons-png.flaticon.com/256/2875/2875404.png",
        nombre_eq2: "Athletic Club",
        resultado_eq2: "2"
    }

];
