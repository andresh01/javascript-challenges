//funcion que recibe un numero y retorna el factorial de ese numero
const factorial = (number) => {
  let acu = 0; //acumulador se inicia en cero

  acu = (number - 1) * number //se multiplican los dos ultimos numeros y se acumula
  number = number - 2 //se le asigna un valor nuevo al numero descartando los dos anteriores

  //ciclo hasta que el numero a multiplicar sea cero 
  while (true) {
    acu = number * acu

    number = number - 1
    if (number == 0) {
      break
    }
  }
  return acu;
}

module.exports = factorial;