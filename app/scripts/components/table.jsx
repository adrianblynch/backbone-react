/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'react',
    'util/backboneMixin',
    'components/tableItem'
], function ($, _, Backbone, React, BackboneMixin, TableItem) {
    'use strict';

    var Table = React.createClass({

        mixins: [BackboneMixin],

        getBackboneCollections: function () {
            return [this.props.countryData];
        },

        render: function() {

            var tableItems = this.props.countryData.map(function (item) {
                return (
                    <TableItem key={item.cid} item={item} />
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
                            {tableItems}
                        </tbody>
                    </table>
                </div>
            );
        }

    });

    return Table;
});
