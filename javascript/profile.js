//var url_base = //UNDEFINED

$(document).ready(function(){
	
	$userid = getUser(); //returns the id of the user ??
	getData($userid); //pass user as parameter
	getBio();
	
	//Things that will end up loading new pages:
	
	//if log out is clicked
	$('#logout').click(function() {
		//disactivate cookies
		disactivateCookies(); 
		//TODO: add this function to our document
		
		//load landing page
		window.location.href = urlbase+"/landpage.html";
	});
	
	//if dashboard is clicked
	$('#dashboard').click(function() {
		window.location.href = urlbase+"/dashboard.html";
	});
	
	//if edit profile is clicked
	$('#edit').click(function() {
		window.location.href = urlbase+"/edit.html";
	});
	
	//if help is clicked
	$('#help').click(function() {
		window.location.href = urlbase+"/help.html";
	});
	
	//if mailbox is clicked
	$('#mailbox').click(function() {
		window.location.href = urlbase+"/mailbox.html";
	});
	
	//Things to apply on the same page
	//if Statistics is selected
	$('#statistics').click(function() {
		getStatictis();
	});
	//if timeline is selected
	$('#timeline').click(function() {
		getTimeline();
	});
	//if bio is selected
	$('#biography').click(function() {
		getBio();
	});	
	//if badge is selected
	$('#badges').click(function() {
		getBadge();
	});
});

function getUser(){
	$.ajax(url_base + "/profile.php", // MATTEW: you can change here to call the php code you prefer
					{type: "GET",
						  dataType: "json",
						  data: {} 
					}
					
			);
	ajax.done(processUserid);
    ajax.fail(function( jqXHR, textStatus, errorThrown) {
		alert("There was an error on the server, please try again");
    });
}

function processUserid(response){
	var userid = response['userid'];
	return(userid)
}

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
	/*Luiza don’t forget to add *User’s level and calculate it yourself
	User’s username “username”
	User’s real name “name” - NOT ANYMORE
	User’s headline “headline”
	User’s profile picture “picture”
	Player’s specialty “specialty”
	Player’s location “location”
	User’s total points “totalpoints”
	List of User’s items ID’s that are currently under voting “itemsids”
	List of names of the items (same order as itemsids) “itemsnames”
	List of disaster’s name’s related to each item “disastersnames”
	List of ngo’s name’s related to each item “ngosnames”
	List of total points for each item under voting “itemstotalpoints”	*/

    //var response = JSON.parse(response);
	var username = response['username'];
	var headline = response['headline'];
	//TODO SOLVE THE PICTURE PROBLEM
	
	var specialty = response['specialty'];
	var location = response['location'];
	var totalpoints = response['totalpoints'];
	var itemsids[] = response['itemsids'];
	var itemsnames[] = respoinse['itemsnames'];
	var disasternames[] = response['disastersnames'];
	var ngosnames[] = response['ngosnames'];
	var itemstotalpoints[] = response['itemstotalpoints'];
	
	//insert stuff in the html here
   	$("#username").append(username);
   	$("#headline").append(headline);
	$("#specialty").append(specialty);
	$("#location").append(location);
	$("#totalpoints").append(totalpoints);
	$("#level").append(totalpoints/10); // we might change this later!
	
	//TODO INSERT THE prof PICTURE

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
    //var response = JSON.parse(response);
    var name = response['name'];
    var text = response['bio'];
    var signupdate = response['signupdate'];
    var ngos[] = response['ngos'];
    $("#name").append(name);
    $("#bio").append(text);
    $("#signupdate").append(signupdate);
    for (x in ngos){
		$("#ngos").append("<li>"+x+"</li>");
	}
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
