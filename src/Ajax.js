var request = require('./request');
var React = require('react');
var PropTypes = React.PropTypes;

var Ajax = React.createClass({
    propTypes: {
        onResponse: PropTypes.func, // Fired whenever a response or an error is received.
        url: PropTypes.string,
        method: PropTypes.string, // The HTTP method to use such as 'GET', 'POST', 'PUT', or 'DELETE'. Default is 'GET'.
        params: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string
        ]), // Parameters to send to the specified URL, as JSON.
        body: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string
        ]), // Optional raw body content to send when method === "POST".
        headers: PropTypes.object, // HTTP request headers to send.
        type: PropTypes.string,
        accept: PropTypes.string,
        timeout: PropTypes.number,
        withCredentials: PropTypes.bool // Set the withCredentials flag on the request.
    },

    getDefaultProps: function(){
        return {
            method: 'GET',
            onResponse: function(){}
        };
    },

    request: function(){
        var url = this.props.url;
        var method = this.props.method.toLowerCase();
        var params = this.props.params;
        var body = this.props.body;
        var headers = this.props.headers;
        var type = this.props.type;
        var accept = this.props.accept;
        var withCredentials = this.props.withCredentials;
        var timeout = this.props.timeout;
        var handler = this.props.onResponse;

        var req = request(method, url);
        if(withCredentials){
            req.withCredentials()
        }
        if(type){
            req.type(type)
        }
        if(headers){
            req.set(headers)
        }
        if(accept){
            req.accept(accept);
        }
        if(params){
            req.query(params)
        }
        if(body){
            req.send(body)
        }
        if(timeout){
            req.timeout(timeout)
        }
        return req.end(handler);
    },

    // Invoked immediately before mounting occurs.
    componentWillMount: function () {
        this.request();
    },

    render: function () {
        return null
    }
});

module.exports = Ajax;