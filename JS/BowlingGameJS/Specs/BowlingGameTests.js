/// <reference path="..\Scripts/jasmine/jasmine.js" />
/// <reference path="..\Scripts/BowlingGame.js" />

describe('the bowling game',
    function() {
        it("correctly calculates gutter game",
            function() {
                // roll 20 zeros
                for (let i = 0; i < 20; i++) {
                    roll(0);
                }
                var result = score();
                expect(result).toBe(0);
            });

        it("correctly calculates all ones game", function () {
            // roll 20 ones
            for (let i = 0; i < 20; i++) {
                roll(1);
            }
            var result = score();
            expect(result).toBe(20);
        });

    
    });