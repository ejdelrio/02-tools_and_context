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
  this.typeError(Array.isArray(arr) ? 'array' : typeof arr, 'array');
  this.typeError(typeof callback, 'function');
  return Array.prototype.map.call(arr, callback);
};

exports.filter = function(arr, callback) {
  let argumentLength = arguments.length;
  this.argumentLengthError(argumentLength, 2);
  this.typeError(Array.isArray(arr) ? 'array' : typeof arr, 'array');
  this.typeError(typeof callback, 'function');
  return Array.prototype.filter.call(arr, callback);
};

exports.reduce = function(arr, callback, count) {

  let argumentLength = arguments.length;
  this.argumentLengthError(argumentLength, 2);
  if(count === undefined) count = arr[0];

  this.typeError(Array.isArray(arr) ? 'array' : typeof arr, 'array');
  this.typeError(typeof callback, 'function');
  return Array.prototype.reduce.call(arr, callback, count);
};

exports.concat = function(firstArray, secondArray) {
  let argumentLength = arguments.length;
  this.argumentLengthError(argumentLength, 2);
  this.typeError(Array.isArray(firstArray) ? 'array' : typeof firstArray, 'array');
  this.typeError(Array.isArray(secondArray) ? 'array' : typeof secondArray, 'array');
  return Array.prototype.concat.apply(firstArray, secondArray);
},

exports.splice = function(arr, startingIndex, amountToDelete, ...items) {
  let argumentLength = arguments.length;
  this.argumentLengthError(argumentLength, 2);
  this.typeError(Array.isArray(arr) ? 'array' : typeof arr, 'array');
  this.typeError(typeof startingIndex, 'number');
  if(amountToDelete) this.typeError(typeof amountToDelete, 'number');
  return Array.prototype.splice.call(arr, startingIndex, amountToDelete, ...items);
};
