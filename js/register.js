/* write functions that define the action for each event */
function validate() {
	var email = document.getElementById("email").value;
	var pwd1 = document.getElementById("pwd1").value;
	var pwd2 = document.getElementById("pwd2").value;
	var uname = document.getElementById("uname").value;
	var genm = document.getElementById("genm").checked;
	var genf = document.getElementById("genf").checked;
	var gen = document.getElementById("gen").checked;
	var fav1 = document.getElementById("fav1").checked;
	var fav2 = document.getElementById("fav2").checked;
	var fav3 = document.getElementById("fav3").checked;

	var errMsg = "";/* stores the error message */
	var result = true;							/* assumes no errors */
	var pattern = /^[a-zA-Z ]+$/;		/* regular expression for letters and spaces only */

	/* Rule 1, check if all required inputs have value */
	if (email == "") {
		errMsg += "Email cannot be empty.\n";
	}
	if (pwd1 == "") {
		errMsg += "Password cannot be empty.\n";
	}
	if (pwd2 == "") {
		errMsg += "Retype password cannot be empty.\n";
	}
	if (uname == "") {
		errMsg += "User name cannot be empty.\n";
	}

	if (!(genm || genf || gen)) {
		errMsg += "Gender cannot be empty\n";
	}

	if (!(fav1 || fav2 || fav3)) {
		errMsg += "Choose at least 1 favourite ice cream\n";
	}
	
	/* Rule 2, check if the user ID contains an @ symbol  */
	if (email.indexOf('@') == 0) {
	errMsg += "Email cannot start with an @ symbol.\n";
	}
	
	if (email.indexOf('@') < 0) {
	errMsg += "Email must contain an @ symbol.\n";
	}
	
	/* Rule 3, check if password and retype password are the same, and check password length */
	if (pwd1 != pwd2) {
	errMsg += "Passwords do not match.\n";
	}

	if (pwd1.length < 9) {
		errMsg += "Password must be more than 9 character.\n";
	}
	
	/* Rule 4, check if user name contains only letters and spaces */
	if (!uname.match(pattern)) {
	errMsg += "Name cannot contain symbols.\n";
	}
	

	/* Display error message any error(s) is/are detected */
	if (errMsg != "") {
		alert(errMsg);
		result = false;
	}
	return result;
}

	/* link HTML elements to corresponding event function */
function init() {
	/* link the variables to the HTML elements */
	var regForm = document.getElementById("regform");

	/* assigns functions to corresponding events */
	regForm.onsubmit = validate;
}

	/* execute the initialisation function once the window*/
	window.onload = init;