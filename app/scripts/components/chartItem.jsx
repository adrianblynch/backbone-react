/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'react'
], function ($, _, Backbone, React, BackboneMixin) {
    'use strict';

    var ChartItem = React.createClass({

        render: function() {
            var dateTime = this.props.item.get('DateTime');
            var year = dateTime.match(/^(\d{4})-\d{2}-\d{2}\w\d{2}:\d{2}:\d{2}$/);
            year = (year && year.length > 1) ? year[1] : '';
            var value = this.props.item.get('Value');
            return (
                <tr>
                    <td width="10%" className="text-muted">{year}</td>
                    <td className="amount">{value} $bn</td>
                </tr>
            );
        }

    });

    return ChartItem;
});
