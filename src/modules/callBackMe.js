const callBackMe = function() {
    const callBackBtn = document.querySelector('.callback-btn');
    const callbackPopup = document.getElementById('callback_form');

    callBackBtn.addEventListener('click', function() {
        callbackPopup.style.display = 'block';
    });

    callbackPopup.addEventListener('click', function(event) {
        let target = event.target;
        if ( target.classList.contains('overlay') || target.classList.contains('close_icon') ) {
            callbackPopup.style.display = 'none';
        };
    });
};

export default callBackMe;