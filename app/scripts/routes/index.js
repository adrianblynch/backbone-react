define(function (require) {

	return {

		beforeModel: function (transition) {
            console.log('index');
            transition.router.replaceWith('table');
		}

	};

});
