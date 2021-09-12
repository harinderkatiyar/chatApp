$(document).ready(function () {
	/**
LOGIN VALUE
	**/     console.log($.BASE_URL, "hello login");
 const loginUserName = document.getElementById("loginUserName");
 const loginPassword = document.getElementById("loginPassword");

 /**
SAVE LOGIN DATA AND CHECK SIGNUP DATA
**/
 saveLoginData = function (e) {

  let LoginData = {
   username: loginUserName.value,
   password: loginPassword.value
  }
  console.log($.BASE_URL, "hello login");
  console.log("=====testing==", LoginData);

  $.ajax({
   url: $.BASE_URL + "api/login",
   type: 'post',
   data: JSON.stringify(LoginData),
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
    console.log("-----", data);
    // console.info("check-login", data);
    // if (data.status == true) {
    // 	console.warn("Registration has been completed");
    // 	toastr.success('You have been successfully registered.')
    // 	loginUserName.value = "";
    // 	loginPassword.value = "";
    // 	setTimeout(function () {
    // 		$('#login').trigger('click');
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