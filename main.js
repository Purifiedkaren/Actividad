const toggleBtn= document.querySelector('.toggle-bnt');
const navlinks= document.querySelector('nav-links');
toggleBtn.addEventListener('click',() => {
    navlinks.classList.toggle('active');
});