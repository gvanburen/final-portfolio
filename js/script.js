$(document).ready(function() {
    $('#fullpage').fullpage({
    	//Navigation
    	anchors: ['home','about','projects','contact'],
    	animateAnchor: false,
    	menu:'#pageMenu',
    	// navigation: true,
    	// navigationPosition: 'top',
    	slidesNavigation: true,
    	slidesNavPosition: 'bottom',
    	
    	//Scrolling
    	css3:true,
    	continuousVertical: false,
    	scrollingSpeed: 300,
    	
    	//Accessibility
    	keyboardScrolling: true,
    	
    	//Design
    	controlArrows: false,
    	sectionsColor: ['#778899', '#779999', '#818569', '#778899'],
    	verticalCentered: true,
    	resize: false,

    	//Callbacks
    	afterRender: function(){
    		$('#pageMenu').hide();
    	},

    	afterLoad: function(anchorLink, index) {
    		if(anchorLink == 'home'){
    			$('#pageMenu').fadeOut();
    		} else {
    			$('#pageMenu').fadeIn();
    		};
    	}
    });
});