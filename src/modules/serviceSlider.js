const serviceSlider = () => {
    const slider = document.querySelector('.services-slider'),
          sliderWrapper = slider.parentNode,
          slide = slider.querySelectorAll('.slide');

    let position = 0;
    
        

    const arrowLeft = document.getElementById('arrowLeftService');

    arrowLeft.addEventListener('click', () => {
        position = position - 200;
        if ( position < -1100)
        slider.style.left = position + 'px';
    });

}


export default serviceSlider;