import { useState, useEffect } from 'react'

import Marquee from 'react-fast-marquee'

function pickRandom (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function News () {
  const [title, setTitle] = useState([])

  useEffect(() => {
    const id = setInterval(() => {
      fetch('/api/feed')
        .then(res => res.json())
        .then(res => {
          setTitle(
            pickRandom(
              res.feed.items.map(item => item.title)
            )
          )
        })
    }, 15000)
    return () => clearInterval(id)
  }, [title])

  return (
    <div className="w-2/3">
      <Marquee className="text-3xl" delay="15" speed="70">
        <pre className="font-sans">
          {title.length !== 0 ? title : 'Loading feed...'}          </pre>
      </Marquee>
    </div>
  )
}
