/** 
 * Duty: Find stocks which 3-day volume average is 3 times greater than 21-day volume average
 * Usable: Every day of the week
 * 
 * Author: M. Reza Zerehpoosh
 * Email: ironcladgeek@hotmail.com
 */

true == function () {
    // price average for a given range 
    var closedPriceAverage = function (len = 50) {
        var sum = 0;
        var ipos;
        for (ipos = 0; ipos <= len; ipos++) {
            sum = sum + ([ih][ipos].PDrCotVal);
        }

        return Math.round(sum / (len+1));
    };

    var d50Avg = closedPriceAverage(50);
    var d10Avg = closedPriceAverage(10);
    var averagesDistance = (Math.abs(d50Avg - d10Avg)) / Math.max(d50Avg, d10Avg);

    if ((tvol) > 800000) { // filter out tickers with less than 800K traded volume
        if (averagesDistance <= 0.01) { // if averages distance less than 1%
            return true;
        }
    }

    return false;
}()