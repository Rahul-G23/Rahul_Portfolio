/**
 * Initializes Hero Section
 */

function initializeHero() {

    document.querySelector(".hero__greeting").textContent =
        PORTFOLIO.personal.greeting;

    document.querySelector(".hero__name").textContent =
        `${PORTFOLIO.personal.firstName} ${PORTFOLIO.personal.lastName}`;

    document.querySelector(".hero__title").innerHTML =
        `${PORTFOLIO.personal.title}<br>${PORTFOLIO.personal.subtitle}`;

    document.querySelector(".hero__description").textContent =
        PORTFOLIO.personal.description;

    // Resume

    document.querySelector(".hero__resume").href =
        PORTFOLIO.resume.path;

    // Social Links

    document.querySelector(".hero__github").href =
        PORTFOLIO.social.github;

    document.querySelector(".hero__linkedin").href =
        PORTFOLIO.social.linkedin;

    document.querySelector(".hero__email").href =
        `mailto:${PORTFOLIO.social.email}`;

    console.log("Hero Initialized");

}