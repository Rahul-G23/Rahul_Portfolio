/**
 * ==========================================
 * Theme Manager
 * ==========================================
 */

function initializeTheme() {

    console.log("Theme Initialized");

    const themeToggle =
        document.getElementById("themeToggle");

    if (!themeToggle) {

        console.error(
            "Theme toggle button not found."
        );

        return;

    }


    /*
     * Get saved theme.
     * Default = dark.
     */

    const savedTheme =
        localStorage.getItem("theme") || "dark";


    applyTheme(
        savedTheme,
        themeToggle
    );


    /*
     * Toggle theme
     */

    themeToggle.addEventListener(
        "click",
        () => {

            const currentTheme =
                document.documentElement
                    .getAttribute("data-theme");


            const newTheme =
                currentTheme === "light"
                    ? "dark"
                    : "light";


            applyTheme(
                newTheme,
                themeToggle
            );


            localStorage.setItem(
                "theme",
                newTheme
            );

        }
    );

}


/**
 * ==========================================
 * Apply Theme
 * ==========================================
 */

function applyTheme(theme, button) {

    document.documentElement.setAttribute(
        "data-theme",
        theme
    );


    const icon =
        button.querySelector("i");


    if (!icon) return;


    if (theme === "light") {

        /*
         * Light mode
         * Show sun icon.
         */

        icon.classList.remove(
            "fa-moon"
        );

        icon.classList.add(
            "fa-sun"
        );

        button.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );

        button.setAttribute(
            "title",
            "Switch to dark mode"
        );

    } else {

        /*
         * Dark mode
         * Show moon icon.
         */

        icon.classList.remove(
            "fa-sun"
        );

        icon.classList.add(
            "fa-moon"
        );

        button.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

        button.setAttribute(
            "title",
            "Switch to light mode"
        );

    }

}