// document ready
$(document).ready(function() {

	// magnificPopup
	$('.image-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		},
	});



	// testmonial carousel
	$('.testmonial-content').owlCarousel({
		animateOut: 'fadeOut',
		// animateIn: 'fadeOut',
		items: 1,
		autoplay: true,
		loop: true,

	})
	
});