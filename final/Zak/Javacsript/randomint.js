random = require("random");
function randomCallback(integers){
// Prints row 0, column 0
    console.log(integers[0][0]);
    console.log(integers[0][1]);
    console.log(integers[0][2]);
}
var options = {
	secure: true,
	num: 3,
	min: 1,
	max: 6,
	col: 3,
	base: 10,
	rnd: "new"
};

function errorCallback(type,code,string){
    console.log("RANDOM.ORG Error: Type: "+type+", Status Code: "+code+", Response Data: "+string);
}
random.generateIntegers(randomCallback,options,errorCallback);