let cityData = null

async function getData(name){
    const url = 'http://api.weatherapi.com/v1/current.json?key=469515ecce014f39ad995648231509&q='
    const response = await fetch(url+name)
    const data = await response.json()
    cityData = {
        name: data.location.name,
        temp: data.current.temp_c,
        humidity: data.current.humidity,
        feelslike: data.current.feelslike_c,
        wind: data.current.wind_kph
    }    
} 

// getData('london').then(cityData => {
//     console.log(cityData)
// })


const form = document.getElementById('weather-form')

form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const search = document.getElementById('search').value
    await getData(search)
    updateContent()
})

function updateContent(){
    const title = document.getElementById('title')
    const temp = document.getElementById('temp')
    const humidity = document.getElementById('humidity')
    const feelslike = document.getElementById('feelslike')
    const wind = document.getElementById('wind')
    title.textContent = cityData.name
    temp.textContent = `Temperature: ${cityData.temp}°C`
    humidity.textContent = `Humidity: ${cityData.humidity}%`
    feelslike.textContent = `Feels like: ${cityData.feelslike}°C`
    wind.textContent = `Wind: ${cityData.wind} km/h`
}