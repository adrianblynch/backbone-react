/*global define*/

define(function (require) {

    var Handler = require('routes/handler');
    var Backbone = require('backbone');

    var IndexRoute = Handler.extend({

        enter: function (transition) {
            console.log('enter country-index');
//            transition.router.transitionTo('country.table');
        },

        setup: function () {
            console.log('setup country-index');
        },

        exit: function () {
            console.log('exit country-index');
        }


	});

    return IndexRoute;

});
