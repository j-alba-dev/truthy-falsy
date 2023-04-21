function checkValue() {
  // Get the input value
  var value = document.getElementById("input").value;

  let isFalsy =
    value == "false" ||
    value === "" ||
    value == "NaN" ||
    value == "null" ||
    value == 0 ||
    value == "undefined";
  // TODO: Check if the value is truthy or falsy
  if (isFalsy) {
    document.getElementById("result").innerHTML = value + " is falsy!";
    document.getElementById("result").style.color = "red";
  } else {
    document.getElementById("result").innerHTML = value + " is truthy!";
  }
}
