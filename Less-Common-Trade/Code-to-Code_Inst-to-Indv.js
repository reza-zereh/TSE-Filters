/** 
 * Duty: Find the stock which had code to code trades (Institutions sold to Individuals)
 * Usable: Everyday of week
 * 
 * Author: M. Reza Zerehpoosh
 * Email: ironcladgeek@hotmail.com
 */

true == function () {
    var buyInis = ((ct).Buy_N_Volume / (tvol));
    var sellInis = ((ct).Sell_N_Volume / (tvol));

    if((tvol) >= 1000000) { // traded volume more than 1M
        if(sellInis >= 0.3) {  // Institutions sold more than 30%
            if(buyInis <= 0.06) { // Institutions didn't buy more than 6%
                return true;
            }
        }
    }

    return false;

}()