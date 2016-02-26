/*(function(window, google){
	//map options
	var options = {
		center: {
			//35°54'33.9"N 79°02'59.1"W
			lat: 35.54,
			lng: 79.02
		},
		zoom: 10
	}
	element = document.getElementById('mapCanvas'),
	//map
	map = new google.maps.Map(element, options);
	
}(window, google));*/

$(document).ready(function(){
	var mapProp = {
		center:new google.maps.LatLng(35.54339, -79.02591),
		zoom:6,
		//mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	 var map=new google.maps.Map(document.getElementById("mapCanvas"), mapProp);
    
});

/*function initialize() {
	  var mapProp = {
		center:new google.maps.LatLng(51.508742,-0.120850),
		zoom:5,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	  };
	  var map=new google.maps.Map(document.getElementById("mapCanvas"), mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);*/


