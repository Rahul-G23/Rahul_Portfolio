/**
 * ==========================================
 * Certifications Section
 * ==========================================
 */

function initializeCertifications() {

    console.log("Certifications Initialized");

    const grid = document.getElementById("certifications-grid");

    if (!grid) {

        console.error("Certifications grid not found.");

        return;

    }

    renderCertifications(grid);

    initializeCertificateModal();

}

/**
 * ==========================================
 * Render Certifications
 * ==========================================
 */

function renderCertifications(container) {

    container.innerHTML = "";

    CERTIFICATIONS.items.forEach(item => {

        container.appendChild(createCertificateCard(item));

    });

}

function initializeCertificateModal() {

    const modal = document.getElementById("certificate-modal");

    const closeBtn = document.getElementById("certificate-close");

    if (!modal || !closeBtn) return;

    closeBtn.onclick = () => {

        modal.classList.remove("active");

    };

    modal.onclick = (e) => {

        if (e.target === modal) {

            modal.classList.remove("active");

        }

    };

    document.onkeydown = (e) => {

        if (e.key === "Escape") {

            modal.classList.remove("active");

        }

    };

}
/**
 * ==========================================
 * Create Certificate Card
 * ==========================================
 */

function createCertificateCard(item) {

    const card = document.createElement("div");

    card.className = "certificate-card";

    card.innerHTML = `

        <div class="certificate-preview">

            <i class="fa-solid fa-file-pdf"></i>

            <span class="certificate-status ${item.status.toLowerCase()}">
                ${item.status}
            </span>

        </div>

        <div class="certificate-content">

            <h3 class="certificate-title">
                ${item.title}
            </h3>

            <p class="certificate-issuer">
                ${item.issuer}
            </p>

            <span class="certificate-year">
                ${item.year}
            </span>

            <p class="certificate-description">
                ${item.description}
            </p>

            <div class="certificate-skills">

                ${createCertificateSkills(item.skills)}

            </div>

            <div class="certificate-buttons">

                ${
                    item.pdf && item.pdf.length > 0
                        ? `
                        <button
                            class="certificate-btn"
                            onclick="openCertificateGallery(${item.id})">

                            <i class="fa-solid fa-folder-open"></i>

                            View Certificates

                        </button>
                        `
                        : ""
                }

                ${
                    item.credential
                        ? `
                        <a
                            href="${item.credential}"
                            target="_blank"
                            class="certificate-btn verify-btn">

                            <i class="fa-solid fa-arrow-up-right-from-square"></i>

                            Verify

                        </a>
                        `
                        : ""
                }

            </div>

        </div>

    `;

    return card;

}

/**
 * ==========================================
 * Skills
 * ==========================================
 */

function createCertificateSkills(skills) {

    return skills
        .map(skill => `
            <span class="certificate-chip">
                ${skill}
            </span>
        `)
        .join("");

}

/**
 * ==========================================
 * Open Certificates
 * ==========================================
 */

function openCertificateGallery(id) {

    const certificate =
        CERTIFICATIONS.items.find(item => item.id === id);

    if (!certificate) return;

    const modal =
        document.getElementById("certificate-modal");

    const title =
        document.getElementById("certificate-modal-title");

    const list =
        document.getElementById("certificate-list");

    title.textContent = certificate.title;

    list.innerHTML = "";

    certificate.pdf.forEach(file => {

        const name = file
            .split("/")
            .pop()
            .replace(".pdf", "")
            .replace(/-/g, " ")
            .replace(/\b\w/g, c => c.toUpperCase());

        list.innerHTML += `

            <div class="certificate-item">

                <div class="certificate-item-left">

                    <i class="fa-solid fa-file-pdf"></i>

                    <span>${name}</span>

                </div>

                <a
                    href="${file}"
                    target="_blank"
                    class="certificate-open">

                    Open

                </a>

            </div>

        `;

    });

    modal.classList.add("active");

}

const modal = document.getElementById("certificate-modal");

const closeBtn =
    document.getElementById("certificate-close");

closeBtn.addEventListener("click", () => {

    modal.classList.remove("active");

});

modal.addEventListener("click", e => {

    if (e.target === modal) {

        modal.classList.remove("active");

    }

});

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        modal.classList.remove("active");

    }

});