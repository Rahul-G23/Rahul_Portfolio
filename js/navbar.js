/**
 * ==========================================
 * Navbar
 * ==========================================
 */

function initializeNavbar() {

    console.log("Navbar Initialized");

    const navbar =
        document.querySelector(".navbar");

    const menu =
        document.getElementById("navbarMenu");

    const menuButton =
        document.getElementById("menuToggle");


    if (!navbar || !menu || !menuButton) {

        console.error("Navbar elements not found.");

        return;

    }


    /**
     * ==========================================
     * Mobile Menu
     * ==========================================
     */

    menuButton.addEventListener("click", () => {

        menu.classList.toggle(
            "navbar__menu--active"
        );


        const icon =
            menuButton.querySelector("i");


        if (!icon) return;


        if (
            menu.classList.contains(
                "navbar__menu--active"
            )
        ) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });


    /**
     * ==========================================
     * Navbar Shadow On Scroll
     * ==========================================
     */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 20) {

            navbar.classList.add(
                "navbar--scrolled"
            );

        } else {

            navbar.classList.remove(
                "navbar--scrolled"
            );

        }

    });


    /**
     * ==========================================
     * Initialize Navigation
     * ==========================================
     */

    initializeNavigationLinks();


}


/**
 * ==========================================
 * Navigation Links
 * ==========================================
 */

function initializeNavigationLinks() {

    /*
     * Find navbar links only.
     * This prevents other # links on the
     * page from being affected.
     */

    const links =
        document.querySelectorAll(
            '.navbar a[href^="#"]'
        );


    links.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {

                return;

            }


            /*
             * Find the target directly.
             */

            let target =
                document.querySelector(targetId);


            /*
             * Fallback mapping for your
             * dynamically loaded components.
             */

            if (!target) {

                const targetMap = {

                    "#home":
                        "#hero-container",

                    "#about":
                        "#about-container",

                    "#statistics":
                        "#statistics-container",

                    "#education":
                        "#education-container",

                    "#skills":
                        "#skills-container",

                    "#projects":
                        "#projects-container",

                    "#innovation":
                        "#innovation-container",

                    "#achievements":
                        "#achievements-container",

                    "#certifications":
                        "#certifications-container",

                    "#contact":
                        "#contact-container"

                };


                const mappedTarget =
                    targetMap[targetId];


                if (mappedTarget) {

                    target =
                        document.querySelector(
                            mappedTarget
                        );

                }

            }


            /*
             * If target doesn't exist,
             * don't break the page.
             */

            if (!target) {

                console.warn(
                    `Navigation target not found: ${targetId}`
                );

                return;

            }


            /*
             * Stop browser's default jump.
             */

            event.preventDefault();


            /*
             * Get menu again here.
             *
             * IMPORTANT:
             * We do NOT use the "menu" variable
             * from initializeNavbar().
             */

            const menu =
                document.getElementById(
                    "navbarMenu"
                );


            /*
             * Close mobile menu.
             */

            if (menu) {

                menu.classList.remove(
                    "navbar__menu--active"
                );

            }


            /*
             * Reset mobile menu icon.
             */

            const menuButton =
                document.getElementById(
                    "menuToggle"
                );


            if (menuButton) {

                const icon =
                    menuButton.querySelector("i");


                if (icon) {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            }


            /*
             * Smooth scroll.
             */

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });


        });

    });

}