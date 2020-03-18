const checkForm = () => {
    
    const inputName = document.querySelectorAll('input[type=text]'),
          inputPhone = document.querySelectorAll('input[type=tel]');

    inputName.forEach((e) => {
        e.addEventListener('input', () => {
            if (e.classList.contains('promo')) {
                console.log(e);
                e.value = e.value.replace(/[^А-я0-9]/g, '');
            } else {
                e.value = e.value.replace(/[^А-я]/ig, '');
            }
        });
    });

    inputPhone.forEach((e) => {
        e.addEventListener('input', () => {
            e.value = e.value.replace(/[^+0-9]/ig, '');
        });
    });

};

export default checkForm;