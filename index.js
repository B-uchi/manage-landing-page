const open_btn = document.getElementById('open-btn');
const close_btn = document.getElementById('close-btn');
const menu = document.getElementById('mobile-menu');
open_btn.addEventListener("click", function() {
    open_btn.classList.toggle('hidden')
    close_btn.classList.toggle('hidden')
    menu.classList.toggle('hidden')
});
close_btn.addEventListener("click", function() {
    open_btn.classList.toggle('hidden')
    menu.classList.toggle('hidden')
    close_btn.classList.toggle('hidden')
});