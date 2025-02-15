document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.querySelector('.slides-container');
    const slides = document.querySelectorAll('.planet-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    // Initialize slider
    function initSlider() {
        slides.forEach((slide, index) => {
            slide.style.width = `${slidesContainer.clientWidth}px`;
        });
        
        updateSlider();
    }

    // Update slider position
    function updateSlider() {
        slidesContainer.style.transform = `translateX(-${currentIndex * slidesContainer.clientWidth}px)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Navigation handlers
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    });

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    // Initialize on load and window resize
    initSlider();
    window.addEventListener('resize', initSlider);
});