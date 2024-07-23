var duration = 15 * 1000;
var end = Date.now() + duration;

(function frame() {
    // Launch confetti from both sides at once
    confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
    });
    confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
    });

    // Keep running until time is up
    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
}());
