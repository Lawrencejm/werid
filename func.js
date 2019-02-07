const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function() {
	realFileBtn.click();
});

function validateForm() {
	var x = document.forms["myForm"]["button"].value;
	if (x == "") {
		alert("A file must be chosen");
		return false;
	}
}