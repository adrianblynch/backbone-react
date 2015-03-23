/*global define*/

define(function (require) {

    var Handler = require('./handler');
    var GDPCollection = require('collections/GDPCollection');
    var countriesList = require('util/countriesList');

    var AppRoute = Handler.extend({

        model: function (params, transition) {
            var country = _.find(countriesList, { code: params.country });
            if (country) {
                GDPCollection.options.country = country;
                return GDPCollection.fetch();
            } else {
                transition.router.transitionTo('index');
            }
        }

    });

    return AppRoute;

});

