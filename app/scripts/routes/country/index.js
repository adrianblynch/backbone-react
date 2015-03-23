/*global define*/

define(function (require) {

    var Handler = require('routes/handler');

    var IndexRoute = Handler.extend({

        beforeModel: function (transition) {
            console.log('country index');
            // transition.router.replaceURL('table');
            // transition.router.transitionTo('country.table');
        }

	});

    return IndexRoute;

});
