$(document).ready(function () {
	
	jQuery(function(){
		  jQuery("#bgndVideo").YTPlayer();
		});
	
	//$(window).load(function(){ ??verficar quando
		
		$('.grid').imagesLoaded( function() {
			
			var isotope = $('.grid').isotope({
				itemSelector: '.grid-item',
				transitionDuration: 0,
				isResizeBound: false,
				layoutMode: 'masonry',
				percentPosition: true,
				masonry: {
					columnWidth: '.grid-sizer',
					gutter: '.gutter-sizer',
					//isFitWidth: true
				}
			});
			
			$('.grid').imagesLoaded().progress( function() {
				$('.grid').isotope('layout');
    		});

		    $(window).resize(function () {
		      isotope.isotope('layout');
		      isotope.isotope();
		    });
		    
		});
	
		var ias = $.ias({
	    	container: ".grid",
			item: ".grid-item",
			pagination: ".post-nav",
			next: ".previous a",
			delay: 1200
	   	});

	   	ias.extension(new IASTriggerExtension({
		   	offset: 20,
		   	text: 'Load More'
		}));
	   	ias.extension(new IASSpinnerExtension());
	   	ias.extension(new IASNoneLeftExtension({html: '<div class="ias-noneleft" style="text-align:center"><p><em>You reached the end!</em></p></div>'}));
	   	
	   	ias.on('render', function(items) {
	      $(items).css({ opacity: 0 });
	    });
	   	ias.on('rendered', function(items) {
	      var $newElems = $(items);
	      $newElems.imagesLoaded(function(){
	        $('.grid').isotope( 'appended', $newElems );
	      });
	    });
	      
	//});
	
	$('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
    $(window).resize(function(){
		$('#video').css({ width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px' });
	});
	
});