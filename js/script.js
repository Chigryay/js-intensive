const programmContents = document.querySelectorAll('.program-line__content');

programmContents.forEach((e, index) => {
    const title = e.querySelector('.program-line__title');

    title.addEventListener('click', () => {
        let className = "active";
        const description = e.querySelector('.program-line__descr');
        const wasActive = description.classList.contains(className);
        remove(className);
        if (!wasActive) {
            description.classList.add(className);
        }
        console.log(description);
    });
});

function remove(className) {
    const description = document.querySelectorAll('.program-line__descr');
    description.forEach((el) => {
        if (el.classList.contains(className)) {
            el.classList.remove(className);
        }
    });
}
