const Parser = require('rss-parser');

export default async function handler(req, res) {
    try {
        const feed = await new Parser().parseURL(
          'http://feeds.bbci.co.uk/news/world/rss.xml',
        );

        res.status(200).json({ feed })
      } catch (err) {
        res.status(400)
      }
  }