let favoriteCityID = "rome"
console.log(favoriteCityID)
favoriteCityID = "paris"
console.log(favoriteCityID)

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
// citiesId = []
citiesId.push("tokyo")
console.log(citiesId)

function getWeather(cityId) {
    let city = cityId.toUpperCase()
    let temperature = 20
    return { city, temperature }
}
const weather = getWeather(favoriteCityID)
console.log(weather)

const { city, temperature } = weather
console.log(city)
console.log(temperature)

//Rest operator
let [parisID, nycId, ...othersCitiesId] = citiesId
console.log(parisID)
console.log(nycId)
console.log(othersCitiesId.length)

//class
class Trip {

    get price() {
        return this._price
    }

    set price(newPrice) {
        this._price = newPrice
    }
    constructor(id, name, imageUrl) {
        this.id = id
        this.name = name
        this.imageUrl = imageUrl
    }
    toString() {
        return "Trip" + " [ " + this.id + this.name + this.imageUrl + this._price + "]"
    }
    static getDefaultTrip() {
        return new Trip("rio - de - janeiro", "Rio de Janeiro", "img /rio-de-janeiro.jpg")
    }
}

let parisTrip = new Trip("paris", "Paris", ": img/paris.jpg")
parisTrip.price = 100
const defaultTrip = Trip.getDefaultTrip()

console.log(parisTrip)
console.log(parisTrip.name)
console.log(parisTrip.toString())
console.log(defaultTrip.toString())

//Heritage
class FreeTrip extends Trip {
    constructor(id, name, imageUrl, price) {
        super(id, name, imageUrl)
        this.price = 0
    }
}
const freeTrip = new FreeTrip("nantes", "Nantes", "images/nantes.jpg")
console.log(freeTrip.toString())

//Last Part 
class TripService {
    constructor() {
        let trip1 = new Trip('paris', 'Paris', 'img/paris.jpg')
        let trip2 = new Trip('nantes', 'Nantes', 'img/nanges.jpg')
        let trip3 = new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')
    }
    findByName(tripName) {
        return new Promise(function (resolve, reject) {
            if () {
                resolve(id)
            } else ()
            reject("")
        }
}
class PriceService {
    constructor() {
        this.priceMap = new Map();

        priceMarp.set('Paris', 100)
        priceMap.set('rio - de - janeioro', 800)
    }
    findPriceByTripId(tripId) {
    }
}