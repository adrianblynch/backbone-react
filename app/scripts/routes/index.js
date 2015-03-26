/*global define*/

define(function (require) {

    var Handler = require('routes/handler');
    var GDPCollection = require('collections/GDPCollection');

    var IndexRoute = Handler.extend({

        model: function () {
            console.log('model index');
            GDPCollection.reset();
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
