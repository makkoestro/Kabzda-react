import {demolishHouses, getBuildingsWithStaffCountGreaterThen} from "./04_02";
import {CityType} from "../02/02_02";


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

test('Houses should be destroyed', () => {
    demolishHouses(city, 'Happy Street')
    expect(city.houses.length).toBe(1)
    expect(city.houses[0].address.street.title).toBe('Avenue')

})
test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 150)
    expect(buildings[0].type).toBe('HOSPITAL')

})