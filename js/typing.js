function initializeTyping() {

    const titles = PORTFOLIO.personal.titles;

    const typingText = document.getElementById("typingText");

    let titleIndex = 0;

    let charIndex = 0;

    let deleting = false;

    function type() {

        const current = titles[titleIndex];

        if (!deleting) {

            typingText.textContent =
                current.substring(0, charIndex++);

            if (charIndex > current.length) {

                deleting = true;

                setTimeout(type, 1500);

                return;

            }

        } else {

            typingText.textContent =
                current.substring(0, charIndex--);

            if (charIndex < 0) {

                deleting = false;

                titleIndex =
                    (titleIndex + 1) % titles.length;

            }

        }

        setTimeout(type, deleting ? 35 : 70);

    }

    type();

}