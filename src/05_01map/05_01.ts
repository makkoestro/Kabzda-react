

export type ManType = {
    name: string
    age: number
}
export const people: Array<ManType> = [
    {name: 'Lex Murza', age:28},
    {name: 'Zhen Murza', age:28},
    {name: 'Alyasyaf Basanskiy', age:28}
]
const dev = people.map(man => ({
    stack: ['html', 'css', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))
