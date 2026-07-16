async function loadComponent(id, path) {

    const response = await fetch(path);

    if (!response.ok) {

        console.error(`Unable to load ${path}`);

        return;
    }

    document.getElementById(id).innerHTML =
        await response.text();
}

async function loadAllComponents() {

    await Promise.all([

        loadComponent("navbar", "components/layout/navbar.html"),

        loadComponent("hero", "components/sections/hero.html"),

        loadComponent("about", "components/sections/about.html"),

        loadComponent("statistics", "components/sections/statistics.html"),

        loadComponent("education", "components/sections/education.html"),

        loadComponent("skills", "components/sections/skills.html"),

        loadComponent("projects", "components/sections/projects.html"),

        loadComponent("innovation", "components/sections/innovation.html"),

        loadComponent("achievements", "components/sections/achievements.html"),

        loadComponent("certifications", "components/sections/certifications.html"),

        loadComponent("contact", "components/sections/contact.html"),

        loadComponent("footer", "components/layout/footer.html")

    ]);
}