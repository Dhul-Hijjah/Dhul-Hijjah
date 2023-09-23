/* Responsive Navbar */
function Navbar() {
    var x = document.getElementById("small nav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }