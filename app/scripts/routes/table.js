/*global define*/

define(function (require) {

    var Handler = require('./handler');

    var TableRoute = Handler.extend({

        beforeModel: function (transition) {
        }

    });

    return TableRoute;

});
