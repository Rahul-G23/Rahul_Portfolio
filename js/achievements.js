/**
 * ==========================================
 * Achievements Section
 * ==========================================
 */

function initializeAchievements() {

    console.log("Achievements Initialized");

    const grid = document.getElementById("achievements-grid");

    if (!grid) {
        console.error("Achievements grid not found.");
        return;
    }

    renderAchievements(grid);

}

/**
 * ==========================================
 * Render Achievements
 * ==========================================
 */

function renderAchievements(container) {

    container.innerHTML = "";

    ACHIEVEMENTS.items.forEach(item => {

        container.appendChild(createAchievementCard(item));

    });

}

/**
 * ==========================================
 * Achievement Card
 * ==========================================
 */

function createAchievementCard(item) {

    const card = document.createElement("div");

    card.className = `achievement-card achievement-${item.color}`;

    card.innerHTML = `

        <div class="achievement-icon">

            <i class="${item.icon}"></i>

        </div>

        <div class="achievement-content">

            <h3 class="achievement-title">
                ${item.title}
            </h3>

            <p class="achievement-event">
                ${item.event}
            </p>

            <span class="achievement-year">
                ${item.year}
            </span>

            <p class="achievement-description">
                ${item.description}
            </p>

            <div class="achievement-highlights">

                ${createHighlights(item.highlights)}

            </div>

        </div>

    `;

    return card;

}

/**
 * ==========================================
 * Highlight Chips
 * ==========================================
 */

function createHighlights(highlights) {

    if (!highlights || highlights.length === 0) {

        return "";

    }

    return highlights
        .map(highlight => `
            <span class="achievement-chip">
                ${highlight}
            </span>
        `)
        .join("");

}