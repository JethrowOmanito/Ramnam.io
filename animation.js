document.addEventListener('DOMContentLoaded', () => {
    const noodlesGif = document.querySelector('.noodles-gif');
    const moveLetters = document.querySelectorAll('.move-letter');
    const lastLetter = moveLetters[moveLetters.length - 1];

    noodlesGif.addEventListener('click', () => {
        noodlesGif.classList.add('bounce');
        setTimeout(() => {
            noodlesGif.classList.remove('bounce');
        }, 1000);
    });

    moveLetters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.add('falling');
        }, index * 2000);
    });

    if (lastLetter) {
        lastLetter.addEventListener('animationend', () => {
            lastLetter.classList.remove('falling');
        });
    }
});


// animation.js

particlesJS('particles-js', {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: '#ffffff',
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000',
            },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 2,  // Adjust the value here to make the particles smaller
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        // Other particle properties...
    },
    interactivity: {
        // Interactivity configuration...
    },
    // Other configurations...
});



// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto', // Number of slides per view
    spaceBetween: 20, // Space between slides
    centeredSlides: true, // Center the active slide
    loop: true, // Loop through testimonials
    grabCursor: true, // Show grab cursor on hover
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});
