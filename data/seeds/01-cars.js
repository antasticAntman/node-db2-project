// STRETCH
const cars = [
    {
        vin: '4USCN33411PUAZTKR',
        make: "toyota",
        model: "prius",
        mileage: 214000,
        title: "clean",
        transmission: "manual",
    },
    {
        vin: 'WAUBFAFM8APFFWZGT',
        make: "ford",
        model: "mustang",
        mileage: 250000,
        title: "salvage",
    },
    {
        vin: 'JM1FE1CMXAESLEMJU',
        make: "toyota",
        model: "corolla",
        mileage: 5000,
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}