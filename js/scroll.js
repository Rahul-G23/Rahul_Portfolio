function initializeScrollSpy() {

    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll(".navbar__link");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const currentId = entry.target.id;

            navLinks.forEach((link) => {

                link.classList.remove("navbar__link--active");

                if (link.getAttribute("href") === `#${currentId}`) {

                    link.classList.add("navbar__link--active");

                }

            });

        });

    }, {

        threshold: 0.5

    });

    sections.forEach((section) => observer.observe(section));

}