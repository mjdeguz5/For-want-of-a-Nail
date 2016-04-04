<?php
	if($SERVER['REQUEST_METHOD'] == "GET"){
			$data = {"employees":[
					{"firstName":"John", "lastName":"Doe"},
					{"firstName":"Anna", "lastName":"Smith"},
					{"firstName":"Peter", "lastName":"Jones"}],
					 "badges":["badge1", "badge2"],
					 "username":"Shit Junior",
					 "headline":"fml I didnt want to be doing this",
					 "picture":"https://s-media-cache-ak0.pinimg.com/236x/84/6b/b0/846bb019b7ceb8b143d79016b638d320.jpg",
					 "location":"Very far away",
					 "totalpoints":"50"}
			
			return $data;
	}
?>
