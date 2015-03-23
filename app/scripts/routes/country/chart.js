/*global define*/

define(function (require) {

    var Handler = require('routes/handler');

    var ChartRoute = Handler.extend({

        beforeModel: function (transition) {
        }

    });

    return ChartRoute;

});

