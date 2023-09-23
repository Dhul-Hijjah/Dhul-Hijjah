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