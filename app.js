/*Escribe una función llamada areValidCredentials.

Dando un nombre y una contraseña, areValidCredentials, devuelve true si el nombre es superior a 3 caracteres, Y, la contraseña tiene al menos 8 caracteres de longitud. De lo contrario, devuelve false.

Ejemplo de entrada:

var output = areValidCredentials('Ritu', 'mylongpassword');
console.log(output); // --> true*/


function areValidCredentials(name, password) {
  /*si el el largo del nombre es mayor a 3 e igual a el largo de password, 
  que sea mayor a 8, retorna verdadero(true), en caso contrario retorna falso*/
    return name.length < 3 === password.length < 8;
  
  }
 console.log(areValidCredentials);