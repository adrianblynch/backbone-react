/*global define*/

define(function (require) {

    var Handler = require('routes/handler');
    var Chart = require('components/chart');
    var React = require('react');

    var ChartRoute = Handler.extend({

        enter: function (transition) {
            console.log('enter chart');
            this.el = this.getParent(transition).el.querySelector('.outlet');
            React.render(
                <Chart />
            , this.el);
        },

        setup: function (transition) {
            console.log('setup chart');
        },

        exit: function () {
            console.log('exit chart');
            React.unmountComponentAtNode(this.el);
        }

    });

    return ChartRoute;

});

