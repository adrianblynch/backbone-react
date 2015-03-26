/*global define*/

define(function (require) {

    var Handler = require('routes/handler');
    var Table = require('components/table');
    var GDPCollection = require('collections/GDPCollection');
    var React = require('react');

    var TableRoute = Handler.extend({

        enter: function (transition) {
            console.log('enter table');
            this.el = this.getParent(transition).el.querySelector('.outlet');
            React.render(
                <Table collection={GDPCollection} />
            , this.el);
        },

        setup: function (transition) {
            console.log('setup table');
        },

        exit: function () {
            console.log('exit table');
            React.unmountComponentAtNode(this.el);
        }

    });

    return TableRoute;

});

