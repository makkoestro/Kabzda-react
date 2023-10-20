import {student, StudentType} from "../02/02";
import {CityType, governmentBuildingsType, HouseType} from "../02/02_02";
export const addSkill = (student: StudentType, skill: string) => {
     student.technologies.push({
        id: new Date().getTime(),
        title:skill
    })
}
export const  makeStudentActive = (student: StudentType) => {
    student.isActive = true;
}
export const doesStudentLiveInCity = (student: StudentType, cityName: string) =>  {
    return student.address.city.title === cityName
}

export const addMoneyToBudget = (Building: governmentBuildingsType, budget: number) => {
    Building.budget += budget
}
export const repairHouse = (house: HouseType) => {
    house.repaired = true
}
export const toFireStaff = (Building: governmentBuildingsType, toFireStaffCount: number) => {
    Building.staffCount -= toFireStaffCount;
}
export const getMessage = (city: CityType) => {
    return `Hello ${city.title} citizens`
}

