// requirements to scrape website
const axios = require("axios");
const cheerio = require("cheerio");

// here's where things are pulled from the NYT website
const scrapeWeb = () => {
    return axios.get("http://www.nytimes.com").then(res => {
        const $ = cheerio.load(res.data);

        // an empty object array for the articles we're about to scrape
        let articles = [];

        // find each element which starts with this
        $("").each(( i, element ) => {
            // article headline
            let title = $(this)
                .find("")
                .text()
                .trim();

            // article summary
            let summary = $(this)
                .find("")
                .attr("href");

            // article URL
            let url = $(this)
                .find("")
                .text()
                .trim();
            
            // push articles data to database
            articles.push(addArticles);
        });
        return articles
    });
};

module.exports = scrapeWeb;