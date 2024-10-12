const cards = document.querySelectorAll('.card');

function scrollEffect() {
    if (window.innerWidth > 768) {
        requestAnimationFrame(() => {
            cards.forEach((currentCard, index) => {
                const currentOffset = currentCard.offsetTop;
                const currentHeight = currentCard.offsetHeight;
    
                
                if (index < cards.length - 1) {
                    const translate = (1 - (index + 1) / 10 * 100) - 70;
                    currentCard.children[0].style.transform = `translateY(${-translate}px) scale(1)`;
                    
                    const nextCard = cards[index + 1];
                    const nextOffset = nextCard.offsetTop;
    
                    const overlapThreshold = currentOffset + currentHeight - 150;
                    if (nextOffset < overlapThreshold && nextOffset >= currentOffset) {
                        const scaleX2 = ((index + 1) / 100 + 0.95).toFixed(2);
                        const translate2 = (1 - (index + 1) / 10 * 100) - 40;
                        currentCard.children[0].style.transform = `translateY(${-translate2}px) scale(${scaleX2})`;
    
                        const overlapThreshold2 = currentOffset + currentHeight / 2.5;
                        if (nextOffset < overlapThreshold2 && nextOffset >= currentOffset) {
                            const scaleX3 = ((index + 1) / 100 + 0.92).toFixed(2);
                            const translate3 = (1 - (index + 1) / 10 * 100) - 10;
                            currentCard.children[0].style.transform = `translateY(${-translate3}px) scale(${scaleX3})`;
                        }
                    }
                }
            });
        });
    }
}

window.addEventListener('scroll', scrollEffect);
window.addEventListener('resize', scrollEffect);
scrollEffect();