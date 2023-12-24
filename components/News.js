import { useState, useEffect } from 'react'

import Marquee from 'react-fast-marquee'

async function getTitles () {
  const res = await fetch('/api/feed')

  if (res.ok) {
    const data = await res.json()

    return data
  }
}

export default function News () {
  const [title, setTitle] = useState([])

  useEffect(() => {
    getTitles()
      .then(res => {
        setTitle(
          res.feed.items.map(item => item.title).join('\t\t\t')
        )
      })
  }, [])

  return (
    <div className="w-2/3">
      <Marquee className="text-3xl h-full" speed="70" onCycleComplete={() => { getTitles() }}>
        <pre className="font-sans">
          {title}          </pre>
      </Marquee>
    </div>
  )
}
