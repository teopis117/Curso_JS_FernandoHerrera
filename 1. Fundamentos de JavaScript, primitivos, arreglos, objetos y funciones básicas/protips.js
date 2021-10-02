function crearPersona(nombre,apellido)
{
return {nombre,
        apellido,}
// return {nombre:nombre,
//         apellido:apellido,}
}


const crearPersona2=()=>
{
    // retornamos esto como un objeto y no como funcion
    return  {nombre,apellido};
}

// de esta manera podemos saber los argumentos con arrowfunction
const imprimirArgumentos2=(...arguments)=>
{
    // console.log(arguments);
}


function imprimirArgumentos()
{
    return arguments;
}

const argumentos=imprimirArgumentos(1,2,3,4,5,"jose","carlos");

//  imprimirArgumentos2(1,2,3,4,5,"jose","carlos"); 


 console.log(argumentos);
const persona={edad:23,
                años:13}
 const {edad,años,}=persona;

 console.log(edad);
 console.log(años);


//  destructuracion de un argumento
 const imprimePropiedades=({edad,años})=>
 {

    console.log({edad});
    console.log({años});

 }
 imprimePropiedades(persona);