// ==========================================
// LOAD A SINGLE COMPONENT
// ==========================================

async function loadComponent(id, path) {

    const response = await fetch(path);

    if (!response.ok) {

        console.error(`Unable to load: ${path}`);

        return;

    }

    const html = await response.text();

    document.getElementById(id).innerHTML = html;

}


// ==========================================
// LOAD ALL COMPONENTS
// ==========================================

async function loadAllComponents() {

    await Promise.all([

        loadComponent(
            "navbar-container",
            "components/layout/navbar.html"
        ),

        loadComponent(
            "hero-container",
            "components/sections/hero.html"
        ),

        loadComponent(
            "statistics-container",
            "components/sections/statistics.html"
        ),

        loadComponent(
            "about-container",
            "components/sections/about.html"
        ),

        loadComponent(
            "education-container",
            "components/sections/education.html"
        ),

        loadComponent(
            "skills-container",
            "components/sections/skills.html"
        ),

        loadComponent(
            "projects-container",
            "components/sections/projects.html"
        ),

        loadComponent(
            "innovation-container",
            "components/sections/innovation.html"
        ),

        loadComponent(
            "achievements-container",
            "components/sections/achievements.html"
        ),

        loadComponent(
            "certifications-container",
            "components/sections/certifications.html"
        ),

        loadComponent(
            "contact-container",
            "components/sections/contact.html"
        ),

        loadComponent(
            "footer-container",
            "components/layout/footer.html"
        )

    ]);

}
async function loadComponent(id, path) {

    try {

        const response = await fetch(path);

        if (!response.ok) {

            throw new Error(`Unable to load: ${path}`);

        }

        const html = await response.text();

        document.getElementById(id).innerHTML = html;

    } catch (error) {

        console.error(error);

    }

}