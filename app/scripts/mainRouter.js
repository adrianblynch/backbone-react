define(function (require) {

    var _ = require('underscore');
    var Backbone = require('backbone');
    var Router = require('router').default;
    var router = new Router();

    var routes = {
        'index': require('routes/index'),
        'table': require('routes/table'),
        'chart': require('routes/chart')
    };

    /* eslint no-shadow: 0 */
    router.map(function (match) {
        match('/').to('index');
        match('/chart').to('chart');
        match('/table').to('table');
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

