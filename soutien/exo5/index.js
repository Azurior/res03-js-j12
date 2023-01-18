window.addEventListener("DOMContentLoaded", function(){
   let relationships = [
		{
			name : "Sarah",
			friends : ["John", "Sophie"]
		},
		{
			name : "John",
			friends : ["Sophie", "Simon"]
		},
		{
			name : "Simon",
			friends : ["John", "Sophie", "Sarah"]
		},
		{
			name : "Sophie",
			friends : ["John", "Sarah"]
		}
	];
	
	for(let i = 0; i < relationships.length; i++){
		
		console.log(relationships[i].name); // Sarah
		
		for(let j = 0; j < relationships[i].friends.length; j++){
			
			if(relationships[0].name === relationships[i].friends[j]){
			
				console.log(relationships[0].friends[j]);
			}else if(relationships[1].name === relationships[i].friends[j]){
				console.log(relationships[1].friends[j]);
			}else if(relationships[2].name === relationships[i].friends[j]){
				console.log(relationships[2].friends[j]);
			}else if(relationships[3].name === relationships[i].friends[j]){
				console.log(relationships[3].friends[j]);
			}
	}

})