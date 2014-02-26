//RANDOM NUMBER GENERATOR - RANDOM.ORG ATMOSPHERIC NOISE
random = require("random");

function randomCallback(integers){
// Prints row 0, column 0
    var threediceroll = [];
    console.log(integers[0][0]);
    threediceroll = integers[0].splice(0,3)
    console.log(threediceroll);
    return threediceroll;
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
    console.log("Random.org Error: Type: "+type+", Status Code: "+code+", Response Data: "+string);
}

function getRandom(){
	random.generateIntegers(randomCallback,options,errorCallback);
}


//function to switch through the bets in the betslip
function checkWin(betslip, roll) {

    console.log(roll[0],roll[1],roll[2]);
    var total = roll[0] + roll[1] + roll[2];
    console.log(total);
    
    if(roll[0] == roll[1] && roll[1] == roll[2]){
    	var triple = true;
    }

    var paymentUserObject = {};
    var paymentObject = {};
    for (var propt in betslip) {
        switch (propt) {

        case "userId":
            paymentUserObject["userId"] = betslip[propt];
            break;

        case "table":
            paymentUserObject["table"] = betslip[propt];
            break;

        case "timeStamp":
            paymentUserObject["timeStamp"] = betslip[propt];
            break;
        
        case "big":
            paymentUserObject["big"] = checkBig(betslip[propt], total, triple);
            break;

        case "small":
            paymentUserObject["small"] = checkSmall(betslip[propt], total, triple);
            break;
        
        case "total":
            paymentUserObject["total"] = checkTotal(betslip[propt], total);
            break;
        
        case "twoDice":
            paymentUserObject["twoDice"] = checkTwoDice(betslip[propt], roll);
            break;
        
        case "anyTriple":
            paymentUserObject["anyTriple"] = checkAnyTriple(betslip[propt], triple);
            break;

        case "specTriple":
            paymentUserObject["specTriple"] = checkSpecTriple(betslip[propt], triple, roll[0]);
            break;
        
        default:
            console.log("Error - case not found!");
        }
    }
    console.log(paymentUserObject);
    return paymentUserObject;
}


//payout table
paytable = {
    bigsmall: 1.0,
    oddeven: 1.0,
    singledice: 1.0,
    dicetotal: {
        "4": 60.0,
        '5': 20.0,
        '6': 18.0,
        '7': 12.0,
        '8': 8.0,
        '9': 6.0,
        '10': 6.0,
        '11': 6.0,
        '12': 6.0,
        '13': 8.0,
        '14': 12.0,
        '15': 18.0,
        '16': 20.0,
        '17': 60.0
    },
    twoDice: 6.0,
    wxyz: 8.0,
    doubleDice: 11.0,
    specTriple: 150.0,
    anyTriple: 24.0,
    actual: 30.0,
    actualWithDouble: 50.0,
};


///////CHECK WIN FUNCTIONS - FOR EVERY BET TYPE//////////////////////////////////////

//takes in 3 arguments. the bet amount, the total of the 3 die and if it is a triple;
function checkBig(betAmount, total, triple) {
    
	var paySlip = 0;
    
    if (triple || total <= 10) {
        var paySlip = 0;
    } else {
        payment = (paytable["bigsmall"] * betAmount);
        paySlip = payment;
    }
    return paySlip;
}

//takes in 3 arguments. the bet amount, the total of the 3 die and if it is a triple;
function checkSmall(betAmount, total, triple) {
    var paySlip = 0;
    
    if (triple || total >= 11) {
        paySlip = 0;
    } else {
        payment = (paytable["bigsmall"] * betAmount);
        paySlip = payment;
    }
    return paySlip;
}

//takes in 3 arguments. the bet amount, the total of the 3 die and if it is a triple;
function checkOdd(betAmount, total, triple) {
    
    var odd = total % 2;
    var paySlip = 0;
    
    if (triple || odd == 0) {
        paySlip = 0;
    } else {
        payment = (paytable["oddeven"] * betAmount);
        paySlip = payment;
    }
    return paySlip;
}

//takes in 3 arguments. the bet amount, the total of the 3 die and if it is a triple;
function checkEven(betAmount, total, triple) {
    
    var even = total % 2;
    var paySlip = 0;

    if (triple || even !== 0) {
        paySlip = 0;
    } else {
        payment = (paytable["oddeven"] * betAmount);
        paySlip = payment;
    }
    return paySlip;
}

function checkTotal(userTotalArray, total){
	
	var paySlip = 0;
	
	if(userTotalArray[0] == total){
		payment = (paytable["dicetotal"][total.toString()] * userTotalArray[1]);
        paySlip = payment;
	} else{
		paySlip = 0;
	}
	return paySlip;
}

function checkTwoDice(userTotalArray, roll){
	var paySlip = 0;

    var guess1 = userTotalArray[0]; var guess2 = userTotalArray[1];
    checkCount = 0;
    
    for(i=0; i<roll.length; i++){
        if(guess1==roll[i]){
            checkCount++;
            break;
        }
    }

    for(i=0; i<roll.length; i++){
        if(guess2==roll[i]){
            checkCount++;
            break;
        }
    }

	if(checkCount == 2){
		payment = (paytable["twoDice"] * userTotalArray[2]);
        paySlip = payment;
	} else{
		paySlip = 0;
	}
	return paySlip;
}


function checkAnyTriple(betAmount, triple){
    var paySlip = 0;

    if(triple){
        payment = (paytable["anyTriple"] * betAmount);
        paySlip = payment;
    } else{
        paySlip = 0;
    }
    return paySlip;
}

function checkSpecTriple(userTripleArray, triple, number){
    var paySlip = 0;

    if(triple && userTripleArray[0] == number){
        payment = (paytable["specTriple"] * userTripleArray[1]);
        paySlip = payment;
    } else{
        paySlip = 0;
    }
    return paySlip;
}

//getRandom();

//example betslip
var betslip1 = {
    userId: "zakir2k",
    table: "8",
    timeStamp: "18/02/14 15:37:45",
    big: 300,
    small: 400,
    total: [5, 100],
    twoDice: [2, 6, 100],
    anyTriple: 400,
    specTriple: [1,300]
}

//example roll
roll = [1,2,2]

setTimeout(function(){
    console.log(roll);
    checkWin(betslip1, roll);
},1000)

