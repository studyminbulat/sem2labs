const https = require('https');
const url = "https://ru.wordpress.org/wp-json/wp/v2/posts"
//const url = "https://wordpress.minbulat.ru/wp-json/wp/v2/posts"
https.get(url, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
        data += chunk;
    });
    resp.on('end', () => {
        const json_data = JSON.parse(data);
        const titles = []
        json_data.forEach((item) => {
            titles.push( item.title.rendered);
        });
        console.log(titles)

    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});