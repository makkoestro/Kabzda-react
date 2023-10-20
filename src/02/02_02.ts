export type CityType = {
    title: string,
    houses: Array<HouseType>,
    governmentBuildings: Array<governmentBuildingsType>,
    population: number
}
export type HouseType = {
    id?: number
    buildetAt: number
    repaired: boolean
    address: addressType
}
type addressType = {
    number?: number
    street: StreetType
}
type StreetType = {
    title: string
}
export type governmentBuildingsType = {
    type: 'HOSPITAL' | 'FIRE STATION'
    budget: number,
    staffCount: number,
    address: addressType
}

type AddressStreetType = {
    title: string
}