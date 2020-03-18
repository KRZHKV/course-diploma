const serviceSlider = () => {
    const slider = document.querySelector('.services-slider'),
          sliderWrapper = slider.parentNode,
          slide = slider.querySelectorAll('.slide');


               
    const arrowRight = document.getElementById('arrowRightService'),
          arrowLeft =  document.getElementById('arrowLeftService');


    let count = 1,
        itemWidth = slide[0].clientWidth,
        currentSlide = 6;
        console.log(itemWidth)

    sliderWrapper.style.width = `${((itemWidth +12) * 5)}px`;

    
    arrowLeft.addEventListener('click', () => {
        currentSlide += itemWidth;
        slider.style.marginLeft = (currentSlide + 6) + 'px';
    });

    arrowRight.addEventListener('click', () => {
        currentSlide -= itemWidth;
        slider.style.marginLeft = (currentSlide - 8) + 'px';
    });







}

export default serviceSlider;