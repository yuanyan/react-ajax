var React = require('react'),
    Ajax = require('react-ajax');

var App = React.createClass({
    getInitialState: function() {
        return {
            name: ''
        };
    },

    responseHandler: function(err, data){
        this.setState({
            name: data.body.name
        })
    },

    render: function() {
        return (
            <div>
            Hello {this.state.name}
                <Ajax url="data.json" onResponse={this.responseHandler}/>
            </div>
            )
    }
});

React.render(<App/>, document.body);
