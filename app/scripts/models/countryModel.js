/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var CountryModel = Backbone.Model.extend({

        defaults: {
            'code': null,
            'name': null
        }

    });

    return CountryModel;
});
