/*global define*/

define(function (require) {

    var Handler = require('routes/handler');
    var Backbone = require('backbone');

    var IndexRoute = Handler.extend({

        beforeModel: function (transition) {
            transition.router.replaceWith('country.table');
        },

        enter: function () {
            console.log('enter country-index');
        },

        setup: function (data, transition) {
            console.log('setup country-index');
        },

        exit: function () {
            console.log('exit country-index');
        }

	});

    return IndexRoute;

});
