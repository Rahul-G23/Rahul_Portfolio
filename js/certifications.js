/**
 * ==========================================
 * Certifications Section
 * ==========================================
 */

function initializeCertifications() {

    console.log("Certifications Initialized");

    const grid =
        document.getElementById("certifications-grid");

    if (!grid) {

        console.error(
            "Certifications grid not found."
        );

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

        container.appendChild(
            createCertificateCard(item)
        );

    });

}


/**
 * ==========================================
 * Initialize Certificate Modal
 * ==========================================
 */

function initializeCertificateModal() {

    const modal =
        document.getElementById("certificate-modal");

    const closeBtn =
        document.getElementById("certificate-close");


    /*
     * Modal elements are loaded dynamically.
     * If they don't exist, don't throw an error.
     */

    if (!modal || !closeBtn) {

        console.warn(
            "Certificate modal elements not found."
        );

        return;

    }


    /**
     * Close button
     */

    closeBtn.onclick = () => {

        closeCertificateModal();

    };


    /**
     * Close when clicking outside modal content
     */

    modal.onclick = (event) => {

        if (event.target === modal) {

            closeCertificateModal();

        }

    };


    /**
     * Close with Escape key
     */

    document.onkeydown = (event) => {

        if (event.key === "Escape") {

            closeCertificateModal();

        }

    };

}


/**
 * ==========================================
 * Close Certificate Modal
 * ==========================================
 */

function closeCertificateModal() {

    const modal =
        document.getElementById("certificate-modal");

    if (!modal) return;

    modal.classList.remove("active");

}


/**
 * ==========================================
 * Create Certificate Card
 * ==========================================
 */

function createCertificateCard(item) {

    const card =
        document.createElement("div");

    card.className = "certificate-card";


    card.innerHTML = `

        <!-- Certificate Preview -->

        <div class="certificate-preview">

            <i class="fa-solid fa-file-pdf"></i>

            <span class="certificate-status ${item.status.toLowerCase()}">
                ${item.status}
            </span>

        </div>


        <!-- Certificate Content -->

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


            <!-- Skills -->

            <div class="certificate-skills">

                ${createCertificateSkills(item.skills)}

            </div>


            <!-- Buttons -->

            <div class="certificate-buttons">

                ${
                    item.pdf &&
                    item.pdf.length > 0
                        ? `
                        <button
                            type="button"
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
                            rel="noopener noreferrer"
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
 * Certificate Skills
 * ==========================================
 */

function createCertificateSkills(skills) {

    if (!skills || skills.length === 0) {

        return "";

    }

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
 * Open Certificate Gallery
 * ==========================================
 */

function openCertificateGallery(id) {

    const certificate =
        CERTIFICATIONS.items.find(
            item => item.id === id
        );


    if (!certificate) {

        console.error(
            `Certificate not found: ${id}`
        );

        return;

    }


    const modal =
        document.getElementById(
            "certificate-modal"
        );

    const title =
        document.getElementById(
            "certificate-modal-title"
        );

    const list =
        document.getElementById(
            "certificate-list"
        );


    if (!modal || !title || !list) {

        console.error(
            "Certificate modal elements not found."
        );

        return;

    }


    /**
     * Set modal title
     */

    title.textContent =
        certificate.title;


    /**
     * Clear previous files
     */

    list.innerHTML = "";


    /**
     * Add every PDF
     */

    certificate.pdf.forEach(file => {

        const name = file
            .split("/")
            .pop()
            .replace(".pdf", "")
            .replace(/-/g, " ")
            .replace(/\b\w/g, char =>
                char.toUpperCase()
            );


        const item =
            document.createElement("div");

        item.className =
            "certificate-item";


        item.innerHTML = `

            <div class="certificate-item-left">

                <i class="fa-solid fa-file-pdf"></i>

                <span>
                    ${name}
                </span>

            </div>


            <a
                href="${file}"
                target="_blank"
                rel="noopener noreferrer"
                class="certificate-open">

                <i class="fa-solid fa-arrow-up-right-from-square"></i>

                Open

            </a>

        `;


        list.appendChild(item);

    });


    /**
     * Show modal
     */

    modal.classList.add("active");

}