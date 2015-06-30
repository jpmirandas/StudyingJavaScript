function myFunction() {
	var x = document.getElementById("demo");
	x.style.fontSize = "25px";
	x.style.color = "red";
}

function openAlert() {
	window.alert("Aew");
}

function validation() {
	var field = document.getElementById("field_01");

	if (isNaN(field.value)) {
		console.log("Text typed is not a number");
		field.style.borderColor = "red";
	} else {
		console.log("Text typed is a number");
		window.alert("It is a number!")
	}

	console.log(field.value);
}