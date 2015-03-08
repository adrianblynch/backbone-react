/*global define*/

define([
    'underscore',
    'backbone',
    '../models/countryHistoricalDataModel'
], function (_, Backbone, CountryHistoricalDataModel) {
    'use strict';

    var CountryHistoricalData = Backbone.Collection.extend({

		model: CountryHistoricalDataModel,

        options: {
            country: {
                name: 'United Kingdom',
                code: 'united-kingdom'
            }
        },

        url: function () {
            return 'http://api.tradingeconomics.com/historical/country/' + this.options.code + '/indicator/gdp?c=guest:guest';
        },

		initialize: function(models, options) {
			_.extend(this.options, options);
   		}

	});

    return CountryHistoricalData;
});
