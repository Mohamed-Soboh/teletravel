const request = require('request')
const querystring = { useEngAsSecondary: "true", langCode: "HEB" };
const headers = {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9,ar-JO;q=0.8,ar;q=0.7",
    "agency": "2a3c58b3-8b0a-415d-8d5c-fc4aa2fa3ad0",
    "cache-control": "no-cache",
    "origin": "https://www.flying.co.il",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "referer": "https://www.flying.co.il/",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "staging": "true",
    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1"
};

function getPackages(country) {
    const apiUrl = `https://apipck.flyingisr.com/api/deal/inEffectLanding/byDest/${country}`;
    request({ url: apiUrl, headers: headers, qs: querystring }, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);

            if (Array.isArray(data) && data.length > 0) {
                console.log(country + " data:");
                console.log(data);
            }
        } else {
            console.error("Failed to retrieve data from the API. Status code:", response.statusCode);
        }
    });
}

function main() {
    const countries = require('./country.json');
    countries.forEach(country => {
        getPackages(country.code);
    });
}

main();
