import {employers, cash, eu, rus} from './data'
import {Employers, Sponsors, CalcCash, Bussiness} from './classes'

// Экземпляры классов
const employersNames = new Employers(employers)
const sumSponsors = new Sponsors(eu, rus)
const calcCash = new CalcCash(cash)
const business = new Bussiness('Sam', 'Victor', calcCash.calc, employersNames.emp, sumSponsors.sum)

// результат
business.make()