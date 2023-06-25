import { useState, useEffect } from 'react';

function shortened(title) {
  if (title.length > 101) {
    return `${title.slice(0, 98)}...`;
  }
  return title;
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function News({ feed, random }) {
  const [title, setTitle] = useState([]);

  useEffect(() => {
    const id = setInterval(() => {
      fetch("/api/feed")
        .then(res => res.json())
        .then(res => {
          setTitle(
            shortened(
              pickRandom(res.feed.items.map(
                (item) => item.title,
              )),
            ),
          );
        })
    }, 10000);
    return () => clearInterval(id);
  }, [title]);

  return (
    <div className="text-3xl">
      {title}
    </div>
  );
}
