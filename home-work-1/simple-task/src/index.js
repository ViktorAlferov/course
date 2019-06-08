import {employersNames} from './employers'
import {sponsors, calcCash} from './calc'

class Bussiness {
    constructor(owner, director = 'Victor', cash, emp) {
        this.owner = owner
        this.director = director
        this.cash = cash
        this.emp = emp
    }
    make() {
        const {eu, rus} = sponsors
        const sumSponsors = [...eu, ...rus, 'unexpected sponsor']
        const [badSponsor] = eu
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`)
        console.log(`And we have a sponsors:`)
        console.log(...sumSponsors)
        console.log(`Note. Be careful with ${badSponsor}. It's a huge risk.`)
    }
}

const business = new Bussiness('Sam', 'Victor', calcCash, employersNames)

business.make()