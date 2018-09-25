var menuLinks = document.querySelectorAll('nav a');
menuLinks.forEach((link) => {
    link.addEventListener('click', e => {
        e.preventDefault();
        let hash = link.getAttribute('href');
        let elmnt = document.querySelector(hash);
        elmnt.scrollIntoView({behavior: 'smooth', block: 'start'});
    });
});


window.addEventListener('scroll', e =>{
    e.preventDefault();
    var scrollPosition = document.documentElement.scrollTop;
    if(scrollPosition > 0){
        document.querySelector('header').classList.add('fixed');
    }
    else{
        document.querySelector('header').classList.remove('fixed');
    }
});