// JavaScript Document
// Submits form data

var errorMsg = "";

function checkFormValues()
{
	var blnvalidate = true;
	var elementsInputs;

	//elementsInputs = currentForm.getElementsByTagName("input");
	
	elementsInputs = $("input");

	for ( var i=0; i<elementsInputs.length; i++ )
	{

		if ( /req_email$/.test(elementsInputs[i].className) )
		{
			if ( !validateEmail(elementsInputs[i].value) )
			{
				blnvalidate = false;
				errorMsg += "- " + getMessage(elementsInputs[i]) + "\n";
				elementsInputs[i].style.border = 'solid 2px #d99d28';
			}
		}
		else if ( /req$/.test(elementsInputs[i].className) )
		{
			if ( !elementsInputs[i].value )
			{
				blnvalidate = false;
				errorMsg += "- " + getMessage(elementsInputs[i]) + "\n";
				elementsInputs[i].style.border = 'solid 2px #d99d28';
			}		
		}
		else if ( /req_checkbox$/.test(elementsInputs[i].className) )
		{
			var this_cb_name = elementsInputs[i].name;
		
			//var cb_elms = document.getElementsByTagName("checkbox");
			
			var cb_elms = $("input[name='"+this_cb_name+"']");
			
			var cb_count = cb_elms.length-1;
			
			var is_checked = false;
				
				for ( j=0; j<=cb_count; j++ )
				{
					if ( cb_elms[j].name == this_cb_name && cb_elms[j].checked == true )
					{
						is_checked = true;
						break;
					}
				}
				if ( !is_checked )
				{
					blnvalidate = false;
					errorMsg += "- " +
					getMessage(elementsInputs[i]) + "\n";
					$("tr#"+this_cb_name+"").css("background-color","#d99d28");
					$("div#"+this_cb_name+"").css("border"," 2px solid #d99d28");
				}                              
		}
		else if ( /req_tel$/.test(elementsInputs[i].className) )
		{
			if ( !validateTelephone(elementsInputs[i].value) )
			{
				blnvalidate = false;
				errorMsg += "- " + getMessage(elementsInputs[i]) + "\n";
				elementsInputs[i].style.border = 'solid 2px #d99d28';
			}		
		}		
		else if ( /req_date$/.test(elementsInputs[i].className) )
		{
			if ( !validateDate(elementsInputs[i].value) )
			{
				blnvalidate = false;
				errorMsg += "- " + getMessage(elementsInputs[i]) + "\n";
				elementsInputs[i].style.border = 'solid 2px #d99d28';
			}		
		}				
		else if ( /req_img$/.test(elementsInputs[i].className) )
		{
			if ( !validateImg(elementsInputs[i].value) )
			{
				blnvalidate = false;
				errorMsg += "- " + getMessage(elementsInputs[i]) + "\n";
				elementsInputs[i].style.border = 'solid 2px #d99d28';
			}		
		}
		else if ( /req_keyword$/.test(elementsInputs[i].className) )
		{
			if ( !validateKeyword(elementsInputs[i].value ) )
			{
				blnvalidate = false;	
				errorMsg += "- " + getMessage(elementsInputs[i]) + "\n";
				elementsInputs[i].style.border = 'solid 2px #d99d28';
			}		
			else if ( keyword_array.in_array(elementsInputs[i].value) )
			{
				blnvalidate = false;	
				errorMsg += "- keyword already in use\n";
				elementsInputs[i].style.border = 'solid 2px #d99d28';
			}
		}	
	}	
	
	if (  $("textarea").length > 0 )
	{
		chkTextArea = $("textarea");

		for ( var i=0; i<chkTextArea.length; i++ )
		{	
			if ( /req$/.test(chkTextArea[i].className) )
			{
				if ( !chkTextArea[i].value )
				{
					blnvalidate = false;
					errorMsg += "- " + getMessage(chkTextArea[i]) + "\n";
					chkTextArea[i].style.border = 'solid 2px #d99d28';
				}
			}
		}			
	}

	if ( $("select").length > 0 )
	{
		chkSelect = $("select");

		for ( var i=0; i<chkSelect.length; i++ )
		{			
			if ( /req$/.test(chkSelect[i].className) )
			{
				if ( !chkSelect[i].value )
				{
					blnvalidate = false;
					errorMsg += "- " + getMessage(chkSelect[i]) + "\n";
					chkSelect[i].style.border = 'solid 2px #d99d28';
				}	
			}
		}
	}

	return blnvalidate;

}


function validateDate(value)
{
	var filter = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

	if ( !filter.test(value) )
	{
		return false;
	}
	
	return true;
}

function validateEmail(value)
{
	var filter = /^.+@.+\..{2,3}$/;
	
	if ( !filter.test(value) )
	{
		return false;
	}
	
	return true;
}

function validateTelephone(value)
{
	var filter = /^([0-9 ]{7,})$/;

	if ( !filter.test(value) )
	{
		return false;
	}
	
	return true;

}

function validateKeyword(value)
{
	return true;
	var filter = /([ \.]+)/;

	if ( !filter.test(value) )
	{
		return true;
	}
	
	return false;

}

function validateImg(value)
{
	var filter = /(jpg|jpeg)/;

	if ( value == "" )
	{
		return true;
	}

	if ( filter.test(value.toLowerCase()) )
	{
		return true;
	}
	
	return false;

}

function getMessage(element)
{

	msg = element.getAttribute("title") ? element.getAttribute("title") : element.getAttribute("alt");
	msg = msg ? msg : "please enter " + element.getAttribute("name").replace(/_/g, " ");
	
	return msg;
}