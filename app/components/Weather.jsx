const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');
const ErrorModal = require('ErrorModal');

const Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    
    handleSearch: function(location) {
        const that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
            location: location,
            temp: temp,
            isLoading: false
            });
        }, function(e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            }); 
        });
    },

    componentDidMount: function () {
        //fires when the component is mounted into the web-browser...
        let location = this.props.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/'; //Removes the location query in the uri
        }
    },

    componentWillReceiveProps: function(newProps) {
        //fires when the component is mounted into the web-browser...
        let location = newProps.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/'; //Removes the location query in the uri
        }
    },

    render: function() {
        const {isLoading, location, temp, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Getting weather...</h3>
            }
            else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h2 className="text-center page-title">Get Weather</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;