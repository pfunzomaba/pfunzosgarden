function toggleMenu() {

    const menu = document.getElementById("nav-links");
    const icon = document.getElementById("menu-icon");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times"); // cross icon
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars"); // hamburger again
    }
}
