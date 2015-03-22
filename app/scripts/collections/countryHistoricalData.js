/*global define*/

define([
    'underscore',
    'backbone',
    'moment',
    'models/countryHistoricalDataModel'
], function (_, Backbone, moment, CountryHistoricalDataModel) {
    'use strict';

    var CountryHistoricalData = Backbone.Collection.extend({

        model: CountryHistoricalDataModel,

        options: {
            country: {
                code: "GBR",
                name: "United Kingdom"
            }
        },

        url: function () {
            // International Monetary Fund Cross Country Macroeconomic Statistics
            return 'https://www.quandl.com/api/v1/datasets/ODA/' + this.options.country.code +
                '_NGDP.json?trim_end=' + moment().format('YYYY-MM-DD');
        },

        initialize: function(models, options) {
            _.extend(this.options, options);
        },

        fetch: function () {
            return Backbone.Collection.prototype.fetch.call(this, arguments);
        },

        parse: function (response) {
            var columnNames = _.has(response, 'column_names') ? response.column_names : [];
            var data = _.has(response, 'data') ? response.data : [];
            data = _.map(data, function (rowData) {
                return _.object(columnNames, rowData);
            });
            return data;
        }

    });

    return CountryHistoricalData;
});
