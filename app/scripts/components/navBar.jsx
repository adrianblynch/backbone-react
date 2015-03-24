/*global define*/

define(function (require) {
    'use strict';

    var $ = require('jquery');
    var React = require('react');
    var countriesList = require('util/countriesList');

    var NavBarView = React.createClass({

        render: function() {

            var countries = countriesList.map(function (country) {
                return (
                    <li key={country.code}>
                        <a href={'#/' + country.code} >
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

                        <ul className="navBarOptions nav navbar-nav navbar-right">
                            <li><a href="#chart">Chart</a></li>
                            <li><a href="#table">Table</a></li>

                            <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                Country<span className="caret"></span>
                              </a>
                              <ul className="dropdown-menu" role="menu">
                                {countries}
                              </ul>
                            </li>
                          </ul>


                        <ul className="nav navbar-nav navbar-right">
                            <div className="ajaxLoader">
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
