"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bussiness = exports.CalcCash = exports.Sponsors = exports.Employers = void 0;

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.array.from");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Employers =
/*#__PURE__*/
function () {
  function Employers(employers) {
    _classCallCheck(this, Employers);

    this.employers = employers.filter(function (name) {
      return name.length > 0;
    }).map(function (item) {
      return item.toLowerCase().trim();
    });
  }

  _createClass(Employers, [{
    key: "emp",
    get: function get() {
      return this.employers;
    }
  }]);

  return Employers;
}();

exports.Employers = Employers;

var Sponsors =
/*#__PURE__*/
function () {
  function Sponsors(eu, rus) {
    _classCallCheck(this, Sponsors);

    this.eu = eu;
    this.rus = rus;
  }

  _createClass(Sponsors, [{
    key: "sum",
    get: function get() {
      return this.eu.concat(this.rus);
    }
  }]);

  return Sponsors;
}();

exports.Sponsors = Sponsors;

var CalcCash =
/*#__PURE__*/
function () {
  function CalcCash(cash) {
    _classCallCheck(this, CalcCash);

    this.cash = cash.reduce(function (allCash, current) {
      return allCash + current;
    }, 0);
  }

  _createClass(CalcCash, [{
    key: "calc",
    get: function get() {
      return this.cash;
    }
  }]);

  return CalcCash;
}();

exports.CalcCash = CalcCash;

var Bussiness =
/*#__PURE__*/
function () {
  function Bussiness(owner) {
    var director = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Victor';
    var cash = arguments.length > 2 ? arguments[2] : undefined;
    var emp = arguments.length > 3 ? arguments[3] : undefined;
    var sponsors = arguments.length > 4 ? arguments[4] : undefined;

    _classCallCheck(this, Bussiness);

    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
    this.sponsors = sponsors;
  }

  _createClass(Bussiness, [{
    key: "make",
    value: function make() {
      var _console;

      var _this$sponsors = _slicedToArray(this.sponsors, 1),
          badSponsor = _this$sponsors[0];

      var sumSponsors = [].concat(_toConsumableArray(this.sponsors), ['unexpected sponsor']);
      console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.cash, ". And our employers: ").concat(this.emp));
      console.log("And we have a sponsors:");

      (_console = console).log.apply(_console, _toConsumableArray(sumSponsors));

      console.log("Note. Be careful with ".concat(badSponsor, ". It's a huge risk."));
    }
  }]);

  return Bussiness;
}();

exports.Bussiness = Bussiness;