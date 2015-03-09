/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'react',
    'util/backboneMixin',
    'components/chartItem'
], function ($, _, Backbone, React, BackboneMixin, ChartItem) {
    'use strict';

    var Chart = React.createClass({

        mixins: [BackboneMixin],

        getBackboneCollections: function () {
            return [this.props.countryData];
        },

        render: function() {

            var chartItems = this.props.countryData.map(function (item) {
                return (
                    <ChartItem key={item.cid} item={item} />
                );
            }, this);

            return (
                <div className="jumbotron">
                    <h1>{this.props.countryName}</h1>
                    <br />
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th width="10%">Year</th>
                                <th className="amount">GDP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {chartItems}
                        </tbody>
                    </table>
                </div>
            );
        }

    });

    return Chart;
});
