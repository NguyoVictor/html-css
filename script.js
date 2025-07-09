let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".side-bar");

menuIcon.onclick = function() {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}