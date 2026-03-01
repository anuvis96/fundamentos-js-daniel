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
 //despues creamos adentro un objeto vacío y extraemos con for of cada tech
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



const encontrarMayor = (numeros) => {

  //sabemos que el tamaño del input que llega es [4, 10, 2, 99, 23].length es 5,
  //desde 0 hasta 4

  //debo recorrer lo que ingresa
  //se asune que el primero es el mayor para poder ir comparando
  //recorremos el array
  //en el if se compara el numero actual (numeros[i]) es más grande que el que suponemos
  //si se cumple que es mayor se convierte en ese número más grande 
  //retornamos y mostramos
  var mayor = numeros[0];
  for (let i = 0; i < numeros.length; i++){

    if(numeros[i] > mayor){

      mayor = numeros[i];

    }

  }

    return mayor;
  
}

const resultado = encontrarMayor([4, 10, 2, 99, 23]);
console.log("El número mayor es:", resultado)



//se crea el objeto con la info original
//se crea la función que recibe el objeto actual y retornamos el nuevo directamente
//utilizando Spread Operator para "esparcir" las propiedades del objeto viejo
//dentro de uno nuevo y añadir la propiedad extra sin tocar el original
//Comparamos al final que la función es pura:
//(no modifica variables externas ni los objetos que recibe como parámetros)

const lista_persona_original = {
  name: "Daniel",
  age: 30,
  role: "developer"
};

const retornarNuevo = (lista_persona_original) => {

  return { ...lista_persona_original, isAdult: true };
  
}


const objetoFinal = retornarNuevo(lista_persona_original);

console.log("Original:", lista_persona_original);
console.log("Nuevo:", objetoFinal);
