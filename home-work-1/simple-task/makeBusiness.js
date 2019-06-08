let employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']

let employersNames = employers.filter((name) => {
    return name.length > 0
})

employersNames = employersNames.map((item) => item.toLowerCase().trim())

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
}

const { cash } = sponsors
const calcCash = cash.reduce((allCash, current) => {
    return allCash + current
}, 0)

const makeBusiness = ({owner, director = 'Victor', cash, emp}) => {
    const {eu, rus} = sponsors
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor']
    const [badSponsor] = eu
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`)
    console.log(`And we have a sponsors:`)
    console.log(...sumSponsors)
    console.log(`Note. Be careful with ${badSponsor}. It's a huge risk.`)
}

makeBusiness({
    owner: 'Sam',
    cash: calcCash, 
    emp: employersNames
})