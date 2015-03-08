/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'react'
], function ($, _, Backbone, React) {
    'use strict';

    var Chart = React.createClass({

      render: function() {
        return (
            <div className="jumbotron">
                <h1>Hello, world!</h1>
                <p>...</p>
                <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
            </div>
        );
      }

    });

    return Chart;
});
