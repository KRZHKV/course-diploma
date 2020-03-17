const popupForm = () => {

    const form1 = document.getElementById('form2');
    const form2 = document.getElementById('form1');
    const forms = [form1, form2];

    let formValues3 = form1.querySelectorAll('input');
    console.log(formValues3);

    forms.forEach((elem) => {

        let popup = elem.parentNode.parentNode.parentNode;
        let popupClose = () => {
            popup.style.display = 'none';
        }
        const clearInput = () => {
            statusMessage.textContent = '';
            const checkbox = elem.querySelector('input[type=checkbox]')
            checkbox.checked = false;
            popupClose();
        }

        let statusMessage = elem.querySelector('h4');

        elem.addEventListener('submit', (event) => {
            event.preventDefault();
            statusMessage.textContent = 'Загрузка';
            const formData = new FormData(elem);
            let body = {};
            let formValues = elem.querySelectorAll('input');

            formData.forEach((value, key) => {
                body[key] = value;
            });
            postData(body)
            .then((response) => {
                if(response.status !== 200) {
                    throw new Error('status network not 200');
                }   
                console.log(response);
                statusMessage.textContent = 'Мы скоро с вами связжемся!';
                for (let i = 0; i < formValues.length; i++) {
                    formValues[i].value = '';
                };
                setTimeout(clearInput, 3000);
            })
            .catch((error) => {
                statusMessage.textContent = 'Что-то пошло не так...';
                console.error(error);  
            });
                
            
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

export default popupForm;