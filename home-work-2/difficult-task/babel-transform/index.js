"use strict";

var _data = require("./data");

var _classes = require("./classes");

// экземпляры классов
var employersNames = new _classes.Employers(_data.employers);
var sumSponsors = new _classes.Sponsors(_data.eu, _data.rus);
var calcCash = new _classes.CalcCash(_data.cash);
var business = new _classes.Bussiness('Sam', 'Victor', calcCash.calc, employersNames.emp, sumSponsors.sum); // результат

business.make();