/*global define*/

define(function (require) {

    var Handler = require('./handler');
    var React = require('react');

    var AppRoute = Handler.extend({

        beforeModel: function (transition) {
            console.log('app');
        }

    });

    return AppRoute;

});

