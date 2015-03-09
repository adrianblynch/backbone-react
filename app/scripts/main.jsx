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
        react: '../bower_components/react/react',
        moment: '../bower_components/moment/moment'
    }
});

require([
    'backbone',
    'react',
	'components/app',
    'util/countriesList',
    'collections/countryHistoricalData'
], function (Backbone, React, App, countriesList, CountryHistoricalData) {
    Backbone.history.start();
    var country = countriesList[_.random(countriesList.length)];
    var countryData = new CountryHistoricalData([], { country: country });
    React.render(
        <div className="col-sm-12">
            <App country={country} countryData={countryData} countriesList={countriesList} />
        </div>,
    document.getElementById('app'));
});
