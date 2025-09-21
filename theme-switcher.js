document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const htmlElement = document.documentElement; // Target the <html> element

    themeToggleBtn.addEventListener('click', () => {
        // Toggle the 'dark-theme' class on the <html> element
        htmlElement.classList.toggle('dark-theme');
    });
});