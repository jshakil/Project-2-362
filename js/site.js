jQuery(document).ready(function() {
	function close_content_section() {
		jQuery('.content .content-section-title').removeClass('active');
		jQuery('.content .content-section-content').slideUp(300).removeClass('open');
	}

	jQuery('.content-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_content_section();
		}else {
			close_content_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.content ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
});