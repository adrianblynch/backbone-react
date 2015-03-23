/*global define*/

define(function (require) {

    var Handler = require('routes/handler');
    var App = require('components/app');
    var GDPCollection = require('collections/GDPCollection');
    var React = require('react');

    var AppRoute = Handler.extend({

        beforeModel: function (transition) {
            console.log('app');
            this.el = document.getElementById('app');
            React.render(<App GDP={GDPCollection} />, this.el);
        }

    });

    return AppRoute;

});
