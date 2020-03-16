const mainSlider = () => {
    const slider = document.querySelector('.main-slider'),
          slide = slider.querySelectorAll('.slide'),
          slideActive = slider.querySelector('.slide-active');

    let currentSlide = 0,
        interval;
    
    slide.forEach((element) => {
        element.style.display = 'none';
    });

    slideActive.style.display = 'flex';


    const prevSlide = (element, index, classSlide) => {
        element[index].classList.remove(classSlide);
        element[index].style.display = 'none';
    };


    const nextSlide = (element, index, classSlide) => {
        element[index].classList.add(classSlide);
        element[index].style.display = 'flex';
    };

    const autoPlayer = () => {
        prevSlide(slide, currentSlide, 'slide-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'slide-active');
    }

    const startSlider = ( time = 3000 ) => {
        interval = setInterval(autoPlayer, time);
    }

    
    startSlider();


};

export default mainSlider;