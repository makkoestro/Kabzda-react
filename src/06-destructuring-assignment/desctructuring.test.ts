import {ManType} from "../components/Desctructuring";

export {}



let man:ManType
beforeEach(() => {
    man = {
        name: 'Lex',
        age: 28,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Dobrovolskogo Street'
            }
        }
    }
})
test('', () => {


    let {name, age} = man
    let {address}=man
    let {title}=man.address.street
    expect(age).toBe(28)
    expect(name).toBe('Lex')
    expect(address.street.title).toBe('Dobrovolskogo Street')
    expect(title).toBe('Dobrovolskogo Street')

})

test('', () => {
    let lessons = [{title:'1'}, {title:'2'}, {title:'3'}]
    let [ls, ...restLessons]=lessons
    let [, les2]=lessons
    expect(ls.title).toBe('1')
    expect(restLessons.length).toBe(2)
    expect(les2.title).toBe('2')
})