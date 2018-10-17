const React = require('react');
const {Link} = require('react-router');

const Examples = () => {
    return (
        <div>
            <h2 className="text-center">Examples Locations</h2>
            <p>Here are a few location you could try out:</p>
            <ol>
                <li>
                    <Link to="/?location=Grimsby">Grimsby, England</Link>
                </li>
                <li>
                    <Link to ="/?location=Reykjavik">Reykjavik, Iceland</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;