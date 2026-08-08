/**
 * ==========================================
 * Footer
 * ==========================================
 */

function initializeFooter() {

    console.log("Footer Initialized");

    const year =
        document.getElementById("footer-year");

    if (!year) {

        console.warn(
            "Footer year element not found."
        );

        return;

    }

    year.textContent =
        new Date().getFullYear();

}