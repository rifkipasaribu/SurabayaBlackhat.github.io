$(document).ready(function() {
    var $hash = new Array(); // We create new Array	
    $('a').click( function(){ // On each click to <a> element
    	if ( $(this).attr("data-pack") == "true" ) { // check wether this is one of the links we use
    		$hash[$(this).attr("id")] = $(this).attr("href"); // We add href value into $hash object
    		$(this).css("color","green"); // Way to mark selected ones
    		$(this).attr("data-pack", "selected"); // Change data-pack property value to selected
    		return false; // We don't want to execute this yet
    	} else if ( $(this).attr("data-pack") == "selected" ) { // In case you change your mind and want to unselect
    		$(this).attr("data-pack", "true"); // Change data-pack property back, thanks to Ambrosia pointing it out in the comment
    		$(this).css("color","red"); // We mark it as unset
    		delete $hash[$(this).attr("id")]; // Remove it from hash
    		return false;
    	}
    });

    $("form").submit( function(){ // After we submit
    	for (var i in $hash) { // Go trough $hash
    		window.open($hash[i]); // And open window for each member
    	}
    	return false; // We don't actually want to submit form, just open new windows :)
    } );	
});