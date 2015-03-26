/*global define*/

define(function (require) {
    'use strict';

    var React = require('react');

    var Chart = React.createClass({

        render: function () {
            return (
                <div className="jumbotron">
                    <p>Hello World</p>
                </div>
            );
        }

    });

    return Chart;
});

