/*global define*/

define(function (require) {

    var Handler = require('routes/handler');
    var React = require('react');
    var Table = require('components/table');
    var GDPCollection = require('collections/GDPCollection');
    var countriesList = require('util/countriesList');

    var CountryRoute = Handler.extend({

        model: function (params, transition) {
            console.log('model country');
            var country = _.find(countriesList, { code: params.country });
            if (country) {
                GDPCollection.country.set(country);
                return GDPCollection.fetch();
            } else {
                transition.router.transitionTo('index');
            }
        },

        enter: function (transition) {
            console.log('enter country', arguments);
            this.el = this.getParent(transition).el.querySelector('.outlet');
            React.render(
                <div id="country" className="outlet"></div>
            , this.el);
        },

        setup: function (data, transition) {
            console.log('setup country');
         },

        exit: function () {
            console.log('exit country');
            React.unmountComponentAtNode(this.el);
        }

    });

    return CountryRoute;

});

