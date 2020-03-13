const popup = () => {
    const callBackBtn = document.querySelector('.callback-btn');
    const callbackPopup = document.getElementById('callback_form');
    const freeVisitBtn = document.querySelector('.free-visit');
    const freeVisitPopup = document.getElementById('free_visit_form');

    const showPopup = (button, popup) => {
        button.addEventListener('click', () => {
            popup.style.display = 'block';
        });
    };

    const closePopup = (popup) => {
        popup.addEventListener('click', (event) => {
            let target = event.target;
            if ( target.classList.contains('overlay') || target.classList.contains('close_icon') ) {
                popup.style.display = 'none';
            };
        });
    };

    showPopup(callBackBtn, callbackPopup);
    showPopup(freeVisitBtn, freeVisitPopup);
    closePopup(callbackPopup);
    closePopup(freeVisitPopup);
};


export default popup;