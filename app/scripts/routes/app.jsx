/*global define*/

define(function (require) {

    var Handler = require('routes/handler');
    var App = require('components/app');
    var GDPCollection = require('collections/GDPCollection');
    var React = require('react');

    var AppRoute = Handler.extend({

        model: function () {
            //console.log('model app');
        },

        enter: function () {
            //console.log('enter app');
            this.el = document.getElementById('app');
            console.log('-- app el', this.el);
            React.render(
                <div>
                    <App collection={GDPCollection} />
                </div>
            , this.el);
        },

        setup: function () {
            //console.log('setup app');
        }

    });

    return AppRoute;

});
