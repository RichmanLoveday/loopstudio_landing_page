const menu = document.getElementById('menu');
const btn = document.getElementById('menu-btn');
document.getElementById('menu-btn').addEventListener('click', navToggle);


function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');

}
