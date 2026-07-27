function renderSkillChip(skill) {

    return `
        <span class="skills__chip">
            ${skill}
        </span>
    `;

}

function renderCategory(category) {

    return `

        <div class="skills__card">

            <div class="skills__icon">
                <i class="${category.icon}"></i>
            </div>

            <h3 class="skills__title">
                ${category.title}
            </h3>

            <div class="skills__chips">

                ${category.skills.map(renderSkillChip).join("")}

            </div>

        </div>

    `;

}

function renderSkills() {

    return `

        <div class="container">

            ${createSectionHeader(
                SKILLS.tag,
                SKILLS.title,
                SKILLS.subtitle
            )}

            <div class="skills__grid">

                ${SKILLS.categories.map(renderCategory).join("")}

            </div>

        </div>

    `;

}

function initializeSkills() {

    document.querySelector(".skills").innerHTML = renderSkills();

    console.log("Skills Initialized");

}