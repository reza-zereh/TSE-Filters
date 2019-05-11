/** 
 * Duty: Find stocks wich the last bar is bullish and it's range is greater than or equal to past 20-day price average
 * Usable: every day of the week
 * 
 * Author: M. Reza Zerehpoosh
 * Email: ironcladgeek@hotmail.com
 */


true == function(){
    // calculate the price range
    var priceRangeAverage = function(length=20) {
        var sum = 0;
        
        var ipos;
        for(ipos=0; ipos<=length; ipos++){
            sum = sum + ([ih][ipos].PriceMax - [ih][ipos].PriceMin);
        }

        return Math.round(sum / length);
    }

    if((pf) < (pl)) {  // if the bar is bullish
        if((tvol) > 2000000) {  // if traded volume is more than 2M
            var currentBarRange = (pmax) - (pmin);
            if(currentBarRange >= priceRangeAverage(21)) { // if it's price range is greater than the range average
                return true;
            }
        }
    }

    return false;
}()