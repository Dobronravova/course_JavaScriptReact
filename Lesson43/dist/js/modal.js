"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.modal_trigger'),
          modal = document.querySelector('.modal'),
          close = modal.querySelector('.modal__close');

    
        function showModal() {
            modal.classList.add('show', 'fade');
            modal.classList.remove('hide');
        }

        function closeModal() {
            modal.classList.add('hide');
            modal.classList.remove('show', 'fade');
        }

        btns.forEach(btn => {
            btn.addEventListener('click', (event) => {
                showModal();
                console.log('open');
            });
        });

        close.addEventListener('click', (event) => {
            closeModal();
            console.log('close');
        });
});