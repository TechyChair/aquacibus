// For sidebar
window.sbappear=function() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementsByTagName("body")[0].style.marginLeft = "15%";
};

function sbclose() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementsByTagName("body")[0].style.marginLeft = "0%";
}  

// For Quiz
let foodpoints = 0;
let waterpoints = 0;
let totalpoints = 0;

function startFunction() {
	document.getElementById("divQuestionOne").style.display = "block";
	document.getElementById("fullFood").style.display = "none";
	document.getElementById("startCup").style.display = "none";
	document.getElementById("emptyCup").style.display = "block";
	document.getElementById("quiz").style.display = "none"; 
}

function questionOneFunction() {
	if (document.getElementById("choiceb").checked) {
		document.getElementById("choiceB").style.backgroundColor = "green";    
		document.getElementById("choiceB").style.color = "white";
		document.getElementById("buttonToQuestionTwo").style.display = "block";
		foodpoints = foodpoints + 1;
		document.getElementById("partonefood").style.display = "block";
	}
	else if (document.getElementById("choicea").checked) {
		document.getElementById("choiceA").style.backgroundColor = "red";    
		document.getElementById("choiceA").style.color = "white";
		document.getElementById("buttonToQuestionTwo").style.display = "block";
	}
	else {
		document.getElementById("choiceC").style.backgroundColor = "red";    
		document.getElementById("choiceC").style.color = "white";
		document.getElementById("buttonToQuestionTwo").style.display = "block";
	}
}

function startTwoFunction() {
	document.getElementById("divQuestionOne").style.display = "none";
	document.getElementById("divQuestionTwo").style.display = "block";
}

function questionTwoFunction() {
	if (document.getElementById("choicectwo").checked) {
		document.getElementById("choiceCtwo").style.backgroundColor = "green";  
		document.getElementById("choiceCtwo").style.color = "white";  
		document.getElementById("buttonToQuestionThree").style.display = "block";
		waterpoints = waterpoints + 1;
		document.getElementById("emptyCup").style.display = "none";
		document.getElementById("cupOne").style.display = "block";
	}
	else if (document.getElementById("choiceatwo").checked) {
		document.getElementById("choiceAtwo").style.backgroundColor = "red";    
		document.getElementById("choiceAtwo").style.color = "white";
		document.getElementById("buttonToQuestionThree").style.display = "block";
	}
	else {
		document.getElementById("choiceBtwo").style.backgroundColor = "red";   
		document.getElementById("choiceBtwo").style.color = "white"; 
		document.getElementById("buttonToQuestionThree").style.display = "block";
	}
}

function startThreeFunction() {
	document.getElementById("divQuestionTwo").style.display = "none";
	document.getElementById("divQuestionThree").style.display = "block";
}

function questionThreeFunction() {
	if (document.getElementById("choiceathree").checked) {
		document.getElementById("choiceAthree").style.backgroundColor = "green";  
		document.getElementById("choiceAthree").style.color = "white";  
		document.getElementById("buttonToQuestionFour").style.display = "block";
		foodpoints = foodpoints + 1;
		if (foodpoints == 2) {
			document.getElementById("partonefood").style.display = "none";
			document.getElementById("parttwofood").style.display = "block";
		}
		else if (foodpoints == 1) {
			document.getElementById("partonefood").style.display = "block";
		}
	}
	else if (document.getElementById("choicebthree").checked) {
		document.getElementById("choiceBthree").style.backgroundColor = "red";   
		document.getElementById("choiceBthree").style.color = "white"; 
		document.getElementById("buttonToQuestionFour").style.display = "block";
	}
	else {
		document.getElementById("choiceCthree").style.backgroundColor = "red";
		document.getElementById("choiceCthree").style.color = "white";   
		document.getElementById("buttonToQuestionFour").style.display = "block";
	}
}

function startFourFunction() {
	document.getElementById("divQuestionThree").style.display = "none";
	document.getElementById("divQuestionFour").style.display = "block";
}

function questionFourFunction() {
	if (document.getElementById("choiceafour").checked) {
		document.getElementById("choiceAfour").style.backgroundColor = "green"; 
		document.getElementById("choiceAfour").style.color = "white";   
		document.getElementById("buttonToQuestionFive").style.display = "block";
		waterpoints = waterpoints + 1;
		if (waterpoints == 2) {
			document.getElementById("cupOne").style.display = "none";
			document.getElementById("cupTwo").style.display = "block";
		}
		else if (waterpoints == 1) {
			document.getElementById("emptyCup").style.display = "none";
			document.getElementById("cupOne").style.display = "block";
		}
	}
	else if (document.getElementById("choicebfour").checked) {
		document.getElementById("choiceBfour").style.backgroundColor = "red";    
		document.getElementById("choiceBfour").style.color = "white";
		document.getElementById("buttonToQuestionFive").style.display = "block";
	}
	else {
		document.getElementById("choiceCfour").style.backgroundColor = "red";    
		document.getElementById("choiceCfour").style.color = "white";
		document.getElementById("buttonToQuestionFive").style.display = "block";
	}
}

function startFiveFunction() {
	document.getElementById("divQuestionFour").style.display = "none";
	document.getElementById("divQuestionFive").style.display = "block";
}

function questionFiveFunction() {
	if (document.getElementById("choicecfive").checked) {
		document.getElementById("choiceCfive").style.backgroundColor = "green";    
		document.getElementById("choiceCfive").style.color = "white";
		document.getElementById("buttonToQuestionSix").style.display = "block";
		foodpoints = foodpoints + 1;
		if (foodpoints == 3) {
			document.getElementById("parttwofood").style.display = "none";
			document.getElementById("partthreefood").style.display = "block";
		}
		else if (foodpoints == 2) {
			document.getElementById("partonefood").style.display = "none";
			document.getElementById("parttwofood").style.display = "block";
		}
		else if (foodpoints == 1) {
			document.getElementById("partonefood").style.display = "block";
		}
	}
	else if (document.getElementById("choiceafive").checked) {
		document.getElementById("choiceAfive").style.backgroundColor = "red";   
		document.getElementById("choiceAfive").style.color = "white"; 
		document.getElementById("buttonToQuestionSix").style.display = "block";
	}
	else {
		document.getElementById("choiceBfive").style.backgroundColor = "red";   
		document.getElementById("choiceBfive").style.color = "white"; 
		document.getElementById("buttonToQuestionSix").style.display = "block";
	}
}

function startSixFunction() {
	document.getElementById("divQuestionFive").style.display = "none";
	document.getElementById("divQuestionSix").style.display = "block";
}

function questionSixFunction() {
	if (document.getElementById("choicebsix").checked) {
		document.getElementById("choiceBsix").style.backgroundColor = "green";   
		document.getElementById("choiceBsix").style.color = "white"; 
		document.getElementById("buttonToResults").style.display = "block";
		waterpoints = waterpoints + 1;
		if (waterpoints == 3) {
			document.getElementById("cupTwo").style.display = "none";
			document.getElementById("cupThree").style.display = "block";
		}
		else if (waterpoints == 2) {
			document.getElementById("cupOne").style.display = "none";
			document.getElementById("cupTwo").style.display = "block";
		}
		else if (waterpoints == 1) {
			document.getElementById("emptyCup").style.display = "none";
			document.getElementById("cupOne").style.display = "block";
		}
	}
	else if (document.getElementById("choiceasix").checked) {
		document.getElementById("choiceAsix").style.backgroundColor = "red"; 
		document.getElementById("choiceAsix").style.color = "white";   
		document.getElementById("buttonToResults").style.display = "block";
	}
	else {
		document.getElementById("choiceCsix").style.backgroundColor = "red";  
		document.getElementById("choiceCsix").style.color = "white";  
		document.getElementById("buttonToResults").style.display = "block";
	}
}

function resultsFunction() {
	document.getElementById("divQuestionSix").style.display = "none";
	document.getElementById("divResults").style.display = "block";
	totalpoints = foodpoints + waterpoints;
	document.getElementById("totalpoints").innerHTML = totalpoints;
	document.getElementById("buttonToRestart").style.display = "block";
}