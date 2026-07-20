function initializeStatistics() {

    const statisticsGrid = document.getElementById("statisticsGrid");

    if (!statisticsGrid) return;

    statisticsGrid.innerHTML = "";

    STATISTICS.forEach((item) => {

        statisticsGrid.innerHTML += `
            <div class="statistics__card">

                <div class="statistics__icon">
                    <i class="${item.icon}"></i>
                </div>

                <h2 class="statistics__number">
                    ${item.number}${item.suffix}
                </h2>

                <p class="statistics__title">
                    ${item.title}
                </p>

            </div>
        `;

    });

}