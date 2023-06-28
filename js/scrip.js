/*let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');
for (let index = 0; index < cantidad; index) {
console.log(texto);
}

¿Qué tiene que hacer este código?
deberia poner en la consola el texto pedido en la variable texto y la cantidad de 
veces que uno ingrese en la variable cantidad
¿Por qué no cumple con su función?
no funciona por que falta aclarar que en la variable cantidad se pase
a un valor number y demas falta el simbolo ++ para que no se repita 
todo el codigo de manera infinita */

let cantidad = parseInt(prompt('INGRESE CANTIDAD DE REPETICIONES'));
let texto = prompt('INGRESE TEXTO A REPETIR');
for (let index = 0; index < cantidad; index++) {
console.log(texto);
}

/* 
let lados = prompt('INGRESE CANTIDAD DE LADOS');
for (let index = 0; index < lados; index++) {
if (index > 3) {
}
alert("lado");
}
¿Qué tiene que hacer este código?
por lo que se puede ver a simple vista, deberia de ejecutar un 
codigo donde cuando index llegue a un valor mayor a 3 se ejecutaria
el alert
¿Por qué no cumple con su función?
nuevamente en la variable lado no esta convertida a number
y tenemos puesto mal la sintaxis en el if por que
deberia estar la variable para que haga algo
¿Qué propuesta podrías hacer para que tenga sentido su uso?
 */


let lados = parseInt(prompt('INGRESE CANTIDAD DE LADOS'));
for (let index = 0; index < lados; index++) {
if (lados > 3) {
    alert("si hubieras puesto 3 creabas un triangulo")
}

alert("creaste un objeto de"+ ' '+ lados + ' ' +'lados');
}

let numero = parseInt (prompt('ingrese un numero'));

let resultado = numero % 2;

if (resultado == 0){
    alert ('el numero que ingresaste es par');
}
else {
    alert ('el numero que ingresaste es impar');
}
