document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const colorSelect = document.getElementById('color-select');
    const body = document.body;

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    if (colorSelect) {
        colorSelect.addEventListener('change', function() {
            const selectedTheme = this.value;
            body.classList.remove('light-theme', 'dark-theme', 'green-theme', 'blue-theme', 'pink-theme', 'purple-theme', 'yellow-theme');

            if (selectedTheme === 'dark') {
                body.classList.add('dark-theme');
                localStorage.setItem('theme', 'dark');
            } else if (selectedTheme === 'light') {
                body.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
            } else if (selectedTheme === 'green') {
                body.classList.add('green-theme');
                localStorage.setItem('theme', 'green');
            } else if (selectedTheme === 'blue') {
                body.classList.add('blue-theme');
                localStorage.setItem('theme', 'blue');
            } else if (selectedTheme === 'pink') {
                body.classList.add('pink-theme');
                localStorage.setItem('theme', 'pink');
            } else if (selectedTheme === 'purple') {
                body.classList.add('purple-theme');
                localStorage.setItem('theme', 'purple');
            } else if (selectedTheme === 'yellow') {
                body.classList.add('yellow-theme');
                localStorage.setItem('theme', 'yellow');
            } else {
                localStorage.removeItem('theme');
            }
        });

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            colorSelect.value = savedTheme;
            body.classList.add(savedTheme + '-theme');
        } else {
            body.classList.add('light-theme');
            colorSelect.value = 'light';
        }
    }
});