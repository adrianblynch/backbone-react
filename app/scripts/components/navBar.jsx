/*global define*/

define(function (require) {
    'use strict';

    var React = require('react');
    var Backbone = require('backbone');
    var BackboneMixin = require('util/backboneMixin');
    var countriesList = require('util/countriesList');
    require('select2');

    var NavBarView = React.createClass({

        mixins: [BackboneMixin],

        getBackboneModels: function () {
            return [this.props.model];
        },

        componentDidMount: function () {
            $('.selectCountry')
                .select2({
                    placeholder: 'Select a country'
                })
                .on('select2:select', function (e) {
                    var mode = location.hash.match(/\/table/) ? 'table' : 'chart';
                    Backbone.history.navigate('#' + e.params.data.id + '/' + mode, { trigger: true });
                });
        },

        changeCountry: function(event) {
            console.log("change country: ", event);
        },

        render: function() {
            var countries = countriesList.map(function (country) {
                return (<option key={country.code} value={country.code}>{country.name}</option>);
            }, this);

            return (
                <nav className="navbar navbar-default" role="navigation">

                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="#">Gross Domestic Product by Country</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                    <ul className="navBarOptions nav navbar-nav navbar-right">
                        <li>
                          <select className="selectCountry">
                            <option></option>
                            {countries}
                          </select>
                        </li>
                    </ul>

                    <ul className="navBarOptions visualizationOptions nav navbar-nav navbar-right hidden">
                        <li className="selectChart">
                            <a href={"#" + this.props.model.attributes.code + "/chart"}>
                                <span className="glyphicon glyphicon-signal" aria-hidden="true"></span>
                            </a>
                        </li>
                        <li className="selectTable">
                            <a href={"#" + this.props.model.attributes.code + "/table"}>
                                <span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>
                            </a>
                        </li>
                    </ul>

                    <ul className="nav navbar-nav navbar-right">
                        <div className="ajaxLoader">
                            <img src="images/ajax-loader.gif" alt="loading..." />
                        </div>
                      </ul>
                    </div>

                </nav>

            );
        }

    });

    return NavBarView;
});
