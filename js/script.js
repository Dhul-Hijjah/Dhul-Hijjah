// Responsive Navbar
function Navbar() {
    const navbarLinks = document.querySelectorAll('.navbar li a');
    navbarLinks.forEach(link => {
        if (link.style.display === 'none' || link.style.display === '') {
            link.style.display = 'inline';
        } else {
            link.style.display = 'none';
        }
    });
}
// Move To Top
document.addEventListener("DOMContentLoaded", function() {
  
  let myImage = document.getElementById("toTop");
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      myImage.style.display = "block";
    } else {
      myImage.style.display = "none";
    }
  }
});