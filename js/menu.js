/* Code to hopefully generate the (dynamic) menu */

// Init() the A-Z menu
$(document).ready(function(){
	$('#azMenu li').remove();
	var theList = '';

	var request = $.ajax({
		url: "http://www.beachesofbarbados.com/phonegap/listBeaches",
	  	cache: false
	});

	request.done(function( html ) {
	  	$("#azMenu").append(html);
		$("#azMenu").listview("refresh");
	});
	request.fail(function(error, status) {
		alert("Error: "+error)
		alert("Status: " + status);
	});

	// Load the information for a specific beach
	$(document).bind( "pagebeforechange", function( e, data ) {
		// We only want to handle changePage() calls where the caller is
		// asking us to load a page by URL.
		if ( typeof data.toPage === "string" ) {
			// We are being asked to load a page by URL, but we only
			// want to handle URLs that request the data for a specific
			// category.
			var u = $.mobile.path.parseUrl( data.toPage ), re = /^#beach/;

			if ( u.hash.search(re) !== -1 ) {
				// We're being asked to display the items for a specific category.
				// Call our internal method that builds the content for the category
				// on the fly based on our in-memory category data structure.
				
				alert("hold on a sec");
				//console.log(JSON.stringify((u)));
				console.log(u.href);
				//showCategory( u, data.options );

				// Make sure to tell changePage() we've handled this call so it doesn't
				// have to do anything.
				e.preventDefault();
			}
		}
	});
});
