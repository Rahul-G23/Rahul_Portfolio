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

        emailjs.sendForm(

            "YOUR_SERVICE_ID",

            "YOUR_TEMPLATE_ID",

            form,

            "YOUR_PUBLIC_KEY"

        )

        .then(() => {

            alert("Message sent successfully!");

            form.reset();

        })

        .catch((error) => {

            console.error(error);

            alert("Unable to send message. Please try again.");

        });

    });

}