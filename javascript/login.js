var url_base = //UNDEFINED

$(document).ready(function(){
	var mapProp = {
		center:new google.maps.LatLng(35.54339, -79.02591),
		zoom:6,
		//mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	 var map=new google.maps.Map(document.getElementById("mapCanvas"), mapProp);
    
    $('#confirm').click(function() {		
		$username = document.getElementById("username").value;
		$password = document.getElementById("password").value;
		
		if($password =="" ||$username==""){
			alert("Please fill in all the fields to login");
			return;
		}
		
		//send username and password to database to autenticate
		getJSONdata();
		
	});
});

function getJSONdata() { //should return to me the correct password
	$.getJSON( url_base+"login.php", {
			username: $username, $password }, //arguments list
	successFn); //if success will call this function
	
	.fail(function() {
		alert("There was an error on the server, please try again");
		console.log( "error" );
	})
	.always(function() {
		console.log( "complete" );
	});
}

function successFn(result){
		//receive answer from database
		//if success, go to the next page, the dashboard.
		window.location.href = urlbase+"/dashboard.html"
}



