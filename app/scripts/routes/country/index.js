/*global define*/

define(function (require) {

    var Handler = require('routes/handler');

    var IndexRoute = Handler.extend({

        model: function () {
            console.log('model country-index');
        },

        enter: function () {
            console.log('enter country-index');
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
