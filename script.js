    const slider = document.querySelectorAll('.slider');
    const btnPrev = document.getElementById('prev-button');
    const btnNext = document.getElementById('next-button');
    let currentSlide = 0;
    function hideSlider() {
      slider.forEach(item => item.classList.remove('on'));
    }
    function showSlider() {
      slider[currentSlide].classList.add('on');
    }
    function nextSlider() {
      hideSlider();
      currentSlide = (currentSlide + 1) % slider.length;
      showSlider();
    }
    function prevSlider() {
      hideSlider();
      currentSlide = (currentSlide - 1 + slider.length) % slider.length;
      showSlider();
    }
    btnNext.addEventListener('click', nextSlider);
    btnPrev.addEventListener('click', prevSlider);