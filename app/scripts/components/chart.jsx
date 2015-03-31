/*global define*/

define(function (require) {
    'use strict';

    var React = require('react');
    var BackboneMixin = require('util/backboneMixin');
    var d3 = require('d3');

    var Chart = React.createClass({

        mixins: [BackboneMixin],

        getBackboneCollections: function () {
            return [this.props.collection];
        },

        getBackboneModels: function () {
            return [this.props.collection.country];
        },

        // propTypes: {
        //     data: React.PropTypes.array,
        //     domain: React.PropTypes.object
        // },

        // getChartState: function() {
        //     return {
        //         data: this.props.data,
        //         domain: this.props.domain
        //     };
        // },

        componentDidMount: function() {

            console.log('MOUNT');

            var el = this.getDOMNode();

            var data = this.props.collection.toJSON().sort(function (a, b) {
                return d3.ascending(getYear(a['Date']), getYear(b['Date']));
            });

            var margin = { top: 20, right: 20, bottom: 30, left: 40 },
                width = 960 - margin.left - margin.right,
                height = 400 - margin.top - margin.bottom;

            var x = d3.scale.ordinal()
                .rangeRoundBands([0, width], .5);

            var y = d3.scale.linear()
                .range([height, 0]);

            var xAxis = d3.svg.axis()
                .scale(x)
                .orient('bottom');

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient('left');

            var svg = d3.select(el).append('svg')
                    .attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom)
                .append('g')
                    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            x.domain(data.map(function(d) { return getYear(d['Date']); }));

            y.domain([0, d3.max(data, function(d) { return d.Value; })]);

            svg.append('g')
                .attr('class', 'x axis')
                .attr('transform', 'translate(0,' + height + ')')
                .call(xAxis)
                .selectAll('text')
                    .style('text-anchor', 'end')
                    .attr('transform', 'rotate(-45)')
                    .attr('y', 5)
                    .attr('x', -8);

            svg.append('g')
                .attr('class', 'y axis')
                .call(yAxis)
                .append('text')
                    .attr('transform', 'rotate(-90)')
                    .attr('y', 6)
                    .attr('dy', '.71em')
                    .style('text-anchor', 'end')
                    .text('GDP at Current Prices, LCU Billions');

            svg.selectAll('.bar')
                    .data(data)
                .enter().append('rect')
                    .attr('class', 'bar')
                    .attr('x', function(d) {return x(getYear(d['Date'])); })
                    .attr('width', x.rangeBand())
                    .attr('y', function(d) { return y(d.Value); })
                    .attr('height', function(d) { return height - y(d.Value); });

        },

        render: function() {
            return (
                <div className='chart'></div>
            );
        },

        componentDidUpdate: function() {
            console.log('UPDATE');
            // update
        },

        componentWillUnmount: function() {
            console.log('DESTROY');
            // destroy
        }

    });

    function getYear(date) {
        var isString = Object.prototype.toString.call(date) === '[object String]';
        var year = isString ? parseInt(date.split('-')[0], 10) : undefined;
        return year;
    }

    return Chart;
});

