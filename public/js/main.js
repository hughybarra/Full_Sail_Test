$( document ).ready(function() {
  	// Delete when ready
  	console.log("main.js is loading");

  	// hooking up the bxslider
	$('.bxslider').bxSlider({
		auto: true,
		controls: false,
		autoHover: true,
	});

	/* form click function */
	$('.form_button').click(function(e){
		// simple aler for functionality.
		alert('Your Form was submitted');
		e.preventDefault();
		e.stopPropogation();
	});

	/* Kornify just for fun ^_^ */
	var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
	$(document).keydown(function(e) {
	  kkeys.push( e.keyCode );
	  if ( kkeys.toString().indexOf( konami ) >= 0 ){
	    $(document).unbind('keydown',arguments.callee);
	    $.getScript('http://www.cornify.com/js/cornify.js',function(){
	      cornify_add();
	      $(document).keydown(cornify_add);
	    });
	  }
	});
});// end doc ready function