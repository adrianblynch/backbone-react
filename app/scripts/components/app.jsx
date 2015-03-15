/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'react',
    'components/navBar',
    'components/breadcrumb',
    'components/table',
    'components/chart'
], function ($, _, Backbone, React, NavBar, Breadcrumb, Table, Chart) {
    'use strict';

    var App = React.createClass({

        getInitialState: function () {
            return {
                country: this.props.country,
            };
        },

        updateData: function (country) {
            this.setState({ country: country });
            _.extend(this.props.countryData.options, { country: country });
            this.props.countryData.reset();
            return this.props.countryData.fetch();
        },

        render: function() {
            return (
                <div className="col-sm-12">
                    <NavBar
                        country={this.state.country}
                        countriesList={this.props.countriesList}
                        countryData={this.props.countryData}
                        updateData={this.updateData} />
                    <Breadcrumb
                        section={this.state.country.name} />
                    <Chart
                        countryName={this.state.country.name}
                        countryData={this.props.countryData} />
                </div>
            );
        }

    });

    return App;
});
