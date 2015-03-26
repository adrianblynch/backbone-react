/*global define*/

define(function (require) {

	var _ = require('underscore');
	var Backbone = require('backbone');

    var Handler = function () {};

    Handler.extend = Backbone.Model.extend;

    Handler.prototype.getParent = function (transition) {
        var handlerInfos = transition.handlerInfos;
        var currentRouteIndex = _.findIndex(handlerInfos, function (handlerInfo) {
            return handlerInfo.handler === this;
        }.bind(this));
        console.log(currentRouteIndex, this);
        if (currentRouteIndex > 0) {
            return handlerInfos[currentRouteIndex - 1].handler;
        }
    };

    return Handler;

});

