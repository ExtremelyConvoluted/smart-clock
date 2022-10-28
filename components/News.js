const Parser = require('rss-parser');

import { useState, useEffect } from 'react';

import styles from "./News.module.css";

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

export default function News() {

    const CORS_PROXY = "https://cors-proxy-czku.onrender.com/"

    const [title, setTitle] = useState([]);
    
    useEffect(() => {
        const id = setInterval(() => {
                async function getFeed() {

                    try {
                        const res = await new Parser().parseURL(
                            CORS_PROXY + "http://feeds.bbci.co.uk/news/rss.xml"
                        );

                        setTitle(
                            shortened(
                                pickRandom(res.items.map(
                                        item => item.title
                                    )
                                )
                            )
                        );
                    } catch (err) {
                        console.log(err);
                    }
                }

                getFeed()
            }, 10000);
        return () => clearInterval(id);
    }, [title]);

    return (
        <div className={styles.news}>
            {title}
        </div>
    )
}