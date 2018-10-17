const axios = require('axios');

//30eeff2613bedcf3163584ea055451d3


const OPEN_WEATHER_MAP_URL = 'https://api.openweathermap.org/data/2.5/weather?appid=30eeff2613bedcf3163584ea055451d3&units=metric';
module.exports = {
    getTemp: function(location) {
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        
        return axios.get(requestUrl).then(function(response) {
            if (response.data.cod && response.data.message) {
                //Something went wrong...
                throw new Error(response.data.message);
            }
            else {
                return response.data.main.temp;
            }
        }, function(err) {
            throw new Error('Unable to fetch weather for that location.');
        });
    }
}