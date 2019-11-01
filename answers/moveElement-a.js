function moveElement(duration, distance, element) {
    const start = performance.now();

    function move(currentTime) {
        const elapsedTime = currentTime - start;
        const progress = elapsedTime / duration;

        const amountToMove = progress * distance;
        element.style.transform = `translateX(${amountToMove}px)`;

        if (amountToMove < distance) {
            requestAnimationFrame(move);
        }
    }

    move(performance.now());
}
