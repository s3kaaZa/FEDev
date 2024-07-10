const buttonMain = document.querySelector('.button_main');
const modalOverlay = document.querySelector('#modal-overlay');
const modal = document.querySelector('#modal');
const closeButton = document.querySelector('.close-button');
const loginButton = document.querySelector('.login-button');

function closeModal() {
    modalOverlay.style.display = 'none';
    modal.style.display = 'none';
}

function openModal() {
    modalOverlay.style.display = 'block';
    modal.style.display = 'block';
}

document.addEventListener('click', e => {
    const target = e.target;

    if (target.closest('.button_main')) {
        openModal();
    } else if (target === modalOverlay || target.closest('.close-button')) {
        closeModal();
    } else if (target === loginButton) {
        const fd = new FormData(authForm);
        alert(`
            Email: ${fd.get('email')} \n
            Password: ${fd.get('password')} \n
            Remember passwords: ${fd.get('remember-password') ? 'Yes' : 'No'} \n
        `);
    }
})

// option 2 (without processing each click)

// buttonMain.onclick = openModal();
// modalOverlay.onclick closeModal;
// closeButton.onclick = closeModal;