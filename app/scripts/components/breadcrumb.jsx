/*global define*/

define(function (require) {
    'use strict';

    var React = require('react');
    var BackboneMixin = require('util/backboneMixin');

    var Breadcrumb = React.createClass({

        mixins: [BackboneMixin],

        getBackboneModels: function () {
            return [this.props.model];
        },

        render: function() {
            return (
                <ul className="breadcrumb">
                    <li><a href="#/">GDP</a></li>
                    <li className="active">{this.props.model.attributes.name}</li>
                </ul>
            );
        }

    });

    return Breadcrumb;
});
