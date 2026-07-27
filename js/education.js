// ==========================================
// EDUCATION INFO ROW
// ==========================================

function renderInfo(icon, text, extraClass = "") {

    return `

        <div class="education__info ${extraClass}">

            <i class="${icon}"></i>

            <span>${text}</span>

        </div>

    `;

}


// ==========================================
// EDUCATION CARD
// ==========================================

function renderEducationCard(item, index) {

    return `

        <div class="education__item ${index % 2 !== 0 ? "education__item--right" : ""}">

            <div class="education__dot"></div>

            <div class="education__card">

                <div class="education__icon">

                    <i class="${item.icon}"></i>

                </div>

                <h3 class="education__degree">

                    ${item.degree}

                </h3>

                ${item.specialization ? `

                    <h4 class="education__specialization">

                        ${item.specialization}

                    </h4>

                ` : ""}

                ${renderInfo(

                    "fa-solid fa-building-columns",

                    item.institution

                )}

                ${renderInfo(

                    "fa-solid fa-graduation-cap",

                    item.board

                )}

                ${renderInfo(

                    "fa-regular fa-calendar",

                    item.duration

                )}

                ${renderInfo(

                    "fa-solid fa-star",

                    item.score,

                    "education__score"

                )}

            </div>

        </div>

    `;

}


// ==========================================
// EDUCATION TIMELINE
// ==========================================

function renderTimeline() {

    return `

        <div class="education__timeline">

            ${EDUCATION.timeline
                .map((item, index) => renderEducationCard(item, index))
                .join("")}

        </div>

    `;

}


// ==========================================
// INITIALIZE EDUCATION
// ==========================================

function initializeEducation() {

    const education = document.querySelector(".education");

    if (!education) return;

    education.innerHTML = `

        ${createSectionHeader(

            EDUCATION.tag,

            EDUCATION.title,

            EDUCATION.subtitle

        )}

        ${renderTimeline()}

    `;

}