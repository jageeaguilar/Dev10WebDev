/*
Creator: Josh Aguilar
Date Created: December 27, 2019
Last Modified:
*/

		
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const isValid = document.getElementById('isValid');

document.addEventListener("input", function (event) {
	isValidName = name.checkValidity();
	isValidEmail = email.checkValidity();
	isValidPhone = phone.checkValidity();
	
	if ( isValidName && isValidEmail && isValidPhone ) {
		isValid.innerHTML = "Your information looks valid"
		isValid.style.display = "block"
	}
}, true);
	
		