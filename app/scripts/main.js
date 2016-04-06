'use strict';

function _activateMenu () {

	$('#panel-nav .item-1').click(function(e) {

		e.preventDefault();
		
		if ($(this).is('.list') === true) {
			$(this).addClass('active');
		} else {
			$('#panel-nav .item-1').removeClass('selected');
			$('#panel-nav .item-2').removeClass('selected');
			$('#panel-nav .item-1').removeClass('active');
			$(this).addClass('selected');
		}

	});

	$('#panel-nav .item-2').click(function(e){

		e.preventDefault();
		$('#panel-nav .item-1').removeClass('selected');
		$('#panel-nav .item-2').removeClass('selected');
		$('#panel-nav .item-1').removeClass('active');
		$(this).addClass('selected');

		var profile = $(this).data('profile');

		$('#panel-section').attr('data-profile', profile);

	});

}

$.ajax({url: "includes/nav-theme-1.html", context: document.body}).done(function(data) {

	$('#panel-nav .block').append(data);

	$.ajax({url: "includes/nav-theme-2.html", context: document.body}).done(function(data) {

		$('#panel-nav .block').append(data);

		_activateMenu();

	});

});



$.ajax({url: "includes/article.html", context: document.body}).done(function(data) {

	$('#panel-article .block').html(data);

});


$.ajax({url: "includes/header.html", context: document.body}).done(function(data) {

	$('#panel-header .block').html(data);

});
