/** 
 * Duty: Find the daily bullish dragonfly candlestick
 * Usable: Everyday of the week
 * 
 * Author: M. Reza Zerehpoosh
 * Email: ironcladgeek@hotmail.com
 */

true == function(){
    // open, close and high are equal and they differ from low
    if((pf) == (pl) && (pf) == (pmax) && (pf) != (pmin)){
        // low of the bar should changed more than 3% of yesterday price
        var lowPctChange = (([ih][1].PriceMin - (pmin)) / [ih][1].PriceMin) * 100;
        if(lowPctChange >= 3){
            return true;
        }
    }

    return false;
}()