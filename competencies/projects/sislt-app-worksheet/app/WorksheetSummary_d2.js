function WorksheetSummary_d2()
{
	//STEP 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	//Fields for Step 1:
	var legalname = document.getElementById("d2_legalName").value
	var dateofbirth = document.getElementById("d2_DateOfBirth").value
	var emailaddress = document.getElementById("d2_emailAddress").value
	var applyyourselfid = document.getElementById("d2_ApplyYourselfID").value
	
	//Check to see if fields are empty
	if(legalname == "" || legalname == null ||
	   dateofbirth == "" || dateofbirth == null ||
	   emailaddress == "" || emailaddress == null ||
	   applyyourselfid == "" || applyyourselfid == null)
	{	
	document.getElementById("domestic2_step1").innerHTML = "<p><strong>Step 1: Complete Application:</strong><br><img src='images/cross.gif' width='13' height='13'>  <span style='color:red'><b>All fields expect MU Student Number(Legal Name, etc.) are NOT complete.</b></span></p>";
	}
	else
	{	
	document.getElementById("domestic2_step1").innerHTML = "<p><strong>Step 1: Complete Application:</strong><br><img src='images/tick.gif' width='13' height='13'> ApplyYourself Graduate Application is COMPLETE</p>";
	}


//STEP 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
if(document.getElementById("d2_transcriptsent_yes").checked)
{
	document.getElementById("domestic2_step2").innerHTML = "<p><strong>Step 2: Transcripts request:</strong><br><img src='images/tick.gif' width='13' height='13'> Transcripts have been requested.</p>";
}
else
{
	document.getElementById("domestic2_step2").innerHTML = "<p><strong>Step 2: Transcripts request:</strong><br><img src='images/cross.gif' width='13' height='13'> <span style='color:red'><b>Transcripts have NOT been requested.</b></span></p>";
}
// STEP 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
if(document.getElementById("d2_gre_yes").checked)
{
	document.getElementById("domestic2_step3").innerHTML = "<p><strong>Step 3: Test scores:</strong><br><img src='images/tick.gif' width='13' height='13'> GRE has been taken.<br>Verbal:<b> "+ document.getElementById("d2_verbal").value + "</b>    | Quantitative:<b> " + document.getElementById("d2_quantitative").value  + "</b>    | Written Analytical: <b>" + document.getElementById("d2_written").value + "</b></p>";
}
else
{
	document.getElementById("domestic2_step3").innerHTML = "<p><strong>Step 3: Test scores:</strong><br><img src='images/cross.gif' width='13' height='13'> <span style='color:red'><b>GRE has NOT been taken.</b></span></p>";
}


// STEP 4 NOT TRACKED ~~~~~~~~~~~~~~~~~~~~~~~~~~~

// STEP 5 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Reference 1
var d2_ref1 = document.getElementById("d2_reference1").value
if(document.getElementById("d2_ref1_yes").checked && d2_ref1 != "")
{
	document.getElementById("domestic2_step5a").innerHTML = "<p><img src='images/tick.gif' width='13' height='13'> Reference 1 has  been requested from<b> " + d2_ref1 + "</b>.</p>";
}
else
{
	document.getElementById("domestic2_step5a").innerHTML = "<p><img src='images/cross.gif' width='13' height='13'> <span style='color:red'><b>Reference 1 has NOT been requested or name was not given.</b></span></p>";
}
// Reference 2
var d2_ref2 = document.getElementById("d2_reference2").value
if(document.getElementById("d2_ref2_yes").checked && d2_ref2 != "")
{
	document.getElementById("domestic2_step5b").innerHTML = "<p><img src='images/tick.gif' width='13' height='13'> Reference 2 has  been requested from<b> " + d2_ref2 + "</b>.</p>";
}
else
{
	document.getElementById("domestic2_step5b").innerHTML = "<p><img src='images/cross.gif' width='13' height='13'> <span style='color:red'><b>Reference 2 has NOT been requested or name was not given.</b></span></p>";
}
// Reference 3
var d2_ref3 = document.getElementById("d2_reference3").value
if(document.getElementById("d2_ref3_yes").checked && d2_ref3 != "")
{
	document.getElementById("domestic2_step5c").innerHTML = "<p><img src='images/tick.gif' width='13' height='13'> Reference 3 has  been requested from<b> " + d2_ref3 + "</b>.</p>";
}
else
{
	if(document.getElementById('d2_phd_only').checked)
	{
	document.getElementById("domestic2_step5c").innerHTML = "<p><img src='images/cross.gif' width='13' height='13'> <span style='color:red'><b>Reference 3 has NOT been requested or name was not given--REQUIRED ONLY FOR PHD GRADUATES.</b></span></p>";
	}
}

}
// SHOW HIDE ELEMENT ON A PAGE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Hide gre score fields ~~~~~~~~~~~~~~~
$(document).ready(function() {$('#d2_gre_scores').hide()

//show Scores fields
$('#d2_gre_yes').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d2_gre_scores').slideDown('easeIn');
	}
}); // yes click()

$('#d2_gre_no').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d2_gre_scores').slideUp('easeOut');
	}
}); // no click()
}); // end ready

//Show/Hide PHD fields ~~~~~~~~~~~~~~~
$(document).ready(function() {$('#d2_phd_only_div').hide()

$('#d2_phd_only').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d2_phd_only_div').slideDown('fast');
	} else {
		 $('#d2_phd_only_div').slideUp('fast');
	}
}); // clidk on checkbox
}); // end ready

//Show/Hide Three Reference fields ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//REFERENCE 1 
$(document).ready(function() {$('#d2_ref1').hide()

//show Scores fields
$('#d2_ref1_yes').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d2_ref1').slideDown('easeIn');
	}
}); // yes click()

$('#d2_ref1_no').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d2_ref1').slideUp('easeOut');
	}
}); // no click()

}); // end ready
//REFERENCE 2 
$(document).ready(function() {$('#d2_ref2').hide()

//show Scores fields
$('#d2_ref2_yes').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d2_ref2').slideDown('easeIn');
	}
}); // yes click()

$('#d2_ref2_no').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d2_ref2').slideUp('easeOut');
	}
}); // no click()

}); // end ready
//REFERENCE 3
$(document).ready(function() {$('#d2_ref3').hide()

//show Scores fields
$('#d2_ref3_yes').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d2_ref3').slideDown('easeIn');
	}
}); // yes click()

$('#d2_ref3_no').click(function() {
	//check to make sure field is checked
	if ($(this).attr('checked')) {
		 $('#d2_ref3').slideUp('easeOut');
	}
}); // no click()

}); // end ready