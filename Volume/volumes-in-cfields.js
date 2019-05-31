/** 
 * Duty: shows 3-day, 14-day and 21-day volume average in cfields
 * Usable: Every day of the week
 * 
 * Author: M. Reza Zerehpoosh
 * Email: ironcladgeek@hotmail.com
 */

true == function () {
    // caluculate volume average
    var volumeAverage = function (length) {
        var sum = 0;
        var i;
        for (i = 0; i <= length; i++) {
            sum = sum + ([ih][i].QTotTran5J);
        }

        return (sum / (length + 1));
    }

    // format numbers into 3 decimal place and add 'M' to end of it
    (cfield0) = (volumeAverage(3) / 1000000).toFixed(3) + "M";
    (cfield1) = (volumeAverage(14) / 1000000).toFixed(3) + "M";
    (cfield2) = (volumeAverage(21) / 1000000).toFixed(3) + "M";

    return true;
}()