var menuLinks = document.querySelectorAll("nav a");
menuLinks.forEach((link) => {
    link.addEventListener('click', e => {
        e.preventDefault();
        let hash = link.getAttribute('href');
        let elmnt = document.querySelector(hash);
        elmnt.scrollIntoView({behavior: 'smooth', block: 'start'});
    });
});