/*global define*/

define(function (require) {

    var Handler = require('./handler');
    var React = require('react');
    var App = require('components/app');

    var AppRoute = Handler.extend({

        beforeModel: function (transition) {
            console.log('app beforemodel');
        },

        enter: function () {
            console.log('app enter');
        },

        setup: function () {
            console.log('app setup');

            this.el = document.getElementById('app');
            // console.log('country setup', countryData, this.el);
            React.render(
                <div className="col-sm-12">
                    <App countryData={countryData} />
                </div>,
            this.el);

        }

    });

    return AppRoute;

});

