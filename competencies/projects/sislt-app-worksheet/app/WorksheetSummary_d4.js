function WorksheetSummary_d4()
{
	//STEP 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	//Fields for Step 1:
	var legalname = document.getElementById("d4_legalName").value
	var dateofbirth = document.getElementById("d4_DateOfBirth").value
	var emailaddress = document.getElementById("d4_emailAddress").value
	var applyyourselfid = document.getElementById("d4_ApplyYourselfID").value
	
	//Check to see if fields are empty
	if(legalname == "" || legalname == null ||
	   dateofbirth == "" || dateofbirth == null ||
	   emailaddress == "" || emailaddress == null ||
	   applyyourselfid == "" || applyyourselfid == null)
	{	
	document.getElementById("domestic4_step1").innerHTML = "<p><strong>Step 1: Complete Application:</strong><br><img src='images/cross.gif' width='13' height='13'>  <span style='color:red'><b>All fields expect MU Student Number(Legal Name, etc.) are NOT complete.</b></span></p>";
	}
	else
	{	
	document.getElementById("domestic4_step1").innerHTML = "<p><strong>Step 1: Complete Application:</strong><br><img src='images/tick.gif' width='13' height='13'> ApplyYourself Graduate Application is COMPLETE</p>";
	}


//STEP 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
if(document.getElementById("d4_transcriptsent_yes").checked)
{
	document.getElementById("domestic4_step2").innerHTML = "<p><strong>Step 2: Transcripts request:</strong><br><img src='images/tick.gif' width='13' height='13'> Transcripts have been requested.</p>";
}
else
{
	document.getElementById("domestic4_step2").innerHTML = "<p><strong>Step 2: Transcripts request:</strong><br><img src='images/cross.gif' width='13' height='13'> <span style='color:red'><b>Transcripts have NOT been requested.</b></span></p>";
}
// STEP 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//GRE RESULTS
if(document.getElementById("d4_gre_yes").checked)
{
	document.getElementById("domestic4_step3").innerHTML = "<p><strong>Step 3: Test scores:</strong><br><img src='images/tick.gif' width='13' height='13'> GRE has been taken.<br>Verbal:<b> "+ document.getElementById("d4_verbal").value + "</b>    | Quantitative:<b> " + document.getElementById("d4_quantitative").value  + "</b>    | Written Analytical: <b>" + document.getElementById("d4_written").value + "</b></p>";
}
else
{
	document.getElementById("domestic4_step3").innerHTML = "<p><strong>Step 3: Test scores:</strong><br><img src='images/cross.gif' width='13' height='13'> <span style='color:red'><b>GRE has NOT been taken.</b></span></p>";
}
// TOEFL RESULTS

if(document.getElementById("d4_toefl_waiver").checked)
{
	document.getElementById("domestic4_step3b").innerHTML = "<p><img src='images/tick.gif' width='13' height='13'> You are eligible for an automatic TOEFL waiver.</p>";
}
else if(document.getElementById("d4_toefl_yes").checked)
{
	document.getElementById("domestic4_step3b").innerHTML = "<p><img src='images/tick.gif' width='13' height='13'> TOEFL has been taken.<br>Reading:<b> "+ document.getElementById("d4_reading").value + "</b>    | Writing:<b> " + document.getElementById("d4_writing").value  + "</b>    | Listening: <b>" + document.getElementById("d4_listening").value + "</b>    | Speaking: <b>" + document.getElementById("d4_speaking").value + "</b>    | Composite: <b>" + document.getElementById("d4_composite").value + "</b></p>";
}
else
{
	document.getElementById("domestic4_step3b").innerHTML = "<p><img src='images/cross.gif' width='13' height='13'> <span style='color:red'><b>TOEFL has NOT been taken.</b></span></p>";
}




// STEP 4 NOT TRACKED ~~~~~~~~~~~~~~~~~~~~~~~~~~~

// STEP 5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Reference 1
var d4_ref1 = document.getElementById("d4_reference1").value
if(document.getElementById("d4_ref1_yes").checked && d4_ref1 != "")
{
	document.getElementById("domestic4_step5a").innerHTML = "<p><img src='images/tick.gif' width='13' height='13'> Reference 1 has  been requested from<b> " + d4_ref1 + "</b>.</p>";
}
else
{
	document.getElementById("domestic4_step5a").innerHTML = "<p><img src='images/cross.gif' width='13' height='13'> <span style='color:red'><b>Reference 1 has NOT been requested or name was not given.</b></span></p>";
}
// Reference 2
var d4_ref2 = document.getElementById("d4_reference2").value
if(document.getElementById("d4_ref2_yes").checked && d4_ref2 != "")
{
	document.getElementById("domestic4_step5b").innerHTML = "<p><img src='images/tick.gif' width='13' height='13'> Reference 2 has  been requested from<b> " + d4_ref2 + "</b>.</p>";
}
else
{
	document.getElementById("domestic4_step5b").innerHTML = "<p><img src='images/cross.gif' width='13' height='13'> <span style='color:red'><b>Reference 2 has NOT been requested or name was not given.</b></span></p>";
}
// Reference 3
var d4_ref3 = document.getElementById("d4_reference3").value
if(document.getElementById("d4_ref3_yes").checked && d4_ref3 != "")
{
	document.getElementById("domestic4_step5c").innerHTML = "<p><img src='images/tick.gif' width='13' height='13'> Reference 3 has  been requested from<b> " + d4_ref3 + "</b>.</p>";
}
else
{
	if(document.getElementById('d4_phd_only').checked)
	{
	document.getElementById("domestic4_step5c").innerHTML = "<p><img src='images/cross.gif' width='13' height='13'> <span style='color:red'><b>Reference 3 has NOT been requested or name was not given--REQUIRED ONLY FOR PHD GRADUATES.</b></span></p>";
	}
}

//Step 6 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

if(document.getElementById("d4_financial_document_yes").checked)
{
	document.getElementById("domestic4_step6").innerHTML = "<p><strong>Step 6: Financial Documents:</strong><br><img src='images/tick.gif' width='13' height='13'> Financial documents have been sent.</p>";
}
else
{
	document.getElementById("domestic4_step6").innerHTML = "<p><strong>Step 6: Financial Documents:</strong><br><img src='images/cross.gif' width='13' height='13'> <span style='color:red'><b>Financial documents have NOT been sent.</b></span></p>";
}

}





// SHOW HIDE ELEMENTS ON A PAGE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Hide gre score fields ~~~~~~~~~~~~~~~
$(document).ready(function() {$('#d4_gre_scores').hide()

//show Scores fields
$('#d4_gre_yes').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d4_gre_scores').slideDown('easeIn');
	}
}); // yes click()

$('#d4_gre_no').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d4_gre_scores').slideUp('easeOut');
	}
}); // no click()
}); // end ready


//Hide TOEFL score fields ~~~~~~~~~~~~~~~
$(document).ready(function() {$('#d4_toefl_scores').hide()

//show Scores fields
$('#d4_toefl_yes').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d4_toefl_scores').slideDown('easeIn');
		
	}
}); // yes click()

$('#d4_toefl_no').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d4_toefl_scores').slideUp('easeOut');
	}
}); // no click()
}); // end ready


//Show/Hide TOEFL question and radio buttons fields ~~~~~~~~~~~~~~~
$(document).ready(function() {$('#d4_toefl_question').show()

$('#d4_toefl_waiver').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d4_toefl_question').slideUp('fast');
		 $('#d4_toefl_scores').slideUp('easeOut');
	} else {
		 $('#d4_toefl_question').slideDown('fast');
		 
	}
}); // clidk on checkbox
}); // end ready


//Show/Hide PHD fields ~~~~~~~~~~~~~~~
$(document).ready(function() {$('#d4_phd_only_div').hide()

$('#d4_phd_only').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d4_phd_only_div').slideDown('fast');		  
	} else {
		 $('#d4_phd_only_div').slideUp('fast');    
	}
}); // clidk on checkbox
}); // end ready

//Show/Hide Three Reference fields ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//REFERENCE 1 
$(document).ready(function() {$('#d4_ref1').hide()

//show Scores fields
$('#d4_ref1_yes').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d4_ref1').slideDown('easeIn');
	}
}); // yes click()

$('#d4_ref1_no').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d4_ref1').slideUp('easeOut');
	}
}); // no click()

}); // end ready
//REFERENCE 2 
$(document).ready(function() {$('#d4_ref2').hide()

//show Scores fields
$('#d4_ref2_yes').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d4_ref2').slideDown('easeIn');
	}
}); // yes click()

$('#d4_ref2_no').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d4_ref2').slideUp('easeOut');
	}
}); // no click()

}); // end ready
//REFERENCE 3
$(document).ready(function() {$('#d4_ref3').hide()

//show Scores fields
$('#d4_ref3_yes').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d4_ref3').slideDown('easeIn');
	}
}); // yes click()

$('#d4_ref3_no').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d4_ref3').slideUp('easeOut');
	}
}); // no click()

}); // end ready
