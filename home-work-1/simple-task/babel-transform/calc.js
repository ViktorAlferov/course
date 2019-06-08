"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcCash = exports.sponsors = void 0;
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
exports.sponsors = sponsors;
var cash = sponsors.cash;
var calcCash = cash.reduce(function (allCash, current) {
  return allCash + current;
}, 0);
exports.calcCash = calcCash;