// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = []
  var i = 0
  for (let clave in objeto){
    matriz[i]= [clave, objeto[clave]]
    i = i+1
  }
  return matriz
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  var cantidad = {}
  for (var i = 0 ; i < string.length ; i++){
    for (let clave in cantidad){
      if (string.charAt(i) === clave){
        cantidad[clave] = cantidad[clave] + 1
      }
    }
    if (cantidad[string.charAt(i)] === undefined){
      cantidad[string.charAt(i)] = 1
    }
  }
  return cantidad
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var palabra = ""
  for (var i = 0; i < s.length ; i++){
    if (s.charAt(i) === s.toLowerCase().charAt(i)){
      palabra = palabra + s.charAt(i)
    }
  }
  var j = s.length
  while(j > -1){
    if (s.charAt(j) === s.toUpperCase().charAt(j)){
      palabra = s.charAt(j) + palabra
    }
    j = j - 1
  }
  return palabra
}


function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var frase =[]
  var palabra = ""
  var array = str.split(" ")
  for (i = 0 ; i < array.length; i++){
    var palabra = ""
    var j = array[i].length
    while (j > 0){
      palabra = palabra + array[i].charAt(j-1)
      j = j - 1
    }
  frase.push(palabra)
  }
  var devolver = ""
  for (i = 0 ; i < frase.length; i++){
    if (i === 0){
      devolver = frase[i]
    } else {
      devolver = devolver + " " + frase[i]
    }
  }
  return devolver
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var string = numero.toString()
  var comparar = ""
  for (var i = 0 ; i < string.length ; i++){
    comparar = string.charAt(i) + comparar
  }
  if (comparar == numero){
    return "Es capicua"
  }else return "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var devolver = ""
  for (var i = 0; i < cadena.length ; i++){
    if (cadena.charAt(i) !== "a" && cadena.charAt(i) !== "b" && cadena.charAt(i) !== "c"){
      devolver = devolver + cadena.charAt(i)
    }
  }
  return devolver
}


function sortArray(arr) {

  var temporal = ""
  var j = 0
  while (j < arr.length) {
  for (var i = 1; i < arr.length ; i++){
    if (arr[i-1].length > arr[i].length){
      temporal = arr[i-1]
      arr[i-1] = arr[i]
      arr[i] = temporal
      }
    }
    j = j+1
  }
  return arr

  }


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var intersección = []
  for (var i = 0 ; i < arreglo1.length ; i++){
    for (var j = 0; j < arreglo2.length; j++){
      if (arreglo1[i] === arreglo2[j]){
        intersección.push(arreglo1[i])
      }
    }
  }
  return intersección
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
