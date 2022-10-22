import { useState, useEffect } from 'react'

import Header from '@components/Header'

import styles from "./Clock.module.css";

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
        <div className={styles.clock}>
            <div>
                <p>
                    {
                        daysOfWeek[date.getDay()] 
                        + ", " + 
                        monthsOfYear[date.getMonth()] 
                        + " " +
                        date.getDate() 
                        + ", " +
                        date.getFullYear()
                    }
                </p>
            </div>
            <div>
                <Header title={
                    date.getHours() 
                    + ":" + 
                    ("0" + date.getMinutes()).slice(-2)} 
                />
            </div>
        </div>
    )
}