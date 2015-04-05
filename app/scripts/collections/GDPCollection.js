/*global define*/

define(function (require) {
    'use strict';

    var _ = require('underscore');
    var Backbone = require('backbone');
    var moment = require('moment');
    var CountryModel = require('models/countryModel');
    var GDPMetadataModel = require('models/GDPMetadataModel');
    var GDPModel = require('models/GDPModel');

    var GDPCollection = Backbone.Collection.extend({

        model: GDPModel,

        url: function () {
            // International Monetary Fund Cross Country Macroeconomic Statistics
            return 'https://www.quandl.com/api/v1/datasets/ODA/' + this.country.get('code') +
                '_NGDP.json?trim_end=' + moment().format('YYYY-MM-DD');
        },

        initialize: function() {
            this.country = new CountryModel();
            this.metadata = new GDPMetadataModel();
        },

        fetch: function (options) {
            var extendedOptions = _.extend({ reset: true }, options);
            return Backbone.Collection.prototype.fetch.call(this, extendedOptions);
        },

        clean: function () {
            this.country.set(CountryModel.prototype.defaults);
            this.metadata.set(GDPMetadataModel.prototype.defaults);
        },

        parse: function (response) {
            this.metadata.set(_.omit(response, 'data', 'column_names', 'errors'));
            return _.map(response.data, function (row) {
                return _.object(response.column_names, row);
            });
        }

    });

    return new GDPCollection();

});
