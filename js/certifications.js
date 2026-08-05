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

/**
 * ==========================================
 * Create Certificate Card
 * ==========================================
 */

function createCertificateCard(item) {

    const card = document.createElement("div");

    card.className = "certificate-card";

    const previewImage =
        item.image && item.image.length > 0
            ? item.image[0]
            : "assets/images/certifications/default-certificate.jpg";

    card.innerHTML = `

        <div class="certificate-image">

            <img
                src="${previewImage}"
                alt="${item.title}"
                loading="lazy"
            >

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
                    item.image.length > 0
                        ? `
                        <button
                            class="certificate-btn"
                            onclick="openCertificateGallery(${item.id})">
                            <i class="fa-solid fa-images"></i>
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
                            <i class="fa-solid fa-up-right-from-square"></i>
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
 * Skills Chips
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
 * Certificate Gallery
 * ==========================================
 */

function openCertificateGallery(id) {

    const certificate =
        CERTIFICATIONS.items.find(item => item.id === id);

    if (!certificate) return;

    console.log(certificate.image);

    // Gallery will be added later.

}