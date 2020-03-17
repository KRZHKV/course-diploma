const photoSlider = () => {
    const slider = document.querySelector('.gallery-slider'),
          slide = slider.querySelectorAll('.slide');

    const prevArrow = document.querySelector('.prev'),
          nextArrow = document.querySelector('.next'),
          dotsWrapper = slider.querySelector('.dots-wrapper');


    slider.style.position = 'relative';
    prevArrow.style.cssText = 'width: 40px; height: 40px; background-color: #ffd11a; position: absolute; top: 45%; left: 0; border-radius: 50%; border: none; font-size: 20px;';
    nextArrow.style.cssText = 'width: 40px; height: 40px; background-color: #ffd11a; position: absolute; top: 45%; right: 0; border-radius: 50%; border: none; font-size: 20px;';


    let currentSlide = 0,
        interval;
    
    slide.forEach((elem) => {
        elem.style.display = 'none';
        if (elem.classList.contains('slide-active')) {
            elem.style.display = 'block';
        }
    });




    const prevSlide = (element, index, classSlide) => {
        element[index].classList.remove(classSlide);
        if (element[index].classList.contains('slide')) {
            element[index].style.display = 'none';
        }
    };

    const nextSlide = (element, index, classSlide) => {
        element[index].classList.add(classSlide);
        if (element[index].classList.contains('slide-active')) {
            element[index].style.display = 'block';
        } 
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

    const stopSlider = () => {
        clearInterval(interval);
    }

    slider.addEventListener('click', (event) => {
        let target = event.target;
        console.log(target);
        if (target.classList.contains('prev')) {
            prevSlide(slide, currentSlide, 'slide-active');
        }
    })


    startSlider();


};

export default photoSlider;