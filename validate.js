var num;
num = document.getElementById('ph_num');


var email;
email = document.getElementById('gsuite');


var pass, con_pass;
pass = document.getElementById('pass');
con_pass = document.getElementById('con_pass');

var age;
age = document.getElementById('age');

var namex = document.getElementById('nam');

var city = document.getElementById('city');

var submit = document.getElementById('sub');

var reg_email = RegExp(/^[\w]{1,}\@([a-z]{2}\.)?iitr\.ac\.in$/);
var reg2 = RegExp(/^(?:(?:\+|0{0,1})91(\s*[\-]\s*)?|[0]?)?[6-9]\d{4}[-]?\d{5}$/);
var reg_age = RegExp(/^(\d){1,3}$/);
var reg_pass_l = RegExp(/.{8}/);
var reg_p_s = RegExp(/[a-z]/);
var reg_p_c = RegExp(/[A-Z]/);
var reg_p_n = RegExp(/\d/);
var reg_city = RegExp(/^[a-zA-Z](\s{0,1}[a-zA-Z])+$/);
var reg_name = RegExp(/^[a-zA-Z]+([\.\s']?[a-zA-Z])*[a-zA-Z\.]*$/);

submit.addEventListener("click", function(e) {
	
	e.preventDefault();

	var b_p_l = reg_pass_l.test(pass.value);
	var b_p_s = reg_p_s.test(pass.value);
	var b_p_c = reg_p_c.test(pass.value);
	var b_p_n = reg_p_n.test(pass.value);

	var bool_num = reg2.test(num.value);
	
	var bool_email = reg_email.test(email.value);
	
	var bool_pass = (pass.value == con_pass.value);
	
	var bool_age = reg_age.test(age.value) && age.value!=0;

	var b_name = reg_name.test(namex.value);
	var b_city = reg_city.test(city.value);

	if(!b_p_l) {
		document.getElementById('len_err').innerHTML = "Enter Password of atleast 8 characters!! \n";
	}else {
		document.getElementById('len_err').innerHTML = "";
	}

	if (!b_p_s) {
		document.getElementById('small_err').innerHTML = "Password should contain atleast 1 small letter!! \n";
	}else {
		document.getElementById('small_err').innerHTML = "";
	}

	if(!b_p_c) {
		document.getElementById('cap_err').innerHTML = "Password should contain atleast one Capital Alphabet!! \n";
	} else {
		document.getElementById('cap_err').innerHTML = "";
	}

	if(!b_p_n) {
		document.getElementById('num_err').innerHTML = "Password should contain atleast 1 number!! \n";
	} else {
		document.getElementById('num_err').innerHTML = "";
	}

	if(!bool_num) {
	document.getElementById('mob_err').innerHTML = "Enter an Indian Mobile Number.";
	}else {
		document.getElementById('mob_err').innerHTML = "";
	}

	if(pass.value == ""){
		document.getElementById('pass_err').innerHTML = "Enter a password";
	} else {
		document.getElementById('pass_err').innerHTML = "";
	}

	if(!bool_age) {
		document.getElementById('age_err').innerHTML = "Enter valid age!!";
	}else {
		document.getElementById('age_err').innerHTML = "";
	}

	if(!bool_email) {
		document.getElementById('mail_err').innerHTML = "Enter your G-Suite Email Address." ;
	}else if(pass.value != "") {
		document.getElementById('mail_err').innerHTML = "";
	}

	if(!bool_pass) {
		document.getElementById('pass_err').innerHTML = "Enter same password to confirm.";
	}else {
		document.getElementById('pass_err').innerHTML = "";
	}

	if(!b_name) {
		document.getElementById('name_err').innerHTML = "Enter a valid name";
	} else {
		document.getElementById('name_err').innerHTML = "";
	}

	if(!b_city) {
		document.getElementById('city_err').innerHTML = "Enter a valid city name";
	} else {
		document.getElementById('city_err').innerHTML = "";
	}

	if(bool_pass && bool_email && bool_num && bool_age && b_p_n && b_p_c && b_p_s && b_p_l && b_name && b_city) {

		httpRequest = new XMLHttpRequest();

		httpRequest.onreadystatechange = function() {

			if(this.readyState == 4 && this.status == 200) {
				var res = JSON.parse(this.responseText);
				alert(res.response.message);
			}
			
		} ;

		httpRequest.open('POST' , 'http://172.25.55.8:3000/my_machau_api' , true);
		httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		httpRequest.send("email="+encodeURIComponent(email.value) );
	}

},true );



