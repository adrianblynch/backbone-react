/*global define*/

define(function (require) {

    var Handler = require('./handler');
    var countriesList = require('util/countriesList');

    var IndexRoute = Handler.extend({

        beforeModel: function (transition) {
            console.log('index', arguments);
            transition.router.replaceURL('GBR');
            transition.router.transitionTo('/GBR');
		}

	});

    return IndexRoute;

});
