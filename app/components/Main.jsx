const React = require('react');
const Navigation = require('Navigation');

const Main = (props) => {
    return (
        <div>
            <Navigation />
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
            
        </div>
    );
}

module.exports = Main;