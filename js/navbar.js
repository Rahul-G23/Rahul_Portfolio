/**
 * Initializes the navigation bar.
 */
function initializeNavbar() {

    const navbar = document.querySelector(".navbar");
    const menu = document.getElementById("navbarMenu");
    const menuButton = document.getElementById("menuToggle");

    if (!navbar || !menu || !menuButton) {
        console.error("Navbar not found.");
        return;
    }

    // Mobile menu
    menuButton.addEventListener("click", () => {

        menu.classList.toggle("navbar__menu--active");

        const icon = menuButton.querySelector("i");

        if (menu.classList.contains("navbar__menu--active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

    // Shadow on scroll
    window.addEventListener("scroll", () => {

        if (window.scrollY > 20) {

            navbar.classList.add("navbar--scrolled");

        } else {

            navbar.classList.remove("navbar--scrolled");

        }

    });

    console.log("Navbar Initialized");

}
/* ===========================
   NAVBAR STATES
=========================== */

.navbar--scrolled{

    background:rgba(15,23,42,.95);

    box-shadow:var(--shadow);

}

.navbar__menu--active{

    display:flex;

}