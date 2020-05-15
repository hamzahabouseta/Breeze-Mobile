function toggleMenu() 
{
    var element = document.getElementById("topnav");
    if (element.className === "navcontainer") {
        element.className += " responsive";
    } else {
        element.className = "navcontainer";
    }
}