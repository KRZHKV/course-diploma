const sendForm = () => {
    const successMessage = 'Ваша заявка успешно отправленна!',
          loadMessage = 'Загрузка...',
          errorMessage = 'Ошибка, что-то пошло не так...';

    const forms = document.querySelectorAll('form');

    let statusMessage = document.createElement('div');
    
    const inputName = document.querySelectorAll('input[type=text]'),
          inputPhone = document.querySelectorAll('input[type=tel]'),
          inputMessage = document.querySelectorAll('input[type=mess]');

    inputName.forEach((e) => {
        e.addEventListener('input', () => {
            e.value = e.value.replace(/[^А-я]/, '');
        });
    });

    inputPhone.forEach((e) => {
        e.addEventListener('input', () => {
            e.value = e.value.replace(/[^\+*?\d]/, '');
        });
    });

    forms.forEach((e) => {
        console.log(e);
        e.addEventListener('submit', () => {
            event.preventDefault();
            e.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;

            const formData = new FormData(e);
            let body = {};
            let formValues = e.querySelectorAll('input');

            formData.forEach((value, key) => {
                body[key] = value;
            });

            postData(body)
            .then((response) => {
                if(response.status !== 200) {
                    throw new Error ('status network not 200');
                }
                console.log(response);
                statusMessage.value = successMessage;
            })
            .catch((error) => {
                statusMessage.value = errorMessage;
                console.error(error);
            })

        })

        const postData = (body) => {
            return fetch('../server.php', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        }
    });






}

export default sendForm;