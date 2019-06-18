/** 
 * Duty: کد به کد حقوقی به حقیقی و قدرت خریدار بیشتر از فروشنده
 * Usable: Everyday of the week
 * 
 * Author: M. Reza Zerehpoosh
 * Email: ironcladgeek@hotmail.com
 */
 
true == function(){
	
    var buyInis = ((ct).Buy_N_Volume / (tvol));
    var sellInis = ((ct).Sell_N_Volume / (tvol));
	
	// claculate individual buyers power
    var indvBullPower = (ct).Buy_CountI / (ct).Sell_CountI;
    var indvAvgPurchase = (ct).Buy_I_Volume / (ct).Buy_CountI;
    var indvAvgSell = (ct).Sell_I_Volume / (ct).Sell_CountI;

    if((tvol) >= 1000000) { // traded volume more than 1M
        if(sellInis >= 0.3 && buyInis <= 0.06) {  // Institutions sold more than 30%  and Institutions didn't buy more than 6%
			if(indvBullPower <= 0.7) {  // rate of Individual buyers to sellers less than 0.7 (lesser is better)
				if(indvAvgPurchase > indvAvgSell){ // Average buy volume of individual buyer more than seller
					return true;
				}
			}
            
        }
    }

    return false;

}()