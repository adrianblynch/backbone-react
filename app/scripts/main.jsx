/*global define, require*/
'use strict';

require.config({
    paths: {
        collections: './collections',
        models: './models',
        components: './components',
        util: './util',
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        react: '../bower_components/react/react',
        moment: '../bower_components/moment/moment',
        router: '../bower_components/router.js/dist/router.amd',
        'original-route-recognizer': '../bower_components/route-recognizer/dist/route-recognizer',
        'original-rsvp': '../bower_components/rsvp/rsvp'
    },
    map: {
        '*': {
            'route-recognizer': 'shim/route-recognizer',
            'rsvp': 'shim/rsvp',
            'rsvp/promise': 'shim/promise'
        }
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },
    waitSeconds: 0
});

define(function (require) {

    var Backbone = require('backbone');
    var React = require('react');
    var App = require('components/app');
    var CountryHistoricalData = require('collections/countryHistoricalData');
    var router = require('./mainRouter');
    var countriesList = require('util/countriesList');

    var country = countriesList[_.random(countriesList.length)];
    var countryData = new CountryHistoricalData([], { country: country });

    React.render(
        <div className="col-sm-12">
            <App country={country} countryData={countryData} countriesList={countriesList} />
        </div>,
    document.getElementById('app'));

    Backbone.history.start();

});
