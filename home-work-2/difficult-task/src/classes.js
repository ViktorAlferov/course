class Employers {
    constructor(employers) {
        this.employers = employers.filter((name) => {
            return name.length > 0})
            .map((item) => item.toLowerCase().trim())
    }
    get emp() {
        return this.employers
    }
}

class Sponsors {
    constructor(eu, rus) {
        this.eu = eu
        this.rus = rus
    }

    get sum() {
        return this.eu.concat(this.rus)
    }
}

class CalcCash {
    constructor(cash) {
        this.cash = cash.reduce((allCash, current) => {
            return allCash + current
        }, 0)
    }

    get calc() {
        return this.cash
    }
}

class Bussiness {
    constructor(owner, director = 'Victor', cash, emp, sponsors) {
        this.owner = owner
        this.director = director
        this.cash = cash
        this.emp = emp
        this.sponsors = sponsors
    }
    make() {
        const [badSponsor] = this.sponsors
        const sumSponsors = [...this.sponsors, 'unexpected sponsor']
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`)
        console.log(`And we have a sponsors:`)
        console.log(...sumSponsors)
        console.log(`Note. Be careful with ${badSponsor}. It's a huge risk.`)
    }
}

export {Employers, Sponsors, CalcCash, Bussiness}