import {CityType} from "./02_02";
import {demolishHouses, getBuildingsWithStaffCountGreaterThen} from "../04/04_02";
import exp from "constants";

export {}
let city: CityType

beforeEach(() => {
    //перед каждым тестом перезаписывает переменные
    city = {
        title: 'New-York',
        houses: [{
            buildetAt: 2012,
            repaired: true,
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
                    title: 'Happy Street'
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
                        title: 'Happy Street'
                    }
                }
            }],
        governmentBuildings: [{
            type: 'HOSPITAL',
            budget: 200000,
            staffCount: 200,
            address: {
                street: {
                    title: 'Central Str'
                }
            },

        },
            {
                type: 'FIRE STATION',
                budget: 400000,
                staffCount: 100,
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
test('test city should contain 3 houses', () => {
    expect(city.houses.length).toBe(3)
    expect(city.houses[0].buildetAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(true)
    expect(city.houses[0].address.number).toBe(56)
    expect(city.houses[0].address.street.title).toBe('Avenue')
})
test('test should contain fire station and hospital', () => {
    expect(city.governmentBuildings.length).toBe(2)
    expect(city.governmentBuildings[0].type).toBe('HOSPITAL')
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe('Central Str')
})
