const React = require('react');
const Navigation = require('Navigation');

const Main = (props) => {
    return (
        <div>
            <Navigation />
            <h2>Main Component</h2>
            {props.children}
        </div>
    );
}

module.exports = Main;