// const $cards = $('.card');
const cards = document.querySelectorAll('.card');
function scrollEffect() {
    if (window.innerWidth > 768) {
        cards.forEach((currentCard, index) => {
            const currentOffset = currentCard.offsetTop;
            const currentHeight = currentCard.offsetHeight;

            currentCard.children[0].style.transform = 'scale(1)';
            if (index < cards.length - 1) {
                const nextCard = cards[index + 1];
                const nextOffset = nextCard.offsetTop;

                const overlapThreshold = currentOffset + currentHeight / 2.5;
                if (nextOffset < overlapThreshold && nextOffset >= currentOffset) {
                    const scaleX = ((index + 1) / 100 + 0.92).toFixed(2);
                    const translate = -(1 - (index + 1) / 10 * 100) - 10;
                    currentCard.children[0].style.transform = `translateY(${translate}px) scale(${scaleX})`;
                }
            }
        });
        /* $cards.each(function (index) {
            const $currentCard = $(this);
            const currentOffset = $currentCard.offset().top;
            const currentHeight = $currentCard.outerHeight();

            $currentCard.children().css('transform', 'scale(1)');
            if (index < $cards.length - 1) {
                const $nextCard = $cards.eq(index + 1);
                const nextOffset = $nextCard.offset().top;

                const overlapThreshold = currentOffset + currentHeight / 3;
                if (nextOffset < overlapThreshold && nextOffset >= currentOffset) {
                    const scaleX = ((index + 1) / 100 + 0.92).toFixed(2);
                    const translate = -(1 - (index + 1) / 10 * 100) + 0;
                    $currentCard.children().css("transform", `translateY(${translate}px) scale(${scaleX})`);
                }
            }
        }); */

        /*
        const scrollPosition = window.scrollY;
        const cardContainer = document.getElementsByClassName("card-container")[0];
        cards.forEach((card, index) => {
            const cardTop2 = card.offsetTop;
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop <= 20) {
                const translate = -(1 - (index + 1) / 10 * 100) + 0;
                const scaleX = ((index + 1) / 100 + 0.92).toFixed(2);
                card.children[0].style.transform = `translateY(${translate}px) scale(${scaleX})`;
            } else {
                card.children[0].style.transform = `translateY(0px) scale(1)`;
            }
        });
        */
    }
}

window.addEventListener('scroll', () => {
    scrollEffect();
});
window.addEventListener('resize', scrollEffect);
scrollEffect();