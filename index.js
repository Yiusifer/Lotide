// index.js
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual =  require('./assertEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const map = require ("./map");
const takeUntil = require("./takeUntil")
const without = require("./without")
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');


module.exports = {
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  map: map,
  takeUntil: takeUntil,
  without: without,
  head: head,
  tail: tail,
  middle: middle
};