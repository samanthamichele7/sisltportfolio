function highlightFirstField(id)
{
    document.getElementById(id).focus();
    document.getElementById(id).select();
}

function complete_all_form()
{	
var complete=true;
var email=document.contact_form.email.value;
var password=document.contact_form.password.value;

if ((email.indexOf("@")==-1) || (email.indexOf(".")==-1)){
	window.alert("E-mail is not valid. (i.e., missing an '@' or '.').  Please check your e-mail address for accuracy.");
complete=false;
}

else if ((password=="") || (password==null))
{
	window.alert("Password field is blank.  Please provide a valid password.");
complete=false;
}
 return complete
}

