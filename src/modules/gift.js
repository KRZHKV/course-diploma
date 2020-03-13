const gift = () => {
    // const callBackBtn = document.querySelector('.callback-btn');
    // const callbackPopup = document.getElementById('callback_form');
    // const freeVisitBtn = document.querySelector('.free-visit');
    // const freeVisitPopup = document.getElementById('free_visit_form');
    const giftBtn = document.querySelector('.fixed-gift');
    const giftpopup = document.getElementById('gift');

    giftBtn.addEventListener('click', () => {  
        giftpopup.style.display = 'block';
        giftBtn.style.display = 'none';
    });
};

export default gift;