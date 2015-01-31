$(document).ready(function() {
    $('#fullpage').fullpage({
    	//Navigation
    	anchors: ['home','about','projects','contact'],
    	menu:'#pageMenu',
    	// navigation: true,
    	// navigationPosition: 'top',
    	slidesNavigation: true,
    	slidesNavPosition: 'bottom',
    	
    	//Scrolling
    	css3:true,
    	continuousVertical: true,
    	scrollingSpeed: 300,
    	
    	//Accessibility
    	keyboardScrolling: true,
    	
    	//Design
    	controlArrows: true,
    	sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
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