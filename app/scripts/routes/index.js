/*global define*/

define(function (require) {

    var _ = require('underscore');
    var Handler = require('routes/handler');
    var CountriesList = require('util/countriesList');

    var IndexRoute = Handler.extend({

        beforeModel: function (transition) {
            console.log('index');
        }

	});

    return IndexRoute;

});
