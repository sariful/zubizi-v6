document.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const video = document.querySelector('.parallax-video');
    video.style.transform = `translateY(${scrollPosition * 0.6}px)`; // Adjust the speed by changing the multiplier (0.5)
});

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel-inner');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < carousel.children.length - 1) {
            currentIndex++;
            updateCarousel();
        } else {
            currentIndex = 0;
            updateCarousel();
        }
    });
});


const tabButtons = document.querySelectorAll('.tab-btn');
const faqCategories = document.querySelectorAll('.faq-category');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.getAttribute('data-tab');

        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active-tab', 'bg-blue-500'));

        // Hide all FAQ categories
        faqCategories.forEach(category => category.classList.add('hidden'));

        // Show the clicked tab's category
        document.getElementById(tab).classList.remove('hidden');
        button.classList.add('active-tab', 'bg-blue-500');
    });
});

// Accordion Logic
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
        } else {
            answer.classList.add('hidden');
        }
    });
});