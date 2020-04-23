const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const apiKey = 'YOUR_API_KEY';

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/getWeather', (req, res) => {


    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${req.query.lat}&lon=${req.query.lon}&units=imperial&appid=${apiKey}`;
    request(url, function(err, response, body) {
        if (err) {
            console.log(err);
            res.status(500).send({weather: null, error: 'Error, please try again'});
        } else {
            let weather = JSON.parse(body);
            console.log(weather);
            if (weather === undefined) {
                console.log('Weather', err);
                res.status(500).send({weather: null, error: 'Error, please try again'});
            } else {
                res.status(200).send({weather: weather, error: null});
            }
        }
    });

});

app.listen(port, () => console.log(`Listening on port ${port}`));