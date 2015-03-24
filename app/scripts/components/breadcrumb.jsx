/*global define*/

define(function (require) {
    'use strict';

    var React = require('react');

    var Breadcrumb = React.createClass({

        render: function() {
            return (
                <ul className="breadcrumb">
                    <li><a href="#/">GDP</a></li>
                    <li className="active">{this.props.section}</li>
                </ul>
            );
        }

    });

    return Breadcrumb;
});
