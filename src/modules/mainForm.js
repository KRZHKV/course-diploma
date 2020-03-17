const mainForm = () => {

    const form = document.getElementById('banner-form');
    const thanksWindow = document.getElementById('thanks');
    const statusMessage = document.createElement('div');

    const clearInput = () => {
        statusMessage.textContent = '';
    }


    form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            let body = {};
            let formValues = form.querySelectorAll('input');
            statusMessage.textContent = 'Загрузка';
            form.appendChild(statusMessage);

            formData.forEach((value, key) => {
                body[key] = value;
            });
            postData(body)
            .then((response) => {
                if(response.status !== 200) {
                    throw new Error('status network not 200');
                }   
                console.log(response);
                thanksWindow.style.display = 'block';
                setTimeout(clearInput, 1000);
                for (let i = 0; i < formValues.length; i++) {
                    formValues[i].value = '';
                };
            })
            .catch((error) => {
                statusMessage.textContent = 'Ошибка';
                setTimeout(clearInput, 3000);
                console.error(error);

                
            });     

    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        

    };

};

export default mainForm;