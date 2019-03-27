// BowlingGame.js
(function (window) {
    _score = 0;

    function roll(pins) {
        _score += pins;
    };

    function score() {
        return _score;
    };

    window.roll = roll;
    window.score = score;
})(window);