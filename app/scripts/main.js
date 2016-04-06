'use strict';

function _activateMenu () {

	$('#panel-nav .item-1').click(function(e) {
		e.preventDefault();
		$('#panel-nav .item-1').removeClass('selected');
		$('#panel-nav .item-1').removeClass('active');
		if ($(this).is('.list') === true) {
			$(this).addClass('active');
		} else {
			$(this).addClass('selected');
		}
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
