// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: "toyota",
        model: "prius",
        mileage: 214000,
        title: "clean",
        transmission: "manual",
    },
    {
        vin: '1111111161111',
        make: "ford",
        model: "mustang",
        mileage: 250000,
        title: "salvage",
    },
    {
        vin: '1111111111111',
        make: "toyota",
        model: "corolla",
        mileage: 5000,
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}