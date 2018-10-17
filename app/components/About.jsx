const React = require('react');

//If only a render method is defined then you can refactor the code into:
const About = () => {
    return (
        <div>
            <h2 className="text-center page-title">About</h2>
            <p>
                This is a weather application made using <a href="https://reactjs.org/">React</a> and the <a href="https://openweathermap.org/api">OpenWeather API</a>.
                This app is made up of many different components and the temperature shown is in degrees celsius.
            </p>
        </div>
    );
};

module.exports = About;