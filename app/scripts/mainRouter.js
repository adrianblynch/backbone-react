/*global define*/

define(function (require) {
    'use strict';

    var _ = require('underscore');
    var Backbone = require('backbone');
    var Router = require('router').default;
    var router = new Router();
//    var AppRoute = require('routes/app');
    var IndexRoute = require('routes/index');
    var CountryRoute = require('routes/country');
    // var TableRoute = require('routes/table');
    // var ChartRoute = require('routes/chart');

    var routes = {
//        'app': new AppRoute(),
        'index': new IndexRoute(),
        'country': new CountryRoute(),
        // 'table': new TableRoute(),
        // 'chart': new ChartRoute()
    };

    /* eslint no-shadow: 0 */
    router.map(function (match) {
        match('/').to('index');
        match('/:country').to('country');
    });

    router.getHandler = function (name) {
        return routes[name];
    };

    router.updateURL = function (url) {
        Backbone.history.navigate(url, { trigger: false });
    };

    router.replaceURL = function (url) {
        Backbone.history.navigate(url, { trigger: false, replace: true });
    };

    router.log = _.noop();

    Backbone.history.route(/.*/, router.handleURL.bind(router));

    return router;

});
