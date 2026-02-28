var a = 10
let b = 20
const c = 30

/*
Reto adicional:

Modifica el código para que:

a NO cambie
b NO cambie
c NO cambie
Sin eliminar el if.

*/

if (true) {
  var a = a
  b = b
  const c = 300
 
}

/*

if (true) {
  var a = 100
  let b = 200
  const c = 300
}

*/

console.log(a)
console.log(b)
console.log(c)

//Resultado: imprime 100 , imprime 20, imprime 30

//Porque?

//Ocurre porque aunque se declara var afuera en la condicion se puede modificar por ende el 100,
//con let b al principio podemos actualizar su valor adentro del if pero no declararlo de nuevo por ende imprime 20
//con const c la cuestión es que no se puede ni volver a declarar ni actualizar entonces todas se elevan a su limite de alcance



const limpiarTexto = (texto) => {
    
    console.log(texto.toLowerCase());
    console.log(texto.trim());
    //console.log(texto.replace(/\s+/g, ' '));
    
   return texto.trim().replace(/\s+/g, ' '); 
   

}

limpiarTexto(" Node JS ES6 ");

