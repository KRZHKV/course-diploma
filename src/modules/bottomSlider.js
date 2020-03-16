const bottomSlider = () => {
    const slider = document.querySelector('.gallery-slider'),
          slide = slider.querySelectorAll('.slide'),
          slideActive = slider.querySelector('.slide-active');

    const prevArrow = document.querySelector('.prev-arrow'),
          nextArrow = document.querySelector('.next-arrow'),
          dotsWrapper = slider.querySelector('.dots-wrapper');


    slider.style.position = 'relative';
    prevArrow.style.cssText = 'width: 40px; height: 40px; background-color: #ffd11a; position: absolute; top: 45%; left: 0; border-radius: 50%; border: none; font-size: 20px;';
    nextArrow.style.cssText = 'width: 40px; height: 40px; background-color: #ffd11a; position: absolute; top: 45%; right: 0; border-radius: 50%; border: none; font-size: 20px;';


    let currentSlide = 0,
        interval;
    
    slide.forEach((element) => {
        element.style.display = 'none';
    });

    slideActive.style.display = 'flex';

    dotsWrapper.style.cssText = 'display: flex; position: absolute; bottom: 0; left: 50%';

    const slideDotAdd = () => {
        slide.forEach((elem, index) => {
            elem[index] = document.createElement('li');
            elem[index].classList.add('dot');
            elem[index].style.cssText = 'width: 20px; height: 5px; background-color: #ffffff; margin: 5px; border: none; border-radius: 10px; z-index: 55;';
            if (elem[index] === elem[0]) {
                elem[0].classList.add('dot-active');
                elem[0].style.background = '#ffd11a';
            }
            dotsWrapper.appendChild(elem[index]);
        });

    };
    slideDotAdd();

    let dot = document.querySelectorAll('.dot');


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
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'slide-active');
        nextSlide(dot, currentSlide, 'dot-active');
    }

    const startSlider = ( time = 3000 ) => {
        interval = setInterval(autoPlayer, time);
    }

    const stopSlider = () => {
        clearInterval(interval);
    }

    slider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if (!target.matches('.portfolio-btn, .dot')) {
            return;
        };

        prevSlide(slide, currentSlide, 'slide-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.matches('.next-arrow')) {
            currentSlide++;
        } else if (target.matches('.prev-arrow')) {
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

    slider.addEventListener('mouseover', (event) => {
        console.log(event.target);
        if (event.target.matches('.next-arrow') || event.target.matches('.prev-arrow')) {
            stopSlider();
        };
    });


    slider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.next-arrow') || event.target.matches('.prev-arrow')) {
             startSlider();
         };
    });




    startSlider();


};

export default bottomSlider;