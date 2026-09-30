// Kod koji omogućava da se sekcije lepo pojave kada skroluješ do njih
document.addEventListener('DOMContentLoaded', () => {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1 // Aktivira se kada 10% sekcije bude vidljivo na ekranu
    });

    hiddenElements.forEach((el) => observer.observe(el));
});