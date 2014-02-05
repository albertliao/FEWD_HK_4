document.getElementById('stopButton').onclick = stop;
document.getElementById('goButton').onclick = go;

function stop() {
  clearLights();
  illuminateYellow();
  setTimeout("goToStop()", 2000);
}

function goToStop() {
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function go() {
  illuminateYellow();
  setTimeout("stopToGo()", 2000);
}

function stopToGo() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
}

function illuminateRed() {
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateYellow() {
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function illuminateGreen() {
  document.getElementById('goLight').style.backgroundColor = "green";
}

function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}