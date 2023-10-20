// @ts-ignore
import {CourseType} from "./04";

test('should take old men older than 90', () => {
    const ages = [15, 30, 60, 75, 90, 100]

    const predicate = (age: number) => {
        return age > 90
    }

    const oldAges = ages.filter(predicate)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})
test('corse should be cheaper than 160', () => {
    const courses = [{
        title: 'CSS',
        price: 110
    }, {
        title: 'JS',
        price: 200
    }, {
        title: 'React',
        price: 150
    }]

    const CheapPredicate = (course: CourseType) => {
        return course.price < 160
    }
    const cheapCorses = courses.filter(CheapPredicate)

    expect(cheapCorses.length).toBe(2)

})

test('get only completed tasks', () => {
    const tasks = [{
        id: 1, title: 'bread', isDone: false
    }, {
        id: 2, title: 'milk', isDone: true
    },
        {id: 3, title: 'salt', isDone: false},
        {id: 4, title: 'cheese', isDone: true}
    ]

    const comletedTasks = tasks.filter(elem => elem.isDone)

    expect(comletedTasks.length).toBe(2)
    expect(comletedTasks[0].title).toBe('milk')
    expect(comletedTasks[1].id).toBe(4)
})
