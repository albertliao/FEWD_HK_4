var totalAmount = 0;

document.getElementById("entry").onsubmit = formIsSubmitted;

function formIsSubmitted(e) {
  e.preventDefault();
  var userInput = parseFloat(document.getElementById("newEntry").value);
  if (!isNaN(userInput)) {
    var newAmount = userInput;

    totalAmount = totalAmount + newAmount;
    document.getElementById('total').innerHTML = addDollarSign(totalAmount);
    document.getElementById("newEntry").value = "";
  } else {
    if (document.getElementById("newEntry").value == "clear") {
      document.getElementById('total').innerHTML = addDollarSign(0);
    } else {
      console.log("Please enter a numeric value");
    }
  }
}

function twoDecimalOnly(num) {
  return num.toFixed(2);
}

function addDollarSign(num) {
  return "$" + twoDecimalOnly(num);
}