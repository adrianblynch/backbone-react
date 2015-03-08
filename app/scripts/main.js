/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    paths: {
        collections: './collections',
        models: './models',
        components: './components',
        util: './util',
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        react: '../bower_components/react/react'
    }
});

require([
    'backbone',
    'react',
	'components/app'
], function (Backbone, React, App) {
    Backbone.history.start();
    new App();
});
