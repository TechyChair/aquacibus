// For sidebar
function sbappear () {
    document.getElementById("sidebar").style.display = "block";
    document.getElementsByTagName("body")[0].style.marginLeft = "15%";
}

function sbclose () {
    document.getElementById("sidebar").style.display = "none";
    document.getElementsByTagName("body")[0].style.marginLeft = "0%";
}