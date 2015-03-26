/*global define*/

define(function () {
    'use strict';

    var BackboneMixin = {

        componentDidMount: function () {
            // Whenever there may be a change in the Backbone data, trigger a
            // reconcile.
            if (this.getBackboneCollections) {
                this.getBackboneCollections().forEach(function (collection) {
                    // explicitly bind `null` to `forceUpdate`, as it demands a callback and
                    // React validates that it's a function. `collection` events passes
                    // additional arguments that are not functions
                    collection.on('add remove reset', this.forceUpdate.bind(this, null), this);
                }, this);
            }
            if (this.getBackboneModels) {
                this.getBackboneModels().forEach(function (model) {
                    model.on('change', this.forceUpdate.bind(this, null), this);
                }, this);
            }
        },

        componentWillUnmount: function () {
            // Ensure that we clean up any dangling references when the component is
            // destroyed.
            if (this.getBackboneCollections) {
                this.getBackboneCollections().forEach(function (collection) {
                    collection.off(null, null, this);
                }, this);
            }
            if (this.getBackboneModels) {
                this.getBackboneModels().forEach(function (model) {
                    model.off(null, null, this);
                }, this);
            }

        }

    };

    return BackboneMixin;
});
