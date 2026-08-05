/**
 * ==========================================
 * Innovation Section
 * ==========================================
 */

function initializeInnovation() {

    console.log("Innovation Initialized");

    const timeline = document.getElementById("innovation-timeline");

    if (!timeline) {
        console.error("Innovation timeline not found.");
        return;
    }

    renderInnovation(timeline);
}

/**
 * Render Innovation Timeline
 */
function renderInnovation(container) {

    container.innerHTML = "";

    INNOVATIONS.items.forEach(item => {
        container.appendChild(createInnovationCard(item));
    });

}

/**
 * Create Innovation Card
 */
function createInnovationCard(item) {

    const card = document.createElement("div");

    card.className = "innovation__item";

    card.innerHTML = `

        <div class="innovation__dot"></div>

        <div class="innovation__card">

            <div class="innovation__header">

                <div>

                    <h3 class="innovation__title">
                        ${item.title}
                    </h3>

                    <p class="innovation__type">
                        ${item.type}
                    </p>

                </div>

                <span class="innovation__position">
                    ${item.position}
                </span>

            </div>

            <div class="innovation__meta">

                <span>
                    <i class="fa-solid fa-calendar"></i>
                    ${item.year}
                </span>

                ${item.organizer ? `
                <span>
                    <i class="fa-solid fa-building"></i>
                    ${item.organizer}
                </span>
                ` : ""}

                ${item.location ? `
                <span>
                    <i class="fa-solid fa-location-dot"></i>
                    ${item.location}
                </span>
                ` : ""}

            </div>

            <p class="innovation__description">
                ${item.description}
            </p>

            ${item.project ? `
                <div class="innovation__project">
                    <strong>Project:</strong> ${item.project}
                </div>
            ` : ""}

            ${item.rounds ? `
                <div class="innovation__rounds">

                    <h4>Competition Rounds</h4>

                    <ul>

                        ${item.rounds.map(round => `
                            <li>${round}</li>
                        `).join("")}

                    </ul>

                </div>
            ` : ""}

            <div class="innovation__skills">

                ${item.skills.map(skill => `
                    <span class="innovation__skill">
                        ${skill}
                    </span>
                `).join("")}

            </div>

        </div>

    `;

    return card;
}