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
            console.log(this.props.countryData.name);
            return {
                name: this.props.countryData.name,
            };
        },

        // updateData: function (country) {
            // this.setState({ country: country });
            // _.extend(this.props.countryData.options, { country: country });
            // this.props.countryData.reset();
            // return this.props.countryData.fetch();
        // },

        render: function() {
            return (
                <div>
                    <Breadcrumb section={this.state.name} />
                </div>
            );
        }

    });

    return App;
                    // <NavBar
                    //     country={this.state.country}
                    //     countriesList={this.props.countriesList}
                    //     countryData={this.props.countryData}
                    //     updateData={this.updateData} />
                    // <Table
                    //     countryName={this.state.country.name}
                    //     countryData={this.props.countryData} />

});
