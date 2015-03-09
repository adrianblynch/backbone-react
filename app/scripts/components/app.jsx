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
        var index = Math.floor(Math.random() * countriesList.length);
        var country = countriesList[index];
        var countryData = new CountryHistoricalData([], { country: country });
        React.render(
            <div className="col-sm-12">
                <NavBar country={country} countriesList={countriesList} countryData={countryData} />
                <Breadcrumb section={country.name} />
                <Chart countryName={country.name} countryData={countryData} />
            </div>
        , document.getElementById('app'));
    };

    return App;
});
