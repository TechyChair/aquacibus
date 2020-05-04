// For sidebar
window.sbappear=function() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementsByTagName("body")[0].style.marginLeft = "15%";
    document.getElementsByClassName("stick")[0].style.width = "85%";
}

function sbclose() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementsByTagName("body")[0].style.marginLeft = "0%";
    document.getElementsByClassName("stick")[0].style.width = "100%";
}   

// Makes textinput appear when checkbox is clicked
function Checkbox() {
	var checkbox1 = document.getElementById("socmed");
	var checkbox2 = document.getElementById("email");
	var checkbox3 = document.getElementById("cno");
    
        if (checkbox1.checked == true) {
			document.getElementById("smacc").style.display = "inline";
		}
        else {
			document.getElementById("smacc").style.display = "none";
		}
		if (checkbox2.checked == true) {
			document.getElementById("eemail").style.display = "inline";
		}
		else {
			document.getElementById("eemail").style.display = "none";
		}
		if (checkbox3.checked == true) {
            document.getElementById("number").style.display = "inline";
		}
        else {
			document.getElementById("number").style.display = "none";
		}		
}

// Submit processing and checking
function ValidateForm() {
    var txt = document.getElementById("tarea");    
    var checkbox1 = document.getElementById("socmed");
	var checkbox2 = document.getElementById("email");
	var checkbox3 = document.getElementById("cno");
    var txt1 = document.getElementById("smacc");
    var txt2 = document.getElementById("eemail");
    var txt3 = document.getElementById("number");
    var form = document.getElementById("form");

	if (txt.value == "") {
		alert('Please fill in the comments/suggestions box.');
        txt.focus();
		return false;
	}
    
	if (checkbox1.checked != true && checkbox2.checked != true && checkbox3.checked != true) {
		alert('Please check at least one of the contact details.');
	    return false;
	}
    if (checkbox1.checked == true && txt1.value == "") {
        alert ('Please fill in your checked contact details.');
        txt1.focus();
        return false;
    }
    
    if (checkbox2.checked == true && txt2.value == "") {
        alert ('Please fill in your checked contact details.');
        txt2.focus();
        return false;
    }
    
    if (checkbox3.checked == true && txt3.value == "") {
        alert ('Please fill in your checked contact details.');
        txt3.focus();
        return false;
    }
    
	var check = confirm('Are you sure you want to submit this form?');
	    if (check==true) {
                SaveForm();
	            form.submit();
	        }
        else {
            return false;
        }
}

// Reset Form 
function ResetForm () {
    var form= document.getElementById("form");
    var reset = confirm('Are you sure you want to reset this form?');
    if (reset==true) {
        form.reset();
        return false;
    }
    else {
        return false;
    }
}

function SaveForm() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var minitial = document.getElementById("minitial").value;
    var tarea = document.getElementById("tarea").value;
    var smacc = document.getElementById("smacc").value;
    var eemail = document.getElementById("eemail").value;
    var number = document.getElementById("number").value;
    
    if (fname != "") {
        localStorage.setItem("fname", fname);
    }
    
    if (lname != "") {
        localStorage.setItem("lname", lname);
    }
    
    if (minitial != "") {
        localStorage.setItem("minitial", minitial);
    }
    
    if (smacc != "") {
        localStorage.setItem("smacc", smacc);
    }
    
    if (eemail != "") {
        localStorage.setItem("eemail", eemail);
    }
    
    if (number != "") {
        localStorage.setItem("number", number);
    }
    
    localStorage.setItem("tarea", tarea);
}
