function toggleMenu() {
    let menu = document.getElementById('menu-modal');
    if (menu) {
        menu.classList.toggle('visible');
    }
}

function closeMenu() {
    let menu = document.getElementById('menu-modal');
    if (menu) {
        menu.classList.remove('visible');
    }
}
