function checkValue() {
	// Get the input value
	var value = document.getElementById("input").value;
	
	// TODO: Check if the value is truthy or falsy
	if ("ADD YOUR LOGIC EXPRESSION HERE"){
		document.getElementById("result").innerHTML = value + " is falsy!";
        document.getElementById("result").style.color = "red"
    } else {
		document.getElementById("result").innerHTML = value + " is truthy!";
	}
}
