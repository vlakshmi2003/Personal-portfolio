// =========toggle icon navbar======
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
// ===========scroll sections avtive link========
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top =window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                DocumentTimeline.querySelector('header nav [href*=' + id +']').classList.add('active')
            })
        }
    })
    // ====== sticky navbar=======

    let header = documet.querySelector('header');
    header.classList.toggle('sticky',window.scrollY >100);

    // ====== remove toggle icon and navbar when click navbar link(scroll)=======
    menuIcon.classList.remove('bx-x');
    navbar.classList.toggle('active');
}
    // ====== scroll reveal=======
    ScrollReveal({
        // reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().revael('home-content, .heading', {origin: 'top'});
    ScrollReveal().revael('home-img, .portfolio-container, .portfolio-box, .contact form', {origin: 'bottom'});
    ScrollReveal().revael('home-content h1, .about-img', {origin: 'left'});
    ScrollReveal().revael('home-content p, .about-content', {origin: 'right'});
     

    const typed = new Typed ('multiple-text', {
        strings: ['Frontend Developer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
    })

