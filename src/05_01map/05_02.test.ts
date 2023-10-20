import {CityType} from "../02/02_02";
import {createMessages, getTitleOfStreetTitles} from "./05_02";
import exp from "constants";

export let city: CityType;
beforeEach(() => {
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
                        title: 'Kennedy Str'
                    }
                },

            }
        ],
        population: 15000000
    }
})

test('list of street titles of government buildings', () => {
    let titles = getTitleOfStreetTitles(city.governmentBuildings)

    expect(titles[0]).toBe('Central Str')
    expect(titles[1]).toBe('Kennedy Str')
    expect(titles.length).toBe(2)

})
test('create greeting messages for streets', () => {
    let messages = createMessages(city.houses)
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello guys from Avenue')
    expect(messages[1]).toBe('Hello guys from Happy Street')
    expect(messages[2]).toBe('Hello guys from Happy Street')
})