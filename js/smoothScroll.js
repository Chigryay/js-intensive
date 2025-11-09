const navBar = document.querySelector('.header__nav');
const links = navBar.querySelectorAll('a');

links.forEach((e) => {
    e.addEventListener('click', (event) => {
        event.preventDefault();
        const href = e.attributes.href.nodeValue;
        const section = document.querySelector(href);

        if (section) {
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "start",
                inline: "center"
            });
        }
    });
});