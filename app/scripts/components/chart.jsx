/*global define*/

define(function (require) {
    'use strict';

    var React = require('react');
    var BackboneMixin = require('util/backboneMixin');
    var d3Chart = require('util/d3Chart');

    var Chart = React.createClass({

        mixins: [BackboneMixin],

        getBackboneCollections: function () {
            return [this.props.collection];
        },

        // getBackboneModels: function () {
        //     return [this.props.collection.country];
        // },

        componentDidMount: function() {
            console.log("react mount");
            var el = this.getDOMNode();
            var data = this.props.collection.toJSON();
            d3Chart.create(el, data);
        },

        componentDidUpdate: function() {
            console.log("react update");
            var el = this.getDOMNode();
            var data = this.props.collection.toJSON();
            d3Chart.update(el, data);
        },

        componentWillUnmount: function() {
            // on exit
        },

        render: function() {
            return (
                <div>
                    <h2>GDP at current prices, local currency units</h2>
                    <br />
                    <div className='chart'></div>
                </div>
            );
        }

    });

    return Chart;

});

