import {CityType} from "../02/02_02";
import exp from "constants";
import {addMoneyToBudget, getMessage, repairHouse, toFireStaff} from "./03";


export {}

let city: CityType

beforeEach(() => {
    //перед каждым тестом перезаписывает переменные
    city = {
        title: 'New-York',
        houses: [{
            buildetAt: 2012,
            repaired: false,
            address: {
                number: 56,
                street: {
                    title: 'Avenue'
                }
            }
        }, {
            buildetAt: 2013,
            repaired: false,
            address: {
                number: 70,
                street: {
                    title: 'OloloStrasse'
                }
            }
        }
            ,
            {
                buildetAt: 2014,
                repaired: false,
                address: {
                    number: 110,
                    street: {
                        title: 'RoflanStrasse'
                    }
                }
            }],
        governmentBuildings: [{
            type: 'HOSPITAL',
            budget: 20000,
            staffCount: 200,
            address: {
                street: {
                    title: 'Central Str'
                }
            },

        },
            {
                type: 'FIRE STATION',
                budget: 40000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                },

            }
        ],
        population: 15000000
    }
})
;
test.skip('test city should contain 3 houses', () => {
    expect(city.houses.length).toBe(3)
    expect(city.houses[0].buildetAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(true)
    expect(city.houses[0].address.number).toBe(56)
    expect(city.houses[0].address.street.title).toBe('Avenue')
})
test.skip('test should contain fire station and hospital', () => {
    expect(city.governmentBuildings.length).toBe(2)
    expect(city.governmentBuildings[0].type).toBe('HOSPITAL')
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe('Central Str')
})

test('Budget should be changed for Hospital' , () => {
    addMoneyToBudget(city.governmentBuildings[0], 20000)
    expect(city.governmentBuildings[0].budget).toBe(40000)
})
test('Budget should be changed for Fire Station' , () => {
    addMoneyToBudget(city.governmentBuildings[1], -10000)
    expect(city.governmentBuildings[1].budget).toBe(30000)
})
test('House should be repaired', () => {
    repairHouse(city.houses[1]);
   expect(city.houses[1].repaired).toBeTruthy()
})
test('Staff should be hired', () => {
    toFireStaff(city.governmentBuildings[0], 20);
    expect(city.governmentBuildings[0].staffCount).toBe(180)
})
test('Greeting message should be correct', () => {
    const message = getMessage(city)
    expect(message).toBe('Hello New-York citizens')
})