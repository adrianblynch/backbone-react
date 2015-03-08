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
        var country = new CountryHistoricalData([], { name: 'united-states' });
        React.render(
            <div className="col-sm-12">
                <NavBar />
                <Breadcrumb />
                <Chart />
            </div>
        , document.getElementById('app'));
    };

    return App;
});
