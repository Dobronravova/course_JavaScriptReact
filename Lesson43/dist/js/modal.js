"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.modal_trigger'),
          modal = document.querySelector('.modal'),
          close = modal.querySelector('.modal__close');

    
        function showModal() {
            modal.classList.add('show', 'fade');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.classList.add('hide');
            modal.classList.remove('show', 'fade');
            document.body.style.overflow = 'auto';
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