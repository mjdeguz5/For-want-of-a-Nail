var url_base = //UNDEFINED

$(document).ready(function(){
	
	$userid = getUser(); //returns the id of the user ??
	//TODO: add this function to our document
	
	getData($userid); //pass user as parameter
	
	//Things that will end up loading new pages:
	
	//if log out is clicked
	$('#logout').click(function() {
		//disactivate cookies
		disactivateCookies(); 
		//TODO: add this function to our document
		
		//load landing page
		window.location.href = urlbase+"/landpage.html";
	}
	
	//if dashboard is clicked
	$('#dashboard').click(function() {
		window.location.href = urlbase+"/dashboard.html";
	}
	
	//if edit profile is clicked
	$('#edit').click(function() {
		window.location.href = urlbase+"/edit.html";
	}
	
	//if help is clicked
	$('#help').click(function() {
		window.location.href = urlbase+"/help.html";
	}
	
	//if mailbox is clicked
	$('#mailbox').click(function() {
		window.location.href = urlbase+"/mailbox.html";
	}
	
	//Things to apply on the same page
	//if Statistics is selected
	$('#statistics').click(function() {
		getStatictis();
	}
	//if timeline is selected
	$('#timeline').click(function() {
		getTimeline();
	}
	//if bio is selected
	$('#bio').click(function() {
		getBio();
	}	
	//if badge is selected
	$('#badge').click(function() {
		getBadge();
	}
});

function getData($userid){
	$.ajax(url_base + "/profile.php", // MATTEW: you can change here to call the php code you prefer
					{type: "GET",
						  dataType: "json",
						  data: {"userid": $userid,} //Or whatever is returned to me to confirm the user
					}
			);
	ajax.done(processData);
    ajax.fail(function( jqXHR, textStatus, errorThrown) {
		alert("There was an error on the server, please try again");
    });
}

function processData(response /*textStatus, jqXHR*/) {
    //var response = JSON.parse(response);
	var title = todo_json[i]['title'];
    //insert stuff in the html here
   	$("#selection").append(text);


}

function getStatistics($userid){
	$.ajax(url_base + "/profile.php", // MATTEW: you can change here to call the php code you prefer
					{type: "GET",
						  dataType: "json",
						  data: {"userid": $userid,} //Or whatever is returned to me to confirm the user
					}
			);
	ajax.done(processStatistics);
    ajax.fail(function( jqXHR, textStatus, errorThrown) {
		alert("There was an error on the server, please try again");
    });
}

function processStatistics(response /*textStatus, jqXHR*/) {
    var response = JSON.parse(response);
   
    //insert stuff in the html here

}

function getTimeline($userid){
	$.ajax(url_base + "/profile.php", // MATTEW: you can change here to call the php code you prefer
					{type: "GET",
						  dataType: "json",
						  data: {"userid": $userid,} //Or whatever is returned to me to confirm the user
					}
			);
	ajax.done(processStatistics);
    ajax.fail(function( jqXHR, textStatus, errorThrown) {
		alert("There was an error on the server, please try again");
    });
}

function processTimeline(response /*textStatus, jqXHR*/) {
    var response = JSON.parse(response);
   
    //insert stuff in the html here

}

function getBio($userid){
	$.ajax(url_base + "/profile.php", // MATTEW: you can change here to call the php code you prefer
					{type: "GET",
						  dataType: "json",
						  data: {"userid": $userid,} //Or whatever is returned to me to confirm the user
					}
			);
	ajax.done(processStatistics);
    ajax.fail(function( jqXHR, textStatus, errorThrown) {
		alert("There was an error on the server, please try again");
    });
}

function processBio(response /*textStatus, jqXHR*/) {
    var response = JSON.parse(response);
   
    //insert stuff in the html here

}

function getBadge($userid){
	$.ajax(url_base + "/profile.php", // MATTEW: you can change here to call the php code you prefer
					{type: "GET",
						  dataType: "json",
						  data: {"userid": $userid,} //Or whatever is returned to me to confirm the user
					}
			);
	ajax.done(processStatistics);
    ajax.fail(function( jqXHR, textStatus, errorThrown) {
		alert("There was an error on the server, please try again");
    });
}

function processBadge(response /*textStatus, jqXHR*/) {
    var response = JSON.parse(response);
   
    //insert stuff in the html here

}

/*
JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null');            // null
*/
