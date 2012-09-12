/* Code to hopefully generate the (dynamic) menu */

/*var menuData = {
	beaches: {
		name: 			"Beaches",
		description: 	"An A-Z list of all the beaches in Barbados.",
		items: [
					{name: "Beach #1"},
					{name: "Beach #2"},
					{name: "Beach #3"},
					{name: "Beach #4"},
					{name: "Beach #5"},
					{name: "Beach #6"},
				]
	}
}*/

// Init() the A-Z menu
$(document).ready(function(){
	$('#azMenu li').remove();
	var theList = '';

	$.ajax({
		url: "http://www.beachesofbarbados.com/phonegap/listBeaches",
	  	cache: false
	}).done(function( html ) {
	  	$("#azMenu").append(html);
	});

	/*for(var i = 1; i < 5; i++) {
		$("#azMenu").append('<li><a href="index.html" data-transition="slide">Button '+i+'</a></li>');
	}*/
	$("#azMenu").listview("refresh");
});

/*
$.mobile.loadPage( "test-menu.php", {
	type: "post",
	data: $("form#"+letter).serialize()
});
*/