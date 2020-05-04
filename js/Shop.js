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

// Indicates where you are in the shop
var position = 1;

// Calls all the categories
var butt1 = document.getElementsByTagName("button")[2];
var butt2 = document.getElementsByTagName("button")[3];
var butt3 = document.getElementsByTagName("button")[4];
var butt4 = document.getElementsByTagName("button")[5];
var butt5 = document.getElementsByTagName("button")[6];
var butt6 = document.getElementsByClassName("cart")[1];
var butt7 = document.getElementsByClassName("cart")[3];

// Removes the css for previous selectors
function removepos(wich) {
    wich.style.border = "";
    wich.style.color = "";
    wich.style.textShadow = "";
    wich.style.background = "";
}

// Adds selector to clicked option & removes all other selectors
function pos(wer) {
    removepos(butt1);
    removepos(butt2);
    removepos(butt3);
    removepos(butt4);
    removepos(butt5);
    removepos(butt6);
    removepos(butt7);
    if (wer < 7) {
        var activate = document.getElementsByTagName("button")[wer];
        activate.style.border = "2.5px inset #b2eee6";
        activate.style.color = "white";
        activate.style.textShadow = "3.5px 2.5px black";
        activate.style.background = "#f37071";
    }
    else {
        if (wer == 7) {
            wer = wer - 6;
        }
        else {
            wer = wer - 5;
        }
        var activate2 = document.getElementsByClassName("cart")[wer];
        activate2.style.border = "1.5px inset #f3c2e7";
        activate2.style.color = "white";
        activate2.style.textShadow = "2.5px 1.5px black";
        activate2.style.background = "#66beb2";
    }
}

// Positions the selector by default at shirts
if (position == 1) {
    pos(8);
}

function minother() {
    document.getElementById("shirt").style.display = "";
    document.getElementById("pin").style.display = "";
    document.getElementById("eco").style.display = "";
    document.getElementById("pcase").style.display = "";
    document.getElementById("lstick").style.display = "";
    document.getElementById("cart").style.display = "";
    document.getElementById("about").style.display = "none";
}

function removecat(pres) {
    for (i=0; i<7; i++) {
        if (i == pres) {
            continue;
        }
        document.getElementsByTagName("section")[i].style.display = "none";
    }
}

function shirt() {
    document.getElementsByTagName("section")[0].style.display = "block";
    removecat(0);
}

function pin() {
    document.getElementsByTagName("section")[1].style.display = "block";
    removecat(1);
}

function eco() {
    document.getElementsByTagName("section")[2].style.display = "block";
    removecat(2);
}

function pcase() {
    document.getElementsByTagName("section")[3].style.display = "block";
    document.getElementsByTagName("section")[3].style.marginTop = "12%";
    removecat(3);
}

function lstick() {
    document.getElementsByTagName("section")[4].style.display = "block";
    document.getElementsByTagName("section")[4].style.marginTop = "12%";
    removecat(4);
}

function cart() {
    document.getElementsByTagName("section")[5].style.display = "block";
    document.getElementsByTagName("section")[5].style.marginTop = "12%";
    removecat(5);
}

function about() {
    document.getElementsByTagName("section")[6].style.display = "block";
    document.getElementsByTagName("section")[6].style.marginTop = "12%";
    removecat(6);
}

function prod(wich) {
    if (localStorage.getItem("prod"+(wich-1)) != undefined) {
        alert("You already have this product in your cart. To edit the quantity of this product, please view your cart and change it there.");
    }
    else {
        var amount = prompt("Please enter how many of this you want to add to your cart:");
        if (amount == null) {
            return false;
        }
        else {
            localStorage.setItem("prod"+(wich-1), amount);
        }
    }
}

// For checking if product has already been added to cart visually
var norepeat = new Array(10);
for (b=0; b<10; b++) {
    norepeat[b] = false;
}

var dnodes = new Array(10);

function oscart() {
    // States the array & makes the li node
    var prods = new Array(10);
    
    // Checks the cookies & puts the values in the array
    for (i=0; i<10; i++) {
        if (localStorage.getItem("prod"+i) != undefined) {
            prods[i] = true;
        }
        else {
            prods[i] = false;
        }
    }
    
    // Creates the text nodes based on what products are added to the cart
    var hnodes = new Array(10);
    var tnodes = new Array(10);
    var inodes = new Array(10);
    var pnodes = new Array(10);
    var tnodes2 = new Array(10);
    var anodes = new Array(10);
    var tnodes3 = new Array(10);
    var btntxt = new Array(10);
    var bnodes = new Array(10);
    
    // Text for button & calling da total div
    for (a=0; a<10; a++) {
        btntxt[a] = document.createTextNode("Remove Item");
    }
    var second = document.getElementsByClassName("total")[0];
    
    for (j=0; j<10; j++) {
        // Creates the divs, h2s, buttons, & inputs
        dnodes[j] = document.createElement("div");
        hnodes[j] = document.createElement("h2");
        bnodes[j] = document.createElement("button");
        inodes[j] = document.createElement("input");
        pnodes[j] = document.createElement("p");
        anodes[j] = document.createElement("p");
        
        // Creates the text nodes (for h2)
        if (j==0) {
            tnodes[j] = document.createTextNode("ACB: For the World Shirt");
            tnodes2[j] = document.createTextNode("Php 250.00");
            tnodes3[j] = document.createTextNode("Qty: ");
            bnodes[j].addEventListener('click', function () {
            rproduct("p0", 0);});
            dnodes[j].id = "p0";
        }
        
        if (j==1) {
            tnodes[j] = document.createTextNode("ACB: This is Us  Shirt");
            tnodes2[j] = document.createTextNode("Php 300.00");
            tnodes3[j] = document.createTextNode("Qty: ");
            bnodes[j].addEventListener('click', function () {
            rproduct("p1", 1);});
            dnodes[j].id = "p1";
        }
        
        if (j==2) {
            tnodes[j] = document.createTextNode("Aquacibus Button/Pin");
            tnodes2[j] = document.createTextNode("Php 75.00");
            tnodes3[j] = document.createTextNode("Qty: ");
            bnodes[j].addEventListener('click', function () {
            rproduct("p2", 2);});
            dnodes[j].id = "p2";
        }
        
        if (j==3) {
            tnodes[j] = document.createTextNode("'Every Drop Counts' Button/Pin");
            tnodes2[j] = document.createTextNode("Php 75.00");
            tnodes3[j] = document.createTextNode("Qty: ");
            bnodes[j].addEventListener('click', function () {
            rproduct("p3", 3);});
            dnodes[j].id = "p3";
        }
        
        if (j==4) {
            tnodes[j] = document.createTextNode("'Food for Thought' Button/Pin");
            tnodes2[j] = document.createTextNode("Php 75.00");
            tnodes3[j] = document.createTextNode("Qty: ");
            bnodes[j].addEventListener('click', function () {
            rproduct("p4", 4);});
            dnodes[j].id = "p4";
        }
        
        if (j==5) {
            tnodes[j] = document.createTextNode("Metal Straw Set");
            tnodes2[j] = document.createTextNode("Php 60.00");
            tnodes3[j] = document.createTextNode("Qty: ");
            bnodes[j].addEventListener('click', function () {
            rproduct("p5", 5);});
            dnodes[j].id = "p5";
        }
        
        if (j==6) {
            tnodes[j] = document.createTextNode("Hydroflask");
            tnodes2[j] = document.createTextNode("Php 800.00");
            tnodes3[j] = document.createTextNode("Qty: ");
            bnodes[j].addEventListener('click', function () {
            rproduct("p6", 6);});
            dnodes[j].id = "p6";
        }
        
        if (j==7) {
            tnodes[j] = document.createTextNode("Domi Phone Case");
            tnodes2[j] = document.createTextNode("Php 100.00");
            tnodes3[j] = document.createTextNode("Qty: ");
            bnodes[j].addEventListener('click', function () {
            rproduct("p7", 7);});
            dnodes[j].id = "p7";
        }
        
        if (j==8) {
            tnodes[j] = document.createTextNode("Callus Phone Case");
            tnodes2[j] = document.createTextNode("Php 100.00");
            tnodes3[j] = document.createTextNode("Qty: ");
            bnodes[j].addEventListener('click', function () {
            rproduct("p8", 8);});
            dnodes[j].id = "p8";
        }
        
        if (j==9) {
            tnodes[j] = document.createTextNode("Aquacibus Lightstick");
            tnodes2[j] = document.createTextNode("Php 1,500.00");
            tnodes3[j] = document.createTextNode("Qty: ");
            bnodes[j].addEventListener('click', function () {
            rproduct("p9", 9);});
            dnodes[j].id = "p9";
        }
        
        // Turns the input node into a number type
        inodes[j].type = "text";
        inodes[j].id = "amt"+j;
        
    }
    
    // Attaches appropriate classname to all elements
    for (k=0; k<10; k++) {
        dnodes[k].className = "prodic";
        hnodes[k].className = "h2ic";
        bnodes[k].className = "btnic";
        inodes[k].className = "inputic";
        pnodes[k].className = "paric";
        anodes[k].className = "paric";
    }
    
    // Puts the added products in da cart
    for (l=0; l<10; l++) {
        if (prods[l] == true) {
            // Attaches all the text to their respective elements
            hnodes[l].appendChild(tnodes[l]);
            pnodes[l].appendChild(tnodes2[l]);
            anodes[l].appendChild(tnodes3[l]);
            bnodes[l].appendChild(btntxt[l]);
            
            // Adds onclick event to all da buttons
            bnodes[l].onclick = function() {rproduct()}
            
            // Attaches all the elements to the div
            if (norepeat[l] != true) {
                dnodes[l].appendChild(hnodes[l]);
                dnodes[l].appendChild(anodes[l]);
                dnodes[l].appendChild(inodes[l]);
                dnodes[l].appendChild(pnodes[l]);
                dnodes[l].appendChild(bnodes[l]);
                document.getElementById("cart").insertBefore(dnodes[l], second);
                norepeat[l] = true;
            }  
        }
    }
    
}

var amount = new Array(10);
function rcookie() {
    // Retrieves the cookies & puts them in global array
    for (i=0; i<10; i++) {
        if (localStorage.getItem("prod"+i) != undefined) {
            amount[i] = localStorage.getItem("prod"+i);
        }
        else {
            amount[i] = null;
        }
    }
    
    // Puts retrieved values into respective inputs
    for (j=0; j<10; j++) {
        if (document.getElementById("amt"+j) != undefined) {
            document.getElementById("amt"+j).value = amount[j];
        }
    }
}

function calc() {
    var totprice = 0, totitem = 0;
    // Calculates totitem & totprice
    for (k=0; k<10; k++) {
        if (amount[k] != undefined) {
            amount[k] = parseInt(amount[k]);
            // Totals the amount of items
            totitem = totitem + amount[k];
            
            // Totals the prices
            if (k == 0) {
                totprice = totprice + amount[k]*250;
            }
            
            if (k == 1) {
                totprice = totprice + amount[k]*300;
            }
            
            if (k == 2) {
                totprice = totprice + amount[k]*75;
            }
            
            if (k == 3) {
                totprice = totprice + amount[k]*75;
            }
            
            if (k == 4) {
                totprice = totprice + amount[k]*75;
            }
            
            if (k == 5) {
                totprice = totprice + amount[k]*60;
            }
            
            if (k == 6) {
                totprice = totprice + amount[k]*800;
            }
            
            if (k == 7) {
                totprice = totprice + amount[k]*100;
            }
            
            if (k == 8) {
                totprice = totprice + amount[k]*100;
            }
            
            if (k == 9) {
                totprice = totprice + amount[k]*1500;
            }
        }
    }
    
    document.getElementById("totit").innerHTML = totitem + " item(s)";
    document.getElementById("totpt").innerHTML = "Php " + totprice + ".00";
}

function rproduct(code, key) {
    var cart = document.getElementById("cart");
    cart.removeChild(document.getElementById(code));
    localStorage.removeItem("prod"+key);
    rcookie();
    calc();
}

function ucookie() {
    //Retrieves input values & stores them 
    for (i=0; i<10; i++) {
        if (document.getElementById("amt"+i) != undefined) {
            localStorage.removeItem("prod"+i);
            var amount = document.getElementById("amt"+i).value;
            parseInt(amount);
            localStorage.setItem("prod"+i, amount);
        }
    }
    rcookie();
    calc();
}

function ccookie() {
    for (h=0; h<10; h++) {
        localStorage.removeItem("prod"+h);
    }
    rcookie();
    calc();
    for (i=0; i<10; i++) {      
        var count = 0; document.getElementById("cart").removeChild(document.getElementsByClassName("prodic")[count]);   
    } 
}



