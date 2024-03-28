document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const bodyElement = document.body;
    const profileCover = document.getElementById('profile-cover');

    if (!bodyElement.classList.contains('bright') && !bodyElement.classList.contains('dark')) {
        bodyElement.classList.add('bright');
        profileCover.classList.add('shallow-bg');
        themeToggleButton.classList.add('fas', 'fa-moon');
    }

    themeToggleButton.addEventListener('click', () => {
        if (bodyElement.classList.contains('bright')) {
            bodyElement.classList.remove('bright');
            bodyElement.classList.add('dark');

            profileCover.classList.remove('shallow-bg');
            profileCover.classList.add('deep-bg');

            themeToggleButton.classList.remove('fas', 'fa-moon');
            themeToggleButton.classList.add('fas', 'fa-sun');
        } else {
            bodyElement.classList.remove('dark');
            bodyElement.classList.add('bright');

            profileCover.classList.remove('deep-bg');
            profileCover.classList.add('shallow-bg');

            themeToggleButton.classList.remove('fas', 'fa-sun');
            themeToggleButton.classList.add('fas', 'fa-moon');
        }
    });
});



