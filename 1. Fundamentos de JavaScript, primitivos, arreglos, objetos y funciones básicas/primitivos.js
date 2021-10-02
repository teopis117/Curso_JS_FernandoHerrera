//el tipo de dato null la mayoria de gente lo conoce como objeto

let nombre= "peter";

console.log(nombre);
// let nombre="ben"; esta linea esta incorrecta ya que no podemos redeclarar una variable con el mismo nombre
nombre="Ben Parker";
console.log(nombre);

// de esta manera tambien podemos declarar una string
nombre="tia may";
nombre=`tia may`;

// para saber que tipo de variable es a la cual estamos apuntando con la palabra reservada typeof
console.log(typeof nombre);

nombre=123;
console.log(typeof nombre);

// cuando colocamos un tipo de variable entre comillas dobles js lo reconocera como string y no como booleano
let esMarvel=true;
console.log(typeof esMarvel);

// para js los enteros y flotantes son enteros

// de esta manera es recomendado hacerlo de esta manera
let superPoderDeSpiderMan;
console.log(superPoderDeSpiderMan);

let nulo=null;
console.log(nulo);

//tipo de dato symmbol

let sybol1= Symbol('a');
let sybol2= Symbol('a');

console.log( typeof sybol1);
console.log(typeof sybol2);