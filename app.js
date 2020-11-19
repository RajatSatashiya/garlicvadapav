const bars = document.querySelector('.viewmore');
const sidebar = document.querySelector('.sidebar');
const close = document.querySelector('.close');
const pages = document.querySelector('.pages');

bars.addEventListener('click',function(){
    pages.style.visibility = "hidden";
    sidebar.classList.toggle('show-sidebar');
});

close.addEventListener('click',function(){
    pages.style.visibility = "visible";
    sidebar.classList.toggle('show-sidebar');
});