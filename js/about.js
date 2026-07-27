function renderProfileCard() {

    return `

        <div class="about__card">

            <img
                src="assets/images/profile/profile.jpg"
                alt="Rahul G">

            <h3>Rahul G</h3>

            <p>${ABOUT.role}</p>

            <span>

                <i class="fa-solid fa-location-dot"></i>

                ${ABOUT.location}

            </span>

        </div>

    `;

}

function renderHighlights() {

    return ABOUT.highlights.map(item => `

        <div class="about__highlight">

            <i class="fa-solid fa-circle-check"></i>

            <span>${item}</span>

        </div>

    `).join("");

}

function renderStatistics() {

    return `

        <div class="about__stats">

            <div class="about__stat">

                <h3>4+</h3>

                <span>Projects</span>

            </div>

            <div class="about__stat">

                <h3>11+</h3>

                <span>Certificates</span>

            </div>

            <div class="about__stat">

                <h3>8.36</h3>

                <span>CGPA</span>

            </div>

        </div>

    `;

}

function renderButtons() {

    return `

        <div class="about__buttons">

            <a
                href="${PORTFOLIO.resume.path}"
                target="_blank"
                class="btn btn--primary">

                Download Resume

            </a>

            <a
                href="#contact"
                class="btn btn--secondary">

                Contact Me

            </a>

        </div>

    `;

}

function renderAboutContent() {

    return `

        <div class="about__content">

            <p class="about__description">

                ${ABOUT.description}

            </p>

            <div class="about__highlights">

                ${renderHighlights()}

            </div>

            ${renderStatistics()}

            ${renderButtons()}

        </div>

    `;

}

function initializeAbout() {

    const about = document.querySelector(".about");

    if (!about) return;

    about.innerHTML = `

        ${createSectionHeader(

            ABOUT.tag,

            ABOUT.title,

            ABOUT.subtitle

        )}

        <div class="about__container">

            ${renderProfileCard()}

            ${renderAboutContent()}

        </div>

    `;

}