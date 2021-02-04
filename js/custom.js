$(function () {

	$('.progress').each(function () {
		   $(this).animate({opacity:1,left:"0px"},800);  
		   var b = jQuery(this).find(".progress-bar").attr("data-value");
		   $(this).find(".progress-bar").animate({
			  width: b + "%"
		   }, 500);
		
	 });

	 $('.dropdown').on('show.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
	});

	$('.dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
	});
	 

  
	

});