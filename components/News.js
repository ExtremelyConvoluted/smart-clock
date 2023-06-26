import { useState, useEffect } from 'react';

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function News() {
  const [title, setTitle] = useState([]);

  useEffect(() => {
    const id = setInterval(() => {
      fetch("/api/feed")
        .then(res => res.json())
        .then(res => {
          setTitle(
            pickRandom(
              res.feed.items.map(item => item.title)
            ),
          );
        })
    }, 10000);
    return () => clearInterval(id);
  }, [title]);

  return (
    <div className="text-3xl max-w-4xl">
      {title}
    </div>
  );
}
