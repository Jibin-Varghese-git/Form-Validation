function validate()
{

	let uname=document.getElementById("uname").value;
	let email=document.getElementById("email").value;
	let pass1=document.getElementById("pass1").value;
	let pass2=document.getElementById("pass2").value;
	let mob_num=document.getElementById("mob_num").value;
	

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	var phoneno = /^\d{10}$/;
	
	


	if(uname=="")
	{
		document.getElementById("uname_error").innerHTML="Enter the user name";
	}
	else
	{
		document.getElementById("uname_error").innerHTML="";
	}
	


	if(email=="")
	{
		document.getElementById("email_error").innerHTML= "Enter the email";
	}
	else if(emailRegex.test(email)!=true)
	{
		document.getElementById("email_error").innerHTML="Not  valid gmail";
	}
	else 
	{
		document.getElementById("email_error").innerHTML="";
	}

	var psw_lower=/[a-z]/;
	var psw_upper=/[A-Z]/;
	var psw_digit=/[0-9]/;
	var psw_special=/[^a-zA-Z0-9]/;
	var psw_space=/\s/;


	if(pass1.length==0)
	{
		document.getElementById("pass1_error").innerHTML= "Enter the password";
	}
		
	else if(psw_space.test(pass1)==true)
	{
		document.getElementById("pass1_error").innerHTML= "Should not contain whitespace";
	}	
	else if(psw_lower.test(pass1)!=true)
	{
		document.getElementById("pass1_error").innerHTML= "Must contain atleast a lower case letter";
	}
	else if(psw_upper.test(pass1)!=true)
	{
		document.getElementById("pass1_error").innerHTML= "Must contain atleast an upper case letter";
	}
	else if(psw_digit.test(pass1)!=true)
	{
		document.getElementById("pass1_error").innerHTML= "Must contain atleast a digit";
	}
	else if(psw_special.test(pass1)!=true)
	{
		document.getElementById("pass1_error").innerHTML= "Must contain atleast a special character";
	}
	else if(pass1.length<8)
	{
		document.getElementById("pass1_error").innerHTML= "Password must contain 8 chars";
	}
	
	else
	{
		document.getElementById("pass1_error").innerHTML="";
	}
	



	if(pass1 != pass2)
	{
		document.getElementById("pass2_error").innerHTML="Password mismatch";
	}
	else
	{
		document.getElementById("pass2_error").innerHTML="";
	}
	 


	if(mob_num=="")
	{
		document.getElementById("mob_num_error").innerHTML="Enter the mobile number";
	}
	else if(phoneno.test(mob_num)!=true)
	{
		document.getElementById("mob_num_error").innerHTML="Invalid . Must contain 10 digits";
	}
	else 
	{
		document.getElementById("mob_num_error").innerHTML="";
	}

	

}


function myFunction(event) 
{
 
	key=event.charCode;

	if(key>=48 && key<=57)
	{
	}
	else
	{
	 	event.preventDefault();
	}

}

