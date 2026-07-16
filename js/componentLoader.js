async function loadComponent(id, file) {
    const response = await fetch(file);

    if (!response.ok) {
        throw new Error(`Unable to load ${file}`);
    }

    const html = await response.text();

    document.getElementById(id).innerHTML = html;
}

async function loadAllComponents() {

    await loadComponent("navbar", "components/navbar.html");
    await loadComponent("hero", "components/hero.html");
    await loadComponent("about", "components/about.html");
    await loadComponent("statistics", "components/statistics.html");
    await loadComponent("education", "components/education.html");
    await loadComponent("skills", "components/skills.html");
    await loadComponent("projects", "components/projects.html");
    await loadComponent("innovation", "components/innovation.html");
    await loadComponent("achievements", "components/achievements.html");
    await loadComponent("certifications", "components/certifications.html");
    await loadComponent("contact", "components/contact.html");
    await loadComponent("footer", "components/footer.html");

}