$(document).ready(function(){
	var mapProp = {
		center:new google.maps.LatLng(35.54339, -79.02591),
		zoom:6,
		//mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	 var map=new google.maps.Map(document.getElementById("mapCanvas"), mapProp);
    
    $('#confirm').click(function() {		
		$newemail = document.getElementById("username").value;
		$newpassword = document.getElementById("password").value;
		if($newemail =="" || $newpassword =="" ||$newnickname==""){
			alert("Please fill in all the fields to login");
			return;
		}
	});
});

