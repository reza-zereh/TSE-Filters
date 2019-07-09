true == function () {
    var ndays = 5;

    // Returns if the specified day is bullish or not
    var isBullishBar = function (at = 0) {
        if ([ih][at].PriceFirst < [ih][at].PDrCotVal) {
            return true;
        }

        return false;
    };

    // Returns if the specified bar has short tails (less than 10%) or not
    var hasShortTails = function (at = 0) {
        var barHeight = [ih][at].PriceMax - [ih][at].PriceMin;
        var realBody = Math.abs([ih][at].PriceFirst - [ih][at].PDrCotVal);
        var realBodyPct = (realBody / barHeight);

        if (realBodyPct >= 0.9) {
            return true;
        }

        return false;
    };

    // Find out if the specified day formed a Piercing Line pattern or not
    var isPiercingPattern = function (at = 0) {
        var isLastBarBullish = isBullishBar(at);
        var isPrevBarBearish = !isBullishBar(at + 1);
        var hasLastBarShortTails = hasShortTails(at);
        var hasPrevBarShortTails = hasShortTails(at + 1);
        var prevBarHalfPrice = (([ih][at + 1].PriceMax - [ih][at + 1].PriceMin) / 2) + [ih][at + 1].PriceMin;

        if ((tvol) > 100000) {
            if (isLastBarBullish && isPrevBarBearish && hasLastBarShortTails && hasPrevBarShortTails) {
                if ([ih][at].PriceFirst < [ih][at + 1].PriceMin) {  // Recent bar's open below the previous bar's low
                    if ([ih][at].PDrCotVal >= prevBarHalfPrice) {   // Recent bar's close above the 50% of previous bar
                        if ([ih][at].PriceMax < [ih][at + 1].PriceFirst) {  // Recent bar's high below previous bar's open
                            return true;
                        }
                    }
                }

            }
        }
    };


    // Cycling through past ndays to find Piercing Line pattern
    for (var i = 0; i <= ndays; i++) {
        if (isPiercingPattern(i)) {
            return true;
        }
    }

    return false;
}()