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





const techs = ["node", "js", "node", "deno", "js", "node"];

const retornarConteo = (lista) => {

  const mapaConteo = {};

 //creamos la función que va a retornar la lista que se pide,
 //depues creamos adentro un objeto vacío y extraemos con for of cada tech
 //miramos dentro del objeto usando el nombre de la tecnologia como key
 //si ya existe en el array le suma 1, si no lo crea y le asigna 1
 //por fuera de la condición retornamos
 //mostramos
  for (const tecnologia of lista) {
    if (mapaConteo[tecnologia]) {
      mapaConteo[tecnologia] = mapaConteo[tecnologia] + 1;
    } else {
      mapaConteo[tecnologia] = 1;
    }
  }

  return mapaConteo;
};

console.log(retornarConteo(techs));
