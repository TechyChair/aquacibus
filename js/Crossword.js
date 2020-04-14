// For sidebar
window.sbappear=function() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementsByTagName("body")[0].style.marginLeft = "15%";
};

function sbclose() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementsByTagName("body")[0].style.marginLeft = "0%";
}  

// For verifying answer in crossword

function verify() {
    //Get Clue & Answer
    var s = document.getElementById("clue");
    var clue = s.options[s.selectedIndex].value;
    var answer = document.getElementById("answer").value;
    
    //Set boolean variables
    var check;
    
    //If statements nyehe
    if (clue == "1A") {
        if (answer == "acutewaterydiarrhea") {
            check = true;
        }
        else {
            check = false;
        }
    }
    
    else if (clue == "2A") {
        if (answer == "clean-up") {
            check = true;
        }
        else {
            check = false;
        }
    }
    
    else if (clue == "3A") {
        if (answer == "fao") {
            check = true;
        }
        else {
            check = false;
        }
    }
    
    else if (clue == "4A") {
        if (answer == "change") {
            check = true;
        }
        else {
            check = false;
        }
    }
    
    else if (clue == "5A") {
        if (answer == "globe") {
            check = true;
        }
        else {
            check = false;
        }
    }
    
    else if (clue == "1D") {
        if (answer == "compost") {
            check = true;
        }
        else {
            check = false;
        }
    }
    
    else if (clue == "2D") {
    if (answer == "necessity") {
            check = true;
        }
        else {
            check = false;
        }
    }
    
    else if (clue == "3D") {
        if (answer == "water.org") {
            check = true;
        }
        else {
            check = false;
        }
    }
    
    else if (clue == "4D") {
        if (answer == "nohunger") {
            check = true;
        }
        else {
            check = false;
        }
    }
    
    else if (clue == "5D") {
        if (answer == "aquacibus") {
            check = true;
        }
        else {
            check = false;
        }
    }
    
    //Results
    
    if (check == true) {
        alert("Your answer is correct. Yey!");
        var table = document.getElementById("cw");
        var characs = answer.split("");
        var c = 0;
        
        if (clue == "1A") {
            for (i = 1; i<20; i++) {
                table.rows[1].cells[i].innerHTML = characs[c];
                c++;
            }
            document.getElementById("1A").style.listStyleType = "disc";
            document.getElementById("1A").style.color = "#33cc33";
            var a1 = true;
            localStorage.setItem("a1", a1);
        }
        
        else if (clue == "2A") {
            for (i = 5; i<13; i++) {
                table.rows[2].cells[i].innerHTML = characs[c];
                c++;
            }
            document.getElementById("2A").style.listStyleType = "disc";
            document.getElementById("2A").style.color = "#33cc33";
            var a2 = true;
            localStorage.setItem("a2", a2);
        }
        
        else if (clue == "3A") {
            for (i = 0; i<3; i++) {
                table.rows[5].cells[i].innerHTML = characs[c];
                c++;
            }
            document.getElementById("3A").style.listStyleType = "disc";
            document.getElementById("3A").style.color = "#33cc33";
            var a3 = true;
            localStorage.setItem("a3", a3);
        }
        
        else if (clue == "4A") {
            for (i = 12; i<18; i++) {
                table.rows[4].cells[i].innerHTML = characs[c];
                c++;
            }
            document.getElementById("4A").style.listStyleType = "disc";
            document.getElementById("4A").style.color = "#33cc33";
            var a4 = true;
            localStorage.setItem("a4", a4);
        }
        
        else if (clue == "5A") {
            for (i = 19; i<24; i++) {
                table.rows[8].cells[i].innerHTML = characs[c];
                c++;
            }
            document.getElementById("5A").style.listStyleType = "disc";
            document.getElementById("5A").style.color = "#33cc33";
            var a5 = true;
            localStorage.setItem("a5", a5);
        }
        
        else if (clue == "1D") {
            for (i = 1; i<8; i++) {
                table.rows[i].cells[2].innerHTML = characs[c];
                c++;
            }
            document.getElementById("1D").style.listStyleType = "disc";
            document.getElementById("1D").style.color = "#33cc33";
            var d1 = true;
            localStorage.setItem("d1", d1);
        }
        
        else if (clue == "2D") {
            for (i = 0; i<9; i++) {
                table.rows[i].cells[5].innerHTML = characs[c];
                c++;
            }
            document.getElementById("2D").style.listStyleType = "disc";
            document.getElementById("2D").style.color = "#33cc33";
            var d2 = true;
            localStorage.setItem("d2", d2);
        }
        
        else if (clue == "3D") {
            for (i = 0; i<9; i++) {
                table.rows[i].cells[19].innerHTML = characs[c];
                c++;
            }
            document.getElementById("3D").style.listStyleType = "disc";
            document.getElementById("3D").style.color = "#33cc33";
            var d3 = true;
            localStorage.setItem("d3", d3);
        }
        
        else if (clue == "4D") {
            for (i = 2; i<10; i++) {
                table.rows[i].cells[9].innerHTML = characs[c];
                c++;
            }
            document.getElementById("4D").style.listStyleType = "disc";
            document.getElementById("4D").style.color = "#33cc33";
            var d4 = true;
            localStorage.setItem("d4", d4);
        }
        
        else if (clue == "5D") {
            for (i = 1; i<10; i++) {
                table.rows[i].cells[14].innerHTML = characs[c];
                c++;
            }
            document.getElementById("5D").style.listStyleType = "disc";
            document.getElementById("5D").style.color = "#33cc33";
            var d5 = true;
            localStorage.setItem("d5", d5);
        }
    }
    
    else {
        alert("Aww. Your answer is wrong. :(");
    }
    
    document.getElementById("answer").value = '';
    
   location.reload();
}

// Function to close pop-up
function closepu() {
    document.getElementById("win").style.display = "none";
    localStorage.removeItem("a1");
    localStorage.removeItem("a2");
    localStorage.removeItem("a3");
    localStorage.removeItem("a4");
    localStorage.removeItem("a5");
    localStorage.removeItem("d1");
    localStorage.removeItem("d2");
    localStorage.removeItem("d3");
    localStorage.removeItem("d4");
    localStorage.removeItem("d5");
    location.reload();
}
