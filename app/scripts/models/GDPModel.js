/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var GDPModel = Backbone.Model.extend({

        defaults: {
            'Date': null,
            'Value': null
        }

    });

    return GDPModel;
});
