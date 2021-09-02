window.addEventListener('DOMContentLoaded', () => {

    const forms = document.querySelectorAll('form');

    forms.forEach(item => {
        postData(item);
    });

    const status = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    function postData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusContainer = document.createElement('div');
            statusContainer.classList.add('status');
            statusContainer.textContent = status.loading;
            form.appendChild(statusContainer);
        
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });

            request.send(JSON.stringify(object));

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    statusContainer.textContent = status.success;
                    form.reset();
                    setTimeout(() => {
                        statusContainer.remove();
                    }, 5000);
                } else {
                    statusContainer.textContent = status.failure;
                }
            });
        });
    }
});