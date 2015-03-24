/*global define*/

define(function (require) {

    var Handler = require('routes/handler');

    var IndexRoute = Handler.extend({

        model: function () {
            console.log('model index');
        },

        enter: function () {
            console.log('enter index');
        },

        setup: function () {
            console.log('setup index');
        },

        exit: function () {
            console.log('exit index');
        }

	});

    return IndexRoute;

});
