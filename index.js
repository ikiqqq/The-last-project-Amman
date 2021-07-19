function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var elementFooter = document.getElementById("footer-section");
    elementFooter.classList.toggle("footer-dark-mode")
}
