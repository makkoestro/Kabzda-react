
import exp from "constants";
type usersType = {
    [key: string]: {id: number, name:string}
}
let users:usersType
beforeEach(() => {})
 users = {
    101: {id: 101, name:'Lex'},
    4935: {id:  4935, name:'Mariam'},
    88: {id:  88, name:'Daniil'},
    200: {id: 200, name:'Vlad'},
}
test('should update corresponding user from obj', () => {
    users[88].name = 'Serg'
    expect(users[88].name).toBe('Serg')
    expect(users[200]).toEqual({id: 200, name:'Vlad'})

})
test('should update corresponding user from obj', () => {
    delete users[88]
    expect(users[88]).toBeUndefined()


})


