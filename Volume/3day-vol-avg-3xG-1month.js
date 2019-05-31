/** 
 * Duty: Find stocks which 3-day volume average is 3 times greater than 21-day volume average
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

        return (sum / (length+1));
    }

    var volAvg21 = volumeAverage(21);
    var volAvg3 = volumeAverage(3);

    if ((tvol) > 200000) { // fiter out tickers whith less than 200K traded volume
        if ((l18)[(l18).length - 1] != '2') { // filter out block traded tickers
            if (volAvg3 > 3 * volAvg21) {   // 3-day volAvg at least 3 times greater than 21-day volAvg
                return true;
            }
        }
    }

    return false;
}()