//funcion que recibe un numero y devuleve si es primo o no
const trialDivision = (number) => {
  let counter = 0;
  let module = 0;

//ciclo que recorre desde el numero ingresado hasta uno para realizarle el modulo
  for (let j = 1; j <= number; j++) { 
    module = number % j;

    if (module == 0) { //si el modulo es igual a cero quiere decir que es divisible por el numero y aumneto el contador en uno
      counter++;
    }

  }
  if (counter == 2) { //si solo se encontraron dos numeros con modulo cero entonces es primo
    return `${number} es primo`;
  } else { return `${number} NO es primo`; }

}

module.exports = trialDivision;