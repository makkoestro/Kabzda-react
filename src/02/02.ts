
export type cityType = {
    title: string,
    country: string
}
type AddressType = {
    streetTitle: string
    city: cityType
}
type TechType = {
    id: number,
    title: string
}
export type StudentType = {
    name: string,
    age: number,
    isActive: boolean
    address: AddressType,
    technologies: Array<TechType>
}


export const student: StudentType = {
    name: 'Lex',
    age: 28,
    isActive: false,
    address: {
        streetTitle: 'Falkenbergerstrasse ',
        city: {
            title: 'Freiburg',
            country: 'Deutschland'
        }

    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'JS'
        }

    ]
}
console.log(student.technologies[2].title)