/*global define*/

define(function (require) {
    'use strict';

    var $ = require('jquery');

    $(document)
        .ajaxStart(function() {
            $(document.body).addClass('loading');
        })
        .ajaxStop(function() {
            $(document.body).removeClass('loading');
        });

});
