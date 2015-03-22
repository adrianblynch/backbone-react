/*global define*/

define(function (require) {

    var Handler = require('./handler');

    var ChartRoute = Handler.extend({

        beforeModel: function (transition) {
        }

    });

    return ChartRoute;

});

