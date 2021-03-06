/** @jsx React.DOM */

var React = require('react');
var Stop = require('../models/Stop');

module.exports = Stop = React.createClass({
    // Render the component
    render: function () {

        var stop = this.props.stop;

        return (
            <li className="list-group-item">
                <h4 className="list-group-item-heading"><i className="fa fa-flag-checkered"></i> {stop.stopName}</h4>
                <p className="list-group-item-text">
                    <p>Direction {stop.direction}</p>
                    <p>
                        <span className="label label-primary">Prochain passage</span> <span className="label label-success">{stop.newCheckTime}</span>
                    </p>
                    <p>
                        <span className="label label-default">Second passage</span> <span className="label label-default">{stop.nextStop.newCheckTime}</span>
                    </p>
                </p>
            </li>
        )

    }
});