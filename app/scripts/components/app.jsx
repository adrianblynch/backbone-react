/*global define*/

define(function (require) {
    'use strict';

    var React = require('react');
    var NavBar = require('components/navBar');
    var Breadcrumb = require('components/breadcrumb');
    var Table = require('components/table');
    //var Chart = require('components/chart');

    var App = React.createClass({

        componentDidMount: function () {
            this.props.GDP.on('sync', function () {
                this.setState(this.props.GDP.options);
            }.bind(this));
        },

        componentWillUnmount: function () {
            this.props.GDP.off(null, null, this);
        },

        getInitialState: function () {
            return this.props.GDP.options;
        },

        render: function() {
            return (
                <div>
                    <NavBar />
                    <Breadcrumb section={this.state.country.name} />
                    <Table title={this.state.country.name} data={this.props.GDP} />
                </div>
            );
        }

    });

    return App;



});
