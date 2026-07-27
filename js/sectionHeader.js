function createSectionHeader(tag, title, subtitle) {

    return `
        <div class="section-header">

            <span class="section-header__tag">
                ${tag}
            </span>

            <h2 class="section-header__title">
                ${title}
            </h2>

            <p class="section-header__subtitle">
                ${subtitle}
            </p>

        </div>
    `;

}