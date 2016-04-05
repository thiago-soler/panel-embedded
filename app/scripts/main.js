'use strict';

$.ajax({url: "includes/nav.html", context: document.body}).done(function(data) {

	$('#panel-nav .block').html(data);

});

$.ajax({url: "includes/article.html", context: document.body}).done(function(data) {

	$('#panel-article .block').html(data);

});