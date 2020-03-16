const gift = () => {
    const giftBtn = document.querySelector('.fixed-gift');
    const giftpopup = document.getElementById('gift');

    giftBtn.addEventListener('click', () => {  
        giftpopup.style.display = 'block';
        giftBtn.style.display = 'none';
    });

    giftpopup.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('close_icon') || target.classList.contains('overlay')) {
            giftpopup.style.display = 'none';
        };
    });
};

export default gift;