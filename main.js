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