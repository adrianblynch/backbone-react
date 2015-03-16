define(function (require) {
    var rsvp = require('original-rsvp');

    return {
        default: rsvp.Promise
    };
});
