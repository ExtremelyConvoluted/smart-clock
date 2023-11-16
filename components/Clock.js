import { useState, useEffect } from 'react'

const daysOfWeek = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday'
]

const monthsOfYear = [
  'January', 'February', 'March',
  'April', 'May', 'June', 'July',
  'August', 'September', 'October',
  'November', 'December'
]

export default function Clock () {
  // Gets time and date
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date())
    }, 100)

    return () => clearInterval(id)
  }, [date])

  // Gets weather
  const [weather, setWeather] = useState()

  useEffect(() => {
    const id = setInterval(() => {
      fetch('/api/weather')
        .then(res => res.json())
        .then(res => setWeather(res.data))
    }, 10000)
    return () => clearInterval(id)
  }, [weather])

  return (
    <div className="relative flex flex-col space-y-12 items-center">
      <div className="grid grid-rows-1 grid-flow-col align-center items-center">
        <p className="text-4xl">
          {`${daysOfWeek[date.getDay()]}, 
            ${monthsOfYear[date.getMonth()]}
            ${date.getDate()},
            ${date.getFullYear()} 
            | ${weather ? `${Math.round(weather.main.temp - 272)}ºC` : 'Loading weather...'}`}
        </p>
      </div>
      <div className="font-bold text-8xl">
        <h1 className="title">{date.getHours() +
          ':' +
          ('0' + date.getMinutes()).slice(-2)}
        </h1>
      </div>
    </div>
  )
}
