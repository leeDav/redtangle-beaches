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
for(var i = 0; i < 4; i++) {
	$("#azMenu").append('<li data-theme="c"><a href="#" data-transition="slide">Button '+i+'</a></li>');
}
$("#azMenu").listview("refresh");

/*
$.mobile.loadPage( "test-menu.php", {
	type: "post",
	data: $("form#"+letter).serialize()
});
*/