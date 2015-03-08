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
], function ($, _, Backbone, React, CountryHistoricalData, NavBar, Breadcrumb, Chart) {
    'use strict';

    var App = function () {
        var country = {
            name: 'United States',
            code: 'united-states'
        }
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
