/*global define*/

define(function (require) {
    'use strict';

    var _ = require('underscore');
    var Backbone = require('backbone');
    var moment = require('moment');
    var GDPModel = require('models/GDPModel');

    var GDPCollection = Backbone.Collection.extend({

        model: GDPModel,

        options: {
            country: {
                code: null,
                name: null
            },
            metadata: {
                code: null,
                description: null,
                display_url: null,
                frequency: null,
                from_date: null,
                id:  null,
                name: null,
                premium: null,
                private: null,
                source_code: null,
                source_name: null,
                to_date: null,
                type: null,
                updated_at: null,
                urlize_name: null
            }
        },

        url: function () {
            // International Monetary Fund Cross Country Macroeconomic Statistics
            return 'https://www.quandl.com/api/v1/datasets/ODA/' + this.options.country.code +
                '_NGDP.json?trim_end=' + moment().format('YYYY-MM-DD');
        },

        initialize: function(models, options) {
            window.gas = this;
            _.extend(this.options, options);
        },

        fetch: function () {
            return Backbone.Collection.prototype.fetch.call(this, arguments);
        },

        parse: function (response) {
//            console.log('sync', response, 'length of data', response.data.length);
            this.options.metadata = _.omit(response, 'data', 'column_names', 'errors');
            return _.map(response.data, function (row) {
                return _.object(response.column_names, row);
            });
        }

    });

    return new GDPCollection();
});
