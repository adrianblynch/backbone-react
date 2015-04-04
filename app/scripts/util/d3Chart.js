/*global define*/

define(function (require) {
    'use strict';

    var d3 = require('d3');

    var margin = { top: 20, right: 20, bottom: 30, left: 40 },
        width = 960 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    var x = d3.scale.ordinal().rangeRoundBands([0, width], .5);
    var y = d3.scale.linear().range([height, 0]);

    var xAxis = d3.svg.axis().scale(x).orient('bottom');
    var yAxis = d3.svg.axis().scale(y).orient('left');

    var colors = ['#779ECB', '#CFCFC4', '#836953', '#AEC6CF', '#B39EB5', '#FFB347',
        '#CB99C9', '#DEA5A4', '#B19CD9', '#7BCDC8', '#A0410D', '#0076A3', '#005952'];

    var color = pickColor(colors);

    var d3Chart = {

        create: function (el, data) {
            console.log("CREATE");
            var svg = d3.select(el).append('svg')
                    .attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom)
                .append('g')
                    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            svg.append('g')
                .attr('class', 'x axis')
                .attr('transform', 'translate(0,' + height + ')');

            svg.append('g')
                .attr('class', 'y axis')
                .append('text')
                    .attr('transform', 'rotate(-90)')
                    .attr('y', 6)
                    .attr('dy', '.71em')
                    .style('text-anchor', 'end')
                    .text('Billions');

            this.update(el, data);
        },

        update: function (el, data) {
            console.log("UPDATE");

            var oldColor = color;
            color = pickColor(colors, oldColor);

            console.log(oldColor, color);

            var d = data.sort(function (a, b) {
                return d3.ascending(getYear(a['Date']), getYear(b['Date']));
            });

            var svg = d3.select(el).select('svg').select('g');

            x.domain(d.map(function(d) { return getYear(d['Date']); }));
            y.domain([0, d3.max(d, function(d) { return d['Value']; })]);

            svg.select('g.x.axis')
                .call(xAxis)
                .selectAll('text')
                    .style('text-anchor', 'end')
                    .attr('transform', 'rotate(-45)')
                    .attr('y', 5)
                    .attr('x', -8);

            svg.select('g.y.axis').call(yAxis);

            var bar = svg.selectAll('.bar')
                .data(d, function (d) { return getYear(d['Date']); });

            bar.enter().append('rect')
                .attr('class', 'bar')
                .attr('x', function(d) { return x(getYear(d['Date'])); })
                .attr('width', x.rangeBand())
                .attr('fill', oldColor)
                .attr('y', height)
                .attr('height', 0);

            bar
                .attr('width', x.rangeBand())
                .attr('x', function(d) { return x(getYear(d['Date'])); })
                .transition().duration(1000)
                    .attr('fill', color)
                    .attr('y', function(d) { return y(d['Value']); })
                    .attr('height', function(d) { return height - y(d['Value']); });

            bar.exit()
                .remove();
        }

    };

    function getYear(date) {
        var isString = Object.prototype.toString.call(date) === '[object String]';
        var year = isString ? parseInt(date.split('-')[0], 10) : undefined;
        return year;
    }

    function pickColor(colors, color) {
        var colorList = colors.slice();
        if (color && colors.indexOf(color) !== -1) {
            colorList.splice(colors.indexOf(color), 1);
        }
        return chooseRandomItem(colorList);
    }

    function chooseRandomItem(list) {
        return list[Math.floor(Math.random() * list.length)]
    }

    return d3Chart;

});

