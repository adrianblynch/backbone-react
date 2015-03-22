/*global define*/

define(function (require) {

    var Handler = require('./handler');
    var React = require('react');
    var App = require('components/app');
    var CountryHistoricalData = require('collections/countryHistoricalData');
    var countriesList = require('util/countriesList');

    var AppRoute = Handler.extend({

        model: function (params) {
            console.log('model', params);
            var country = _.find(countriesList, { code: params.country });
            var countryData = new CountryHistoricalData([], { country: country });
            return countryData.fetch();
        },

        setup: function (countryData, transition) {
            this.el = document.getElementById('app');
            console.log('setup', countryData, this.el);
            React.render(
                <div className="col-sm-12">
                    <App countryData={countryData} />
                </div>,
            this.el);
        }

    });

    return AppRoute;

});

