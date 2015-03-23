/*global define*/

define(function (require) {
    'use strict';

    var _ = require('underscore');
    var Backbone = require('backbone');

    var CountryHistoricalDataModel = Backbone.Model.extend({

        defaults: {
            'Date': null,
            'Value': null
        }

    });

    return CountryHistoricalDataModel;
});

