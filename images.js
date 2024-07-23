document.addEventListener('DOMContentLoaded', () => {
    const imagesContainer = document.querySelector('.images');
    const images = document.querySelectorAll('.images img');
    const leftButton = document.querySelector('.slide.left');
    const rightButton = document.querySelector('.slide.right');
    
    let currentIndex = 0;
    const imageWidth = images[0].clientWidth; // Get the width of one image
    const intervalTime = 5000; // 5 seconds

    function updateSlider() {
        imagesContainer.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    }

    function previousSlide() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateSlider();
    }

    leftButton.addEventListener('click', () => {
        previousSlide();
    });

    rightButton.addEventListener('click', () => {
        nextSlide();
    });

    // Auto-slide function
    setInterval(nextSlide, intervalTime);

    // Initial call to set the correct position
    updateSlider();
});
