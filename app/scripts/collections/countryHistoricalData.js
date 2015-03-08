/*global define*/

define([
    'underscore',
    'backbone',
    '../models/countryHistoricalDataModel'
], function (_, Backbone, CountryHistoricalDataModel) {
    'use strict';

    var CountryHistoricalData = Backbone.Collection.extend({

		model: CountryHistoricalDataModel,

		initialize: function(models, options) {
			var name = options.name || 'united-kingdom';
  			this.url = 'http://api.tradingeconomics.com/historical/country/' + name + '/indicator/gdp?c=guest:guest';
            this.fetch();
   		}

	});

    return CountryHistoricalData;
});
