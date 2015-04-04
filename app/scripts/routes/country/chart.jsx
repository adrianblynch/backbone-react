/*global define*/

define(function (require) {

    var Handler = require('routes/handler');
    var Chart = require('components/chart');
    var GDPCollection = require('collections/GDPCollection');
    var React = require('react');

    var ChartRoute = Handler.extend({

        enter: function (transition) {
            this.el = this.getParent(transition).el.querySelector('.outlet');
            React.render(
                <Chart collection={GDPCollection} />
            , this.el);
        },

        setup: function (transition) {
            console.log('setup chart');
            $('.selectChart').addClass('active');
            $('.selectTable').removeClass('active');
        },

        exit: function () {
            console.log('exit chart');
            React.unmountComponentAtNode(this.el);
        }

    });

    return ChartRoute;

});

