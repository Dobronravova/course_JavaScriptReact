"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.modal_trigger'),
          modal = document.querySelector('.modal'),
          close = modal.querySelector('.modal__close');

    
        function showModal() {
            modal.classList.toggle('show', 'fade');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimeoutId);
        }

        function closeModal() {
            modal.classList.add('hide');
            modal.classList.remove('show', 'fade');
            document.body.style.overflow = 'auto';
        }

        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                showModal();
            });
        });

        close.addEventListener('click', () => {
            closeModal();
        });

        //закрытие по клику вне модалки

        modal.addEventListener('click', (e) => {
            if (e.target === modal){
                closeModal();
            }
        });

        //закрытие по esc

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modal.classList.contains('show')){
                closeModal();
            }
        });


        //открытие окна, когда пользователь долистал до определенного момента или через какое-то время

        const modalTimeoutId = setTimeout(showModal, 5000);

        function showModalByScroll(){
            if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
                showModal();
                window.removeEventListener('scroll', showModalByScroll);
            }
        }
        window.addEventListener('scroll', showModalByScroll);
});