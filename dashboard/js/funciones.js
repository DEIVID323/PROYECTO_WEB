
const sidebar = document.getElementById('ToggleThemeSidebar');
const toggleButton = document.getElementById('ToggleThemeButton');
const labels = sidebar.querySelectorAll('span');
const TogglethemeToggleButton = document.getElementById('TogglethemeToggleButton');
const themeIcon = document.getElementById('themeIcon');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('ToggleThemeSidebar-expanded');
    sidebar.classList.toggle('ToggleThemeSidebar-collapsed');

    labels.forEach(label => {
        label.classList.toggle('hidden');
    });
});

TogglethemeToggleButton.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    sidebar.classList.toggle('dark:bg-gray-800');
    sidebar.classList.toggle('bg-gray-300');
    sidebar.classList.toggle('dark:text-gray-300');
    sidebar.classList.toggle('text-gray-400');

    // Toggle Sun and Moon icons
    sunIcon.classList.toggle('hidden');
    moonIcon.classList.toggle('hidden');
});