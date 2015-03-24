/*global define*/

define(function () {
    'use strict';

    var BackboneMixin = {

        componentDidMount: function () {
            // Whenever there may be a change in the Backbone data, trigger a
            // reconcile.
            this.getBackboneCollections().forEach(function (collection) {
                console.log(this);
                // explicitly bind `null` to `forceUpdate`, as it demands a callback and
                // React validates that it's a function. `collection` events passes
                // additional arguments that are not functions
                collection.on('add remove change reset', this.forceUpdate.bind(this, null), this);
            }, this);
        },

        componentWillUnmount: function () {
            // Ensure that we clean up any dangling references when the component is
            // destroyed.
            this.getBackboneCollections().forEach(function (collection) {
                console.log('C:', collection);
                collection.off(null, null, this);
            }, this);
        }

    };

    return BackboneMixin;
});
