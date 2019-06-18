/** 
 * Duty: حجم 3 روز 2 برابر بیشتر از 16 روز و میانگین خرید گاوها 2 برابر بیشتر از میانگین فروش خرس ها
 * Usable: Everyday of the week
 * 
 * Author: M. Reza Zerehpoosh
 * Email: ironcladgeek@hotmail.com
 */
 
true == function(){
	// caluculate volume average
    var volumeAverage = function (length) {
        var sum = 0;
        var i;
        for (i = 0; i <= length; i++) {
            sum = sum + ([ih][i].QTotTran5J);
        }

        return (sum / (length+1));
    }
	
	var vol3day = volumeAverage(3);
	var vol16day = volumeAverage(16);
	var indvAvgPurchase = (ct).Buy_I_Volume / (ct).Buy_CountI;
    var indvAvgSell = (ct).Sell_I_Volume / (ct).Sell_CountI;
	
	if(vol3day >= 2 * vol16day) {	// 3-day volume 2 times greater than 16-day volume
		if(indvAvgPurchase >= 2 * indvAvgSell) { 	// bulls average purchase 2 times greater than bears average sell
			return true;
		}
	}
	
	return false;
}()