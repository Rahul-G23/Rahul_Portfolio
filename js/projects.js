/**
 * ==========================================================
 * Projects Section
 * ==========================================================
 */

function initializeProjects() {

    console.log("Projects Initialized");
    
    const container = document.getElementById("projects-container");

    if (!container) {
        console.error("Projects container not found.");
        return;
    }

    if (typeof PROJECTS === "undefined") {
        console.error("PROJECTS data not found.");
        return;
    }

    renderProjects(container);
}

/**
 * Render All Project Cards
 */
function renderProjects(container) {

    // Clear existing content
    container.innerHTML = "";

    PROJECTS.items.forEach(project => {
        container.appendChild(createProjectCard(project));
    });

}

/**
 * Create Single Project Card
 */
function createProjectCard(project) {

    const card = document.createElement("article");
    card.className = "project-card";

    card.innerHTML = `
        <div class="project-image">

            <img
                src="${project.image}"
                alt="${project.title}"
                loading="lazy"
            >

            <span class="project-category">
                ${project.category}
            </span>

            <span class="project-year">
                ${project.year}
            </span>

        </div>

        <div class="project-content">

            <h3 class="project-title">
                ${project.title}
            </h3>

            <p class="project-description">
                ${project.description}
            </p>

            <div class="project-technologies">
                ${createTechnologyBadges(project.technologies)}
            </div>

            <ul class="project-features">
                ${createFeatureList(project.features)}
            </ul>

            <div class="project-buttons">
                ${createButtons(project)}
            </div>

        </div>
    `;

    return card;
}

/**
 * Create Technology Badges
 */
function createTechnologyBadges(technologies) {

    if (!technologies || technologies.length === 0) {
        return "";
    }

    return technologies
        .map(tech => `
            <span class="tech-badge">
                ${tech}
            </span>
        `)
        .join("");
}

/**
 * Create Feature List
 */
function createFeatureList(features) {

    if (!features || features.length === 0) {
        return "";
    }

    return features
        .map(feature => `
            <li>
                <i class="fa-solid fa-check"></i>
                <span>${feature}</span>
            </li>
        `)
        .join("");
}

/**
 * Create Buttons
 */
function createButtons(project) {

    let buttons = `
        <a
            href="${project.github}"
            target="_blank"
            rel="noopener noreferrer"
            class="project-btn github-btn"
        >
            <i class="fa-brands fa-github"></i>
            <span>GitHub</span>
        </a>
    `;

    if (project.live && project.live.trim() !== "") {

        buttons += `
            <a
                href="${project.live}"
                target="_blank"
                rel="noopener noreferrer"
                class="project-btn live-btn"
            >
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                <span>Live Demo</span>
            </a>
        `;
    }

    return buttons;
}