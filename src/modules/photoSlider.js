const photoSlider = () => {
    const slider = document.querySelector('.gallery-slider'),
          sliderWrapper = slider.parentNode,
          slide = slider.querySelectorAll('.slide'),
          dotWrapper = sliderWrapper.querySelector('.dots-wrapper');

    let currentSlide = 0,
        interval;

    const slideDots = () => {
        slide.forEach((elem, index) => {
            elem[index] = document.createElement('li');
            elem[index].classList.add('dot');
            if (elem[index] === elem[0]) {
                elem[0].classList.add('dot-active');
            }
            dotWrapper.appendChild(elem[index]);
        });
    };
        slideDots();
    
    let dot = document.querySelectorAll('.dot');


    const prevSlide = (element, index, classSlide) => {
        element[index].classList.remove(classSlide);
    };


    const nextSlide = (element, index, classSlide) => {
        element[index].classList.add(classSlide);
    };

    const autoPlayer = () => {
        prevSlide(dot, currentSlide, 'dot-active');
        prevSlide(slide, currentSlide, 'slide-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(dot, currentSlide, 'dot-active');
        nextSlide(slide, currentSlide, 'slide-active');
    }

    const startSlider = ( time = 3000 ) => {
        interval = setInterval(autoPlayer, time);
    }

    const stopSlider = () => {
        clearInterval(interval);
    };

    sliderWrapper.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;
        console.log(target);

        if (!target.matches('.arrow-btn, .dot')) {
            return;
        };

        prevSlide(slide, currentSlide, 'slide-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.closest('#arrowRight')) {
            currentSlide++;
        } else if (target.closest('#arrowLeft')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                };
            });
        };
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        };
        if (currentSlide < 0) {
            currentSlide = slide.length - 1;
        };
        nextSlide(slide, currentSlide, 'slide-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });

    sliderWrapper.addEventListener('mouseover', (event) => {
        if (event.target.matches('.arrow-btn') || event.target.matches('.dot')) {
            stopSlider();
        };
    });

    sliderWrapper.addEventListener('mouseout', (event) => {
        if (event.target.matches('.arrow-btn') || event.target.matches('.dot')) {
            startSlider();
        };
    });

    
    startSlider();
    


} 

export default photoSlider;