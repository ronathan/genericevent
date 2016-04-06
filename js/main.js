(function() {
	$('section#birthday-hero .section-content').addClass("animated fadeInUp");

	var birthdayLanding = $('section#birthday-landing').waypoint({
		handler: function(direction) {
			$('section#birthday-landing .section-content').removeClass("hidden").addClass("animated fadeInRight");
			$('section#birthday-landing .section-image').removeClass("hidden").addClass("animated fadeInLeft");
		},
		offset: "60%"
	});

	var birthdayFeatures = $('section#birthday-features').waypoint({
		handler: function(direction) {
			$('section#birthday-features .section-content').removeClass("hidden").addClass("animated fadeInRight");
			$('section#birthday-features .section-image').removeClass("hidden").addClass("animated fadeInLeft");
		},
		offset: "60%"
	});

	var birthdayDetails = $('section#birthday-details').waypoint({
		handler: function(direction) {
			$('section#birthday-details .section-content').removeClass("hidden").addClass("animated fadeInLeft");
			$('section#birthday-details .section-image').removeClass("hidden").addClass("animated fadeInRight");
		},
		offset: "60%"
	});

	var birthdayClosing = $('section#birthday-closing').waypoint({
		handler: function(direction) {
			$('section#birthday-closing .section-content').removeClass("hidden").addClass("animated fadeInUp");
		},
		offset: "40%"
	});
})();