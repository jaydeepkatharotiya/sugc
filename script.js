function validateForm()
		{
			// Declaration and Valleu Assigning ...
			var name = document.forms["myForm"]["name"].value;
			var email = document.forms["myForm"]["email"].value;
			var subject = document.forms["myForm"]["subject"].value;
			var message = document.forms["myForm"]["message"].value;

			if(name === "")
			{
				alert("Name must be filled out");
				return false;
			}else if(email === "")
			{
				alert("Email must be filled out");
				return false;
			}else if(subject === "")
			{
				alert("Subject must be filled out");
				return false;
			}else if(message === "")
			{
				alert("Message must be filled out");
				return false;
			}
			else
			{
				alert("Ticket Successfully Registered...");
				return true;
			}
		}