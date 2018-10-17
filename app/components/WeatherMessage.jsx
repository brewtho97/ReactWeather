const React = require('react');

const WeatherMessage = ({temp, location}) => {
    return (
        <h3>It is {temp} in {location}</h3>
    );
};

module.exports = WeatherMessage;