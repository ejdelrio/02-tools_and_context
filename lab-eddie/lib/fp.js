'use strict';


const argumentLengthError = (argLength, expectedLength) => {
  if(argLength !== expectedLength) throw new Error(`Function requires ${expectedLength} arguments. Only ${argLength} provided.`);
};
const typeError = (objType, expectedType) => {
  if(objType !== expectedType) throw new Error(`Function expected ${expectedType} type parameter but recieved ${objType} instead.`);
};


function map (arr, callback) {
  let argumentLength = arguments.length;
  argumentLengthError(argumentLength, 2);
  typeError(Array.isArray(arr) ? 'array' : 'not an array', 'array');
  typeError(typeof callback, 'function');
}

function map (arr, callback) {
  let argumentLength = arguments.length;
  argumentLengthError(argumentLength, 2);
  typeError(Array.isArray(arr) ? 'array' : 'not an array', 'array');
  typeError(typeof callback, 'function');
}

function map (arr, callback) {
  let argumentLength = arguments.length;
  argumentLengthError(argumentLength, 2);
  typeError(Array.isArray(arr) ? 'array' : 'not an array', 'array');
  typeError(typeof callback, 'function');
}

function map (arr, callback) {
  let argumentLength = arguments.length;
  argumentLengthError(argumentLength, 2);
  typeError(Array.isArray(arr) ? 'array' : 'not an array', 'array');
  typeError(typeof callback, 'function');
}
