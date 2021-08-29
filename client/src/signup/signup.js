$(document).ready(function () {
	/**
	SIGNUP VALUE
	**/     console.log($.BASE_URL ,"hello signup");
	const signUpFirstName = document.getElementById("signUpFirstName");
	const signUpLastName = document.getElementById("signUpLastName");
	const signUpEmail = document.getElementById("signUpEmail");
	const signUpPassword = document.getElementById("signUpPassword");
    
    /**
	SAVE SIGNUP DATA
	**/
	saveSignUpData = function (e) {

		let signUpData = {
			firstName: signUpFirstName.value,
			lastName: signUpLastName.value,
			email: signUpEmail.value,
			password: signUpPassword.value,
		}
     console.log($.BASE_URL ,"hello signup");
		console.log("=====testing==",signUpData);
		
		$.ajax({
			url: $.BASE_URL+"api/register",
			type: 'post',
			data: JSON.stringify(signUpData),
			dataType: "json",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			async: true,
			contentType: false,
			processData: false,
			cache: false,
			success: function (data, status) {
		console.log("-----",data);
				// console.info("check-signup", data);
				// if (data.status == true) {
				// 	console.warn("Registration has been completed");
				// 	toastr.success('You have been successfully registered.')
				// 	signUpFirstName.value = "";
				// 	signUpLastName.value = "";
				// 	signUpEmail.value = "";
				// 	signUpPassword.value = "";
				// 	setTimeout(function () {
				// 		$('#signIn').trigger('click');
				// 	}, 1000);
				// } else {
				// 	toastr.error('Something went wrong!', 'Error');
				// }
				// return false; // Prevent page refresh
			 },
		// 	// error: function (err) {
		// 	// 	toastr.error('Something went wrong!', 'Error');
		// 	// }
	 });
		return false;
	}
});