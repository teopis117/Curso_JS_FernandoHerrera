
// 2c=dos de treboles
// 2d= 2 de diamantes
// 2h=2 de corasones
// 2s=2 de espadas


let baraja=[];
const tipos=['C','D','H','S'];
const especiales=['A','J','Q','K'];
let puntosJugador=0;
let puntosComputadora=0;

// Referencias
const pedir=document.querySelector('#btnPedir');
const puntosHTML=document.querySelectorAll('small');
const divCartasJugador=document.querySelector('#jugador-cartas');
const detener=document.querySelector('#btnDetener');
const divCartasComputadora=document.querySelector('#computadora-cartas');

const btnNuevo=document.querySelector('#btnNuevo');

// crear un deck

// esta funcion crea un nuevo deck
const crearDeck=()=>
{
    for(let i =2;i<=10;i++)
    {
        for(let tipo of tipos)
        {
            baraja.push(i+tipo);
        }
    }
    for(let tipo of tipos)
    {
        for(let espe of especiales)
        {
            
            baraja.push(espe+tipo);
        }
    }
    
   
    baraja=_.shuffle(baraja);
    
    return baraja;
}



crearDeck();


// esta funcion me permite tomar una carta
const pedirCarta=()=>
{
    console.log(baraja);
    if(baraja.length==0)
    {

        throw('no hay cartas en el deck');;
    }

    let carta=baraja.pop();

    return carta;
}

 const valorCarta=(carta)=>
 {
    // todas las strings pueden ser utilizados como arreglos

     // substring
     const valor=carta.substring(0,carta.length-1);
    // let puntos=0;
     // isNaN nos dice con true si el contenido no es un numero
    // if(isNaN(valor))
    // {

    //     puntos=(valor==='A')?11:10;
    // }
    // else
    // {
     // convertir un string a un numero
    //     puntos=valor*1;
    // }
    // return puntos;

    return (isNaN(valor))?
    (valor==='A')?11:10
    :valor*1;


    
 }


//  turno de la computadora

const turnoComputador=(puntosminimo)=>
{
 do{
    const carta=pedirCarta();
    puntosComputadora+=valorCarta(carta);
    puntosHTML[1].innerText=puntosComputadora;
    const imgCarta=document.createElement('IMG');
    // ruta de la imagen
    imgCarta.src=`assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasComputadora.append(imgCarta);
    if(puntosminimo>21)
    {
        break;
    }
 }while((puntosComputadora<puntosminimo) && (puntosminimo<=21));

 setTimeout(() => {
    
    if(puntosComputadora===puntosminimo)
    {
        alert("nadie gana :c");
    }
    else if(puntosminimo>21)
    {
       alert("computadora gana");
    }
    else if(puntosComputadora>21)
    {
        alert("el jugador gana");
    }
    else
    {
        alert("computadora gana");
    }
    
}, 10);





}


//  EVENTOS

// callback funcion que se manda como argumento
pedir.addEventListener('click',()=>
{
    const carta=pedirCarta();
    puntosJugador+=valorCarta(carta);
    puntosHTML[0].innerText=puntosJugador;
    const imgCarta=document.createElement('IMG');
    // ruta de la imagen
    imgCarta.src=`assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);
    console.log(puntosJugador);

    if(puntosJugador>21)
    {
        console.warn('lo siento perdiste');
        pedir.classList.add("disabled");
        pedir.disabled= true;  
        turnoComputador(puntosJugador);
        detener.classList.add('disabled');
        detener.disabled=true;
    }
    else if(puntosJugador===21)
    {
        console.warn("21 genial");
        pedir.classList.add("disabled");
        turnoComputador(puntosJugador);
        detener.classList.add('disabled');
        detener.disabled=true;
    }
    
});

detener.addEventListener('click',()=>
{
    pedir.classList.add("disabled");
    pedir.disabled= true;
    turnoComputador(puntosJugador);
});


btnNuevo.addEventListener('click',()=>
{
    console.log(baraja);
    baraja=[];
    puntosComputadora=0;
    puntosJugador=0;
    
    puntosHTML[0].innerText=0;
    puntosHTML[1].innerText=0;
     divCartasComputadora.innerHTML='';
     divCartasJugador.innerHTML='';
    pedir.classList.remove("disabled");
    detener.classList.remove("disabled");
     pedir.classList.add("enable");
     detener.classList.add("enable");
     pedir.disabled= false;
     detener.disabled= false;
     
    crearDeck();

})
