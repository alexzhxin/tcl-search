/** @jsx React.DOM */

var React = require('react');
var Line = require('../components/Line.react');

module.exports = Lines = React.createClass({
    // Render the component
    render: function () {

        // Build list items of single tweet components using map
        var content = this.props.lines.map(function (line) {

            console.log(line);

            return (
                <Line key={line.key} line={line} />
            )
        });

        // Return ul filled with our mapped tweets
        return (
            <div>
                <h3>Séléctionnez une ligne de bus</h3>
                <div className="list-group">{content}</div>
            </div>
        )

    }
});