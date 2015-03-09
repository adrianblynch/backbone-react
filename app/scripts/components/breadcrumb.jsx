/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'react'
], function ($, _, Backbone, React) {
    'use strict';

    var Breadcrumb = React.createClass({

        render: function() {
            return (
                <ul className="breadcrumb">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">GDP</a></li>
                    <li className="active">{this.props.section}</li>
                </ul>
            );
        }

    });

    return Breadcrumb;
});
