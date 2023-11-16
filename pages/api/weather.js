import 'dotenv/config'

export default async function handler(req, res) {
    try {
        const data = await fetch(
          "http://api.openweathermap.org/geo/1.0/direct?" + 
          `q=${"London"}&limit=1&appid=${process.env.WEATHER_API_KEY}`
          )
          .then(coordData => coordData.json())
          .then(coordData => fetch(
            "https://api.openweathermap.org/data/2.5/weather"
            +`?lat=${coordData[0].lat}&lon=${coordData[0].lon}&appid=${process.env.WEATHER_API_KEY}`))
          .then(weatherData => weatherData.json())
        
        res.status(200).json({ data })
      } catch (err) {
        res.status(400)
      }
  }