$(document).ready(function(){
	// "use strict";
	// hover in navbar starts here.
	$('ul.nav li.dropdown').hover(function(){
	$('.dropdown-menu', this).fadeIn();
	}, function(){
	$('.dropdown-menu', this).fadeOut('fast');
	});
	// hover in navbar ends here.
	$('.carousel').carousel({
		interval: 7000, 
		keyboard: true,
		pause: true
	});
	// Tooltip effect starts here
	$('[data-toggle="tooltip"]').tooltip();
	// Tooltip effect ends here.
	// Scroll-to-top starts from here
	var link = $(".scroll-to-top-link");
	link.on("click", function(){
		$("body").animate({scrollTop: 0});
		$("html").animate({scrollTop: 0});
	});
	// Scroll-to-top ends here
	// Hover on gallery image effect starts here

	$('.thumbnail').hover(
	        function(){
	            $(this).find('.caption1').slideDown(250); //.fadeIn(250)
	        },
	        function(){
	            $(this).find('.caption1').slideUp(250); //.fadeOut(205)
	        }
	);

	$('.thumbnail').hover(
	        function(){
	            $(this).find('.caption').slideUp(250); //.fadeIn(250)
	        },
	        function(){
	            $(this).find('.caption').slideDown(250); //.fadeOut(205)
	        }
	);
	// Hover on gallery image effects ends here.

	// Fun fact timer starts here
	// if (window.location.pathname == "/C:/Users/bjupr/Desktop/Grande/index1.html") {
		$(window).scroll(function() {
			var y = $(this).scrollTop();
			var awards_pos = $('.fun-facts-section').position();
			var awards_height = $('.fun-facts-section').height();
			if (y >= awards_pos.top - 8 * awards_height) {
				$('h4.timer').each(function(){
					$(this).prop('Counter', 0).animate({
						Counter: $(this).text()
					},
						{
						duration: 1500,
						easing: 'swing',
						step: function (now) {
							$(this).text(Math.ceil(now));
						}
					});
				});
				$('.fact-count').removeClass('timer');
			}
		});
	// }
	// Fun-fact timer ends here.
	// Form-validation of appointment starts here
	var a, b, c, d, ea, f, g;
	function validateName(id)
	{
		var patientnam = $("#"+id).val();
		if (patientnam.length > 2) {
			var dic = $("#"+id).closest("div");
			dic.removeClass("has-error");
			dic.addClass("has-feedback");
			dic.addClass("has-success");
			var spa = $("#jqueryicon-name");
			spa.removeClass("glyphicon-remove");
			spa.addClass("glyphicon-ok");
			var spa1 = $(".patient-name-feedback");
			spa1.text("");
			a = 1;
		}
		else
		{
			var dic = $("#"+id).closest("div");
			dic.removeClass("has-success");
			dic.addClass("has-error");
			dic.addClass("has-feedback");
			var spa = $("#jqueryicon-name");
			spa.addClass("glyphicon-remove");
			var spa1 = $(".patient-name-feedback");
			spa1.text("Your name must exceeds at least two digit.");
			a = 0;
		}
	}
	function validateMobile(id)
	{
		var patientmob = $("#"+id).val();
		if($.isNumeric(patientmob) && patientmob.length == 10)
		{
			var dic1 = $("#"+id).closest("div");
			dic1.removeClass("has-error");
			dic1.addClass("has-success");
			dic1.addClass("has-feedback");
			var spa = $("#jqueryicon-mobile");
			spa.removeClass("glyphicon-remove");
			spa.addClass("glyphicon-ok");
			var spa1 = $(".patient-mobile-feedback");
			spa1.text("");
			b = 1;
		}
		else
		{
			var dic1 = $("#"+id).closest("div");
			dic1.removeClass("has-success");
			dic1.addClass("has-error");
			dic1.addClass("has-feedback");
			var spa = $("#jqueryicon-mobile");
			spa.removeClass("glyphicon-ok");
			spa.addClass("glyphicon-remove");
			var spa1 = $(".patient-mobile-feedback");
			spa1.text("Please enter a ten digit mobile number.");
			b = 0;
		}
	}
	function validateSex(id)
	{
		var patientsex = $("#"+id).val();
		if (patientsex == 1 || patientsex == 2)
		{
			var dic2 = $("#"+id).closest("div");
			dic2.removeClass("has-error");
			dic2.addClass("has-success");
			dic2.addClass("has-feedback");
			var spa = $("#jqueryicon-sex");
			spa.removeClass("glyphicon-remove");
			spa.addClass("glyphicon-ok");
			var spa2 = $(".patient-sex-feedback");
			spa2.text("");
			c = 1;
		}
		else
		{
			var dic2 = $("#"+id).closest("div");
			dic2.removeClass("has-success");
			dic2.addClass("has-error");
			dic2.addClass("has-feedback");
			var spa = $("#jqueryicon-sex");
			spa.removeClass("glyphicon-ok");
			spa.addClass("glyphicon-remove");
			var spa2 = $(".patient-sex-feedback");
			spa2.text("Select your sex");
			c = 0;
		}
	}
	function validateAge(id)
	{
		var patientage = $("#"+id).val();
		if($.isNumeric(patientage) && patientage > 0 && patientage < 120)
		{
			var dic3 = $("#"+id).closest("div");
			dic3.removeClass("has-error");
			dic3.addClass("has-success");
			dic3.addClass("has-feedback");
			var spa = $("#jqueryicon-age");
			spa.removeClass("glyphicon-remove");
			spa.addClass("glyphicon-ok");
			var spa3 = $(".patient-age-feedback");
			spa3.text("");
			d = 1;
		}
		else
		{
			var dic3 = $("#"+id).closest("div");
			dic3.removeClass("has-success");
			dic3.addClass("has-error");
			dic3.addClass("has-feedback");
			var spa = $("#jqueryicon-age");
			spa.removeClass("glyphicon-ok");
			spa.addClass("glyphicon-remove");
			var spa3 = $(".patient-age-feedback");
			spa3.text("Enter your age");
			d = 0;
		}
	}
	function validateDate(id)
	{
		var fullDate = new Date()
		var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
		var currentDate = fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
		var year = fullDate.getFullYear();
		var date = fullDate.getDate();

		if (twoDigitMonth == 12)
		{
			var year1 = year++;
			var a = 01;
			$("#preferreddate").attr("max", year1+"-"+a+"-"+date);
			$("#preferreddate").attr("min", year+"-"+twoDigitMonth+"-"+date);
		}
		else
		{
			twoDigitMonth1 = twoDigitMonth++;
			$("#preferreddate").attr("max", year+"-"+twoDigitMonth1+"-"+date);
			$("#preferreddate").attr("min", year+"-"+twoDigitMonth+"-"+date);
		}
	}
	function validateMessage(id)
	{
		var messageustext = $("#"+id).val();
		console.log(messageustext.length);
		if(messageustext.length > 200)
		{
			var dic4 = $("#"+id).closest("div");
			dic4.addClass("has-error");
			var spa5 = $(".patient-message-feedback");
			spa5.text("Your message should not exceed 200 letters.");
			ea = 0;
		}
		else
		{
			var dic4 = $("#"+id).closest("div");
			dic4.removeClass("has-error");
			var spa5 = $(".patient-message-feedback");
			spa5.text("");
			ea = 1;
		}
	}
	function validateEmail(id)
	{
		var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		var email = $("#" + id).val();
		if(pattern.test(email)) { 
			var dic4 = $("#"+id).closest("div");
			dic4.removeClass("has-error");
			dic4.addClass("has-success");
			var spa = $("#jqueryicon-email");
			spa.removeClass("glyphicon-remove");
			spa.addClass("glyphicon-ok");
			var spa3 = $(".patient-email-feedback");
			spa3.text("");
			g = 1;
		}

		else{
			var dic3 = $("#"+id).closest("div");
			dic3.removeClass("has-success");
			dic3.addClass("has-error");
			var spa = $("#jqueryicon-email");
			spa.removeClass("glyphicon-ok");
			spa.addClass("glyphicon-remove");
			var spa3 = $(".patient-email-feedback");
			spa3.text("Enter correct email address.");
			g = 0;
		}
	}
	function validateCaptcha(id, id1)
	{
		var captchatextvalue = $("#"+id1).val();
		var captchavalue = $("#"+id).val();
		if (captchavalue == captchatextvalue) 
		{
			var dic5 = $("#"+id1).closest("div");
			dic5.removeClass("has-error");
			dic5.addClass("has-success");
			dic5.addClass("has-feedback");
			var spa = $("#jqueryicon-captcha");
			spa.removeClass("glyphicon-remove");
			spa.addClass("glyphicon-ok");
			var spa6 = $(".patient-captcha-feedback");
			spa6.text("");
			f = 1;
		}
		else
		{
			var dic5 = $("#"+id1).closest("div");
			dic5.removeClass("has-success");
			dic5.addClass("has-error");
			dic5.addClass("has-feedback");
			var spa = $("#jqueryicon-captcha");
			spa.removeClass("glyphicon-ok");
			spa.addClass("glyphicon-remove");
			var spa6 = $(".patient-captcha-feedback");
			spa6.text("Enter correctly");
			var randomNumber = Math.floor(Math.random()*(999999-111111+1)+111111);
			$("#captcha").val(randomNumber);
			f = 0;
		}
	}
	var randomNumber = Math.floor(Math.random()*(999999-111111+1)+111111);
	$("#captcha").val(randomNumber);

	$("#contactbtn").click(function(e){
		e.preventDefault();
		validateName("patient-name");
		validateMobile("patient-mobile");
		validateSex("patient-sex");	
		validateAge("patient-age");
		validateEmail("patient-email");
		validateMessage("messageus");
		validateCaptcha("captcha", "captcha-text");
		if (a == 1 && b == 1 && c == 1 && d == 1 && ea == 1 && f == 1) {
			$("form#main-appointment").submit();
			alert("Your form has been submitted.");
		}
	});
	
	// Form-validation of appointment ends here
	// Cabin-Booking form validation starts here
	function validateNameCabin(id)
	{
		var patientnamcabin = $("#"+id).val();
		if (patientnamcabin.length > 2) {
			var dic = $("#"+id).closest("div");
			dic.removeClass("has-error");
			dic.addClass("has-success");
			var spa = $("#jqueryicon-name");
			spa.removeClass("glyphicon-remove");
			spa.addClass("glyphicon-ok");
			var spa1 = $(".patient-name-cabin-feedback");
			spa1.text("");
			a = 1;
		}
		else
		{
			var dic = $("#"+id).closest("div");
			dic.removeClass("has-success");
			dic.addClass("has-error");
			var spa = $("#jqueryicon-name");
			spa.addClass("glyphicon-remove");
			var spa1 = $(".patient-name-cabin-feedback");
			spa1.text("Your name must exceeds at least two digit.");
			a = 0;
		}
	}
	function validateMobileCabin(id) 
	{
		var patientmob = $("#"+id).val();
		if($.isNumeric(patientmob) && patientmob.length == 10)
		{
			var dic1 = $("#"+id).closest("div");
			dic1.removeClass("has-error");
			dic1.addClass("has-success");
			var spa = $("#jqueryicon-mobile");
			spa.removeClass("glyphicon-remove");
			spa.addClass("glyphicon-ok");
			var spa1 = $(".patient-mobile-cabin-feedback");
			spa1.text("");
			b = 1;
		}
		else
		{
			var dic1 = $("#"+id).closest("div");
			dic1.removeClass("has-success");
			dic1.addClass("has-error");
			var spa = $("#jqueryicon-mobile");
			spa.removeClass("glyphicon-ok");
			spa.addClass("glyphicon-remove");
			var spa1 = $(".patient-mobile-cabin-feedback");
			spa1.text("Please enter a ten digit mobile number.");
			b = 0;
		}
	}
	function validateSexCabin(id)
	{
		var patientsexcabin = $("#"+id).val();
		if (patientsexcabin == 1 || patientsexcabin == 2)
		{
			var dic2 = $("#"+id).closest("div");
			dic2.removeClass("has-error");
			dic2.addClass("has-success");
			var spa = $("#jqueryicon-sex");
			spa.removeClass("glyphicon-remove");
			spa.addClass("glyphicon-ok");
			var spa2 = $(".patient-sex-cabin-feedback");
			spa2.text("");
			c = 1;
		}
		else
		{
			var dic2 = $("#"+id).closest("div");
			dic2.removeClass("has-success");
			dic2.addClass("has-error");
			var spa = $("#jqueryicon-sex");
			spa.removeClass("glyphicon-ok");
			spa.addClass("glyphicon-remove");
			var spa2 = $(".patient-sex-cabin-feedback");
			spa2.text("Select your sex");
			c = 0;
		}
	}
	function validateAgeCabin(id)
	{
		var patientagecabin = $("#"+id).val();
		if($.isNumeric(patientagecabin) && patientagecabin > 0 && patientagecabin < 120)
		{
			var dic3 = $("#"+id).closest("div");
			dic3.removeClass("has-error");
			dic3.addClass("has-success");
			var spa = $("#jqueryicon-age");
			spa.removeClass("glyphicon-remove");
			spa.addClass("glyphicon-ok");
			var spa3 = $(".patient-age-cabin-feedback");
			spa3.text("");
			d = 1;
		}
		else
		{
			var dic3 = $("#"+id).closest("div");
			dic3.removeClass("has-success");
			dic3.addClass("has-error");
			var spa = $("#jqueryicon-age");
			spa.removeClass("glyphicon-ok");
			spa.addClass("glyphicon-remove");
			var spa3 = $(".patient-age-cabin-feedback");
			spa3.text("Enter your age");
			d = 0;
		}
	}
	function validateEmailCabin(id)
	{
		var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		var emailCabin = $("#" + id).val();
		if(pattern.test(emailCabin)) { 
			var dic4 = $("#"+id).closest("div");
			dic4.removeClass("has-error");
			dic4.addClass("has-success");
			var spa = $("#jqueryicon-email");
			spa.removeClass("glyphicon-remove");
			spa.addClass("glyphicon-ok");
			var spa3 = $(".patient-email-cabin-feedback");
			spa3.text("");
			ea = 1;
		}

		else{
			var dic3 = $("#"+id).closest("div");
			dic3.removeClass("has-success");
			dic3.addClass("has-error");
			var spa = $("#jqueryicon-email");
			spa.removeClass("glyphicon-ok");
			spa.addClass("glyphicon-remove");
			var spa3 = $(".patient-email-cabin-feedback");
			spa3.text("Enter correct email address.");
			ea = 0;
		}
	}
	function validateCabin(id)
	{
		var cabintype = document.getElementsByName("cabintype");
		console.log(cabintype.length);
		var checknumber = 5;
		for(var i=0; i < cabintype.length; i++){
		    if(cabintype[i].checked) 
		    {
		    	checknumber = i;
	      		
	        }
	        if (checknumber != 5)
	        {
	        	var dic2 = $("#"+id).closest("div");
	        	dic2.removeClass("has-error");
	        	dic2.addClass("has-success");
	        	var spa = $("#jqueryicon-cabintype");
	        	spa.removeClass("glyphicon-remove");
	        	spa.addClass("glyphicon-ok");
	        	var spa2 = $(".patient-cabintype-feedback");
	        	spa2.text("");
	        	f = 1;
	        }
	        else
	        {
	        	var dic2 = $("#"+id).closest("div");
	        	dic2.removeClass("has-success");
	        	dic2.addClass("has-error");
	        	var spa = $("#jqueryicon-cabintype");
	        	spa.removeClass("glyphicon-ok");
	        	spa.addClass("glyphicon-remove");
	        	var spa2 = $(".patient-cabintype-feedback");
	        	spa2.text("Please select a radio type.");
	        	f = 0;
	        }
		}
	}	//function validateCabin ends here
	$("#contactbtn-cabin").click(function(a) {
		a.preventDefault();
		validateNameCabin("patient-name-cabin");
		validateMobileCabin("patient-mobile-cabin");
		validateSexCabin("patient-sex-cabin");
		validateEmailCabin("patient-email-cabin");
		validateAgeCabin("patient-age-cabin");
		validateCabin("cabintype");
		if (a == 1 && b == 1 && c == 1 && d == 1 && ea == 1 && f == 1) {
			$("form#main-appointment").submit();
			alert("Your form has been submitted.");
		}
	});
	// Cabin-Booking form validation ends here

});