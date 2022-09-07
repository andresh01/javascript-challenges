//funcion que recibe un numero como parametro para saber hasta que numero llega el fibonacci
const fibonacci = (n) => {
  let previousNumber = 0;
  let actualNumber = 1; //numero con el que empieza el fibonacci
  let fibonacci = 0;

  //El ciclo se ejecuta hasta que el valor del fibonacci sea mayor al parametro (n) pasado 
  //a la funcion 
  while(true) {
    fibonacci = previousNumber + actualNumber;
    previousNumber = actualNumber;
    actualNumber = fibonacci;

    if (fibonacci>n){
      break;
    }
    console.log(fibonacci)
  }
  return fibonacci;
}

module.exports = fibonacci;