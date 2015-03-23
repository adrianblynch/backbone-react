/*global define*/

define(function (require) {
    'use strict';

    var $ = require('jquery');

    var ajaxLoader = {

        start: function () {
            $(document.body).addClass('loading');
        },

        stop: function () {
            $(document.body).removeClass('loading');
        }

    };

    $(document).ajaxStart(ajaxLoader.start);
    $(document).ajaxStop(ajaxLoader.stop);

    return ajaxLoader;

});
