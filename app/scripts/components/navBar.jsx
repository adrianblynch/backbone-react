/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
	'react'
], function ($, _, Backbone, React) {
    'use strict';

    var NavBarView = React.createClass({

        selectCountry: function (country, e) {

            var el = this.getDOMNode();

            el.querySelector('.dropdown').className = 'dropdown hidden';
            el.querySelector('.ajaxLoader').className = 'ajaxLoader';

            this.props.updateData(country).then(function () {
               el.querySelector('.dropdown').className = 'dropdown';
               el.querySelector('.ajaxLoader').className = 'ajaxLoader hidden';
            });

            e.preventDefault();

        },

        render: function() {

            var countries = this.props.countriesList.map(function (country) {
                return (
                    <li key={country.code}>
                        <a href="#" onClick={this.selectCountry.bind(this, country)}>
                            {country.name}
                        </a>
                    </li>
                );
            }, this);

            return (
                <nav className="navbar-default" role="navigation">

                    <nav className="navbar navbar-default" role="navigation">

                      <div className="container-fluid">
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
                          <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Choose country <span className="caret"></span></a>
                              <ul className="dropdown-menu" role="menu">
                                {countries}
                              </ul>
                            </li>
                            <div className="ajaxLoader hidden">
                                <img src="images/ajax-loader.gif" alt="loading..." />
                            </div>
                          </ul>
                        </div>

                      </div>
                    </nav>

                </nav>
            );
        }

    });

    return NavBarView;
});
