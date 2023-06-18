import { useState, useEffect } from 'react';

function shortened(title) {
  if (title.length > 101) {
    return title.slice(0, 98) + "..."
  } else {
    return title
  }
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function News({feed}) {

  const [title, setTitle] = useState([]);

  useEffect(() => {
    const id = setInterval(() => {
      setTitle(
        shortened(
          pickRandom(feed.items.map(
            item => item.title
          )
          )
        )
      );
    }, 10000);
    return () => clearInterval(id);
  }, [title]);

  return (
    <div className="text-3xl">
      {title}
    </div>
  )
}