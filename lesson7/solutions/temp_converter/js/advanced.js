
document.getElementById('celsius').onkeydown = convert;
document.getElementById('farhenheit').onkeydown = convert;

function convert(){
	if ('celsius' == this.id){
		var celsius = document.getElementById('celsius').value
		farhenheit = convertCelsiusToFarhenheit(celsius);
		document.getElementById('farhenheit').value = farhenheit;
	} else if ('farhenheit' == this.id) {
		var farhenheit = document.getElementById('farhenheit').value
		celsius = convertFarhenheitToCelsius(farhenheit);
		document.getElementById('celsius').value = celsius;
	}
}

function convertCelsiusToFarhenheit(celsius){
	var farhenheit = 9 / 5 * celsius + 32;
	return farhenheit;
}

function convertFarhenheitToCelsius(farhenheit){
	var celsius = (farhenheit - 32) * 5 / 9;
	return celsius;
}