/*global define*/

define(function (require) {
    'use strict';

    var React = require('react');

    var TableItem = React.createClass({

        render: function() {
            var dateTime = this.props.item.get('Date');
            var year = dateTime.match(/^(\d{4})-\d{2}-\d{2}$/);
            year = (year && year.length > 1) ? year[1] : '';
            var value = this.props.item.get('Value');
            return (
                <tr>
                    <td className="text-muted">{year}</td>
                    <td className="amount">{value} Billions</td>
                </tr>
            );
        }

    });

    return TableItem;
});
