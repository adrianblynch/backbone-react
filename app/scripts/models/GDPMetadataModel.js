/*global define*/

define(function (require) {
    'use strict';

    var Backbone = require('backbone');

    var GDPMetadataModel = Backbone.Model.extend({

        defaults: {
            'code': null,
            'description': null,
            'display_url': null,
            'frequency': null,
            'from_date': null,
            'id':  null,
            'name': null,
            'premium': null,
            'private': null,
            'source_code': null,
            'source_name': null,
            'to_date': null,
            'type': null,
            'updated_at': null,
            'urlize_name': null
        }

    });

    return GDPMetadataModel;
});
