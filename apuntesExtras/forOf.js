// un for of nos sirve para poder realizar ciertas lineas de codigo sobre cada iteracion por cada elemento del codigo

let iterable = [10, 20, 30];
let posicion=0;

// el iterador nos retorna el elemento
for(let iterador of iterable)
{
    console.log("di una vuelta por el elemento:"+iterador+" en la posicion:"+posicion);
    posicion++;
}

// ahora veremos como iteramos una cadena que es un string que es un objeto iterable

let palabra="hola mundo";
for(let iterador of palabra)
{
console.log(iterador)
}