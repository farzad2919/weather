import { defineStore } from 'pinia'

export const weatherData = defineStore('weather', {
  state : () => {
    return {
    cityName : "" ,
    weatherDescription : "" ,
    src : "" ,
    temperature : "" ,
    minTemperature : "" ,
    maxTemperature : "" ,
    pressure : "" ,
    humidity : "" ,
    windSpeed : "" ,
    feelsLike : "" ,
    longitude : "" ,
    latitude : "" ,
    }
  },

  actions : {
    async getWeather(payload = Object){
      if (payload[1] && payload[2]) {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${payload[1]},${payload[2]}&appid=${payload[0]}`)
          if(response.ok) {
            const responseData = await response.json();
            this.cityName = payload[1]
            this.weatherDescription = responseData.weather[0].main
            this.src = `https://openweathermap.org/img/wn/${responseData.weather[0].icon}.png`
            this.temperature = responseData.main.temp
            this.minTemperature = responseData.main.temp_min
            this.maxTemperature = responseData.main.temp_max
            this.pressure = responseData.main.pressure
            this.humidity = responseData.main.humidity
            this.windSpeed = responseData.wind.speed
            this.feelsLike = responseData.main.feels_like
            this.longitude = responseData.coord.lon
            this.latitude = responseData.coord.lat
          }else{alert ("enter your currect city");throw Error}
      }else{alert ("enter your city");throw Error}
    }
  }
})