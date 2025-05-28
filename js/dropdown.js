// Script para el botón desplegable de repositorios
document.addEventListener('DOMContentLoaded', function() {
    const repoDropdownBtn = document.getElementById('repo-dropdown-btn');
    const repoDropdownContent = document.getElementById('repo-dropdown-content');

    if (repoDropdownBtn && repoDropdownContent) { // Asegúrate de que los elementos existan
        repoDropdownBtn.setAttribute('aria-haspopup', 'true');
        repoDropdownBtn.setAttribute('aria-expanded', 'false');

        repoDropdownBtn.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click event from bubbling up to window
            repoDropdownContent.classList.toggle('show');
            const isShown = repoDropdownContent.classList.contains('show');
            repoDropdownBtn.setAttribute('aria-expanded', isShown);
        });

        // Close the dropdown if the user clicks outside of it
        window.addEventListener('click', function(event) {
            if (!repoDropdownBtn.contains(event.target) && !repoDropdownContent.contains(event.target)) {
                if (repoDropdownContent.classList.contains('show')) {
                    repoDropdownContent.classList.remove('show');
                    repoDropdownBtn.setAttribute('aria-expanded', 'false');
                }
            }
        });

        // Close dropdown with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && repoDropdownContent.classList.contains('show')) {
                repoDropdownContent.classList.remove('show');
                repoDropdownBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
});