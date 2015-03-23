/*global define*/

define(function (require) {

    var Handler = require('routes/handler');

    var TableRoute = Handler.extend({

        setup: function (transition) {
            console.log('table route');
        }

    });

    return TableRoute;

});

