window.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.offer__slider'),
          totalSlides =  sliderContainer.querySelector('#total'),
          slides = sliderContainer.querySelectorAll('.offer__slide'),
          currentSlides = sliderContainer.querySelector('#current'),
          prevSlide = sliderContainer.querySelector('.offer__slider-prev'),
          nextSlide = sliderContainer.querySelector('.offer__slider-next');

    
    const countSlides = slides.length;

    if (countSlides > 10) {
        totalSlides.textContent = countSlides;
    } else {
        totalSlides.textContent = `0${countSlides}`;
    }
    console.log(countSlides);


    function toggleSlider(index, slidesArr) {
        slidesArr.forEach((slide) => {
            slide.classList.add('hide');
        });
        slidesArr[index].classList.add('show');
        slidesArr[index].classList.remove('hide');
        console.log(index + 1);
        if (index >= 9) {
            currentSlides.textContent = index + 1;
        } else {
            currentSlides.textContent = `0${index + 1}`;
        }
    }
    
    let indexSlide = 0;
    toggleSlider(indexSlide, slides);

    nextSlide.addEventListener('click', () => {
        indexSlide++;
        if (indexSlide == slides.length) {
            indexSlide = 0;
        }
        toggleSlider(indexSlide, slides);
    });

    prevSlide.addEventListener('click', () => {
        indexSlide--;
        if (indexSlide < 0) {
            indexSlide = slides.length - 1;
        }
        toggleSlider(indexSlide, slides);
    });


});

