import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveInCity, makeStudentActive} from "./03";
let student: StudentType

beforeEach(() => {
    student = {
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
})
test('new skill should be added to Lex', () => {
    addSkill(student, 'React')
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe('React')
    expect(student.technologies[3].id).toBeDefined()
})
test('new skill should be active', () => {
    makeStudentActive(student)
    expect(student.isActive).toBe(true)
})
test('should live in the city?', () => {
    let result1 = doesStudentLiveInCity(student, 'Moscow')
    let result2 = doesStudentLiveInCity(student, 'Freiburg')
    expect(result1).toBe(false)
    expect(result2).toBe(true)
})