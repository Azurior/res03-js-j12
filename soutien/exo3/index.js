window.addEventListener("DOMContentLoaded", function(){
   let pizzas = [
	{
		name : "Veggie",
		ingredients : [
			"Tomato",
			"Cheese",
			"Mushrooms"
		],
		price : null
	},
	{
		name : "Meattie",
		ingredients : [
			"Tomato",
			"Cheese",
			"Meat"
		],
		price : null
	},
	{
		name : "Fishie",
		ingredients : [
			"Tomato",
			"Cheese",
			"Fish"
		],
		price : null
	},
	{
		name : "Supreme",
		ingredients : [
			"Tomato",
			"Cheese",
			"Meat",
			"Olive"
		],
		price : null
	}
	];
	
	for(let i = 0; i < pizzas.length; i++){
		
			if(pizzas[i].ingredients.length <= 3){
				pizzas[i].price = 7.99;
			}else if(pizzas[i].ingredients.length > 3){
				pizzas[i].price = 8.99;
			}
		console.log(pizzas[i].price);
	}
})