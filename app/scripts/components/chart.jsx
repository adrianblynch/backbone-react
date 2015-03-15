/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'react',
    'util/backboneMixin',
], function ($, _, Backbone, React, BackboneMixin) {
    'use strict';

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

