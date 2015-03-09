/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'react',
    'collections/countryHistoricalData',
    'components/NavBar',
    'components/Breadcrumb',
    'components/Chart',
    'util/countriesList'
], function ($, _, Backbone, React, CountryHistoricalData, NavBar, Breadcrumb, Chart, countriesList) {
    'use strict';

    var App = function () {

        var country = countriesList[Math.floor(Math.random() * countriesList.length)];

        var countryData = new CountryHistoricalData([], { country: country });
        countryData.fetch();
        React.render(
            <div className="col-sm-12">
                <NavBar countryName={countryData.options.country.name} countryData={countryData} />
                <Breadcrumb countryName={countryData.options.country.name} countryData={countryData} />
                <Chart countryName={countryData.options.country.name} countryData={countryData} />
            </div>
        , document.getElementById('app'));
    };

    return App;
});
