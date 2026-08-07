/**
 * ==========================================
 * Contact Section
 * ==========================================
 */

function initializeContact() {

    console.log("Contact Initialized");

    renderContactInfo();

    initializeContactForm();

}

/* ==========================================
   Render Contact Information
========================================== */

function renderContactInfo() {

    const container = document.getElementById("contact-list");

    if (!container) return;

    container.innerHTML = "";

    CONTACT.info.forEach(item => {

        const card = document.createElement("a");

        card.className = "contact-card";

        card.href = item.link;

        if (item.link.startsWith("http")) {

            card.target = "_blank";

        }

        card.innerHTML = `

            <div class="contact-icon">

                <i class="${item.icon}"></i>

            </div>

            <div class="contact-details">

                <h4>${item.title}</h4>

                <p>${item.value}</p>

            </div>

        `;

        container.appendChild(card);

    });

}

/* ==========================================
   Contact Form
========================================== */

function initializeContactForm() {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const submitButton =
            form.querySelector(".contact-btn");

        submitButton.disabled = true;

        submitButton.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            Sending...
        `;

        emailjs.sendForm(

            "service_re3ecgd",

            "template_ptngtak",

            form,

            "XaiAiWzcitsO_nRau"

        )

        .then(() => {

            submitButton.innerHTML = `
                <i class="fa-solid fa-circle-check"></i>
                Message Sent
            `;

            alert("✅ Thank you! Your message has been sent successfully.");

            form.reset();

            setTimeout(() => {

                submitButton.disabled = false;

                submitButton.innerHTML = `
                    <i class="fa-solid fa-paper-plane"></i>
                    Send Message
                `;

            }, 2000);

        })

        .catch((error) => {

            console.error(error);

            alert("❌ Unable to send your message. Please try again later.");

            submitButton.disabled = false;

            submitButton.innerHTML = `
                <i class="fa-solid fa-paper-plane"></i>
                Send Message
            `;

        });

    });

}