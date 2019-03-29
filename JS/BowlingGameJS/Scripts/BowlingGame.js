// BowlingGame.js
(function (window) {
    var currentScore = 0;

    function roll(pins) {
        currentScore += pins;
    }

    function score() {
        return currentScore;
    }

    window.roll = roll;
    window.score = score;
})(window);