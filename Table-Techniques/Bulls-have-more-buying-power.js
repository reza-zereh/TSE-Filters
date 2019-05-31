/** 
 * Duty: Find stocks where individual buyers have more power than sellers and price near the SMA50
 * Usable: Everyday of the week
 * 
 * Author: M. Reza Zerehpoosh
 * Email: ironcladgeek@hotmail.com
 */


true == function(){
    // claculate individual buyers power
    var indvBullPower = (ct).Buy_CountI / (ct).Sell_CountI;
    var indvAvgPurchase = (ct).Buy_I_Volume / (ct).Buy_CountI;
    var indvAvgSell = (ct).Sell_I_Volume / (ct).Sell_CountI;

    // Claculate closed prices average
    var sma = function(length=50){
        var sum = 0;
        var ipos;
        for(ipos=0; ipos<=length; ipos++) {
            sum = sum + [ih][ipos].PDrCotVal;
        }

        return (sum / (length+1));
    };

    var simpleAvg = sma(50);

    if((tvol) > 1000000){ // Traded volume more than 1M
        if( (simpleAvg * 1.1) > (pc) && (pc) > (simpleAvg * 0.9)) { // Adj. Close not very far from SMA50
            if(indvBullPower <= 0.6) {  // rate of Individual buyers to sellers less than 0.6 (lesser is better)
                if(indvAvgPurchase > indvAvgSell){ // Average buy volume of individual buyer more than seller
                    return true;
                }
            }
        }
    }
    

    return false;
}()