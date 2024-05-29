document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon'); // Updated to target .menu-icon
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    menuIcon.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('show');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    });
});
