var menuLinks = document.querySelectorAll('nav a');
menuLinks.forEach((link) => {
    link.addEventListener('click', e => {
        e.preventDefault();
        let hash = link.getAttribute('href');
        let elmnt = document.querySelector(hash);
        elmnt.scrollIntoView({behavior: 'smooth', block: 'start'});
        let menu = document.querySelector('nav ul');
        if(menu.classList.contains('active')){
            menu.classList.remove('active');
        }
    });
});


window.addEventListener('scroll', e =>{
    e.preventDefault();
    var scrollPosition = document.documentElement.scrollTop;
    var windowSize = window.screen.width;
    var header = document.querySelector('header');
    if (windowSize > 1024){
        if(scrollPosition > 0){
            header.classList.add('fixed');
        }
        else{
            header.classList.remove('fixed');
        }
    } else {
        header.classList.add('fixed');
    }
});


var button = document.querySelector('.menu-toggle');
var menu = document.querySelector('nav ul');
button.addEventListener('click', e => {
    e.preventDefault();
    menu.classList.toggle('active');
});