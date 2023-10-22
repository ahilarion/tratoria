function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);

    if (section) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = section.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }
}

function handleIntersection(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scale-in');
            observer.unobserve(entry.target);
        }
    });
}

// Créez un observateur d'intersection
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2, // Ajustez le seuil selon vos besoins
};

const observer = new IntersectionObserver(handleIntersection, options);

// Sélectionnez tous les éléments avec la classe "animate"
const elements = document.querySelectorAll('.animate');

// Observez chaque élément
elements.forEach((element) => {
    observer.observe(element);
});