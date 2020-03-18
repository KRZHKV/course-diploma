const siteForm = () => {
    const form = document.getElementById('card_order');
    const statusMessage = document.createElement('div');
    const thanksWindow = document.getElementById('thanks');
    
    const clearInput = () => {
        statusMessage.textContent = '';
        let cardCheck = document.querySelector('input[type=radio]');
        if (cardCheck) {
            cardCheck.checked = false;
        };
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
    
        formData.get('card-type', 'form_name');
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

export default siteForm;