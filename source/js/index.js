const cards = document.querySelectorAll('.card');
const cardData = Array.from(cards).map((card, index) => ({
    card,
    child: card.children[0],
    baseTranslate: (1 - (index + 1) / 10 * 100),
    index
}));

function scrollEffect() {
    if (window.innerWidth > 768) {
        cardData.forEach((data, i) => {
            const { card, child, baseTranslate, index } = data;
            const currentOffset = card.offsetTop;
            const currentHeight = card.offsetHeight;

            const translate = baseTranslate - 70;
            child.style.transform = `translateY(${-translate}px) scale(1)`;
            
            if (index < cardData.length - 1) {
                const nextCard = cardData[index + 1].card;
                const nextOffset = nextCard.offsetTop;

                const overlapThreshold = currentOffset + currentHeight - 150;
                if (nextOffset < overlapThreshold && nextOffset >= currentOffset) {
                    const scaleX2 = ((index + 1) / 100 + 0.95).toFixed(2);
                    const translate2 = baseTranslate - 40;
                    child.style.transform = `translateY(${-translate2}px) scale(${scaleX2})`;

                    const overlapThreshold2 = currentOffset + currentHeight / 2.5;
                    if (nextOffset < overlapThreshold2 && nextOffset >= currentOffset) {
                        const scaleX3 = ((index + 1) / 100 + 0.92).toFixed(2);
                        const translate3 = baseTranslate - 10;
                        child.style.transform = `translateY(${-translate3}px) scale(${scaleX3})`;
                    }
                }
            }
        });
    }
}

window.addEventListener('scroll', scrollEffect);
window.addEventListener('resize', scrollEffect);
scrollEffect();