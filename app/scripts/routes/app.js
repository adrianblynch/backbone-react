/*global define*/

define(function (require) {

    var Handler = require('routes/handler');
    var App = require('components/app');
    var GDPCollection = require('collections/GDPCollection');
    var React = require('react');

    var AppRoute = Handler.extend({

        model: function () {
            console.log('model app');
        },

        enter: function () {
            console.log('enter app');
            this.el = document.getElementById('app');
            React.render(
                <App collection={GDPCollection} />
            , this.el);
        },

        setup: function () {
            console.log('setup app');
        },

        exit: function () {
            console.log('exit app ...?');
        }

    });

    return AppRoute;

});
