const modalBtn = document.querySelector('.modal__button');
modalWindow = document.querySelector('.modal');

modalBtn.addEventListener('click', (event) => {
    changedDisplayModal();
});

modalWindow.addEventListener('click', (event) => {
    const modalContent = event.target.closest('.modal__inner');
    if (!modalContent) {
        modalWindow.style.display = 'none';
    }
    console.dir(modalContent);
});

function changedDisplayModal() {
    modalWindow.style.display = 'flex';
}



