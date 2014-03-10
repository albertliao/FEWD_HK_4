

document.getElementById('convertCelsius').onclick = convertCelsius;
document.getElementById('convertFarhenheit').onclick = convertFarhenheit;

function convertCelsius(){
	var celsius = document.getElementById('celsius').value
	farhenheit = convertCelsiusToFarhenheit(celsius);
	if (farhenheit > 100){
		document.getElementById('farhenheit').value = 'hot!!';
	} else {
		document.getElementById('farhenheit').value = farhenheit;
	}
}

function convertFarhenheit(){
	var farhenheit = document.getElementById('farhenheit').value
	celsius = convertFarhenheitToCelsius(farhenheit);
	if (celsius > 100){
		document.getElementById('celsius').value = 'hot!!';
	} else {
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