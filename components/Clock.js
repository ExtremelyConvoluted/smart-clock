import { useState, useEffect } from 'react'

const daysOfWeek = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday",
];

const monthsOfYear = [
  "January", "February", "March",
  "April", "May", "June", "July",
  "August", "September", "October",
  "November", "December"
];


export default function Clock() {

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 100);

    return () => clearInterval(id);
  }, [date]);

  return (
    <div className="flex flex-col space-y-12">
      <div>
        <p className="text-4xl">
          {daysOfWeek[date.getDay()] + ", " + monthsOfYear[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()}
        </p>
      </div>
      <div className="font-bold text-8xl">
        <h1 className="title">{date.getHours()
          + ":" +
          ("0" + date.getMinutes()).slice(-2)}</h1>
      </div>
    </div>
  )
}