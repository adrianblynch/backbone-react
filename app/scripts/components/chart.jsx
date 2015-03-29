/*global define*/

define(function (require) {
    'use strict';

    var React = require('react');
    var d3 = require('d3');

    var Chart = React.createClass({

        propTypes: {
            data: React.PropTypes.array,
            domain: React.PropTypes.object
        },

        getChartState: function() {
            return {
                data: this.props.data,
                domain: this.props.domain
            };
        },

        componentDidMount: function() {
            // create
            var el = this.getDOMNode();

            var margin = {top: 20, right: 20, bottom: 30, left: 40},
                width = 720 - margin.left - margin.right,
                height = 400 - margin.top - margin.bottom;

            var x = d3.scale.ordinal()
                .rangeRoundBands([0, width], .1);

            var y = d3.scale.linear()
                .range([height, 0]);

            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                .scale(y)
                .orient("left");

            var svg = d3.select(el).append("svg")
                    .attr("width", width + margin.left + margin.right)
                    .attr("height", height + margin.top + margin.bottom)
                .append("g")
                    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                var data = [
                    { year: 1981, gdp: 1114.356 },
                    { year: 1982, gdp: 1214.356 },
                    { year: 1983, gdp: 1314.356 },
                    { year: 1984, gdp: 1414.356 },
                    { year: 1985, gdp: 1514.356 },
                    { year: 1986, gdp: 1614.356 }
                ];

            x.domain(data.map(function(d) { return d.year; }));

            y.domain([0, d3.max(data, function(d) { return d.gdp; })]);

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")
                    .attr("transform", "rotate(-90)")
                    .attr("y", 6)
                    .attr("dy", ".71em")
                    .style("text-anchor", "end")
                    .text("GDP");

              svg.selectAll(".bar")
                    .data(data)
                .enter().append("rect")
                    .attr("class", "bar")
                    .attr("x", function(d) { return x(d.year); })
                    .attr("width", x.rangeBand())
                    .attr("y", function(d) { return y(d.gdp); })
                    .attr("height", function(d) { return height - y(d.gdp); });

        },

        render: function() {
            return (
                <div className="chart"></div>
            );
        },

        componentDidUpdate: function() {
            // update
        },

        componentWillUnmount: function() {
            // destroy
        }

    });

    return Chart;
});

