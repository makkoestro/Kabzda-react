import {governmentBuildingsType, HouseType} from "../02/02_02";

export let getTitleOfStreetTitles = (buildings: Array<governmentBuildingsType>) => {
    return buildings.map(house => house.address.street.title)
}
export let createMessages = (houses: Array<HouseType>) => {
    return houses.map(house => `Hello guys from ${house.address.street.title}`)
}

