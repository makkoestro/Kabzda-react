import {ManType} from "./05_01";

let people:Array<ManType> = []
beforeEach(() => {
    people = [
        {name: 'Lex Murza', age:28},
        {name: 'Zhen Murza', age:37},
        {name: 'Alyasyaf Basanskiy', age:32}
    ]
})

test('should get array of greeting messages', () => {
    const messages = people.map(man => `Hello, ${man.name.split(' ')[0]}!`)

    expect(messages[0]).toBe('Hello, Lex!')
    expect(messages[1]).toBe('Hello, Zhen!')
    expect(messages[2]).toBe('Hello, Alyasyaf!')
    expect(messages.length).toBe(3)
})
