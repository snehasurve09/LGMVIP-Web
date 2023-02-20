function add_value(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.substring(i, i+1)
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}
function answere(form) {
	form.display.value = eval(form.display.value)
}
 
