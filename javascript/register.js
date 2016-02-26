$(document).ready(function(){
	var mapProp = {
		center:new google.maps.LatLng(35.54339, -79.02591),
		zoom:6,
		//mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	 var map=new google.maps.Map(document.getElementById("mapCanvas"), mapProp);
    
    $('#confirm').click(function() {		
		$newusername = document.getElementById("username").value;
		$newpassword = document.getElementById("password").value;
		$newfname = document.getElementById("fname").value;
		$newlname = document.getElementById("lname").value;
		$newemail = document.getElementById("email").value;
		$retypepas = document.getElementById("retypepas").value;
		if($newemail =="" || $newpassword =="" ||$newusername=="" || $newfname =="" || $newlname ==""||$retypepas == ""){
			alert("Please fill in all the fields to create a New Account.");
			return;
		}
		else if($newpassword != $retypepas){
			alert("Passwords do not match.");
			return;
		}
	});
});

