'use strict';

module.exports = exports = {};

exports.argumentLengthError = (argLength, expectedLength) => {
  if(argLength < expectedLength) throw new Error(`exports.requires ${expectedLength} arguments. Only ${argLength} provided.`);
};
exports.typeError = (objType, expectedType) => {
  if(objType !== expectedType) throw new Error(`exports.expected ${expectedType} type parameter but recieved ${objType} instead.`);
};


exports.map = function(arr, callback) {
  let argumentLength = arguments.length;
  this.argumentLengthError(argumentLength, 2);
  this.typeError(Array.isArray(arr) ? 'array' : 'not an array', 'array');
  this.typeError(typeof callback, 'function');
  return Array.prototype.map.call(arr, callback);
};

exports.filter = function(arr, callback) {
  let argumentLength = arguments.length;
  this.argumentLengthError(argumentLength, 2);
  this.typeError(Array.isArray(arr) ? 'array' : 'not an array', 'array');
  this.typeError(typeof callback, 'function');
  return Array.prototype.filter.call(arr, callback);
};

exports.reduce = function(arr, callback, counter=arr[0]) {
  let argumentLength = arguments.length;
  this.argumentLengthError(argumentLength, 3);
  this.typeError(Array.isArray(arr) ? 'array' : 'not an array', 'array');
  this.typeError(typeof callback, 'function');
  return Array.prototype.reduce.call(arr, callback, counter);
};

exports.concat = function(firstArray, secondArray) {
  let argumentLength = arguments.length;
  this.argumentLengthError(argumentLength, 2);
  this.typeError(Array.isArray(firstArray) ? 'array' : 'not an array', 'array');
  this.typeError(Array.isArray(secondArray) ? 'array' : 'not an array', 'array');
  return Array.prototype.concat.apply(firstArray, secondArray);
},

exports.splice = function(arr, startingIndex, amountToDelete, ...items) {
  let argumentLength = arguments.length;
  this.argumentLengthError(argumentLength, 2);
  this.typeError(Array.isArray(arr) ? 'array' : 'not an array', 'array');
  this.typeError(typeof startingIndex, 'number');
  if(amountToDelete) this.typeError(typeof amountToDelete, 'number');
  return Array.prototype.splice.call(arr, startingIndex, amountToDelete, ...items);
};
