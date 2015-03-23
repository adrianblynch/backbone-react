/*global define*/

define(function (require) {

    var Handler = require('./handler');

    var IndexRoute = Handler.extend({

        beforeModel: function (transition) {
            transition.router.replaceURL('GBR');
            transition.router.transitionTo('/GBR');
        }

	});

    return IndexRoute;

});
