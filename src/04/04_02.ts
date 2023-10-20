import {CityType, governmentBuildingsType} from "../02/02_02";

export const demolishHouses = (city: CityType, Street: string) => {
    city.houses = city.houses.filter(house => house.address.street.title != Street)
}
export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<governmentBuildingsType>, number: number) => {
    return buildings.filter(building => building.staffCount > number)
}