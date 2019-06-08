const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
}

const { cash } = sponsors
const calcCash = cash.reduce((allCash, current) => {
    return allCash + current
}, 0)

export {sponsors, calcCash}