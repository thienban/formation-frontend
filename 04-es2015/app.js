let favoriteCityID = "rome"
console.log(favoriteCityID)
favoriteCityID = "paris"
console.log(favoriteCityID)

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
// citiesId = []
citiesId.push("tokyo")
console.log(citiesId)

function getWeather(cityId) {
    let city = cityId
    let temperature = 20
    return { city, temperature }
}
const weather = getWeather(favoriteCityID)
console.log(weather)
