const serviceSlider = () => {
    const slider = document.querySelector('.services-slider'),
          sliderWrapper = slider.parentNode,
          slide = slider.querySelectorAll('.slide');

    let position = 0;

    let slideWidth = slide[0].offsetWidth;
    let slideHeight = slide[0].offsetHeight;
    sliderWrapper.style.height = slideHeight;
    sliderWrapper.style.width = slideWidth*5;
    
        
    const arrowLeft = document.getElementById('arrowLeftService');
    const arrowRight = document.getElementById('arrowRightService');

    arrowRight.addEventListener('click', () => {
        position = position - (slideWidth + 10);
        if (position < -1100) {
            position = 0;
            slider.style.transform = `translateX(${position}px)`;
        } else {
            slider.style.transform = `translateX(${position}px)`;
        }
    });
    arrowLeft.addEventListener('click', () => {
        position = position + (slideWidth + 10);
        if (position > 0) {
            position = -1100;
            slider.style.transform = `translateX(${position}px)`;
        } else {
            slider.style.transform = `translateX(${position}px)`;
        }
    });

};

export default serviceSlider;