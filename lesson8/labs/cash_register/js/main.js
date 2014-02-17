var total = 0.00;
	
document.getElementById('entry').onsubmit = formIsSubmitted;

function formIsSubmitted(e){
	e.preventDefault();
	
	var userInput = parseFloat(document.getElementById("newEntry").value);

	//console.log(typeof(parseFloat(userInput));

	if (isNaN(userInput))
	{	
		if(document.getElementById("newEntry").value == "clear"){

			total = 0.00;
			updateScreenTotal();
			
		}else{

			alert("Please enter a numeric value!");
		}

	}
		else
		{
			var newAmout = userInput;
			addUpdate(newAmout);
		}
}

var addUpdate = function(price){
	total = total + twoDecimalOnly(price);
	updateScreenTotal();
}

var twoDecimalOnly = function(num){
	return parseFloat(num.toFixed(2));
}

var updateScreenTotal = function(){
	document.getElementById('total').innerHTML = "$" + total;
}