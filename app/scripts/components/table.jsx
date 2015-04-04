/*global define*/

define(function (require) {
    'use strict';

    var React = require('react');
    var BackboneMixin = require('util/backboneMixin');
    var TableItem = require('components/tableItem');

    var Table = React.createClass({

        mixins: [BackboneMixin],

        getBackboneCollections: function () {
            return [this.props.collection];
        },

        getBackboneModels: function () {
            return [this.props.collection.country];
        },

        componentDidMount: function () {
            var el = this.getDOMNode();
            setTimeout(function() {
                $(el).addClass('in');
            }, 10);
        },

        render: function() {

            var tableItems = this.props.collection.map(function (item) {
                return (
                    <TableItem key={item.cid} item={item} />
                );
            }, this);

            return (
                <div className="jumbotron fade">
                    <h2>{this.props.collection.country.attributes.name}</h2>
                    <p className="text-muted">GDP at current prices, local currency units</p>
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
