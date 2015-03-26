/*global define*/

define(function (require) {
    'use strict';

    var React = require('react');
    var NavBar = require('components/navBar');
    var Breadcrumb = require('components/breadcrumb');

    var App = React.createClass({

        render: function() {
            return (
                <div>
                    <NavBar model={this.props.collection.country} />
                    <Breadcrumb model={this.props.collection.country} />
                    <div className="outlet"></div>
                </div>
            );
        }

    });

    return App;



});
