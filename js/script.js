function doMathClicked() {
  // this function does basic math: Mph to Kph
  let USD = document.getElementById("USD").value;
  let answer = USD * 1.37;

  // Make sure not negative
  if (answer < 0) {
    answer = 0;
    document.getElementById("Kp").innerHTML = "Invalid input. Ensure value is a positive number.";
  }
  else {
    document.getElementById("CAD").innerHTML = "CAD = " + answer.toFixed(2);
  }
}
function kphToMetersPH() {
  let USD = document.getElementById("USD").value;
  let calculation = USD * 92.90;

  // Make sure not negative
  if (calculation <= 0) {
    calculation = 0;
    document.getElementById("Rouble").innerHTML = "Invalid input. Ensure value is a positive number.";
  }
  else {
    document.getElementById("Rouble").innerHTML = "Russian Roubles = " + calculation.toFixed(2);

  }
}