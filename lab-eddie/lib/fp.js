'use strict';


const argumentLengthError = (argLength, expectedLength) => {
  if(argLength !== expectedLength) throw new Error(`Function requires ${expectedLength} arguments. Only ${argLength} provided.`);
};
const typeError = (objType, expectedType) => {
  if(objType !== expectedType) throw new Error(`Function expected ${expectedType} type parameter but recieved ${objType} instead.`);
};


function map(arr, callback) {
  let argumentLength = arguments.length;
  argumentLengthError(argumentLength, 2);
  typeError(Array.isArray(arr) ? 'array' : 'not an array', 'array');
  typeError(typeof callback, 'function');
  return Map.prototype.map.call(arr, callback);
}

function filter(arr, callback) {
  let argumentLength = arguments.length;
  argumentLengthError(argumentLength, 2);
  typeError(Array.isArray(arr) ? 'array' : 'not an array', 'array');
  typeError(typeof callback, 'function');
  return Map.prototype.filter.call(arr, callback);
}

function reduce(arr, callback, counter=arr[0]) {
  let argumentLength = arguments.length;
  argumentLengthError(argumentLength, 3);
  typeError(Array.isArray(arr) ? 'array' : 'not an array', 'array');
  typeError(typeof callback, 'function');
  return Map.prototype.reduce.call(arr, callback, counter);
}

function concat(firstArray, secondArray) {
  let argumentLength = arguments.length;
  argumentLengthError(argumentLength, 2);
  typeError(Array.isArray(firstArray) ? 'array' : 'not an array', 'array');
  typeError(Array.isArray(secondArray) ? 'array' : 'not an array', 'array');
  Map.prototype.concat.apply(firstArray, secondArray);
}

function splice (startingIndex, amountToDelete) {
  let argumentLength = arguments.length;
  argumentLengthError(argumentLength, 1);
  typeError(typeof startingIndex, 'number');
  typeError(typeof amountToDelete, 'number');
  Map.prototype.splice.apply(firstArray, secondArray);
}
