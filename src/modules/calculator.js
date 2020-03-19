const calculator = () => {
    const form = document.getElementById('card_order'),
          oneMonth = document.getElementById('m1'),
          sixMonth = document.getElementById('m2'),
          nineMonth = document.getElementById('m3'),
          twelveMonth = document.getElementById('m4'),
          mozaikaBtn = document.getElementById('card_leto_mozaika'),
          schelkovoBtn = document.getElementById('card_leto_schelkovo'),
          priceInput = document.getElementById('price-total'),
          promo = form.querySelectorAll('input[name="name"]')[0];

    let price;

    form.addEventListener('change', () => {
        if (oneMonth.checked && mozaikaBtn.checked) {
            price = 1999;
        } else if (sixMonth.checked && mozaikaBtn.checked) {
            price = 9999;
        } else if (nineMonth.checked && mozaikaBtn.checked) {
            price = 13990;
        } else if (twelveMonth.checked && mozaikaBtn.checked) {
            price = 19990;
        } else if (oneMonth.checked && schelkovoBtn.checked) {
             price = 2990;
        } else if (sixMonth.checked && schelkovoBtn.checked) {
            price = 14990;
        } else if (nineMonth.checked && schelkovoBtn.checked) {
            price = 21990;
        } else if (twelveMonth.checked && schelkovoBtn.checked) {
            price = 24990;
        };
            
        if (promo.value === 'ТЕЛО2019') {
            priceInput.textContent = Math.round(price * 0.7);
        } else {
            priceInput.textContent = price;
        };
    });

};

export default calculator;