/*Escribe una función llamada "addArrayProperty(obj, key, array)". 
Dado un objeto, una clave y un array, 
"addArrayProperty" establece una nueva propiedad sobre el objeto en la clave dada, con su valor establecido en el array dado.
Definicion:
En JavaScript, un objecto es un entidad independiente con propiedades y tipos.  */
 

//EJERCICIO 1

var myObj = {};
var myStr = 'myProperty';
var myArray = [1, 3];

addArrayProperty(myObj, "myProperty", myArray);
console.log(myObj.myProperty);

//retorna 1,3

/* 
let myObj = {};
let myStr = 'myProperty';
let myArray = [1, 3];

addArrayProperty(myObj, "myProperty", myArray);
console.log(myObj.myProperty);

Pregunta:
¿ Por qué con let no me retorna el 1,3?
(VM239:1 Uncaught SyntaxError: Identifier 'myObj' has already been declared
    at <anonymous>:1:1)
*/

// EJERCICIO 2 " CONTADOR DE PROPIEDADES"

 /*Dado un objeto como parámetro, contar la cantidad de propiedades
 que este contiene y retornarlo. */

 const objectPropertiesCounter = {
  name: 'John',
  lastname: 'Doe' 
 };
 
 // Para sacar las propiedades (keys)
 /* objects.keys = a las propiedades de los objetos
 (objectPropertiesCounter) = es la constante
 length= recorrido  */

 let output = Object.keys(objectPropertiesCounter).length;
 console.log(output); // ve las propiedades y las cuenta 
 console.log(Object.keys(objectPropertiesCounter)); // nombre de propiedades name y lastname


 //EJERCICIO 3 removeStringValuesLongerThan

  /*Dado un número y un objeto,"removeStringValuesLongerThan" elimina cualquier propiedad en el objeto
   dado cuyos valores son cadenas de texto más largas que el número dado. */
   var obj = {
    name: 'Montana',
    age: 20,
    location: 'Texas'
  };
  removeStringValuesLongerThan(6, obj);
  console.log(obj); // { age: 20, location: 'Texas' }
  
  function removeStringValuesLongerThan(num, obj) {
    for (str in obj){
      if (typeof(obj[str]) === 'string' && obj[str].length >= num){
        delete obj[str];// FUNCION PARA BORRAR
      }
    }
  }

//EJERCICIO 4 getElementOfArrayProperty, funcion para dar condiciones en el retorno

var obj = {
  key: ['Jamil', 'Albrey']
 };
 var output = getElementOfArrayProperty(obj, 'key', 0); 
 console.log(output); // --> 'Jamil'
 
 function getElementOfArrayProperty(obj, key, index) {
   if ( obj[key] && obj[key].length && Array.isArray(obj[key]) && index >= 0 && index < obj[key].length ){
     return obj[key][index];
   }
   return undefined;
 }

 // CON LET

 let obj = {
  key: ['Jamil', 'Albrey']
 };
 const getElementOfArrayProperty = (obj, key, index) => {
  if ( obj[key] && obj[key].length && Array.isArray(obj[key]) && index >= 0 && index < obj[key].length ){
    return undefined;
  }
  
 }
 
 //EJERCICIO 5 

 var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';

  for(person in customerData){

      if (person === firstName){

        if(customerData[person].visits === 1){
          greeting = " Bienvenido nuevamente" + person + "! Estamos felices que te hayamos gustado la priemra vez!";
        }else if(customerData[person].visits > 1){
          greeting = "Bienvenido nuevamente " + person + "!Estamos feices de verte nuevamente";
        }
        return greeting;
      }else {
        greeting = "Binvenido, ¿vienes por primera vez?";
      }
  }
	
  return greeting;
}


// Testing
console.log(greetCustomer('Howard'))
console.log(greetCustomer('Carol'))
console.log(greetCustomer('Joe'))
console.log(greetCustomer('Carrie'))

// con let
const customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
 };
 
 const greetCustomer = (firstName) => {
  var greeting = '';
 
  for(person in customerData){
 
      if (person === firstName){
 
        if(customerData[person].visits === 1){
          greeting = "Bienvenido nuevamente " + person + " Estamos felicies que te hayamos gustado la primera vez";
        }else if(customerData[person].visits > 1){
          greeting = "Bienvenido nuevamente, " + person + " Estamos felices de verte nuevamente";
        }
        return greeting;
      }else {
        greeting = "Bienvenido! vienes por primera vez?";
      }
  }
     
  return greeting;
 }
 
 
 console.log(greetCustomer('Howard'));
 console.log(greetCustomer('Carol'));
 console.log(greetCustomer('Joe'));
 console.log(greetCustomer('Carrie'));


 //EJERCICIO 6 'transformFirstAndLast

 transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']);

function transformFirstAndLast(array) {
 
 var first = [array[0]];
 var last = array[array.length-1]
 //console.log(first);
 //console.log(last);
 
 var myObject = {};
 myObject[first] = last;
 return myObject;
 
}
 
// EJERCICIO 7

var obj ={
  'name': 'Sam',
  'age': 25,
  'hasPets': true
 };
 console.log(Object.keys(obj));
 
 function getAllKeys(obj) {
  var result=[ ];
  for (var key in obj){
    result.push(key);
  }
  return result;
 }
 
 console.log(getAllKeys(obj));


 // CON LET

 let obj ={
  'name': 'Sam',
  'age': 25,
  'hasPets': true
 };
 console.log(Object.keys(obj));
 
  let getAllKeys= (obj) => {
  let result=[ ];
  for (var key in obj){
    result.push(key);
  }
  return result;
 }
 
 console.log(getAllKeys(obj));


 //EJERCICIO 8

 input = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]; // Lo que entra 
const fromListToObject = (array) => {
Object = {}
 for(var i = 0; i < array.length;i++){
   let newArray = array[i];
   Object[newArray[0]] = newArray[1]
 }
return Object;
}
let output = fromListToObject(input);
console.log(output);

//EJERCICIO 9 

let persons =
{
 name : 'Krysten',
 age : 33,
 hasPets : false
}

const listAllValues = (obj) => {

 let result = [];
 
 for (let key in obj) {
   if (obj.hasOwnProperty(key)) {  //El método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada
     result.push(obj[key]);
   }
 }
   return result;
 }
 listAllValues(persons);

 // EJERCICIO 10  transformEmployeeData





 // EJERCICIO 11
 