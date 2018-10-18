const React = require('react');
const ReactDOM = require('react-dom');
const ReactDOMServer = require('react-dom/server');

const ErrorModal = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function() {
        const {title, message} = this.props;

        const modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">   
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );

        let $modal = $(ReactDOMServer.renderToString(modalMarkup));
        //Gets the node that this component is in.
        $(ReactDOM.findDOMNode(this)).html($modal); 

        const modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    getDefaultProps: function() {
        return {
            title: 'Error'
        }
    },
    render: function() {
        return (
            <div>
            </div>
        );
    }
});

module.exports = ErrorModal;