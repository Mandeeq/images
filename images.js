document.addEventListener('DOMContentLoaded', () => {
    const imagesContainer = document.querySelector('.images');
    const images = document.querySelectorAll('.images img');
    const leftButton = document.querySelector('.slide.left');
    const rightButton = document.querySelector('.slide.right');
    
    let currentIndex = 0;

    function updateSlider() {
        const imageWidth = images[0].clientWidth; // Get the width of one image
        imagesContainer.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
    }

    leftButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateSlider();
    });

    rightButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    // Initial call to set the correct position
    updateSlider();
});
