$(document).ready(function() { 
	$('#Send').click(function() {  
		var nameVal = $("#name").val();
		if(nameVal == '') {
			$("#nameres").html('<label class="error" id="name_error">Please enter your Name</label>');
			return false
		} else {
			$("#nameres").html('');
		}

		var phoneVal = $("#phone").val();
		if(phoneVal == '') {
			$("#phoneres").html('<label class="error" id="name_error">Please enter your Telephone</label>');
			return false
		} else {
			$("#phoneres").html('');
		}

		var emailVal = $("#email").val();
		if(emailVal == '') {
			$("#emailres").html('<label class="error" id="name_error">Please enter your Email</label>');
			return false
		} else {
			$("#emailres").html('');
		}
		var messageVal = $("#message").val();
		if(messageVal == '') {
			$("#messageres").html('<label class="error" id="name_error">Please enter your Message</label>');
			return false
		} else {
			$("#messageres").html('');
		}

		/*var codeVal = $("#code").val();
		if(codeVal == '') {
			$("#coderes").html('<label class="error" id="name_error">Please enter the code.</label>');
			return false
		} else {
			$("#coderes").html('');
		}*/

		$.post("quote.php?"+$("#frmquote").serialize(), {}, function(response) {
			if(response==1) {
				$("#frmres").html('<label class="success" id="after_submit">Thank you for submitting your details, will get back to you shortly!</label>');
				change_captcha();
				clear_form();
			} else if(response==2) {
				$("#frmres").html('<label class="error" id="after_submit">Please enter the code correctly!</label>');
			} else {
				$("#frmres").html('<label class="error" id="after_submit">Sorry, unable to send the details. Please try again!</label>');
			}
		});
		return false;
	});

	// refresh captcha
	$('img#refresh').click(function() {
		change_captcha();
	});

	function change_captcha() {
		document.getElementById('captcha').src="get_captcha.php?rnd=" + Math.random();
	}

	function clear_form() {
		$("#name").val('');
		$("#phone").val('');
		$("#message").val('');
		$("#code").val('');
	}
});